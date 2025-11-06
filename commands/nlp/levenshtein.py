import bookbrains

""" THIS IS FOR WINDOWS PROGRAMMER """
# data = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")

""" THIS IS FOR LINUX PROGRAMMER """
data = bookbrains.FileManager().load_txt("data/lexicon/words.txt")

query = "books about fictional and about author name ann liang"

suggest = [res[0] for word in  bookbrains.tokenizer(query) if (res := bookbrains.levenshtein(word, choices=data))]

suggestion = " ".join(suggest)

print(suggestion)