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

sentence = bookbrains.normalize("A REESE'S BOOK CLUB PICKA #1 New York Times bestseller, Wall Street Journal Best Book of the Year, and soon to be a major motion picture, this unforgettable novel of love and strength in the face of war has enthralled a generation. With courage, grace, and powerful insight, bestselling author Kristin Hannah captures the epic panorama of World War II and illuminates an intimate part of history seldom seen: the women's war. The Nightingale tells the stories of two sisters, separated by years and experience, by ideals, passion and circumstance, each embarking on her own dangerous path toward survival, love, and freedom in German-occupied, war-torn France—a heartbreakingly beautiful novel that celebrates the resilience of the human spirit and the durability of women. It is a novel for everyone, a novel for a lifetime.Goodreads Best Historical Novel of the Year • People's Choice Favorite Fiction Winner • #1 Indie Next Selection • A Buzzfeed and The Week Best Book of the Year")

print(sentence)