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
from .ngrams import Unigram, Bigram, Trigram, InterpolatedNigram
from .lexical import Tokenization, Correction, LexiconPreparation

from typing import List, Callable, Dict

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


def classify(sentence: str) -> Dict:
    """ Uses Naive Bayes that can identify sentences intention """

    pickle_manager: PickleFileManager = create_instance(PickleFileManager)

    bayes: NaiveBayes = create_instance(NaiveBayes, pickle_manager)


def prepare_data(force_rebuild: bool = False) -> None:
    """ Prepares data this may take a while. use this if your scraped data have gone modifed """
    file_manager: FileManager = create_instance(FileManager)
    pickle_manager: PickleFileManager = create_instance(PickleFileManager)

    join: Join = create_instance(Join, file_manager)
    join.join_data(force_rebuild)

    lexicon_preparation: LexiconPreparation = create_instance(LexiconPreparation, file_manager)

    naive_bayes_preparation: CorpusPreparation = create_instance(CorpusPreparation, file_manager, pickle_manager)

    lexicon_preparation.prepare_word_frequency(force_rebuild)

    lexicon_preparation.prepare_sentences(force_rebuild)

    naive_bayes_preparation.build_training_data(force_rebuild)

    if force_rebuild:
        print("\n[ BookBrains ] Prepared Data Rebuilded")

    print("\n[ BookBrains ] Data prepared nice and smoothly. ")




__all__ = []

if __name__ == "__main__":
    tokenize("owo owo !!")