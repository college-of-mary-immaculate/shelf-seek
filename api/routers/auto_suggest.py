from fastapi import APIRouter, Query
import bookbrains

auto_suggest = APIRouter(prefix="/suggestions", tags=["Auto Suggest"])

model = bookbrains.InterpolatedNigram.load("data/processed/interpolated_ngram.pkl")

@auto_suggest.get("/suggest")
def suggest(query: str = Query(..., min_length=3)):
    if model is None:
        return {"success": False, "message": "Model not loaded or missing"}

    normalized_qry = bookbrains.normalize(query)
    tokens = bookbrains.tokenizer(normalized_qry)
    candidates = model.get_candidates(tokens, top_k=9)

    suggestions = []
    for word, _ in candidates:
        if not word.isalpha():
            continue

        # 🔥 Get related books directly from the model
        books = model.word_to_books.get(word, [])
        if books:
            suggestions.append({
                "next_word": word,
                "books": books[:1]
            })

    return {
        "success": True,
        "data": {
            "query": query,
            "suggestions": suggestions
        }
    }
