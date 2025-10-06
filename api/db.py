from pymongo import MongoClient
from config import get_required_env

DB_URI = get_required_env("ATLAS_URI")
DB_NAME = get_required_env("DB_NAME")

client = MongoClient(DB_URI)
db = client[DB_NAME]
