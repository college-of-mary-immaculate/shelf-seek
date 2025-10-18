from fastapi import APIRouter, Query, HTTPException
from ..models import Book
from ..schemas import SearchResult, SearchResponse
import bookbrains
import time, math

search_router = APIRouter(tags=["search"])

MAX_PAGE_SIZE = 9

@search_router.get("/search", response_model=SearchResponse)
def search(
    query: str = Query(..., min_length=1, max_length=500),
    limit: int = Query(default=MAX_PAGE_SIZE, ge=1, le=MAX_PAGE_SIZE),
    offset: int = Query(default=0, ge=0),
) -> SearchResponse:
    start_time = time.time()

    try:
        # --- Step 1: Normalize the query ---
        normalized_query = bookbrains.normalize(query, normalize_num=False)

        # --- Step 2: Retrieve matching documents from database ---
        raw_docs = bookbrains.get_database_document(normalized_query)
        documents = [Book.from_mongo(doc) for doc in raw_docs]

        # --- Step 3: Extract stored document vectors ---
        document_vectors = [doc.vector for doc in documents]

        # --- Step 4: Compute similarity scores ---
        similarity = bookbrains.vectorizer(
            normalized_query,
            documents,
            similarity=True,
            document_vectors=document_vectors,
            existing_model=True
        )

        # --- Step 5: Convert similarity results to SearchResult list ---
        ranked_docs = [
            SearchResult(
                id=str(doc.id),
                title=doc.title,
                author=doc.author.name if doc.author else None,
                isbn=doc.isbn_10 or doc.isbn_13,
                description=doc.description,
                genre=[g.name for g in (doc.genres or [])] if doc.genres else None,
                published_date=doc.published_date,
                publisher=doc.publisher.name if doc.publisher else None,
                page_count=doc.page_count,
                language=doc.language,
                cover_image_url=doc.cover_image_url,
                rating=doc.rating_average,
                relevance_score=min(score, 1.0),  # ensure 0.0–1.0
            )
            for doc, score in similarity
        ]

        total = len(ranked_docs)

        # --- Step 6: Pagination ---
        limit = min(limit, MAX_PAGE_SIZE)
        paginated = ranked_docs[offset: offset + limit]

        page_num = (offset // MAX_PAGE_SIZE) + 1
        total_pages = math.ceil(total / MAX_PAGE_SIZE) if total > 0 else 1

        next_offset = offset + limit if offset + limit < total else None
        prev_offset = max(0, offset - MAX_PAGE_SIZE) if offset > 0 else None

        exec_ms = (time.time() - start_time) * 1000

        # --- Step 7: Return structured response ---
        return SearchResponse(
            query=query,
            results=paginated,
            total_results=total,
            limit=limit,
            offset=offset,
            page_num=page_num,
            total_pages=total_pages,
            next_offset=next_offset,
            prev_offset=prev_offset,
            execution_time_ms=round(exec_ms, 2)
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Search failed: {e}")
