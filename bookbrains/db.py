from typing import Dict, List, Any
from pymongo import MongoClient, errors

from .lexical import Tokenization
from .config import get_required_env

DB_URI = get_required_env("ATLAS_URI")
DB_NAME = get_required_env("DB_NAME")

class MongoManager:
    def __init__(self, tokenization: Tokenization):
        self.tokenizer = tokenization

        self.client = MongoClient(DB_URI)

        self.db = self.client[DB_NAME]

        self.collection = self.db["documents"]
    

    def insert_batch(self, data: List[Dict[str, Any]], force_rebuild: bool) -> None:
        """ insert data on mongodb """
        if not data:
            print("[ BookBrains ] No Data to insert on mongo. ")
            return
        
        if force_rebuild:
            self.collection.drop()

        try:
            result = self.collection.insert_many(data, ordered = False)
            print(F"[ BookBrains ]  Successfyly inserted {len(result.inserted_ids)} data on {self.collection.name} in MongoDB. 🎉")
        except errors.BulkWriteError as error:
            print(f"[ BookBrains ] Failed to insert data on {self.collection.name} 🔴")


    def create_text_index(self) -> None:
        """ Apply text indexes for searchable fields. """
        self.collection.create_index("tokens")

        self.collection.create_index([
            ("book.title", "text"),
            ("book.description", "text"),
            ("author.name", "text"),
            ("author.about", "text"),
            ("genres.name", "text")
        ])
        print(f"[ BookBrains ] Text index created on '{self.collection.name}' collection.")


    def get_result(self, query: str) -> List[Dict[str, Any]]:
        """ Query some results with filter """
        tokens = self.tokenizer.tokenize(query)

        mongo_filter = {"tokens": {"$in": tokens}}

        results = list(self.collection.find(mongo_filter))

        if len(results) > 1:
            print(f"\n[ BookBrains ] Found {len(results)} matching documents. ")
        else: 
            print(f"\n[ BookBrains ] Found {len(results)} matching document. ")

        return results
