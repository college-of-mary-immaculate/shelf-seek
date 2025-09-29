from fastapi import FastAPI
from routers import greeting_router
from config import settings
from ..model import SearchRequest, SearchResult, SearchResponse

app = FastAPI(
    title=settings.APP_NAME, 
    version=settings.APP_VERSION,
    debug=settings.DEBUG
)

# Include greeting router with API prefix
app.include_router(greeting_router, prefix=settings.API_PREFIX)

@app.get("/")
def root():
    return {"message": f"{settings.APP_NAME} is running"}

@app.get("/search")          #, response_model=SearchResponse)
def search():
    return {"message": "Search Here!"}