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

from .classifier import NaiveBayes, CorpusPreparation
from .utils import FileManager, Join, PickleFileManager
from .vector import Vectorizer, CorpusVectorPreparation
from .ngrams import Unigram, Bigram, Trigram, InterpolatedNigram
from .lexical import Tokenization, Correction, LexiconPreparation, Normalization

from typing import List, Callable, Dict

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


def correct(word: str, choices: List, threshold: float = 0.55) -> str:
    """
    ### Lexicon Auto Correction

    Auto corrections of word 
    """

    file_manager: FileManager = _create_instance(FileManager)

    correction : Correction = _create_instance(Correction)

    return correction.correction(word, threshold, choices)


def classify(sentence: str, retrain: bool = False) -> Dict:
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


def vectorizer(query: str, documents: List[str] | str = None) -> Dict[str, float]:
    """
    ### Vector
     
    Converts your document into meaningful language for computers 
    """
    vectorize: Vectorizer = _create_instance(Vectorizer)

    vectorize.fit(documents)

    query_vector = vectorize.transform(query)

    document_vectors = [vectorize.transform(doc) for doc in documents]

    similarities = []
    for document, vector in zip(documents, document_vectors):
        similarity = vectorize.cosine_similarity(query_vector, vector)
        similarities.append((document, similarity))

    similarities.sort(key=lambda x: x[1], reverse=True)

    return dict(similarities)


def normalize(sentence: str) -> str:
    """ cleans sentence into just plain text """
    file_manager: FileManager = _create_instance(FileManager)

    normalizer: Normalization = _create_instance(Normalization, file_manager)

    return normalizer.normalize(sentence)


def prepare_data(force_rebuild: bool = False) -> None:
    """
    ### Corpus and Lexicon Creation
     
    Prepares data this may take a while. use this if your scraped data have gone modifed 
    """
    file_manager: FileManager = _create_instance(FileManager)
    pickle_manager: PickleFileManager = _create_instance(PickleFileManager)

    join: Join = _create_instance(Join, file_manager)
    join.join_data(force_rebuild)

    lexicon_preparation: LexiconPreparation = _create_instance(LexiconPreparation, file_manager)

    naive_bayes_preparation: CorpusPreparation = _create_instance(CorpusPreparation, file_manager, pickle_manager)

    lexicon_preparation.prepare_word_frequency(force_rebuild)

    lexicon_preparation.prepare_sentences(force_rebuild)

    naive_bayes_preparation.build_training_data(force_rebuild)

    vector_preparation: CorpusVectorPreparation = _create_instance(CorpusVectorPreparation, file_manager)

    vector_preparation.prepare_document_vector(force_rebuild)


    if force_rebuild:
        print("\n[ BookBrains ] Prepared Data Rebuilded")

    print("\n[ BookBrains ] Data prepared nice and smoothly. ")


__all__ = [
    "Vector",
    "NaiveBayes",
    "Tokenization", "Correction",
    "Unigram", "Bigram", "Trigram", "InterpolatedNigram"
]

if __name__ == "__main__":
    tokenizer("owo owo !!")