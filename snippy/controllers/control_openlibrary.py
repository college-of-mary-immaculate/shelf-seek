import time

from typing import Dict

from ..file import FileManager
from ..scrapers import OpenLibrary


class OpenLibraryController:
    """ Control center for Snippy's ocean of pdf safety checks. """

    def __init__(self, file_manager: FileManager):
        self.file_manager = file_manager
        self.target = OpenLibrary(self.file_manager)


    def validate_openlibrary(self, agent: Dict[str, str | Dict[str, str]], headless: bool = True, total_books: int = 1_000) -> None:
        """ Scrapes ocean of pdf, it will take longer time """
        try:
            if not isinstance(headless, bool):
                raise ValueError("[ 🍎 ] Headless must be a boolean")

            if not isinstance(agent, dict):
                raise ValueError("[ 🍎 ] Agent must be a dictionary containing 'user_agent' and 'headers'.")

            if "user_agent" not in agent or "headers" not in agent:
                raise KeyError("[ 🍎 ] Agent dictionary must include both 'user_agent' and 'headers' keys.")
            
            closed_category: str = "snippy/cache/closed_category_links/openlibrary.json"
            open_category: str = "snippy/cache/open_category_links/openlibrary.json"

            if self.file_manager.is_file_exist(closed_category) and self.file_manager.is_file_exist(open_category):
                block_list: Dict = self.file_manager.load_json(closed_category)
                open_list: Dict = self.file_manager.load_json(open_category)

            existing_genre_data: Dict = self.target.scrape_links(block_list, open_list, agent, headless, book_limit = total_books)

            return existing_genre_data

        except Exception as error:
            print(f"[ 🍎 ] Checkup failed due to error: {error}")

if __name__ == "__main__":
    controller = OpenLibraryController(None)