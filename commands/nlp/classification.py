import bookbrains

queries = [
    "funny zombie story"
]

for query in queries:
    labels, scores = bookbrains.classify(query, retrain = False)

    print(f"\n Query: {query}")
    print(f" Predicted label: {labels}")
    print(f" All scores: {scores}")