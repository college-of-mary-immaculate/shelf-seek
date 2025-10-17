import bookbrains

data = bookbrains.FileManager().load_txt(r"data\lexicon\words.txt")

leven = bookbrains.correct("buxy", choices=data)