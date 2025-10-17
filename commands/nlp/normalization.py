import bookbrains

normalized_sentence = bookbrains.normalize(
    sentence = "A REESE'S BOOK CLUB PICKA #1 New York Times bestseller, Wall Street Journal Best Book of the Year, Best Historical Novel of the Year • People's Choice Favorite Fiction Winner • #1 Indie Next Selection • A Buzzfeed and The Week Best Book of the Year",
    normalize_num = True
)

print(normalized_sentence)