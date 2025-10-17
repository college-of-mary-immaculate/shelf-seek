# 🔍 SeekEngine

 SeekEngine is the core search backend system that powers the search functionality. It provides:

- 🔎 Full-text search capabilities
- 📊 Relevance ranking
- 🗂️ Faceted search
- 🔤 Autocomplete suggestions
- ✨ Result highlighting

## 📋 Table of Contents
- 🚀 [Running the API](#running-the-api)
- 💻 [Starting the Frontend](#starting-the-frontend)
- 🕸️ [Snippy Package Overview](#snippy-package-overview)
- 🧠 [Bookbrains Package Overview](#bookbrains-package-overview)
- 🐳 [Docker Deployment](#docker-deployment)
- 📖 [API Documentation](#api-documentation)

<a id="running-the-api"></a>
## 🚀 Running the API

1. Navigate to the API directory:
   ```bash
   cd api
   ```

2. ⚙️ Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables in a `.env` file (copy from `.env.example` if available)

4. 🖥️ Run the development server:
   ```bash
   uvicorn main:app --reload
   ```

The API will be available at `http://localhost:8000`

<a id="starting-the-frontend"></a>
## 💻 Starting the Frontend

The frontend is built with Vite. To start the development server:

1. Navigate to the frontend directory:
   ```bash
   cd app
   ```

2. 📦 Install dependencies:
   ```bash
   npm install
   ```

3. ▶️ Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:7777`

<a id="snippy-package-overview"></a>
## 🕸️ Snippy Package Overview (Scraping)

The Snippy package is responsible for web scraping functionality. It provides:

- Web page content extraction
- Data parsing and cleaning
- Asynchronous request handling
- Rate limiting and retry mechanisms
- Support for various content types

<a id="bookbrains-package-overview"></a>
## 🧠 Bookbrains Package Overview (NLP Logic)

The Bookbrains package contains the natural language processing logic, including:

- Text preprocessing and tokenization
- Entity recognition
- Sentiment analysis
- Search relevance scoring
- Query understanding and expansion

<a id="docker-deployment"></a>
## 🐳 Docker Deployment

### 🛠️ Prerequisites
- 🐋 [Docker](https://docs.docker.com/get-docker/) installed (version 20.10.0+)
- 🧩 [Docker Compose](https://docs.docker.com/compose/install/) (recommended, v2.0.0+)
- 🌐 Ports 8000 (API) and 7777 (Frontend) available

### Quick Start with Docker Compose

1. Clone the repository (if you haven't already):
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Start all services:
   ```bash
   docker-compose up --build
   ```
   - Add `-d` flag to run in detached mode
   - Add `--force-recreate` to recreate containers

3. Access the services:
   - API: http://localhost:8000
   - Frontend: http://localhost:7777
   - API Docs: http://localhost:8000/docs

### Manual Docker Build

1. Build the Docker image:
   ```bash
   docker build -t seekengine-api -f Dockerfile.api .
   ```

2. Run the container with environment variables:
   ```bash
   docker run -d \
        --name seekengine-api \
        -p 8000:8000 \
        -e ENVIRONMENT=production \
        -e ATLAS_URI=your_mongodb_atlas_connection_string \
        -e DB_NAME=seekengine \
        seekengine-api
   ```

### Environment Variables
Create a `.env` file in the project root with the following variables:

```env
# Application Settings
ENVIRONMENT=development  # or 'production'
DEBUG=True  # Set to False in production

# Web Server
HOST=0.0.0.0
PORT=8000

# CORS (if applicable)
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:7777

# MongoDB Configuration
ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/
DB_NAME=seekengine

# Optional: Redis (for caching)
# REDIS_URL=redis://redis:6379/0

# Security (generate a strong secret key for production)
SECRET_KEY=your-secret-key-here
```

> **Note**: For production, ensure all sensitive values are properly secured using environment variables or a secrets management solution.

### Production Considerations
- Use a reverse proxy (Nginx, Traefik)
- Set up proper SSL/TLS certificates
- Configure persistent storage for databases
- Implement proper logging and monitoring
- Use Docker secrets for sensitive information

<a id="api-documentation"></a>
## 📖 API Documentation

## 🔑 Request Headers
All API requests should include:
```http
📌 Content-Type: application/json
📌 Accept: application/json
🔒 Authorization: Bearer <your_jwt_token>  # For authenticated endpoints
```

## 🌐 API Endpoints

| Method | Description | URL | Status |
|--------|-------------|-----|--------|
| `GET` | Health check | `/` | ✅ |
| `GET` | Search books | `/search` | ✅ |
| `GET` | Get default greeting | `/api/greet/` | ✅ |
| `GET` | Get personalized greeting | `/api/greet/{name}` | ✅ |
| `GET` | Get search suggestions | `/api/suggestions/suggest` | ✅ |
| `GET` | List collections | `/api/collections` | ✅ |

## 💻 Example Requests

### 1. Search for Books
**Request Header:**
```http
GET /search?q={query}&limit={limit}
```

**Example Response:**
```json
{
  "results": [
    {
      "id": "book_123",
      "title": "Sample Book Title",
      "author": "Author Name",
      "snippet": "...matching text snippet...",
      "relevance_score": 0.95
    }
  ],
  "total_results": 1,
  "page": 1,
  "per_page": 10
}
```

### 2. Get Search Suggestions
**Request Header:**
```http
GET /api/suggestions/suggest?query={query}&limit={limit}
```

**Example Response:**
```json
{
  "suggestions": ["suggestion 1", "suggestion 2", "suggestion 3"],
  "query": "search term",
  "suggestion_count": 3
}
```

### 3. Get Greeting
**Request Header:**
```http
GET /api/greet/
```

**Example Response:**
```json
{
  "message": "Hello, World!"
}
```

### 4. Get Personalized Greeting
**Request Header:**
```http
GET /api/greet/{name}
```

**Example Response:**
```json
{
  "message": "Hello, John!"
}
```

### 5. List Collections
**Request Header:**
```http
GET /api/collections
```

**Example Response:**
```json
{
  "collections": [
    {
      "id": "col_123",
      "name": "Bestsellers",
      "item_count": 50
    }
  ]
}
```

## ⚠️ Error Responses
All error responses follow this format:
```json
{
  "error": {
    "code": "error_code",
    "message": "Human-readable error message",
    "details": {}
  }
}
```

Common error codes:
- `400`: Bad Request - Invalid input parameters
- `401`: Unauthorized - Missing or invalid authentication
- `404`: Not Found - Resource not found
- `429`: Too Many Requests - Rate limit exceeded
- `500`: Internal Server Error - Server-side error



## 🧾 License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.
