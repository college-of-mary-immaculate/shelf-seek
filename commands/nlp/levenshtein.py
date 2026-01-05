import bookbrains

""" THIS IS FOR WINDOWS PROGRAMMER """
# data = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")

""" THIS IS FOR LINUX PROGRAMMER """
data = bookbrains.FileManager().load_txt("data/lexicon/words.txt")
print(" ".join([res[0] for word in bookbrains.tokenizer("boks about ficonal and bout ahor name ann liang") if (res := bookbrains.levenshtein(word, choices = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")))]))

query = "books about fictional and about author name ann ling"

suggest = [res[0] for word in  bookbrains.tokenizer(query) if (res := bookbrains.levenshtein(word, choices=data))]

suggestion = " ".join(suggest)

print(suggestion)

