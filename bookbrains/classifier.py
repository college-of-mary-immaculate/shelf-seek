import re
import random
from .lexical import Tokenization
from .ngrams import InterpolatedNigram
from .utils import PickleFileManager, FileManager

from math import log
from typing import List, Dict
from collections import defaultdict, Counter

class NaiveBayes:
    """ Can identify sentence intention """
    def __init__(self, pickle_manager: PickleFileManager, tokenization: Tokenization, file_manager: FileManager):

        self.tokenization = tokenization

        self.file_manager = file_manager
        self.pickle_manager = pickle_manager

        self.datasets = self.pickle_manager.pickle_load_processed(r"data\classification\label.pkl")

        self.class_models: Dict[str, InterpolatedNigram] = {}
        self.class_priors: Dict[str, float] = {}

        self.need_train = True

    def load_models(self) -> None:
        labels = ['book_title_search', 'book_content_search',
                  'author_name_search', 'author_content_search',
                  'genre_name_search', 'publisher_name_search']
    
        for label in labels:
            model_path = fr"data\classification\models\{label}_model.pkl"
            if self.file_manager.is_file_exist(model_path):
                self.class_models[label] = self.pickle_manager.pickle_load_processed(model_path)
                self.need_train = False
            else:
                return

        if self.file_manager.is_file_exist(r"data\classification\models\priors.pkl"):
            self.class_priors = self.pickle_manager.pickle_load_processed(r"data\classification\models\priors.pkl")
            self.need_train = False
        else:
            return

    def train(self, retrain: bool) -> Dict:
        if not retrain:
            self.load_models()

        if not self.need_train:
            return 
        
        grouped = defaultdict(list)
        for text, label in self.datasets:
            grouped[label].append(text)

        max_len = max(len(samples) for samples in grouped.values())
        for label, samples in grouped.items():
            oversampled = samples.copy()
            while len(oversampled) < max_len:
                oversampled.append(random.choice(samples))
            grouped[label] = oversampled  # replace with balanced

        total_samples = sum(len(samples) for samples in grouped.values())

        for label, samples in grouped.items():
            print(f"🧠 Training model for '{label}' with {len(samples)} samples...")

            model = InterpolatedNigram()

            tokens = []
            for sentence in samples:
                tokens.extend(self.tokenization.tokenize(sentence))

            model.train(tokens)

            self.class_models[label] = model

            alpha = 1.0 
            num_labels = len(grouped)
            self.class_priors[label] = (len(samples) + alpha) / (total_samples + alpha * num_labels)

            self.pickle_manager.pickle_save_processed(fr"data\classification\models\{label}_model.pkl", model)

        self.pickle_manager.pickle_save_processed(fr"data\classification\models\priors.pkl", self.class_priors)

        return {
            "trained_labels": list(grouped.keys()),
            "total_samples": total_samples,
            "priors": self.class_priors,
        }


    def predict(self, query) -> None:
        """ Predict the most likely label for a given query. """
        tokens = self.tokenization.tokenize(query.lower())

        scores = {}

        for label, model in self.class_models.items():
            prior = self.class_priors.get(label, 1e-9)
            log_prob = log(prior)

            for i, word in enumerate(tokens):
                probability = model.get_probability(word)
                    
                log_prob += log(probability + 1e-9)

            scores[label] = log_prob

        sorted_scores = sorted(scores.items(), key=lambda x: x[1], reverse=True)

        top_label, top_score = sorted_scores[0]
        second_label, second_score = sorted_scores[1]
        confidence_gap = abs(top_score - second_score)

        if confidence_gap < 3.0:
            top_labels = [top_label, second_label]
        else:
            top_labels = [top_label]

        return top_labels, dict(sorted_scores)



    def classify(self) -> None:
        pass


class CorpusPreparation:
    """  """
    def __init__(self, file_manager: FileManager, pickle_manager: PickleFileManager):
        self.pickle_manager = pickle_manager
        self.file_manager = file_manager

        self.scraped_data = None

        self.training_data = None


    def setup(self) -> None:
        self.scraped_data = self.file_manager.load_json(r"data\joined_data\barnesnobles.json")
        self.training_data = self.pickle_manager.pickle_load_processed(r"data\classification\label.pkl",auto_create = True, default_data = [])

    def _normalize_text(self, text: str) -> str:
        """ just makes text colurful into not colorful, just pure alphabets folks """
        if not text:
            return None

        text = text.replace("&", "and")

        # * REMOVES EMOJIS AND SPECIAL CHARACTERS
        text = re.sub(r"[^a-zA-Z0-9\s]", "", text)

        # * REPLACE DOUBLE SPACES WITH SINGEL SPACES
        text = re.sub(r"\s+", " ", text)

        return text.strip().lower()


    def build_training_data(self, force_rebuild) -> None:
        """ Builds starter training data """
        if force_rebuild:
            self.file_manager.delete_file(r"data\classification\label.pkl")

        if self.file_manager.is_file_exist(r"data\classification\label.pkl") and not force_rebuild:
            print("[ BookBrains ] Labels already existed and prepared. ")
            return

        if not self.file_manager.is_file_exist(r"data\joined_data\barnesnobles.json"):
            print("[ BookBrains ] No Prepared Joined scraped data yet.")
            return

        print("[ BookBrains ] Preparing label training data for Naive Bayes.")
        self.setup()

        books: List = self.scraped_data["books"]

        for data in books:
            book = data["book"]
            author = data["author"]
            publisher = data["publisher"]
            genres = data["genres"]

            self._get_book_labels(book)
            self._get_author_labels(author)
            # self._get_publisher_labels(publisher)
            self._get_genre_labels(genres)

        # print(len(self.training_data))
        # self.file_manager.save_json(r"data\classification\label.json", self.training_data)
        self.pickle_manager.pickle_save_processed(r"data\classification\label.pkl", self.training_data)

    
    def _get_book_labels(self, book: Dict[str, str | int]) -> None:
        """ identifies book field labels """
        normalized_title = (self._normalize_text(book["title"]), "book_title_search")
        normalized_description = (self._normalize_text(book["description"]), "book_content_search")

        if normalized_title[0] and normalized_title not in self.training_data:
            self.training_data.append(normalized_title)

        if normalized_description[0] and normalized_description not in self.training_data:
            self.training_data.append(normalized_description)


    def _get_author_labels(self, author: Dict[str, str | int]) -> None:
        """ indentifies author fields labels """
        normalized_name = (self._normalize_text(author["name"]), "author_name_search")
        normalized_description = (self._normalize_text(author["about"]), "author_content_search")
        
        if normalized_name[0] and normalized_name not in self.training_data:
            self.training_data.append(normalized_name)
            self.training_data.append((f"books by {self._normalize_text(author["name"])}", "author_name_search"))
            self.training_data.append((f"wrote by {self._normalize_text(author["name"])}", "author_name_search"))
            self.training_data.append((f"written by {self._normalize_text(author["name"])}", "author_name_search"))


        if normalized_description[0] and normalized_description not in self.training_data:
            self.training_data.append(normalized_description)


    def _get_publisher_labels(self, publisher: Dict[str, str]) -> None:
        """ identifies publisher labels """
        if publisher:
            normalized_name = (self._normalize_text(publisher["name"]), "publisher_name_search")

            if normalized_name[0] and normalized_name not in self.training_data:
                self.training_data.append(normalized_name)
                self.training_data.append((f"published by {self._normalize_text(publisher["name"])}", "publisher_name_search"))
                

    def _get_genre_labels(self, genres: List[Dict[str, str]]) -> None:
        """ identifies genres labels """
        for genre in genres:
            
            if not genre["name"]:
                continue 

            split_genres = re.split(r",| & | and", genre["name"])

            for g in split_genres:
                g = g.strip()
                data = (self._normalize_text(g), "genre_name_search")
                if g and data not in self.training_data and data[0]:
                    self.training_data.append(data)
                    self.training_data.append((f"books about {self._normalize_text(g)}", "genre_name_search"))
                   



if __name__ == "__main__":
    classy = NaiveBayes()