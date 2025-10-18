import os
from dotenv import load_dotenv
from pathlib import Path

# Check if .env file exists
env_file = Path(".env")
if not env_file.exists():
    raise FileNotFoundError(
        "Missing .env"
    )

# Load environment variables from .env file
if not load_dotenv():
    raise RuntimeError("Failed to load .env file")


def get_required_env(key: str) -> str:
    value = os.getenv(key)
    if value is None:
        raise ValueError(
            f"Required environment variable '{key}' not found in .env file")
    return value


def get_env_bool(key: str, default: bool = False) -> bool:
    value = os.getenv(key, str(default)).lower()
    return value in ("true", "1", "yes", "on")