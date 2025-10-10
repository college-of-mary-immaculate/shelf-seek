from fastapi import APIRouter, Query
from bookbrains import InterpolatedNigram

auto_suggest = APIRouter(prefix="/suggestions", tags=["autosuggest"])

# Load the trained model once
model = InterpolatedNigram.load("data/processed/interpolated_ngram.pkl")

@auto_suggest.get("/suggest")
def suggest(query: str = Query(..., min_length=1)):
    """
    Auto-suggestion endpoint.
    Example: GET /suggestions/suggest?query=fiction
    """
    if model is None:
        return {
            "success": False,
            "message": "Model not loaded or missing"
        }

    # Tokenize the query
    tokens = query.lower().split()

    # Generate top-k predictions
    candidates = model.get_candidates(tokens, top_k=5)
    suggestions = [w for w, _ in candidates]

    return {
        "success": True,
        "data": {
            "query": query,
            "suggestions": suggestions
        }
    }
