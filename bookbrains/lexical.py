import re

from typing import List

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
    

class Correction:
    """ Corrects word into correct sentence """

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


    def correction(self, word: str, threshold: float = 0.55, choices: List["str"] = []) -> str:
        """ identifies whats the best match on the given word with the given list of choices with possible matches """
        if word in choices:
            return word, 1
        
        if len(choices) == 0:
            return word, 0

        matches = None
        best_score = -1

        for option in choices:
            score = self._hybrid_score(word, option.lower())
            if score >= best_score:
                matches = option
                best_score = score

        if best_score > threshold:
            return matches, best_score

        return word, best_score


if __name__ == "__main__":
    tokenize = Tokenization()

    print(tokenize.tokenize("Hello World??"))