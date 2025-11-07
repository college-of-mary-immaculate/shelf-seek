import bookbrains

print(" ".join([res[0] for word in bookbrains.tokenizer("boks about ficonal and bout ahor name ann liang") if (res := bookbrains.levenshtein(word, choices = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")))]))