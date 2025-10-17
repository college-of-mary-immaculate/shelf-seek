import bookbrains

data = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")

leven = bookbrains.levenshtein("buxy", choices=data)