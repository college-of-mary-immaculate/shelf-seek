import bookbrains

data = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")

query = "books about fictional and about author name ann liang"

tokens = bookbrains.tokenizer(query)

suggest = []
for word in tokens:
    result = bookbrains.levenshtein(word, choices = data)

    if result:
        suggest.append(result[0])

suggestion = " ".join(suggest)

print(suggestion)