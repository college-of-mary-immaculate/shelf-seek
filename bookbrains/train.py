import json
from bookbrains import InterpolatedNigram, tokenize


def load_books(json_path: str):
    print(f"[ BookBrains ] Loading dataset from {json_path}")
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    corpus = []
    for item in data.get("books", []):
        book = item.get("book", {})
        author = item.get("author", {})
        publisher = item.get("publisher") or {}  # ✅ Safe fallback

        title = book.get("title", "")
        desc = book.get("description", "")
        author_name = author.get("name", "")
        publisher_name = publisher.get("name", "")

        text = f"{title} {desc} {author_name} {publisher_name}"
        corpus.append(text)

    print(f"[ BookBrains ] Loaded {len(corpus)} entries from dataset.")
    return corpus


def train_ngram():
    """Train and save the Interpolated N-gram model."""
    json_path = "data/joined_data/barnesnobles.json"
    output_path = "data/processed/interpolated_ngram.pkl"

    print(f"[ BookBrains ] Loading dataset from {json_path}")
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    corpus = load_books(json_path)
    print(f"[ BookBrains ] Preparing {len(corpus)} sentences...")

    tokenized_corpus = [tokenize(sentence.lower()) for sentence in corpus if sentence.strip()]

    print("[ BookBrains ] Training Interpolated N-gram model...")
    model = InterpolatedNigram()
    model.train([token for sentence in tokenized_corpus for token in sentence])  # flatten all tokens

    print(f"[ BookBrains ] Saving model to {output_path}")
    model.save(output_path)

    print("[✅] Training complete!")


if __name__ == "__main__":
    train_ngram()
