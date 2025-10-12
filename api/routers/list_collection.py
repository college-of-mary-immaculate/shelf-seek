from fastapi import APIRouter
from db import db  # your MongoClient instance

collections = APIRouter(prefix="/db", tags=["Database"])

@collections.get("/collections")
def list_collections():
    collections = db.list_collection_names()
    return {"collections": collections}
