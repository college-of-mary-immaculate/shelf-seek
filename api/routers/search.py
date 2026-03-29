from fastapi import APIRouter, Query, HTTPException
from ..models import Book
from ..schemas import SearchResult, SearchResponse
import bookbrains
import time
import math

search_router = APIRouter(tags=["search"])

MAX_PAGE_SIZE = 15

@search_router.get("/search", response_model=SearchResponse)
def search(
    query: str = Query(..., min_length=1, max_length=500),
    limit: int = Query(default=MAX_PAGE_SIZE, ge=1, le=MAX_PAGE_SIZE),
    offset: int = Query(default=0, ge=0),
) -> SearchResponse:
    start_time = time.time()

    try:
        # --- Step 1: Normalize the query ---
        normalized_query = bookbrains.normalize(query, normalize_num=False)

        # --- Step 2: Retrieve matching documents from database ---
        raw_docs = bookbrains.get_database_document(normalized_query)
        # print(raw_docs)

        # Debug: Check raw data structure
        if raw_docs:
            print(f"[DEBUG] First raw doc keys: {raw_docs[0].keys()}")
            if 'book' in raw_docs[0]:
                print(f"[DEBUG] First raw doc book keys: {raw_docs[0]['book'].keys()}")
            print(f"[DEBUG] Author at root: {raw_docs[0].get('author')}")
            print(f"[DEBUG] Publisher at root: {raw_docs[0].get('publisher')}")
            print(f"[DEBUG] Genres at root: {raw_docs[0].get('genres')}")

        # Extract the 'book' object and merge with root-level fields
        documents = []
        for doc in raw_docs:
            if 'book' in doc:
                # Start with the nested book data
                book_data = doc['book'].copy()
                # Add _id
                book_data['_id'] = doc['_id']
                # Add root-level fields (author, publisher, genres, vector, tokens)
                if 'author' in doc:
                    book_data['author'] = doc['author']
                if 'publisher' in doc:
                    book_data['publisher'] = doc['publisher']
                if 'genres' in doc:
                    book_data['genres'] = doc['genres']
                if 'vector' in doc:
                    book_data['vector'] = doc['vector']
                if 'tokens' in doc:
                    book_data['tokens'] = doc['tokens']

                print(f"[DEBUG] book_data before from_mongo: author={book_data.get('author')}, publisher={book_data.get('publisher')}, genres={len(book_data.get('genres', []))} items")
                parsed_book = Book.from_mongo(book_data)
                documents.append(parsed_book)
            else:
                documents.append(Book.from_mongo(doc))

        # Debug: Check first document
        if documents:
            first_doc = documents[0]
            print(f"[DEBUG] First doc - Title: {first_doc.title}")
            print(f"[DEBUG] First doc - Author: {first_doc.author}")
            print(f"[DEBUG] First doc - Author type: {type(first_doc.author)}")
            if first_doc.author:
                print(f"[DEBUG] First doc - Author name: {first_doc.author.name}")
            print(f"[DEBUG] First doc - Publisher: {first_doc.publisher}")
            if first_doc.publisher:
                print(f"[DEBUG] First doc - Publisher name: {first_doc.publisher.name}")
            print(f"[DEBUG] First doc - Genres: {first_doc.genres}")
            if first_doc.genres:
                print(f"[DEBUG] First doc - Genre names: {[g.name for g in first_doc.genres]}")

        # --- Step 3: Extract stored document vectors ---
        # Vector might be in the book object or at root level
        document_vectors = []
        for i, doc in enumerate(documents):
            if doc.vector:
                document_vectors.append(doc.vector)
            else:
                # If vector is not in the Book model, get it from raw_docs
                raw_doc = raw_docs[i]
                vector = raw_doc.get('vector') or raw_doc.get('book', {}).get('vector')
                document_vectors.append(vector)

        # --- Step 4: Compute similarity scores ---
        similarity = bookbrains.vectorizer(
            normalized_query,
            documents,
            similarity=True,
            document_vectors=document_vectors,
            existing_model=True
        )

        # --- Step 5: Convert similarity results to SearchResult list ---
        ranked_docs = []
        for doc, score in similarity:
            # Extract author name (now properly parsed by Pydantic validators)
            author_name = doc.author.name if doc.author else None

            # Extract publisher name
            publisher_name = doc.publisher.name if doc.publisher else None

            # Extract genres
            genre_list = [g.name for g in doc.genres] if doc.genres else None

            ranked_docs.append(
                SearchResult(
                    id=str(doc.id),
                    title=doc.title,
                    author=author_name,
                    isbn=doc.isbn_10 or doc.isbn_13,
                    description=doc.description,
                    genre=genre_list,
                    published_date=doc.published_date,
                    publisher=publisher_name,
                    page_count=doc.page_count,
                    language=doc.language,
                    cover_image_url=doc.cover_image_url,
                    rating=doc.rating_average,
                    relevance_score=min(score, 1.0),
                )
            )

        total = len(ranked_docs)

        # --- Step 6: Pagination ---
        limit = min(limit, MAX_PAGE_SIZE)
        paginated = ranked_docs[offset: offset + limit]

        page_num = (offset // MAX_PAGE_SIZE) + 1
        total_pages = math.ceil(total / MAX_PAGE_SIZE) if total > 0 else 1

        next_offset = offset + limit if offset + limit < total else None
        prev_offset = max(0, offset - MAX_PAGE_SIZE) if offset > 0 else None

        exec_ms = (time.time() - start_time) * 1000

        # --- Step 7: Return structured response ---
        return SearchResponse(
            query=query,
            results=paginated,
            total_results=total,
            limit=limit,
            offset=offset,
            page_num=page_num,
            total_pages=total_pages,
            next_offset=next_offset,
            prev_offset=prev_offset,
            execution_time_ms=round(exec_ms, 2)
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Search failed: {e}")


# {
#     "book": {
#         "url": "https://www.barnesandnoble.com/w/zombie-and-brain-are-friends-stephanie-vw-lucianovic/1146652059",
#         "title": "Zombie and Brain Are Friends (B&N Exclusive Edition)",
#         "description": "This Barnes & Noble Exclusive Edition features special effects on the jacket with an exclusive removable poster.Zombie in Love meets Gustavo, the Shy Ghost in this story about a young zombie who must decide: Are brains friends…or food?Zeb comes from a family of farmers—zombie farmers. Each week they pickle, bake, fry, and sell their grain-fed, free-range brains to be enjoyed by the masses. Zeb understands that brains are food, not pets…until one day he comes across the tiniest, pinkest, squishiest brain he ever did see! Can he convince his parents that his brainy bestie is better off as a member of the family than family dinner?",
#         "cover_image_url": "https://prodimage.images-bn.com/pimages/9781547619733_p0_v1_s600x595.jpg",
#         "published_date": "09/02/2025",
#         "isbn_10": null,
#         "isbn_13": "9781547619733",
#         "page_count": 40,
#         "language": "en",
#         "rating_count": 0,
#         "rating_average": 0
#     },
#     "author": {
#         "url": "https://www.barnesandnoble.com/s/%22Stephanie_V.W._Lucianovic%22?Ntk=P_key_Contributor_List&Ns=P_Sales_Rank&Ntx=mode+matchall",
#         "image_cover_url": null,
#         "name": "Stephanie V.W. Lucianovic",
#         "about": "\nStephanie V.W. Lucianovic is the author of The End of Something Wonderful ; Hello, Star; The League of Picky Eaters; What is Hope; and Hummingbird Season. She writes books in the San Francisco Bay Area surrounded by a few kids, a few cats, and one husband.@grubreport https://www.stephanielucianovic.com/Laan Cham is a wandering dreamer with a BIG imagination who enjoys all things cute, random, and a little bit strange. (Because the best things in life are kind of out there.) She aims to spread joy through her stories and illustrations by encapsulating all the things she loves. Laan's picture books include Somewhere in Between and Mao Mao's Perfectly Imperfect Day. Connect with her on Instagram @laan.cham and www.laancham.com.",
#         "hometown": null,
#         "birthdate": null,
#         "birth_place": null
#     },
#     "publisher": {
#         "name": "Bloomsbury USA",
#         "url": "https://www.barnesandnoble.com/s/%22Bloomsbury+USA%22?Ntk=Publisher&Ns=P_Sales_Rank&Ntx=mode+matchall"
#     },
#     "genres": [
#         {
#             "name": "Kids",
#             "url": "https://www.barnesandnoble.com/b/kids-books/kids/_/N-8qcZtu1"
#         },
#         {
#             "name": "Fiction & Literature - Kids",
#             "url": "https://www.barnesandnoble.com/b/kids-books/kids/fiction-literature-kids/_/N-8qcZtxy"
#         },
#         {
#             "name": "Emotions & Behaviors - Kids Fiction",
#             "url": "https://www.barnesandnoble.com/b/kids-books/fiction-literature-kids/emotions-behaviors-kids-fiction/_/N-8qcZtzc"
#         },
#         {
#             "name": "Horror, Monsters & Ghosts - Kids Fiction",
#             "url": "https://www.barnesandnoble.com/b/kids-books/fiction-literature-kids/horror-monsters-ghosts-kids-fiction/_/N-8qcZtyl"
#         },
#         {
#             "name": "Humor - Kids Fiction",
#             "url": "https://www.barnesandnoble.com/b/kids-books/fiction-literature-kids/humor-kids-fiction/_/N-8qcZ2m47"
#         },
#         {
#             "name": "Friendship->Humorous->Children's fiction",
#             "url": "https://www.barnesandnoble.com/b/kids-books/humor-kids-fiction/friendship-humorous-childrens-fiction/_/N-8qcZ2m4f"
#         }
#     ]
