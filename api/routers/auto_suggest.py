from fastapi import APIRouter, Query
from typing import Dict, Any
import bookbrains  

auto_suggest = APIRouter(prefix="/suggestions", tags=["Auto Suggest"])

# ✅ Load Interpolated N-Gram model once
ngram_model = bookbrains.InterpolatedNigram.load("data/processed/interpolated_ngram.pkl")


@auto_suggest.get("/suggest")
def suggest(query: str = Query(..., min_length=3)) -> Dict[str, Any]:
    """
    Hybrid Auto Suggest endpoint:
    - Detects query type (title, author, genre, description)
    - Fetches matching books from MongoDB
    - Predicts next words using Interpolated N-Gram model
    """

    # Normalize the input
    # print("hello world")
    cleaned_query = bookbrains.normalize(query)
    #cleaned_query = query.lower()

    # Classify the query intent
    classification_result = bookbrains.classify(cleaned_query)
    # `classify` might return ('title', probability) or (['title'], probability)
    query_type = None
    if isinstance(classification_result, (list, tuple)):
        first_value = classification_result[0]
        if isinstance(first_value, list):
            query_type = first_value[0] if first_value else "title"
        elif isinstance(first_value, str):
            query_type = first_value
        else:
            query_type = "title"
    else:
        query_type = "title"

    query_type = str(query_type).lower()

    # 3️⃣ Map classification → MongoDB field
    mongo_field_map = {
        "title": "book.title",
        "author": "book.author.name",
        "genre": "book.genres.name",
        "description": "book.description"
    }
    field = mongo_field_map.get(query_type, "book.title")

    # 4️⃣ Query MongoDB
    results = bookbrains.get_database_document(cleaned_query)

    # 5️⃣ Extract relevant text field values
    suggestions = []
    for doc in results:
        try:
            value = doc
            for part in field.split('.'):
                value = value.get(part, {}) if isinstance(value, dict) else value
            if isinstance(value, str) and value not in suggestions:
                suggestions.append(value)
        except Exception:
            continue

    # 6️⃣ Predict next words using N-Gram
    predicted_next = []
    if query_type in ["title", "description"] and ngram_model:
        try:
            candidates = ngram_model.get_candidates(cleaned_query.split(), top_k=5)
            predicted_next = [w for w, _ in candidates]
        except Exception:
            predicted_next = []

    # 7️⃣ Build and return final response
    response = {
        "query": query,
        "normalized_query": cleaned_query,
        "query_type": query_type,
        "predicted_next": predicted_next,
        "suggestions": suggestions[:10]
    }

    return response
