from fastapi import APIRouter
from db import db  # your MongoClient instance

router = APIRouter()

@router.get("/collections")
def list_collections():
    collections = db.list_collection_names()
    return {"collections": collections}
