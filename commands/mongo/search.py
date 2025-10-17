import time
import bookbrains

query = "jujutsu kaisen vol 5"

normalized_query = bookbrains.normalize(query, normalize_num = False)

start = time.time()
documents = bookbrains.get_database_document(normalized_query)

document_vectors = [doc["vector"] for doc in documents]

similarity = bookbrains.vectorizer(
    normalized_query,
    documents,
    similarity = True,
    document_vectors = document_vectors,
    existing_model = True
)

for document, score in similarity[:10]:
    print(f"{document["book"]["title"]} → {score*100:.2f}%")

print(f"\n⏱ Elapsed time: {(time.time() - start):.3f} seconds")