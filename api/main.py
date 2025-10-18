from fastapi import FastAPI
from .routers import greet, auto_suggest, search_router
from .config import settings
from .models import Book

app = FastAPI(
    title=settings.APP_NAME, 
    version=settings.APP_VERSION,
    debug=settings.DEBUG
)

# Include routers with API prefix
app.include_router(greet, prefix=settings.API_PREFIX)
app.include_router(auto_suggest, prefix=settings.API_PREFIX)
app.include_router(search_router, prefix=settings.API_PREFIX)

@app.get("/")
def root():
    return {"message": f"{settings.APP_NAME} is running"}

