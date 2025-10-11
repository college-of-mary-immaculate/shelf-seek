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

from .classifier import Classifier
from .utils import FileManager, Join
from .lexical import Tokenization, Correction, LexiconPreparation

from typing import List, Callable

# * INSTANCIATE ONLY ONCE
_instances = {}


def create_instance(class_object: Callable, *args, **kwargs) -> object:
    """ Lazily create and cache class instances. Prevents creating multiple instances of the same class. """
    if class_object not in _instances:
        _instances[class_object] = class_object(*args, **kwargs)
    return _instances[class_object]


def tokenize(sentence: str) -> List[str]:
    """ Seperates sentence into an array of word or cahracters """

    tokenization: Tokenization = create_instance(Tokenization)

    return tokenization.tokenize(sentence)


def correct(word: str, choices: List, threshold: float = 0.55) -> str:
    """ auto corrections of word """

    file_manager: FileManager = create_instance(FileManager)

    correction : Correction = create_instance(Correction)

    return correction.correction(word, threshold, choices)


def prepare_data() -> None:
    """ Prepares data this may take a while. use this if your data have gone modifed """
    file_manager: FileManager = create_instance(FileManager)

    join: Join = create_instance(Join, file_manager)

    lexicon_preparation: LexiconPreparation = create_instance(LexiconPreparation, file_manager)

    join.join_data()

    lexicon_preparation.prepare_word_frequency()




__all__ = []

if __name__ == "__main__":
    tokenize("owo owo !!")