import re

from .utils import PickleFileManager, FileManager

from typing import List, Dict

class NaiveBayes:
    """ Can identify sentence intention """
    def __init__(self, pickle_manager: PickleFileManager):
        self.pickle_manager = pickle_manager

    def identify(self, text: str) -> Dict[str, str]:
        pass

    def train(self) -> None:
        pass

    def predict(self) -> None:
        pass

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
            self._get_publisher_labels(publisher)
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

        if normalized_description[0] and normalized_description not in self.training_data:
            self.training_data.append(normalized_description)


    def _get_publisher_labels(self, publisher: Dict[str, str]) -> None:
        """ identifies publisher labels """
        if publisher:
            normalized_name = (self._normalize_text(publisher["name"]), "publisher_name_search")

            if normalized_name[0] and normalized_name not in self.training_data:
                self.training_data.append(normalized_name)

    
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


if __name__ == "__main__":
    classy = NaiveBayes()