import random

from pathlib import Path
from datetime import datetime
from typing import Dict, List

from playwright_stealth import Stealth
from playwright.sync_api import sync_playwright, Page

from ..file import FileManager

class OpenLibrary:
    """ Scraping book's on official ocean of pdf website """

    def __init__(self, file_manager: FileManager):
        self.target_link = "https://openlibrary.org"

        self.file_manager = file_manager
        self.helper = OpenLibraryHelper(self, self.file_manager)

        self.test_path = Path("snippy/scrapers/test.txt").read_text(encoding = 'utf-8')

        self.closed_category: Dict = None
        self.open_category: Dict = None
        self.open_cateory_book: Dict = None
        
        self.subject_limit: int = 150
        self.book_limit: int = 30



    def scrape_links(self,block_list: Dict, open_list: Dict, open_book_list, agent: Dict[str, str | Dict[str, str]], headless: bool, book_limit: int = 0) -> None:
        """ Scrape ocean of pdf's genre """
        self.closed_category = block_list
        self.open_category = open_list
        self.open_cateory_book = open_book_list

        with Stealth().use_sync(sync_playwright()) as p:
            browser = p.chromium.launch(headless = headless)

            # Apply Snippy's custom user agent
            context = browser.new_context(
                user_agent = agent["user_agent"],
                extra_http_headers = agent["headers"]
            )

            page = context.new_page()

            # * ------------------ SCRAPING PROCESS ------------------

            # * Scrape only subject page of openlibrary
            if len(self.open_category["subjects"]) == 0:
                subject_link_list: Dict = self.helper.grab_subject_links(page = page, goto_link = f"{self.parent.target_link}/subjects/")
            else:
                print("[ Snippy ] Avoided subject page of openlibrary. ")
            
            book_links: Dict = self.helper.grab_book_links(page, book_limit)

            # * ------------------ ----------------- ------------------

            context.close()
            browser.close()

            return book_links


class OpenLibraryHelper:
    """ Helper class which contains the scraping content """
    def __init__(self,parent: OpenLibrary,  file_manager: FileManager):
        self.parent = parent
        self.file_manager = file_manager

        self.test_path = Path("snippy/scrapers/test.txt").read_text(encoding = 'utf-8')

        self.tabs: int = 5


    def normalize_subject_link(self,text: str, href: str) -> str:
        """ Best for avoiding /search links or href's """
        if href.startswith("/subjects/"):
            return f"https://openlibrary.org{href}"
        
        elif href.startswith("/search"):
            slug = text.strip().lower().replace(" ", "_")
            return f"https://openlibrary.org/subjects/{slug}"
        
        return None


    def grab_subject_links(self, page: Page, goto_link: str = None) -> None:
        """ Grabs subject header links or also known genre's too. """
        # page.set_content(self.parent.test_path)

        if len(self.parent.open_category["subjects"]) == self.parent.subject_limit:
            print("[ Snippy ] Subject limit reached.")
            return

        if goto_link:
            page.goto(goto_link)

        block_list: Dict = self.parent.closed_category
        open_list: Dict = self.parent.open_category

        new_data: int = 0

        links = page.locator('a[href*="/subjects/"], a[href*="/search"][href*="subject%3A"]')
        count: int = links.count()

        for i in range(count):
            link = links.nth(i)
            text: str = link.inner_text().strip()
            href: str = link.get_attribute("href")

            normalized_href: str = self.normalize_subject_link(text = text, href = href)

            if normalized_href:
                subject_data: Dict = {
                    "subject_name": text,
                    "subject_link": normalized_href
                }

                if subject_data not in open_list["subjects"] and subject_data not in block_list["subjects"]:
                    open_list["subjects"].append(subject_data)
                    new_data += 1

        open_list["total_subjects"] = len(open_list["subjects"])
        open_list["date_updated"] = datetime.today().strftime('%Y-%m-%d')

        self.file_manager.save_json("snippy/cache/open_category_links/openlibrary.json", open_list)

        self.parent.open_category = open_list

        print(f"[ Snippy ] New data added: {new_data}")


    def grab_book_links(self, page: Page, book_limit: int, max_clicks: int = 10) -> None:
        """ Scrape book links for caching """
        if self.parent.book_limit == self.parent.open_cateory_book["total_book_scraped"]:
            print("[ Snippy ] Book Link Limit Reached. ")
            return
        
        # page.set_content(self.parent.test_path)
        page.goto("https://openlibrary.org/subjects/architecture")

        self.grab_subject_links(page)

        subject_link_list: List = self.parent.open_category["subjects"]

        book_links = []

        book_cards = page.locator('a[href^="/books/"]')
        next_btn = page.locator('button.slick-next')

        clicks = 0

        while True:
            for href in book_cards.evaluate_all("els => els.map(e => e.getAttribute('href'))"):
                data: Dict = {
                    "book_link": href,
                    "is_scraped": False
                }

                if data not in book_links and len(book_links) != self.parent.book_limit:
                    book_links.append(data)

            disabled = (next_btn.get_attribute("aria-disabled") or "").lower()
            if disabled == "true" or clicks >= max_clicks or len(book_links) >= self.parent.book_limit:
                print("[ Snippy ] Scraping book link stopped")
                break

            next_btn.click()
            page.wait_for_timeout(random.choice([1000, 500, 1500]))
            clicks += 1
            print(clicks)

        print(len(book_links))
        return book_links


if __name__ == "__main__":
    ocean = OpenLibrary(None)
    
    ocean.scrape_links(
            agent={
                "user_agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36",
                "headers": {
                    "From": "https://github.com/Vince9090",
                    "X-Snippy-Bot": "SnippyBot/1.0 (contact: seeksnippy@gmail.com)",
                    "X-Snippy-Purpose": "Student project for making search engine about books; credits will be given."
                }
            },
            headless=True
        )
    
    """
    Respect Site robots.txt

    User-agent: *
    Disallow: /api
    Disallow: /edit
    Disallow: /account
    Disallow: /merges
    Disallow: /search
    Disallow: /search/publishers
    Disallow: /search/authors
    Disallow: /search/inside
    Disallow: /search/subjects
    Disallow: /search/lists
    Disallow: /advancedsearch
    Disallow: /publishers
    Disallow: /books/add
    Disallow: /qrcode
    Disallow: */borrow*
    Disallow: /*.rdf$

    Sitemap: https://openlibrary.org/static/sitemaps/siteindex.xml.gz

    User-agent: Baiduspider
    Crawl-delay: 10

    User-agent: Googlebot
    Disallow: /*.rdf$
    Crawl-delay: 10

    User-agent: AhrefsBot
    Crawl-delay: 10

    User-agent: meta-externalagent
    Crawl-delay: 10

    User-agent: anthropic-ai
    Crawl-delay: 10

    User-agent: ClaudeBot
    Crawl-delay: 10

    User-agent: openai
    Crawl-delay: 10

    User-agent: ChatGPT
    Crawl-delay: 10

    User-agent: bingbot
    Crawl-delay: 10

    User-agent: Yandex
    Crawl-delay: 10

    User-agent: *bot
    Crawl-delay: 10
    """

    # result = {
    #     "name": "Open Library",
    #     "main_url": self.parent.target_link,
    #     "total_subjects": 0,
    #     "genres": []
    # }
