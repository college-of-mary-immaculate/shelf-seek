from fastapi import FastAPI
from routers import router, collection_router
from config import settings
from models import Book
from schemas import ShelfSeekModel, SearchRequest, SearchResult, SearchResponse

app = FastAPI(
    title=settings.APP_NAME, 
    version=settings.APP_VERSION,
    debug=settings.DEBUG
)

# Include greeting router with API prefix
app.include_router(router, prefix=settings.API_PREFIX)
app.include_router(collection_router, prefix=settings.API_PREFIX)

@app.get("/")
def root():
    return {"message": f"{settings.APP_NAME} is running"}

@app.get("/search")          #, response_model=SearchResponse)
def search():
    return {"message": "Search Here!"}