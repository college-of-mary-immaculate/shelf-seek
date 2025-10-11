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

data = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")

leven = bookbrains.correct("buxy", choices=data)

sentence = "Busins Liyfe - Insiranal"

tokenized = bookbrains.tokenize(sentence)

suggested = ""

for token in tokenized:
    suggested += " "
    suggested += bookbrains.correct(token.lower(), choices=data)[0]

print("searched: ", sentence)
print()
print("Did you mean?: ", suggested)
