from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import os
from .schemas import ChurnRequest
from .model_loader import load_models
from .predictor import get_user_cluster, predict_churn_xgb

app = FastAPI()

# Setup CORS
origins = [
    "http://localhost:5173", # Vite default
    "http://127.0.0.1:5173",
    "*" # Allow all for development convenience
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global stats variable
data_stats = {}

@app.on_event("startup")
def startup():
    global kmeans, scaler, xgb_model, data_stats
    kmeans, scaler, xgb_model = load_models()
    
    # Load dataset to calculate stats
    # Assuming the path relative to where uvicorn is run (usually root of final_Yr_Project)
    # We try absolute path or relative path strategies
    dataset_path = "ml/outputs/customer_level_trained_dataset.xlsx"
    if not os.path.exists(dataset_path):
        # try going up one level if run from app folder (unlikely but good fallback)
        dataset_path = "../ml/outputs/customer_level_trained_dataset.xlsx"
    
    if os.path.exists(dataset_path):
        df = pd.read_excel(dataset_path)
        
        # Calculate Aggregated Stats
        churn_rate = (df["churn"].mean() * 100)
        retention_rate = 100 - churn_rate
        avg_customer_value = df["avg_order_value"].mean()
        # active_customers assumed as total count for this context or those with 0 churn
        active_customers = len(df[df["churn"] == 0]) 
        
        data_stats = {
            "retention_rate": round(retention_rate, 1),
            "avg_customer_value": round(avg_customer_value, 2),
            "active_campaigns": 12, # Mock/Static for now
            "support_tickets": 34, # Mock/Static for now
            "churn_count": int(df["churn"].sum()),
            "total_customers": len(df)
        }
        print(f"Loaded stats: {data_stats}")
    else:
        print(f"WARNING: Dataset not found at {dataset_path}")
        data_stats = {
            "retention_rate": 0,
            "avg_customer_value": 0,
            "active_campaigns": 0,
            "support_tickets": 0,
            "churn_count": 0,
            "total_customers": 0
        }

@app.get("/stats")
def get_stats():
    return data_stats

@app.post("/predict/churn")
def churn_prediction(data: ChurnRequest):

    # KMeans features
    cluster_features = [
        data.avg_order_value,
        data.avg_delivery_time,
        data.avg_rating,
        data.discount_rate
    ]

    cluster_id = get_user_cluster(cluster_features, kmeans, scaler)

    # XGBoost features (MUST MATCH TRAINING)
    xgb_features = [
        data.avg_order_value,
        data.avg_delivery_time,
        data.avg_rating,
        data.discount_rate,
        data.value_per_minute,
        data.rating_discount_interaction,
        data.avg_sentiment,
        data.neg_review_ratio,
        cluster_id
    ]

    prob, risk = predict_churn_xgb(xgb_model, xgb_features)

    return {
        "cluster_id": cluster_id,
        "churn_probability": prob,
        "risk_level": risk
    }
