import time
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

# bookbrains.prepare_data(
#     force_rebuild =  True,
#     remove_primary_keys = True,
#     vectorize = True,
#     database_insert = True
# )

# bookbrains.database_status()

# queries = [
#     "funny zombie story"
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
#     query = "i books geeks <3",
#     documents = docs
# )

# print(vector)

# normalized_sentence = bookbrains.normalize(
#     sentence = "A REESE'S BOOK CLUB PICKA #1 New York Times bestseller, Wall Street Journal Best Book of the Year, Best Historical Novel of the Year • People's Choice Favorite Fiction Winner • #1 Indie Next Selection • A Buzzfeed and The Week Best Book of the Year",
#     normalize_num = True
# )

# print(normalized_sentence)

query = "ann patchett"

print("Query: ", query)

start = time.time()
results = bookbrains.get_database_document(query)

print("Time:", round(time.time() - start, 3), "s")
