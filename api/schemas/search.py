from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime

class ShelfSeekModel(BaseModel):
    class Config:
        validate_assignment = True
        validate_by_name = True

class SearchRequest(ShelfSeekModel):
    """Request model for book search"""
    query: str = Field(
        ..., 
        min_length=1,
        max_length=500,
        description="Search query for books",
        examples=["books about horror"]
    )
    limit: Optional[int] = Field(
        default=None,
        ge=1,
        le=100,
        description="Maximum number of results to return"
    )
    offset: Optional[int] = Field(
        default=0,
        ge=0,
        description="Number of results to skip for pagination"
    )
    filters: Optional[Dict[str, Any]] = Field(
        default=None,
        description="Additional filters (genre, author, year, etc.)"
    )

class SearchResult(ShelfSeekModel):
    """Single book search result"""
    id: str = Field(..., description="Unique book identifier")
    title: Optional[str] = Field(None, description="Book title")  # FIXED: Changed to Optional
    author: Optional[str] = Field(None, description="Book author")
    isbn: Optional[str] = Field(None, description="ISBN number")
    description: Optional[str] = Field(None, description="Book description")
    genre: Optional[List[str]] = Field(None, description="Book genres/categories")
    published_date: Optional[str] = Field(None, description="Publication date")
    publisher: Optional[str] = Field(None, description="Publisher name")
    page_count: Optional[int] = Field(None, ge=0, description="Number of pages")
    language: Optional[str] = Field(None, description="Book language")
    cover_image_url: Optional[str] = Field(None, description="URL to cover image")
    rating: Optional[float] = Field(None, ge=0.0, le=5.0, description="Average rating")
    relevance_score: Optional[float] = Field(None, ge=0.0, le=1.0, description="Search relevance score")

class SearchResponse(ShelfSeekModel):
    """Response model containing search results"""
    query: str = Field(..., description="Original search query")
    results: List[SearchResult] = Field(default_factory=list, description="List of search results")
    total_results: int = Field(..., ge=0, description="Total number of results found")
    limit: int = Field(..., description="Results limit applied")
    offset: int = Field(..., description="Results offset applied")
    page_num: int = Field(..., description="Current page number")
    total_pages: int = Field(..., description="Total number of pages")
    next_offset: Optional[int] = Field(None, description="Offset for next page, if any")
    prev_offset: Optional[int] = Field(None, description="Offset for previous page, if any")
    timestamp: datetime = Field(default_factory=datetime.utcnow, description="Timestamp of search")
    execution_time_ms: Optional[float] = Field(None, description="Query execution time in milliseconds")