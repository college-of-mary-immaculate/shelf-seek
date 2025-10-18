from pydantic import BaseModel, Field, field_validator
from typing import Optional, List, Dict, Any
from bson import ObjectId

class PydanticObjectId:
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v, info=None):
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
    url: Optional[str] = None
    image_cover_url: Optional[str] = None
    name: Optional[str] = None
    about: Optional[str] = None
    hometown: Optional[str] = None
    birthdate: Optional[str] = None
    birth_place: Optional[str] = None

    class Config:
        extra = "ignore"

class Publisher(BaseModel):
    name: Optional[str] = None
    url: Optional[str] = None

    class Config:
        extra = "ignore"

class Genre(BaseModel):
    name: str
    url: Optional[str] = None

    class Config:
        extra = "ignore"

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
        populate_by_name = True  # Pydantic v2
        extra = "ignore"

    # Validator to ensure nested objects are properly parsed
    @field_validator('author', mode='before')
    @classmethod
    def parse_author(cls, v):
        print(f"[VALIDATOR] author input: {v}, type: {type(v)}")
        if v is None or v == "":
            return None
        if isinstance(v, dict):
            # Handle empty dict
            if not v or not v.get('name'):
                print(f"[VALIDATOR] author dict empty or no name")
                return None
            result = Author(**v)
            print(f"[VALIDATOR] author parsed: {result}")
            return result
        if isinstance(v, Author):
            return v
        return None

    @field_validator('publisher', mode='before')
    @classmethod
    def parse_publisher(cls, v):
        print(f"[VALIDATOR] publisher input: {v}, type: {type(v)}")
        if v is None or v == "":
            return None
        if isinstance(v, dict):
            # Handle empty dict
            if not v or not v.get('name'):
                print(f"[VALIDATOR] publisher dict empty or no name")
                return None
            result = Publisher(**v)
            print(f"[VALIDATOR] publisher parsed: {result}")
            return result
        if isinstance(v, Publisher):
            return v
        return None

    @field_validator('genres', mode='before')
    @classmethod
    def parse_genres(cls, v):
        print(f"[VALIDATOR] genres input: {v}, type: {type(v)}")
        if v is None:
            return None
        if isinstance(v, list):
            if not v:  # Empty list
                return None
            parsed_genres = []
            for g in v:
                if isinstance(g, dict):
                    # Only add if it has a name
                    if g.get('name'):
                        parsed_genres.append(Genre(**g))
                elif isinstance(g, Genre):
                    parsed_genres.append(g)
            print(f"[VALIDATOR] genres parsed: {parsed_genres}")
            return parsed_genres if parsed_genres else None
        return None

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
                pass
        return data

    @classmethod
    def from_mongo(cls, data: Dict[str, Any]) -> "Book":
        """
        Create a Book instance from a Mongo document dict.
        Handle nested 'book' object if present.
        """
        doc = dict(data)
        
        # Handle nested 'book' structure
        if 'book' in doc:
            book_data = doc['book']
            book_data['_id'] = doc.get('_id')
            # Preserve vector and tokens at root level if not in book
            if 'vector' in doc and 'vector' not in book_data:
                book_data['vector'] = doc['vector']
            if 'tokens' in doc and 'tokens' not in book_data:
                book_data['tokens'] = doc['tokens']
            doc = book_data
        
        # Convert ObjectId to string
        if "_id" in doc:
            oid = doc["_id"]
            doc["_id"] = str(oid)
        
        # The field_validators will handle nested object parsing
        return cls.model_validate(doc)