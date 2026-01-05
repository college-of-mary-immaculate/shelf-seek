import os
from dotenv import load_dotenv
from pathlib import Path

# Check if .env file exists
env_file = Path(__file__).parent / ".env"
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
        raise ValueError(f"Required environment variable '{key}' not found in .env file")
    return value

def get_env_bool(key: str, default: bool = False) -> bool:
    value = os.getenv(key, str(default)).lower()
    return value in ("true", "1", "yes", "on")

class Settings:
    APP_NAME: str = get_required_env("APP_NAME")
    APP_VERSION: str = get_required_env("APP_VERSION")
    DEBUG: bool = get_env_bool("DEBUG")
    
    HOST: str = get_required_env("HOST")
    PORT: int = int(get_required_env("PORT"))
    
    API_PREFIX: str = os.getenv("API_PREFIX", "")
    DEFAULT_GREETING: str = get_required_env("DEFAULT_GREETING")

settings = Settings()