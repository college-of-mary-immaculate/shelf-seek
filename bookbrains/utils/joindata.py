from .file import FileManager


class Join:
    def __init__(self, file_manager: FileManager):
        self.file_manager = file_manager

        self.books = None
        self.book_genres = None
        self.book_authors = None
        self.book_publishers = None


    def setup(self) -> None:
        """ Loads all of the data """
        self.books = self.file_manager.load_json(r"data\barnesnobles_shelf\book.json")
        self.book_genres = self.file_manager.load_json(r"data\barnesnobles_shelf\categories.json")
        self.book_authors = self.file_manager.load_json(r"data\barnesnobles_shelf\author.json")
        self.book_publishers = self.file_manager.load_json(r"data\barnesnobles_shelf\publisher.json")


    def join_data(self) -> None:
        self.setup()

        print(self.books)

if __name__ == "__main__":
      pass