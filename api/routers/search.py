from fastapi import APIRouter, Query, HTTPException
from schemas import SearchRequest, SearchResult, SearchResponse
import time, math

router = APIRouter(tags=["search"])

# Define a maximum page size
MAX_PAGE_SIZE = 9

@router.get("/search", response_model=SearchResponse)
def search(
    query: str = Query(..., min_length=1, max_length=500),
    limit: int = Query(default=MAX_PAGE_SIZE, ge=1, le=MAX_PAGE_SIZE),
    offset: int = Query(default=0, ge=0),
) -> SearchResponse:
    start_time = time.time()
    try:
        # Fetch *all* matching results from your search subsystem
        # This is your custom search logic; e.g.:
        # results_data = bookbrains.search(query, filters, ...)
        results_data = []  # Replace with your real search result list

        total = len(results_data)

        # Enforce that limit does not exceed MAX_PAGE_SIZE
        if limit > MAX_PAGE_SIZE:
            limit = MAX_PAGE_SIZE

        # Compute pagination slice
        paginated = results_data[offset : offset + limit]

        # Compute current page number (1-based)
        page_num = (offset // MAX_PAGE_SIZE) + 1

        # Compute total pages
        total_pages = math.ceil(total / MAX_PAGE_SIZE) if total > 0 else 1

        # Compute offsets for next / previous pages
        next_offset = None
        prev_offset = None

        # Next page exists if offset + limit < total
        if offset + limit < total:
            next_offset = offset + limit

        # Previous page exists if offset > 0
        if offset > 0:
            # Move offset backwards by one page, but not negative
            prev_offset = max(0, offset - MAX_PAGE_SIZE)

        # Build SearchResult list
        results = [
            SearchResult(
                id=str(book.get("id", "")),
                title=book.get("title", ""),
                author=book.get("author"),
                isbn=book.get("isbn"),
                description=book.get("description"),
                genre=book.get("genre"),
                published_date=book.get("published_date"),
                publisher=book.get("publisher"),
                page_count=book.get("page_count"),
                language=book.get("language"),
                cover_image_url=book.get("cover_image_url"),
                rating=book.get("rating"),
                relevance_score=book.get("relevance_score"),
            )
            for book in paginated
        ]

        exec_ms = (time.time() - start_time) * 1000

        return SearchResponse(
            query=query,
            results=results,
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
