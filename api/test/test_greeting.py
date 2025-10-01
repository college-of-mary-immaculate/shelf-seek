import pytest
from fastapi.testclient import TestClient
from main import app

# Create test client
client = TestClient(app)

class TestGreeting:
    def test_root_endpoint(self):
        """Test the root endpoint"""
        response = client.get("/")
        assert response.status_code == 200
        assert "is running" in response.json()["message"]
    
    def test_default_greeting(self):
        """Test default greeting endpoint"""
        response = client.get("/api/v1/greet/")
        assert response.status_code == 200
        assert response.json() == {"message": "Hello, World!"}
    
    def test_personalized_greeting(self):
        """Test personalized greeting endpoint"""
        name = "John"
        response = client.get(f"/api/v1/greet/{name}")
        assert response.status_code == 200
        assert response.json() == {"message": f"Hello, {name}!"}
    
    def test_greeting_with_special_characters(self):
        """Test greeting with special characters in name"""
        name = "José"
        response = client.get(f"/api/v1/greet/{name}")
        assert response.status_code == 200
        assert response.json() == {"message": f"Hello, {name}!"}
    
    def test_empty_name_handling(self):
        """Test greeting with empty string (should still work due to path parameter)"""
        response = client.get("/api/v1/greet/")
        assert response.status_code == 200
        assert "World" in response.json()["message"]

# Fixtures for test data (if needed)
@pytest.fixture
def multiple_names():
    return ["Alice", "Bob", "Charlie", "Diana"]

def test_multiple_names(multiple_names):
    for name in multiple_names:
        response = client.get(f"/api/v1/greet/{name}")
        assert response.status_code == 200
        assert name in response.json()["message"]