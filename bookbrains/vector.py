from .lexical import Tokenization, Normalization
from .utils import FileManager, PickleFileManager

from math import log, sqrt
from typing import Dict, List
from collections import Counter, defaultdict

class Vectorizer:
    def __init__(self):
        self.tokenization = Tokenization()

        self.term_freq = TermFrequency(self.tokenization)
        self.inverse_document_freq = InverseDocumentFrequency()

        self.vectors = []


    def fit(self, documents: List[str]) -> None:
        """ Compute Inverse Document Frequency of a full corpus """
        tokenized_docs = [self.tokenization.tokenize(doc) for doc in documents]

        self.inverse_document_freq.compute(tokenized_docs)


    def transform(self, document: str) -> Dict[str, float]:
        """ Return TF-IDF vector for a single document """
        term_frequency = self.term_freq.compute(document)

        vector = {word: term_frequency[word] * self.inverse_document_freq.idf.get(word, 0.0) for word in term_frequency}

        self.vectors.append(vector)

        return vector
    

    def cosine_similarity(self, vector1: Dict[str, float], vector2: Dict[str, float]) -> float:
        """ compares vectors on how close they are. """
        dot = sum(vector1.get(k, 0.0) * vector2.get(k, 0.0) for k in set(vector1) | set(vector2))

        norm1 = sqrt(sum(v ** 2 for v in vector1.values()))
        norm2 = sqrt(sum(v ** 2 for v in vector2.values()))

        if norm1 == 0 or norm2 == 0:
            return 0.0
        
        return dot / (norm1 * norm2)


class TermFrequency:
    """ Measures how frequent each word is in one document. """
    def __init__(self, tokenization: Tokenization):
        self.tf = {}

        self.tokenization = tokenization


    def compute(self, document: str) -> Dict:
        """ Computes common words in a document """
        tokens = self.tokenization.tokenize(document)

        count = Counter(tokens)

        total = len(tokens)

        self.tf = {word: count[word] / total for word in count}

        return self.tf

        
class InverseDocumentFrequency:
    """ Tells how rare a word is across all documents. """
    def __init__(self):
        self.idf = {}

    def compute(self, documents: List[str]) -> Dict:
        """ computes word rarity on all documents """
        num_docs = len(documents)

        df = Counter()

        for doc in documents:
            for word in set(doc):
                df[word] += 1

        # * FORMULA: log((N + 1) / (df + 1)) + 1
        self.idf = {word: log((num_docs + 1) / (df[word] + 1)) + 1 for word in df}

        return self.idf
    

class CorpusVectorPreparation:
    def __init__(self, file_manager: FileManager, normalization: Normalization):
        self.normalization = normalization
        self.file_manager = file_manager

        self.vectorizer = Vectorizer()

        self.pickle_manager = PickleFileManager()

        """ THIS IS FOR WINDOWS PROGRAMMER """
        # self.joined_data = self.file_manager.load_json(r"data\joined_data\barnesnobles.json")
        
        """ THIS IS FOR LINUX PROGRAMMER """
        self.joined_data = self.file_manager.load_json("data/joined_data/barnesnobles.json")

        self.documents = []

    
    def prepare_document_vector(self, force_rebuild: bool) -> None:
        """ Creates each document vectorized """

        """ THIS IS FOR WINDOWS PROGRAMMER """
        # if not self.file_manager.is_file_exist(r"data\joined_data\barnesnobles.json"):
        #     return

        """ THIS IS FOR LINUX PROGRAMMER """
        if not self.file_manager.is_file_exist("data/joined_data/barnesnobles.json"):
            return
        
        print("[ BookBrains ] Joined Data vectorized and normalized. ")

        for book_data in self.joined_data["books"]:
            book = book_data["book"]
            author = book_data["author"]
            genres = book_data["genres"]

            author_name = self.normalization.normalize(author["name"])
            author_about = self.normalization.normalize(author["about"])

            book_title = self.normalization.normalize(book["title"], normalize_num = False)
            book_description = self.normalization.normalize(book["description"])

            genre_names = " ".join([self.normalization.normalize_genre(genre["name"]) for genre in genres])

            document = " ".join([author_name, author_about, book_title, book_description, genre_names])

            self.documents.append(document)
        
        self.vectorizer.fit(self.documents)

        for book_data, doc in zip(self.joined_data["books"], self.documents):
            vector = self.vectorizer.transform(document = doc)

            tokens = self.vectorizer.tokenization.tokenize(doc)

            book_data["vector"] = vector

            book_data["tokens"] = list(set(tokens))

        """ THIS IS FOR WINDOWS PROGRAMMER """
        # self.pickle_manager.pickle_save_processed(r"data\vector\vector.pkl", self.vectorizer)

        # self.file_manager.save_json(r"data\joined_data\barnesnobles.json", self.joined_data)
        
        """ THIS IS FOR LINUX PROGRAMMER """
        self.pickle_manager.pickle_save_processed("data/vector/vector.pkl", self.vectorizer)

        self.file_manager.save_json("data/joined_data/barnesnobles.json", self.joined_data)
        
if __name__ == "__main__":
      pass