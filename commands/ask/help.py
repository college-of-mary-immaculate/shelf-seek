import sys
import importlib

from typing import List
from pathlib import Path

COMMANDS_DIR = Path(__file__).parent.parent


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

print()
print("-"*50)
print("Available folders and commands:")
print("-"*50)

for folder in list_command_groups():
    cmds = list_commands(folder)
    print()
    print(f"📁 {folder}/")
    for cmd in cmds:
        print(f"   • {cmd}")
print()
print("-"*50)
print("Usage: python run.py <folder> <command> [args...]")
print("-"*50)
print()