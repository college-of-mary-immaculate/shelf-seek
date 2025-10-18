from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from .routers import greet, auto_suggest, search_router
from .config import settings
from .models import Book

app = FastAPI(
    title=settings.APP_NAME, 
    version=settings.APP_VERSION,
    debug=settings.DEBUG
)

origins = [
    "http://localhost:7777",
    "http://127.0.0.1:7777"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # allow your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers with API prefix
app.include_router(greet, prefix=settings.API_PREFIX)
app.include_router(auto_suggest, prefix=settings.API_PREFIX)
app.include_router(search_router, prefix=settings.API_PREFIX)

@app.get("/")
def root():
    return {"message": f"{settings.APP_NAME} is running"}

