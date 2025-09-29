from pydantic import BaseModel

class ShelfSeekModel(BaseModel):
    pass

class SearchRequest(ShelfSeekModel):
    pass

class SearchResult(ShelfSeekModel):
    pass

class SearchResponse(ShelfSeekModel):
    pass