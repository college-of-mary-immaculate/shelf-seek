from fastapi import FastAPI
from routers import greet, collections, auto_suggest
from config import settings
from models import Book
from schemas import ShelfSeekModel, SearchRequest, SearchResult, SearchResponse

app = FastAPI(
    title=settings.APP_NAME, 
    version=settings.APP_VERSION,
    debug=settings.DEBUG
)

# Include routers with API prefix
app.include_router(greet, prefix=settings.API_PREFIX)
app.include_router(collections, prefix=settings.API_PREFIX)
app.include_router(auto_suggest, prefix=settings.API_PREFIX)

@app.get("/")
def root():
    return {"message": f"{settings.APP_NAME} is running"}

@app.get("/search")          #, response_model=SearchResponse)
def search():
    return {"message": "Search Here!"}
