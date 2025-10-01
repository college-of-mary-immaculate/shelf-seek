# this is the database model for books
from pydantic import BaseModel

class Book(BaseModel):
    
    class Config:
        pass
    
    def to_mongo(self) -> dict:
        pass
    
    @classmethod
    def from_mongo(cls, data: dict) -> "Book":
        pass