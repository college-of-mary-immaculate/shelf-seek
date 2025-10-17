# Use slim Python base image
FROM python:3.12-slim

# Set working directory inside the container
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the project source
COPY api/ ./api
COPY bookbrains/ ./bookbrains
COPY .env /app/.env

# Make sure Python can find bookbrains from anywhere
ENV PYTHONPATH=/app

# Start FastAPI app
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000"]
