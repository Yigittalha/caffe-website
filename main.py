from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI()

# Serve static files from the build directory
app.mount("/static", StaticFiles(directory="build/static"), name="static")

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "message": "CAFFE API is running"}

@app.get("/api/menu")
async def get_menu():
    return {
        "coffee": [
            {"name": "Espresso", "price": 25},
            {"name": "Americano", "price": 30},
            {"name": "Cappuccino", "price": 35},
            {"name": "Latte", "price": 40}
        ],
        "desserts": [
            {"name": "Tiramisu", "price": 45},
            {"name": "Cheesecake", "price": 40},
            {"name": "Brownie", "price": 35}
        ]
    }

# Serve React app for all other routes
@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    if full_path.startswith("api/"):
        return {"error": "API endpoint not found"}
    
    index_file = "build/index.html"
    if os.path.exists(index_file):
        return FileResponse(index_file)
    else:
        return {"error": "Frontend not built"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000))) 