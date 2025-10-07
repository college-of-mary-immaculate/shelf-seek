from fastapi import APIRouter
from .greeting import router as greeting_router
from .list_collection import router as collection_router

router = APIRouter()

router.include_router(greeting_router, tags=["Greeting"])
router.include_router(collection_router, prefix="/db", tags=["Database"])
