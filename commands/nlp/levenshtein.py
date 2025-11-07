import bookbrains

<<<<<<< HEAD
print(" ".join([res[0] for word in bookbrains.tokenizer("boks about ficonal and bout ahor name ann liang") if (res := bookbrains.levenshtein(word, choices = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")))]))
=======
data = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")

query = "books about fictional and about author name ann ling"

suggest = [res[0] for word in  bookbrains.tokenizer(query) if (res := bookbrains.levenshtein(word, choices=data))]

suggestion = " ".join(suggest)

print(suggestion)
>>>>>>> 3ae6828e2e49d30092ef81d37b1c04abaf7d4188
