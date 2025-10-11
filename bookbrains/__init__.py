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

from .utils import FileManager
from .classifier import Classifier
from .lexical import Tokenization, Correction
from .ngrams import Unigram, Bigram, Trigram, InterpolatedNGram

from typing import List, Callable

# * INSTANCIATE ONLY ONCE
_instances = {}

def create_instance(class_object: Callable) -> object:
    """ Lazily create and cache class instances. Prevents creating multiple instances of the same class. """
    if class_object not in _instances:
        _instances[class_object] = class_object()
    return _instances[class_object]


def tokenize(sentence: str) -> List[str]:
    """ Seperates sentence into an array of word or cahracters """

    tokenization: Tokenization = create_instance(Tokenization)

    return tokenization.tokenize(sentence)


def correct(word: str, threshold: float = 0.55) -> str:
    """ auto corrections of word """

    file_manager: FileManager = create_instance(FileManager)

    dictionary: List[str] = file_manager.load_json()

    correction : Correction = create_instance(Correction)

    return correction.correction(word, threshold, choices = dictionary)



__all__ = []

if __name__ == "__main__":
    tokenize("owo owo !!")