from fastapi import APIRouter, Query
from typing import Dict, Any
import bookbrains  

auto_suggest = APIRouter(prefix="/suggestions", tags=["Auto Suggest"])

# ✅ Load Interpolated N-Gram model once
ngram_model = bookbrains.InterpolatedNigram.load("data/processed/interpolated_ngram.pkl")


@auto_suggest.get("/suggest")
def suggest(query: str = Query(..., min_length=3)) -> Dict[str, Any]:
    """
    - Detects query type (title, author, genre, description)
    - Fetches matching books from MongoDB
    - Returns suggestions appropriate to the detected query type
    - Predicts next words using Interpolated N-Gram model for description/title
    """

    # 1️⃣ Normalize the input
    cleaned_query = bookbrains.normalize(query)

    # 2️⃣ Classify the query intent
    classification_result = bookbrains.classify(cleaned_query)
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

    # 5️⃣ Extract suggestions based on query type
    suggestions = []
    predicted_next = []

    if query_type == "description":
        # For descriptions, only use N-gram predictions (don't return full descriptions)
        if ngram_model:
            try:
                candidates = ngram_model.get_candidates(cleaned_query.split(), top_k=10)
                predicted_next = [w for w, _ in candidates]
            except Exception:
                predicted_next = []
        # Suggestions remain empty for description queries
        
    elif query_type == "title":
        # For titles, extract matching titles AND predict next words
        for doc in results:
            try:
                value = doc
                for part in field.split('.'):
                    value = value.get(part, {}) if isinstance(value, dict) else value
                if isinstance(value, str) and value not in suggestions:
                    suggestions.append(value)
            except Exception:
                continue
        
        # Also predict next words for title queries
        if ngram_model:
            try:
                candidates = ngram_model.get_candidates(cleaned_query.split(), top_k=5)
                predicted_next = [w for w, _ in candidates]
            except Exception:
                predicted_next = []
                
    else:  # author or genre
        # For author/genre, just extract matching values
        for doc in results:
            try:
                value = doc
                for part in field.split('.'):
                    value = value.get(part, {}) if isinstance(value, dict) else value
                
                # Handle lists (genres might be a list)
                if isinstance(value, list):
                    for item in value:
                        if isinstance(item, str) and item not in suggestions:
                            suggestions.append(item)
                elif isinstance(value, str) and value not in suggestions:
                    suggestions.append(value)
            except Exception:
                continue

    # 6️⃣ Build and return final response
    response = {
        "query": query,
        "normalized_query": cleaned_query,
        "query_type": query_type,
        "predicted_next": predicted_next,
        "suggestions": suggestions[:9]
    }

    return response