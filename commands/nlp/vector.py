import bookbrains

docs = [
    "geeks for geeks",
    "geeks",
    "r2j"
]

vector = bookbrains.vectorizer(
    query = "i books geeks <3",
    documents = docs
)

print(vector)