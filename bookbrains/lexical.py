import re

from typing import List

from .utils import FileManager, PickleFileManager

class Tokenization:
    """ Separates sentence in word by word """

    def _emoticon_unicodes(self) -> set:
        """ Gives emoticons Unicodes """
        return (
            "\U0001F600-\U0001F64F"  # emoticons
            "\U0001F300-\U0001F5FF"  # symbols & pictographs
            "\U0001F680-\U0001F6FF"  # transport & map
            "\U0001F1E0-\U0001F1FF"  # flags
            "\U00002700-\U000027BF"  # dingbats
            "\U0001F900-\U0001F9FF"  # supplemental
            "\U0001FA70-\U0001FAFF"  # emoji v13
            "\U00002600-\U000026FF"  # misc symbols
            "\U00002B00-\U00002BFF"  # arrows and more
        )


    def tokenize(self, sentence: str) -> List[str]:
        """ Separates word by word and put it in an array """
        pattern = re.compile(fr"[a-zA-Z0-9']+|[{self._emoticon_unicodes()}]|[.,!?;\"()]", re.UNICODE, )
        
        return pattern.findall(sentence)
    

class BKTreeNode:
    def __init__(self, word: str):
        self.word = word
        self.children = {}


class BKTree:
    def __init__(self, distance_fn):
        self.root = None
        self.distance_fn = distance_fn
    

    def search(self, query: str, max_distance: int) -> List:
        """ Return list of (word, distance) """
        results = []

        def _search(node: BKTreeNode):
            if node is None:
                return

            d = self.distance_fn(query, node.word)
            if d <= max_distance:
                results.append((node.word, d))

            for dist in range(d - max_distance, d + max_distance + 1):
                child = node.children.get(dist)
                if child:
                    _search(child)

        _search(self.root)
        return results


    def add(self, word: str) -> None:
        if self.root is None:
            self.root = BKTreeNode(word)
            return

        node = self.root
        while True:
            d = self.distance_fn(word, node.word)
            if d in node.children:
                node = node.children[d]
            else:
                node.children[d] = BKTreeNode(word)
                break


class Correction:
    """ Corrects word into correct sentence """
    def __init__(self, choices: List[str], pickle_manager: PickleFileManager, file_manager: FileManager):
        self.file_manager = file_manager
        self.pickle_manager = pickle_manager

        if self.file_manager.is_file_exist(r"data\lexicon\model\bk_tree.pkl"):
            self.bk_tree = self.pickle_manager.pickle_load_processed(r"data\lexicon\model\bk_tree.pkl")
        else:
            self.bk_tree = BKTree(self._levenshtein)
            for word in choices:
                self.bk_tree.add(word.lower())
            
            print("[ BookBrains ] BKTree Model prepared. ")
            self.pickle_manager.pickle_save_processed(r"data\lexicon\model\bk_tree.pkl", self.bk_tree)


    def _levenshtein(self, keyword1: str, keyword2: str) -> int:
        """ A function that scales the misspelled words wrongness. """
        len1 = len(keyword1)
        len2 = len(keyword2)

        dp = [[0] * (len2 + 1) for x in range(len1 + 1)]

        for i in range(len1 + 1):
            for j in range(len2 + 1):

                if i == 0:
                    dp[i][j] = j

                elif j == 0:
                    dp[i][j] = i

                elif keyword1[i-1] == keyword2[j-1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = 1 + min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1])

        return dp[len1][len2]


    def _fuzzy_matching(self, keyword1: str, keyword2: str) -> float:
        """ Compares the similiraties between the two words given by levenshtein """
        distance = self._levenshtein(keyword1=keyword1, keyword2=keyword2)
        score = 1 - (distance / max(len(keyword1), len(keyword2)))
        return round(score, 2)


    def _jaccard_similarity(self, a: str, b: str) -> float:
        """ Compares the similiraties between the two words given by levenshtein"""
        set_a = set(a)
        set_b = set(b)
        intersection = set_a & set_b
        union = set_a | set_b
        return len(intersection) / len(union)


    def _hybrid_score(self, a: str, b: str) -> float:
        """ Both jaccard and levenshtein based distancing or scoring """
        lev = self._fuzzy_matching(a, b)
        jac = self._jaccard_similarity(a, b)
        return round((lev + jac) / 2, 2)


    def correction(self, word: str, threshold: float = 0.55) -> str:
        """ identifies whats the best match on the given word with the given list of choices with possible matches """
        # * REFERENCE: BKTree with levenshtein or edit distance - https://www.geeksforgeeks.org/dsa/bk-tree-introduction-implementation/
        results = self.bk_tree.search(query = word.lower(), max_distance = 3)

        if not results:
            return word, 0

        matches = None
        best_score = -1

        for candidate, dist in results:
            score = self._hybrid_score(word, candidate)
            if score > best_score:
                matches = candidate
                best_score = score

        if best_score > threshold:
            return matches, best_score

        return word, best_score


class Normalization:
    def __init__(self, file_manager: FileManager):
        self.file_manager = file_manager

        self.punctuations = self.file_manager.load_txt(r"data\lexicon\punctuation.txt")
        self.stop_words = self.file_manager.load_txt(r"data\lexicon\stop_words.txt")


    def normalize(self, sentence, normalize_num: bool = True, remove_stop_words: bool = True) -> str:
        """ Normalize sentence into just plain text """

        if not sentence:
            return ""

        sentence = sentence.lower()

        for punc in self.punctuations:
            sentence = sentence.replace(punc, " ")

        sentence = re.sub(r"[^a-z0-9\s]", " ", sentence)

        sentence = re.sub(r"\s+", " ", sentence).strip()

        if normalize_num:
            sentence = re.sub(r"\d+", "<NUM>", sentence)

        if remove_stop_words:
            words = sentence.split()
            words = [w for w in words if w not in self.stop_words]
            sentence = " ".join(words)

        return sentence


    def normalize_genre(self, sentence: str) -> str:
        """ Separates two genres into one genre """
        if not sentence:
            return None

        sentence = sentence.replace("&", "and")

        # * REMOVES EMOJIS AND SPECIAL CHARACTERS
        sentence = re.sub(r"[^a-zA-Z0-9\s]", "", sentence)

        # * REPLACE DOUBLE SPACES WITH SINGEL SPACES
        sentence = re.sub(r"\s+", " ", sentence)

        return sentence.strip().lower()


class LexiconPreparation:
    def __init__(self, file_manager: FileManager):
        self.file_manager = file_manager

        self.text_fields = []

        self.stop_words = self.file_manager.load_txt(r"data\lexicon\stop_words.txt")
        self.punctuations = self.file_manager.load_txt(r"data\lexicon\punctuation.txt")

        self.books_data = self.file_manager.load_json(r"data\joined_data\barnesnobles.json")

        self.tokenization = Tokenization()

        self.words = []
    
    def prepare_word_frequency(self, force_rebuild: bool) -> None:
        """ Creates a lexicon of all listed words base on scraped data """
        if force_rebuild:
            self.file_manager.delete_file(r"data\lexicon\words.txt")
            self.file_manager.delete_file(r"data\lexicon\word_frequency.json")

        if self.file_manager.is_file_exist(r"data\lexicon\words.txt") and self.file_manager.is_file_exist(r"data\lexicon\word_frequency.json") and not force_rebuild:
            print("[ BookBrains ] Data existed and already prepared for word frequency. ")
            return

        print("[ BookBrains ] Preparing word frequency ")

        word_frequency = {}

        for data in self.books_data["books"]:
            book = data["book"]
            author = data["author"]
            publisher = data["publisher"]
            genres = data["genres"]

            # * BOOK DATA
            tokenized_book_title = self.tokenization.tokenize((book["title"] or "").lower())
            tokenized_book_description = self.tokenization.tokenize((book["description"] or "").lower())

            # * AUTHOR DATA
            author_name = (author["name"] or "").lower()
            tokenized_author_about = self.tokenization.tokenize((author["about"] or "").lower())

            # * PUBLISHER DATA
            publisher_name = ((publisher or {}).get("name") or "").lower()

            # * GENRES DATA
            genres_tokens = []
            for genre_data in genres:
                genre_name = self.tokenization.tokenize((genre_data["name"] or "").lower())

                if genre_name not in genres_tokens:
                    genres_tokens.extend(genre_name)

            
            combined_tokens = (
                tokenized_book_title +
                tokenized_book_description +
                tokenized_author_about +
                [author_name] +
                [publisher_name] +
                genres_tokens
            )

            for token in combined_tokens:
                if token in self.stop_words or token in self.punctuations:
                    continue  

                if token not in word_frequency:
                    word_frequency[token] = 1
                    self.words.append(token)

                else:
                    word_frequency[token] += 1
        
        if not self.file_manager.is_file_exist(r"data\lexicon\word_frequency.json"):
            self.file_manager.save_json(r"data\lexicon\word_frequency.json", word_frequency)

        if not self.file_manager.is_file_exist(r"data\lexicon\words.txt"):
            self.file_manager.save_txt(r"data\lexicon\words.txt", self.words)
        
        return self.words


    def prepare_sentences(self, force_rebuild) -> None:
        """ Creates a sentence corpus data base on scraped data """
        if force_rebuild:
            self.file_manager.delete_file(r"data\corpus\sentences.csv")

        if self.file_manager.is_file_exist(r"data\corpus\sentences.csv") and not force_rebuild:
            print("[ BookBrains ] Sentences already prepared.")
            return
        
        print("[ BookBrains ] Preparing sentences.")

        book_data = []

        for data in self.books_data["books"]:
            book = data["book"]
            author = data["author"]

            data1 = {
                "type": "book",
                "description": (book["description"] or "").replace("\n", " ")
            }

            if data1 not in book_data:
                book_data.append(data1)

            data2 = {
                "type": "author",
                "description": (author["about"] or "").replace("\n", " ")
            }

            if data2 not in book_data:
                book_data.append(data2)
        
        self.file_manager.save_csv(r"data\corpus\sentences.csv", book_data)



           

if __name__ == "__main__":
    tokenize = Tokenization()

    print(tokenize.tokenize("Hello World??"))

    """
    TODO:
    1. Make a lexicon of dictionary of words contains on all of the datasets we scraped
    2. Apply pickle for lexicon processing
    """