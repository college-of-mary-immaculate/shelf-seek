from fastapi import FastAPI
from routers import greeting_router
from config import settings

app = FastAPI(
    title=settings.APP_NAME, 
    version=settings.APP_VERSION,
    debug=settings.DEBUG
)

# Include greeting router with API prefix
app.include_router(greeting_router, prefix=settings.API_PREFIX)

@app.get("/")
def root():
    return {"message": f"{settings.APP_NAME} is running"}