import snippy
import bookbrains

# snippy.seek_checkup(headless = True)

# snippy.seek_openlibrary(
#     online = False,
#     headless = True,
#     total_books = 150,
#     total_subject = 200,
#     total_tabs = 3
# )

# snippy.seek_barnesnobles(
#     online = True,
#     headless = True,
#     total_books = 150,
#     total_subject = 200,
#     total_tabs = 3
# )

# snippy.seek_barnesnobles_book(
#     link = "cache",
#     headless = False
# )


# tokenization = bookbrains.tokenize("UwUUUUU")

# print(tokenization)

# bookbrains.prepare_data()

# data = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")

# leven = bookbrains.correct("buxy", choices=data)

# sentence = "Busins Liyfe - Insiranal"

# tokenized = bookbrains.tokenize(sentence)

# suggested = ""

# for token in tokenized:
#     suggested += " "
#     suggested += bookbrains.correct(token.lower(), choices=data)[0]

# bookbrains.prepare_data()

# queries = [
#     "who wrote The Housemaid",                        # → author_name_search
#     "summary of A Song to Drown Rivers",              # → book_content_search
#     "tell me about Freida McFadden",                  # → author_content_search
#     "books published by HarperCollins",               # → publisher_name_search
#     "show me fantasy novels with mythology",          # → genre_name_search
#     "what is The Let Them Theory about",              # → book_content_search
#     "give me titles by Mel Robbins",                  # → author_name_search
#     "list books from St Martins Publishing Group",    # → publisher_name_search
#     "who is R. F. Kuang",                             # → author_name_search
#     "describe the plot of The Irish Goodbye",         # → book_content_search
#     "fiction about boarding schools or scandals",     # → genre_name_search
#     "books by Dan Brown about secret societies",      # → author_name_search
#     "which book is A Fine Line Between Stupid and Clever",  # → book_title_search
#     "romance novels with small town settings",        # → genre_name_search
#     "tell me more about author Brynne Weaver",        # → author_content_search
#     "novels published by Zando",                      # → publisher_name_search
#     "titles by Adalyn Grace",                         # → author_name_search
#     "what is When the Cranes Fly South about",        # → book_content_search
#     "books in the Dream Harbor series",               # → book_title_search
#     "list business or motivation self-help books"     # → genre_name_search
# ]


# bookbrains.identify("list about business or motivation self help books")
    
