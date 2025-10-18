import json
from bookbrains import InterpolatedNigram, tokenize

def load_books(json_path: str):
    print(f"[ BookBrains ] Loading dataset from {json_path}")
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    corpus = []
    word_to_books = {}  # 🔥 new: word -> [book titles]

    for item in data.get("books", []):
        book = item.get("book", {})
        author = item.get("author", {})
        publisher = item.get("publisher") or {}

        title = book.get("title", "")
        desc = book.get("description", "")
        author_name = author.get("name", "")
        publisher_name = publisher.get("name", "")

        text = f"{title} {desc} {author_name} {publisher_name}"
        tokens = tokenize(text.lower())

        corpus.append(" ".join(tokens))

        # 🔥 Build mapping of each word to the title it appeared in
        for token in set(tokens):  # use set() to avoid duplicates
            word_to_books.setdefault(token, []).append(title)

    print(f"[ BookBrains ] Loaded {len(corpus)} entries from dataset.")
    return corpus, word_to_books


def train_ngram():
    """Train and save the Interpolated N-gram model."""
    json_path = "data/joined_data/barnesnobles.json"
    output_path = "data/processed/interpolated_ngram.pkl"

    corpus, word_to_books = load_books(json_path)
    print(f"[ BookBrains ] Preparing {len(corpus)} sentences...")

    tokenized_corpus = [tokenize(sentence.lower()) for sentence in corpus if sentence.strip()]

    print("[ BookBrains ] Training Interpolated N-gram model...")
    model = InterpolatedNigram()
    model.train([token for sentence in tokenized_corpus for token in sentence])  # flatten all tokens

    # 🔥 Store the mapping directly inside the model
    model.word_to_books = word_to_books

    print(f"[ BookBrains ] Saving model to {output_path}")
    model.save(output_path)

    print("[✅] Training complete!")


if __name__ == "__main__":
    train_ngram()
