import os
import pickle

from typing import Any


class PickleFileManager:
    """ Pickle file manager """

    def pickle_save_processed(self, pickle_path: str, data: Any, default_data: Any = {}) -> bool:
        """ save into pickle data on a given path """
        try:
            self._pickle_create_file(pickle_path, default_data)

            with open(pickle_path, 'wb') as file:
                pickle.dump(data, file)
                return True

        except Exception as error:
            print(
                f"[ PickleFileManager ] Failed to save pickle file at {pickle_path}: {error}")

    def pickle_load_processed(self, pickle_path: str, auto_create: bool = False, default_data: Any = {}) -> Any:
        """ loads into pickle data on a given path """
        try:
            if not os.path.exists(pickle_path) and auto_create:
                self._pickle_create_file(pickle_path, default_data)

            with open(pickle_path, "rb") as file:
                data = pickle.load(file)

            return data

        except Exception as error:
            print(
                f"[ PickleFileManager ] Failed to load pickle file at {pickle_path}: {error}")
            return None

    def _pickle_create_file(self, pickle_path: str, default_data={}) -> None:
        """ Creates a pickle file if not exist """
        os.makedirs(os.path.dirname(pickle_path), exist_ok=True)

        if not os.path.exists(pickle_path):
            with open(pickle_path, 'wb') as file:
                pickle.dump(default_data, file)


if __name__ == "__main__":
    pass
