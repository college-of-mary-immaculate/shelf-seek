# 📖🔎 ShelfSeek API Documentation

## Run Application
> Verify if the application is running

**Request Header:**  
```
GET http://localhost:8000/api/v1/
```

---

## 🔎 Search Endpoints

| Method | Description | URL | Status |
|--------|-------------|-----|--------|
| GET    | Search books across all fields (title, author, genre, ISBN, publish date, rating) | `http://localhost:8000/api/v1/search?query={}` |        |
| GET    | Returns auto-suggestions as user types | `http://localhost:8000/api/v1/suggestions?query={partial}` |        |
| GET    | Autocomplete full phrases | `http://localhost:8000/api/v1/completions?query={partial}` |        |
| GET    | Suggest corrections for misspelled queries | `http://localhost:8000/api/v1/corrections?query={misspelled}` |        |


---

## Search Books
> Search books across all fields (title, author, genre, ISBN, publish date, rating)

**Request Header:**  
```
GET /api/v1/search?query={query}
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "sorted_by": "relevancy",
    "books": [
      {
        "book_id": 1,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "genre": "Classic",
        "isbn": "978-0-7432-7356-5",
        "publish_date": "1925-04-10",
        "rating": 4.5,
        "summary": "A story of wealth, love, and the American Dream...",
        "likes": 12312
      }
    ],
    "total_count": 150,
    "page": 1,
    "per_page": 20
  }
}
```

---

## Auto-Suggestions
> Returns auto-suggestions as user types

**Request Header:**  
```
GET /api/v1/suggestions?query={partial}
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "query": "fiction",
    "suggestions": [
      "fiction books",
      "fiction bestsellers",
      "fiction novels 2024"
    ]
  }
}
```

---

## Autocomplete
> Autocomplete full phrases

**Request Header:**  
```
GET /api/v1/completions?query={partial}
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "completions": [
      {
        "text": "science fiction books for beginners",
        "score": 0.95
      },
      {
        "text": "fiction and non-fiction differences",
        "score": 0.87
      }
    ]
  }
}
```

---

## Query Corrections
> Suggest corrections for misspelled queries

**Request Header:**  
```
GET /api/v1/corrections?query={misspelled}
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "original_query": "ficton",
    "corrected_query": "fiction",
    "suggestions": ["fiction", "faction", "fiction"],
    "confidence": 0.92
  }
}
```

---

## 💬 NLP Endpoints

| Method | Description         | URL                                           | Status |
|--------|---------------------|-----------------------------------------------|--------|
| POST   | Generate N-grams    | `http://localhost:8000/api/v1/nlp/ngrams`     |        |
| POST   | Text classification | `http://localhost:8000/api/v1/nlp/classify`   |        |
| POST   | TF-IDF computation  | `http://localhost:8000/api/v1/nlp/tfidf`      |        |
| POST   | Text preprocessing  | `http://localhost:8000/api/v1/nlp/preprocess` |        |
| POST   | Similarity calculation | `http://localhost:8000/api/v1/nlp/similarity` |        |
| POST   | Keyword extraction  | `http://localhost:8000/api/v1/nlp/keywords`   |        |
| POST   | Spell checking      | `http://localhost:8000/api/v1/nlp/spellcheck` |        |


---

## Generate N-grams
> Generate N-grams from text

**Request Header:**  
```
POST /api/v1/nlp/ngrams
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "original_text": "The quick brown fox jumps",
    "ngrams": {
      "unigrams": ["The", "quick", "brown", "fox", "jumps"],
      "bigrams": ["The quick", "quick brown", "brown fox", "fox jumps"],
      "trigrams": ["The quick brown", "quick brown fox", "brown fox jumps"]
    }
  }
}
```

---

## Text Classification
> Classify text into categories

**Request Header:**  
```
POST /api/v1/nlp/classify
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "text": "This book is a thrilling mystery novel",
    "classifications": [
      {
        "label": "mystery",
        "confidence": 0.89
      },
      {
        "label": "fiction",
        "confidence": 0.85
      },
      {
        "label": "thriller",
        "confidence": 0.78
      }
    ],
    "predicted_class": "mystery"
  }
}
```

---

## TF-IDF Computation
> Compute Term Frequency-Inverse Document Frequency for text analysis

**Request Header:**  
```
POST /api/v1/nlp/tfidf
```


**Response Body:**  
```json
{
  "success": true,
  "data": {
    "input_text": "The quick brown fox jumps over the lazy dog",
    "tfidf_scores": [
      {
        "term": "brown",
        "term_frequency": 0.111,
        "inverse_document_frequency": 1.099,
        "tfidf_score": 0.122
      }
    ],
    "top_terms": ["brown", "quick", "jumps", "lazy", "dog"],
    "parameters": {
      "max_terms": 10,
      "normalize": true,
      "total_documents": 3
    }
  }
}
```

---

## Text Preprocessing
> Preprocess text for analysis

**Request:**  
```
POST /api/v1/nlp/preprocess
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "original_text": "The QUICK brown fox's jumps!",
    "processed_text": "quick brown fox jump",
    "tokens": ["quick", "brown", "fox", "jump"],
    "steps_applied": ["lowercase", "punctuation_removal", "stemming"]
  }
}
```

---

## Similarity Calculation
> Calculate similarity between texts

**Request:**  
```
POST /api/v1/nlp/similarity
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "text1": "mystery novel detective",
    "text2": "crime fiction investigator",
    "similarity_score": 0.76,
    "similarity_metric": "cosine"
  }
}
```

---

## Keyword Extraction
> Extract keywords from text

**Request Header:**  
```
POST /api/v1/nlp/keywords
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "text": "The mystery novel features a detective solving crimes in London",
    "keywords": [
      {
        "keyword": "mystery",
        "score": 0.95,
        "frequency": 1
      }
    ]
  }
}
```

---

## Spell Checking
> Check and correct spelling

**Request Header:**  
```
POST /api/v1/nlp/spellcheck
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "original_text": "I love ficton books",
    "corrected_text": "I love fiction books",
    "corrections": [
      {
        "original": "ficton",
        "corrected": "fiction",
        "confidence": 0.94
      }
    ]
  }
}
```

---

## 🛠️ Utility Endpoints

| Method | Description              | URL                                      | Status |
|--------|--------------------------|------------------------------------------|--------|
| GET    | Simple health/status check | `http://localhost:8000/api/v1/health`   |        |
| GET    | Returns system statistics  | `http://localhost:8000/api/v1/stats`    |        |


---

## Health Check
> Simple health/status check

**Request Header:**  
```
GET /api/v1/health
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "service": "book-search-api",
    "version": "1.0.0",
    "timestamp": "2024-01-15T10:30:00Z",
    "uptime": 86400,
    "database_status": "healthy"
  }
}
```

---

## System Statistics
> Returns system statistics

**Request Header:**  
```
GET /api/v1/stats
```

**Response Body:**  
```json
{
  "success": true,
  "data": {
    "total_books": 15000,
    "total_authors": 3500,
    "total_genres": 45,
    "search_queries_today": 1247,
    "average_response_time": 0.15,
    "memory_usage": "45%",
    "last_updated": "2024-01-15T10:30:00Z"
  }
}
```

---

## Common Response Format
> All endpoints follow this structure:

```json
{
  "success": boolean,
  "data": object,
  "error": string | null,
  "message": string
}
```

### Status Codes

- `200` - Success  
- `400` - Bad Request  
- `404` - Not Found  
- `500` - Internal Server Error  

