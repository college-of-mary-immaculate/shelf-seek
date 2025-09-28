import random

from typing import List, Dict

from .controllers import *
from .file import FileManager


# * INSTANCIATE ONLY ONCE
file_manager = FileManager()

precaution = PrecautionController(file_manager)
ocean_of_pdf = OpenLibraryController(file_manager)


def generate_agent() -> Dict[str, str | Dict[str, str]]:
    """ Randomly picks user agent """
    user_agents: List = file_manager.load_json(file_name = "snippy/cache/user_agents.json")

    return {
        "user_agent": random.choice(user_agents),
        "headers": {
            "From": "https://github.com/Vince9090",
            "X-Snippy-Bot": "SnippyBot/1.0 (contact: seeksnippy@gmail.com)",
            "X-Snippy-Purpose": "Student project for making search engine about books, original data source will be credited to the site."
        }
    }


def seek_checkup(headless: bool = True) -> None:
    """ Runs a stealth test on Snippy to see if it's detectable. """
    result: bool = precaution.validate_checkup(
        agent = generate_agent(),
        headless = headless
    )

    if result:
        print(r"[ Snippy ] Sucessfully take snippy to a checkup results are in snippy/data/daily_checkup folder. 🎉")
        return result
    else:
        print("[ Snippy ] Snippy checkup did not complete successfully.")
        return result


def seek_openlibrary(headless: bool = True,  total_books: int = 1_000, online = True) -> None:
    """ Scrapes ocean of pdf, it will take longer time """

    if online:
        result: Dict = ocean_of_pdf.validate_openlibrary(
            agent = generate_agent(),
            headless = headless,
            total_books = total_books
        )

    if result:
        print("[ Snippy ] Sucessfully take snippy to scrape Ocean of PDF. 🎉")
        return result
    else:
        print("[ Snippy ] Snippy scraping on Ocean of PDF did not complete successfully.")
        return result


if __name__ == "__main__":
      file_manager.save_json(data = "uwu", file_name = "snippy/data/daily_scraped.json")

      """
      Sources:

      Website Scraped:
        Web Novel: https://www.webnovel.com/
        Ocean of PDF: https://oceanofpdf.com/
      
      Stealth:
        Github: https://github.com/Mattwmaster58/playwright_stealth
      """