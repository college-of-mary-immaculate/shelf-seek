from fastapi import APIRouter
from config import settings

router = APIRouter(prefix="/greet", tags=["greeting"])

@router.get("/")
def get_greeting():
    return {"message": f"{settings.DEFAULT_GREETING}, World!"}

@router.get("/{name}")
def greet_user(name: str):
    return {"message": f"{settings.DEFAULT_GREETING}, {name}!"}