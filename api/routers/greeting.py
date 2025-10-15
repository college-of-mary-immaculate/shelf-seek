from fastapi import APIRouter
from config import settings

greet = APIRouter(prefix="/greet", tags=["greeting"])

@greet.get("/")
def get_greeting():
    return {"message": f"{settings.DEFAULT_GREETING}, World!"}

@greet.get("/{name}")
def greet_user(name: str):
    return {"message": f"{settings.DEFAULT_GREETING}, {name}!"}