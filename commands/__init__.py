"""
### Seek Command Line
Contains seek command scripts commonly use for debugging new package features
"""
import sys
import importlib

from typing import List
from pathlib import Path

COMMANDS_DIR = Path(__file__).parent

def list_command_groups() -> None:
    """ List all subfolders in commands/. """
    return [folder.name for folder in COMMANDS_DIR.iterdir() if folder.is_dir() and folder.name != "__pycache__"]


def list_commands(folder_name: str) -> List[str]:
    """ List of all commands """
    folder_path = COMMANDS_DIR / folder_name

    if not folder_path.exists():
        return []

    return [
        script.stem for script in folder_path.glob("*.py")
        if script.name != "__init__.py"
    ]


def run_command(folder, command, args=None) -> None:
    """ Runs command scripts """
    try:
        module_name = f"commands.{folder}.{command}"

        spec = importlib.import_module(module_name)
        module = importlib.import_module(module_name)

        if args:
            sys.argv = [command] + args

    except ModuleNotFoundError:
        print(f"[ SeekEngine Debug ] Command '{command}' not found in '{folder}'.")

        help()

        sys.exit(1)


def help() -> None:
        print("-"*70)
        print("[ SeekEngine Debug ] If you want to see the list of commands")
        print("[ SeekEngine Debug ] type: python run.py ask help")
        print("-"*70)
        print("Changes apply because of common changes of the previous run.py file\nbecause of package testing")
        print("-"*70)
        print()


def apply() -> None:
    """ Gives you list of commands """
    if len(sys.argv) < 3:
        help()

        sys.exit(0)

    folder, command = sys.argv[1], sys.argv[2]
    args = sys.argv[3:]
    run_command(folder, command, args)


if __name__ == "__main__":
    apply()
