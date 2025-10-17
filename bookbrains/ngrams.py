from abc import ABC, abstractmethod
from collections import defaultdict, Counter
from typing import List, Tuple
from .utils import PickleFileManager


CandidateList = List[Tuple[str, float]]

class Nigram(ABC):

    def __init__(self):
        self.vocabulary = set()

    @abstractmethod
    def train(self, tokens: List[str]):
        pass

    @abstractmethod
    def get_probability(self, word: str, context: List[str] = []) -> float:
        pass

    @abstractmethod
    def get_candidates(self, context: List[str] = [], top_k: int = 10) -> CandidateList:
        pass


# * -------------------------------------------- UNIGRAM MODEL -------------------------------------------------
class Unigram(Nigram):
    def __init__(self):
        super().__init__()
        self.word_counts = Counter()
        self.total_count = 0

    def train(self, tokens: List[str]):
        self.word_counts.update(tokens)
        self.vocabulary.update(tokens)
        self.total_count = sum(self.word_counts.values())

    def get_probability(self, word: str, context: List[str] = []) -> float:
        if self.total_count == 0:
            return 0.0
        return self.word_counts[word] / self.total_count

    def get_candidates(self, context: List[str] = [], top_k: int = 10) -> CandidateList:
        return [
            (word, count / self.total_count)
            for word, count in self.word_counts.most_common(top_k)
        ]
# * ------------------------------------------------------------------------------------------------------------


# * -------------------------------------------- BIGRAM MODEL --------------------------------------------------
class Bigram(Nigram):
    def __init__(self, smoothing: float = 0.01):
        super().__init__()
        self.bigram_counts = defaultdict(Counter)
        self.unigram_counts = Counter()
        self.smoothing = smoothing

    def train(self, tokens: List[str]):
        self.vocabulary.update(tokens)
        self.unigram_counts.update(tokens)
        for i in range(len(tokens) - 1):
            prev, curr = tokens[i], tokens[i + 1]
            self.bigram_counts[prev][curr] += 1

    def get_probability(self, word: str, context: List[str] = []) -> float:
        if not context:
            total = sum(self.unigram_counts.values())
            return (self.unigram_counts[word] + self.smoothing) / (
                total + self.smoothing * len(self.vocabulary)
            )

        prev = context[-1]
        numerator = self.bigram_counts[prev][word] + self.smoothing
        denominator = self.unigram_counts[prev] + self.smoothing * len(self.vocabulary)
        return numerator / denominator if denominator > 0 else 0.0

    def get_candidates(self, context: List[str] = [], top_k: int = 10) -> CandidateList:
        if not context:
            total = sum(self.unigram_counts.values())
            return [
                (w, c / total) for w, c in self.unigram_counts.most_common(top_k)
            ]

        prev = context[-1]
        if not self.bigram_counts[prev]:
            return self.get_candidates([], top_k)

        return [
            (w, self.get_probability(w, [prev]))
            for w, _ in self.bigram_counts[prev].most_common(top_k)
        ]
# * ------------------------------------------------------------------------------------------------------------


# * -------------------------------------------- TRIGRAM MODEL -------------------------------------------------
class Trigram(Nigram):
    def __init__(self, smoothing: float = 0.01):
        super().__init__()
        self.trigram_counts = defaultdict(Counter)
        self.bigram_counts = defaultdict(Counter)
        self.unigram_counts = Counter()
        self.smoothing = smoothing

    def train(self, tokens: List[str]):
        self.vocabulary.update(tokens)
        self.unigram_counts.update(tokens)

        for i in range(len(tokens) - 1):
            self.bigram_counts[tokens[i]][tokens[i + 1]] += 1

        for i in range(len(tokens) - 2):
            context = (tokens[i], tokens[i + 1])
            self.trigram_counts[context][tokens[i + 2]] += 1

    def get_probability(self, word: str, context: List[str] = []) -> float:
        if not context:
            total = sum(self.unigram_counts.values())
            return (self.unigram_counts[word] + self.smoothing) / (
                total + self.smoothing * len(self.vocabulary)
            )

        elif len(context) == 1:
            prev = context[-1]
            numerator = self.bigram_counts[prev][word] + self.smoothing
            denominator = self.unigram_counts[prev] + self.smoothing * len(self.vocabulary)
            return numerator / denominator if denominator > 0 else 0.0

        context_key = (context[-2], context[-1])
        if context_key not in self.trigram_counts:
            # Fallback to bigram
            return self.get_probability(word, context[-1:])

        numerator = self.trigram_counts[context_key][word] + self.smoothing
        denominator = sum(self.trigram_counts[context_key].values()) + self.smoothing * len(self.vocabulary)
        return numerator / denominator if denominator > 0 else 0.0

    def get_candidates(self, context: List[str] = [], top_k: int = 10) -> CandidateList:
        if not context:
            total = sum(self.unigram_counts.values())
            return [(w, c / total) for w, c in self.unigram_counts.most_common(top_k)]

        elif len(context) == 1:
            prev = context[-1]
            if not self.bigram_counts[prev]:
                return self.get_candidates([], top_k)
            return [
                (w, self.get_probability(w, [prev]))
                for w, _ in self.bigram_counts[prev].most_common(top_k)
            ]

        context_key = (context[-2], context[-1])
        if not self.trigram_counts[context_key]:
            return self.get_candidates(context[-1:], top_k)

        return [
            (w, self.get_probability(w, context[-2:]))
            for w, _ in self.trigram_counts[context_key].most_common(top_k)
        ]
# * ------------------------------------------------------------------------------------------------------------


# * -------------------------------------------- INTERPOLATED MODEL --------------------------------------------
class InterpolatedNigram:

    def __init__(self, lambda1: float = 0.1, lambda2: float = 0.3, lambda3: float = 0.6):
        if abs(lambda1 + lambda2 + lambda3 - 1.0) > 1e-6:
            raise ValueError("Lambda weights must sum to 1.0")

        self.lambda1 = lambda1
        self.lambda2 = lambda2
        self.lambda3 = lambda3

        self.unigram_model = Unigram()
        self.bigram_model = Bigram()
        self.trigram_model = Trigram()
        self.vocabulary = set()
        self.pickle_manager = PickleFileManager()

    def train(self, tokens: List[str]):
        self.vocabulary.update(tokens)
        self.unigram_model.train(tokens)
        self.bigram_model.train(tokens)
        self.trigram_model.train(tokens)

    def get_probability(self, word: str, context: List[str] = []) -> float:
        p1 = self.unigram_model.get_probability(word)
        p2 = self.bigram_model.get_probability(word, context[-1:])
        p3 = self.trigram_model.get_probability(word, context[-2:])
        return self.lambda1 * p1 + self.lambda2 * p2 + self.lambda3 * p3

    def get_candidates(self, context: List[str] = [], top_k: int = 10) -> CandidateList:
        uni_cands = {w for w, _ in self.unigram_model.get_candidates([], top_k * 2)}
        bi_cands = {w for w, _ in self.bigram_model.get_candidates(context[-1:], top_k * 2)}
        tri_cands = {w for w, _ in self.trigram_model.get_candidates(context[-2:], top_k * 2)}

        all_candidates = uni_cands | bi_cands | tri_cands
        scored = [(w, self.get_probability(w, context)) for w in all_candidates]
        scored.sort(key=lambda x: x[1], reverse=True)
        return scored[:top_k]

    def save(self, pickle_path="data/processed/interpolated_ngram.pkl"):
        success = self.pickle_manager.pickle_save_processed(pickle_path, self)
        if success:
            print(f"✅ Model saved successfully at {pickle_path}")
        else:
            print(f"❌ Failed to save model at {pickle_path}")

    @classmethod
    def load(cls, pickle_path="data/processed/interpolated_ngram.pkl"):
        manager = PickleFileManager()
        model = manager.pickle_load_processed(pickle_path)

        if model is None:
            print(f"⚠️ No model found at {pickle_path}")
            return None

        print(f"✅ Model loaded successfully from {pickle_path}")
        return model

    # def save_model(self, filepath: str):
    #     """Save essential model data to a pickle file."""
    #     data = {
    #         "lambda1": self.lambda1,
    #         "lambda2": self.lambda2,
    #         "lambda3": self.lambda3,
    #         "unigram_counts": self.unigram_model.word_counts,
    #         "bigram_counts": self.bigram_model.bigram_counts,
    #         "trigram_counts": self.trigram_model.trigram_counts,
    #         "vocabulary": list(self.vocabulary),
    #     }
    #     with open(filepath, "wb") as f:
    #         pickle.dump(data, f)

    # @classmethod
    # def load_model(cls, filepath: str):
    #     with open(filepath, "rb") as f:
    #         data = pickle.load(f)

    #     model = cls(data["lambda1"], data["lambda2"], data["lambda3"])
    #     model.vocabulary = set(data["vocabulary"])

    #     model.unigram_model.word_counts = Counter(data["unigram_counts"])
    #     model.unigram_model.total_count = sum(model.unigram_model.word_counts.values())

    #     model.bigram_model.bigram_counts = defaultdict(Counter, data["bigram_counts"])
    #     model.bigram_model.unigram_counts = Counter(data["unigram_counts"])

    #     model.trigram_model.trigram_counts = defaultdict(Counter, data["trigram_counts"])
    #     model.trigram_model.bigram_counts = model.bigram_model.bigram_counts
    #     model.trigram_model.unigram_counts = model.bigram_model.unigram_counts

    #     return model

if __name__ == "__main__":
      pass