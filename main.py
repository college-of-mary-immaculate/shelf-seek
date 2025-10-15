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

# bookbrains.prepare_data(force_rebuild = True)

# queries = [
#     "who wrote The Housemaid",
#     "summary of A Song to Drown Rivers"
#     "romance novels with small town settings",
#     "books by Adalyn Grace",
#     "list business or motivation self-help books"
# ]

# for query in queries:
#     labels, scores = bookbrains.classify(query, retrain = False)

#     print(f"\nQuery: {query}")
#     print(f"🧭 Predicted label: {labels}")
#     print(f"📊 All scores: {scores}")


# docs = [
#     "geeks for geeks",
#     "geeks",
#     "r2j"
# ]

# vector = bookbrains.vectorizer(
#     query = "i love geeks <3",
#     documents = docs
# )

# print(vector)
