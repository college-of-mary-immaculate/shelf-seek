#!/usr/bin/env bash
set -euo pipefail

PYTHON_BIN="${PYTHON_BIN:-python3}"
VENV_DIR="api/.venv"  # venv inside api

echo "==> Creating virtual environment: $VENV_DIR"
$PYTHON_BIN -m venv "$VENV_DIR"

# Activate venv
# shellcheck disable=SC1090
source "$VENV_DIR/bin/activate"

echo "==> Upgrading pip..."
pip install --upgrade pip

echo "==> Installing dependencies..."
pip install -r api/requirements.txt

echo "==> Starting FastAPI server from project root..."
uvicorn api.main:app --reload --host 0.0.0.0 --port 8000
