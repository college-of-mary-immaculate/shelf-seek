from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from bson import ObjectId

class PydanticObjectId:
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v, info=None):
        # 'info' is optional and ignored here
        if isinstance(v, ObjectId):
            return str(v)
        if isinstance(v, str):
            try:
                return str(ObjectId(v))
            except Exception:
                raise ValueError("Invalid ObjectId string")
        raise ValueError("Invalid type for ObjectId")

# Nested models for author, publisher, genre
class Author(BaseModel):
    url: Optional[str]
    image_cover_url: Optional[str]
    name: Optional[str]
    about: Optional[str]
    hometown: Optional[str]
    birthdate: Optional[str]
    birth_place: Optional[str]

class Publisher(BaseModel):
    name: Optional[str]
    url: Optional[str]

class Genre(BaseModel):
    name: str
    url: Optional[str]

class Book(BaseModel):
    id: Optional[PydanticObjectId] = Field(None, alias="_id")
    url: Optional[str] = None
    title: Optional[str] = None
    description: Optional[str] = None
    cover_image_url: Optional[str] = None
    published_date: Optional[str] = None
    isbn_10: Optional[str] = None
    isbn_13: Optional[str] = None
    page_count: Optional[int] = None
    language: Optional[str] = None
    rating_count: Optional[int] = None
    rating_average: Optional[float] = None
    author: Optional[Author] = None
    publisher: Optional[Publisher] = None
    genres: Optional[List[Genre]] = None
    vector: Optional[Dict[str, float]] = None

    class Config:
        validate_by_name = True
        extra = "ignore"

    def to_mongo(self) -> Dict[str, Any]:
        """
        Convert the Pydantic model into a dict for Mongo insertion/update.
        """
        data = self.model_dump(by_alias=True, exclude_none=True)
        # Convert the _id string to an ObjectId instance, if valid
        if "_id" in data:
            try:
                data["_id"] = ObjectId(data["_id"])
            except Exception:
                # If it’s not a valid ObjectId, leave it or remove it
                pass
        return data

    @classmethod
    def from_mongo(cls, data: Dict[str, Any]) -> "Book":
        """
        Create a Book instance from a Mongo document dict.
        Convert ObjectId to str and map nested fields.
        """
        doc = dict(data)
        if "_id" in doc:
            oid = doc["_id"]
            doc["_id"] = str(oid)
        # Pydantic will parse nested fields automatically if structure matches
        return cls.model_validate(doc)  # for Pydantic v2; for v1 use cls.parse_obj

