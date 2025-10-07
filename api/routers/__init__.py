from .greeting import router

__all__ = ["router"]
from fastapi import APIRouter
from .greeting import router
from .list_collection import router as collection_router

router = APIRouter()

router.include_router(router, tags=["Greeting"])
router.include_router(collection_router, prefix="/db", tags=["Database"])
