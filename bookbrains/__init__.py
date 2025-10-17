"""
## BookBrains
A Mini NLP framework powering the ShelfSeek search engine.

BookBrains provides essential natural language processing tools
including tokenization, normalization, correction, classification,
and n-grams analysis.

--------------------------------------------
Package By:
` Haimonmon `
`sudonotrey`
"""

from .db import MongoManager
from .classifier import NaiveBayes, CorpusPreparation
from .utils import FileManager, Join, PickleFileManager
from .vector import Vectorizer, CorpusVectorPreparation
from .ngrams import Unigram, Bigram, Trigram, InterpolatedNigram
from .lexical import Tokenization, Correction, LexiconPreparation, Normalization

from typing import List, Callable, Dict, Any, Tuple

# * INSTANCIATE ONLY ONCE
_instances = {}

def _create_instance(class_object: Callable, *args, **kwargs) -> object:
    """ Lazily create and cache class instances. Prevents creating multiple instances of the same class. """
    if class_object not in _instances:
        _instances[class_object] = class_object(*args, **kwargs)
    return _instances[class_object]


def tokenizer(sentence: str) -> List[str]:
    """
    ### Tokenization

    Seperates sentence into an array of word or cahracters 
    """

    tokenization: Tokenization = _create_instance(Tokenization)

    return tokenization.tokenize(sentence)


def levenshtein(word: str, choices: List, threshold: float = 0.55) -> str:
    """
    ### Lexicon Auto Correction

    Auto corrections of word 
    """

    file_manager: FileManager = _create_instance(FileManager)
    pickle_manager: PickleFileManager = _create_instance(PickleFileManager)

    correction : Correction = _create_instance(Correction, choices, pickle_manager, file_manager)

    return correction.correction(word, threshold)


def classify(sentence: str, retrain: bool = False) -> Tuple:
    """
    ### Classifier

    Uses Naive Bayes that can identify sentences intention 
    """

    file_manager: FileManager = _create_instance(FileManager)

    pickle_manager: PickleFileManager = _create_instance(PickleFileManager)

    tokenization: Tokenization = _create_instance(Tokenization)

    naive_bayes: NaiveBayes = _create_instance(NaiveBayes, pickle_manager, tokenization, file_manager)

    trained_data = naive_bayes.train(retrain)

    prediction = naive_bayes.predict(query=sentence)

    return prediction


def vectorizer(query: str = None, documents: List[str] | str = None, similarity: bool = True, document_vectors: List[Dict[str, float]] = None, existing_model: bool = False) -> List[Dict[str, float]] | Vectorizer:
    """
    ### Vector
     
    Converts your document into meaningful language for computers 
    """
    vectorize: Vectorizer = _create_instance(Vectorizer)

    if not query and not documents:
        return Vectorizer
    
    if not document_vectors:
        vectorize.fit(documents)

        document_vectors = [vectorize.transform(doc) for doc in documents]

        if not similarity:
            return document_vectors
        
    if similarity and document_vectors:
        if not existing_model:
            query_vector = vectorize.transform(query)
        else:
            pickle_manager: PickleFileManager = _create_instance(PickleFileManager)
            precomputed_vectorizer: Vectorizer = pickle_manager.pickle_load_processed(r"data\vector\vector.pkl")

            query_vector = precomputed_vectorizer.transform(query)

        similarities = []
        for document, vector in zip(documents, document_vectors):
            similarity = vectorize.cosine_similarity(query_vector, vector)
            similarities.append((document, similarity))

        similarities.sort(key=lambda x: x[1], reverse=True)

        return similarities
    
    return Vectorizer
    

def normalize(sentence: str, normalize_num: bool = True) -> str:
    """ 
    ### Normalization
    Cleans sentence into just plain text
     """
    file_manager: FileManager = _create_instance(FileManager)

    normalizer: Normalization = _create_instance(Normalization, file_manager)

    return normalizer.normalize(sentence, normalize_num)


def prepare_data(force_rebuild: bool = False, remove_primary_keys: bool = True, vectorize: bool = True, database_insert: bool = False) -> None:
    """
    ### Corpus and Lexicon Creation
     
    Prepares data this may take a while. use this if your scraped data have gone modifed 
    """

    file_manager: FileManager = _create_instance(FileManager)
    pickle_manager: PickleFileManager = _create_instance(PickleFileManager)

    join: Join = _create_instance(Join, file_manager)
    join.join_data(force_rebuild, remove_primary_keys)

    lexicon_preparation: LexiconPreparation = _create_instance(LexiconPreparation, file_manager)

    naive_bayes_preparation: CorpusPreparation = _create_instance(CorpusPreparation, file_manager, pickle_manager)

    words: List = lexicon_preparation.prepare_word_frequency(force_rebuild)

    if force_rebuild:
        _create_instance(Correction, words, pickle_manager, file_manager)

    lexicon_preparation.prepare_sentences(force_rebuild)

    naive_bayes_preparation.build_training_data(force_rebuild)

    if vectorize:
        normalizer: Normalization = _create_instance(Normalization, file_manager)
        vector_preparation: CorpusVectorPreparation = _create_instance(CorpusVectorPreparation, file_manager, normalizer)

        vector_preparation.prepare_document_vector(force_rebuild)

    if database_insert:
        tokenizer: Tokenization = _create_instance(Tokenization)

        mongo_manager: MongoManager = _create_instance(MongoManager, tokenizer)

        data = file_manager.load_json(r"data\joined_data\barnesnobles.json")

        mongo_manager.insert_batch(data["books"], force_rebuild)

        mongo_manager.create_text_index()

        print(f"Available collections: {mongo_manager.db.list_collection_names()}")

    if force_rebuild:
        print("\n[ BookBrains ] Prepared Data Rebuilded")

    print("\n[ BookBrains ] Data prepared nice and smoothly. ")


def get_database_document(query: str) -> List[Dict[str, Any]]:
    """ Query on database to find some result documents """
    tokenizer: Tokenization = _create_instance(Tokenization)

    mongo_manager: MongoManager = _create_instance(MongoManager, tokenizer)

    result: List = mongo_manager.get_result(query)

    return result


def check_database_status() -> None:
    """ Check if database is working """
    try:
        mongo_manager: MongoManager = _create_instance(MongoManager)

        client = mongo_manager.client
        database = mongo_manager.db

        client.admin.command('ping')

        print()
        print("-"*60)
        print("Welcome to MongoDB 🍃")
        print("-"*60)
        print("[ BookBrains ] MongoDB connection successful! 🥳🎉")

        print("[ BookBrains ] Connected to database:", database.name)

        print("[ BookBrains ] Collections:", database.list_collection_names())
        print("-"*60)
        print("from Bookbrains")
        print("-"*60)
        print()
    except Exception as e:
        print("[ BookBrains ] MongoDB connection failed! 😐🔴")
        print("Error:", e)


__all__ = [
    "Vector",
    "NaiveBayes",
    "Tokenization", "Correction",
    "Unigram", "Bigram", "Trigram", "InterpolatedNigram"
]

if __name__ == "__main__":
    tokenizer("owo owo !!")