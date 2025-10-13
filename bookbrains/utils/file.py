import os
import csv
import json

from pathlib import Path
from typing import List, Any, Dict


class FileManager:
    """ Manages Snippy's files """
    def __init__(self, size_limit: int = 5_000) -> None:
        self.main_directory = Path.cwd()
        self.__size_limit = size_limit
    

    def is_file_exist(self, path: str) -> bool:
        """ Returns a boolean if a certain file is existed by the given path. """
        return os.path.exists(path)


    def create_file(self, file_name: str, default_data: Any = {}) -> bool:
        """ Creates a specified file with its file name and designated directrory """
        os.makedirs(os.path.dirname(file_name), exist_ok=True)

        if self.is_file_exist(file_name):
            return False

        with open(file_name, "w", encoding="utf-8") as f:
            if isinstance(default_data, (dict, list)):
                json.dump(default_data, f, ensure_ascii=False, indent=4)
            else:
                f.write(str(default_data))

        return True
    

    def delete_file(self, file_name: str) -> bool:
        """ Deletes a file if it exists. """
        if self.is_file_exist(file_name):
            os.remove(file_name)
            return True
        return False


    # * -------------------------------------------- JSON FILES --------------------------------------------
    def load_json(self, file_name: str, default_data: Any = {}) -> Any:
        """ Loads data on the specified json file name. """
        self.create_file(file_name, default_data)
        
        with open(fr"{file_name}", "r", encoding="utf-8") as file:
            return json.load(file)

    def save_json(self, file_name: str, data: Any) -> None:
        """ Saves data on the specified json file name. """
        self.create_file(file_name)

        with open(fr"{file_name}", 'w', encoding='utf-8') as file:
            json.dump(data, file, indent=4, ensure_ascii=False)
    # * -------------------------------------------- ---------  --------------------------------------------


    # * -------------------------------------------- CSV FILES --------------------------------------------
    def save_csv(self, file_name: str, data: List[Dict[str, Any]], additional_fields: List[str] = []) -> None:
        """ Saves data on the specified csv file name.  """
        if not data:
            print("Empty Data")
            return

        # * CHECKS IF A FILE IS EXISTED ALREADY.
        self.create_file(file_name)

        os.makedirs(os.path.dirname(file_name), exist_ok=True)

        existing_rows: List = self.load_csv(file_name) or []

        existing_set = {tuple(sorted(row.items())) for row in existing_rows}

        new_rows = [row for row in data if tuple(sorted(row.items())) not in existing_set]

        if not new_rows:
            print("[ BookBrains ] File Data already saved. ")
            return

        with open(file_name, 'a', newline='', encoding="utf-8") as file:
            writer = csv.DictWriter(file, fieldnames=data[0].keys())

            if not existing_rows:
                writer.writeheader()

            writer.writerows(new_rows)
    

    def load_csv(self, file_name: str) -> List:
        """ Loads data on the specified csv file name. """
        if not self.is_file_exist(file_name):
            print("File not found")
            return

        with open(file_name, 'r', newline='', encoding='utf-8') as file:
            reader = csv.DictReader(file)
            return list(reader)
    # * -------------------------------------------- ---------  --------------------------------------------


    # * -------------------------------------------- TXT FILES --------------------------------------------
    def load_txt(self, file_path: str, auto_create: bool = False, default_data: Any = None) -> List:
        """ Loads data on the specified txt file name. """
        if auto_create:
            self.create_file(file_path)

        with open(file_path, "r", encoding="utf-8") as f:
            lines = [line.strip() for line in f if line.strip()]

        return lines
    

    def save_txt(self, file_path: str, data: List[str], auto_create: bool = False, default_data: Any = None) -> List:
        """ Saves data on the specified txt file name. """
        with open(file_path, "w", encoding="utf-8") as f:
            f.writelines(f"{line}\n" for line in data)

        return data

    # * -------------------------------------------- ---------  --------------------------------------------


if __name__ == "__main__":
    file = FileManager(size_limit = 1_000)
