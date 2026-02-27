from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import products
from .database import Base, engine

app = FastAPI(title='StepUp API')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(products.router, prefix='/api/v1')

@app.on_event('startup')
def startup_seed():
    # products router will ensure seed on import
    pass
