from datetime import datetime

from .file import FileManager


class Join:
    def __init__(self, file_manager: FileManager):
        self.file_manager = file_manager

        self.shelf = None

        self.books = None
        self.book_genres = None
        self.book_authors = None
        self.book_publishers = None

        self.joined_data = None

        self.is_joined = False


    def setup(self, force_rebuild: bool) -> None:
        """ Loads all of the data """
        default_data = {
            "name": "Barnes and Nobles Book List",
            "description": "Contais book meta datas",
            "date_updated": datetime.today().strftime('%Y-%m-%d'),
            "main_source": "https://www.barnesandnoble.com/",
            "total_books": 128,
            "books": []
        }

        if force_rebuild:
            self.file_manager.delete_file(r"data\joined_data\barnesnobles.json")

        self.shelf = self.file_manager.load_json(r"data\barnesnobles_shelf\shelf.json")
        self.joined_data = self.file_manager.load_json(r"data\joined_data\barnesnobles.json", default_data)

        if len(self.joined_data["books"]) == len(self.shelf["books"]) and not force_rebuild:
               print("[ BookBrains ] Joined Data already prepared.")
               self.is_joined = True
               return
        
        self.books = self.file_manager.load_json(r"data\barnesnobles_shelf\book.json")
        self.book_genres = self.file_manager.load_json(r"data\barnesnobles_shelf\categories.json")
        self.book_authors = self.file_manager.load_json(r"data\barnesnobles_shelf\author.json")
        self.book_publishers = self.file_manager.load_json(r"data\barnesnobles_shelf\publisher.json")



    def join_data(self, force_rebuild: bool) -> None:
        """ Creates a json file that joins the book data into single data of book """
        self.setup(force_rebuild)

        if self.is_joined:
            return
        
        print("[ BookBrains ] Preparing Joining Scraped data.")

        for shelfs_data in self.shelf["books"]:
            data = {
                "book": None,
                "author": None,
                "publisher": None,
                "genres": []
            }

            for books_data in self.books["books"]:
                if books_data["_id"] == shelfs_data["book_id"]:
                    data["book"] = books_data
            
            for genres_data in shelfs_data["book_categories_id"]:
                for genre_data in self.book_genres["categories"]:
                    if genre_data["_id"] == genres_data:
                        data["genres"].append(genre_data)

            for author_data in self.book_authors["authors"]:
                if author_data["_id"] == shelfs_data["book_author_id"]:
                    data["author"] = author_data

            for publisher_data in self.book_publishers["publishers"]:
                if publisher_data["_id"] == shelfs_data["book_publisher_id"]:
                    data["publisher"] = publisher_data


            if data not in self.joined_data["books"]:
                self.joined_data["books"].append(data)

        self.joined_data["total_books"] = len(self.joined_data["books"])
        self.joined_data["date_updated"] = datetime.today().strftime('%Y-%m-%d')

        self.file_manager.save_json(r"data\joined_data\barnesnobles.json", self.joined_data)

        


if __name__ == "__main__":
      pass