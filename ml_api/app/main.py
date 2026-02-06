from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import pandas as pd
import os

from .schemas import ChurnRequest
from .model_loader import load_models
from .predictor import get_user_cluster, predict_churn_xgb

app = FastAPI()

# ---------------------------
# Setup CORS
# ---------------------------
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------------------
# Load Models
# ---------------------------
model, scaler, kmeans = load_models()

# ---------------------------
# Single Prediction Endpoint
# ---------------------------
@app.post("/predict/churn")
def predict_churn(data: ChurnRequest):

    features = [
        data.avg_order_value,
        data.avg_delivery_time,
        data.avg_rating,
        data.discount_rate,
        data.value_per_minute,
        data.rating_discount_interaction,
        data.avg_sentiment,
        data.neg_review_ratio
    ]

    cluster_id = get_user_cluster(features, kmeans, scaler)
    churn_probability, risk_level = predict_churn_xgb(model, features)

    return {
        "cluster_id": cluster_id,
        "churn_probability": round(churn_probability, 4),
        "risk_level": risk_level
    }

# ---------------------------
# Batch Prediction Endpoint
# ---------------------------
@app.post("/predict/batch")
def predict_batch(data: List[ChurnRequest]):

    results = []

    for customer in data:
        features = [
            customer.avg_order_value,
            customer.avg_delivery_time,
            customer.avg_rating,
            customer.discount_rate,
            customer.value_per_minute,
            customer.rating_discount_interaction,
            customer.avg_sentiment,
            customer.neg_review_ratio
        ]

        cluster_id = get_user_cluster(features, kmeans, scaler)
        churn_probability, risk_level = predict_churn_xgb(model, features)

        results.append({
            "customer_id": getattr(customer, "customer_id", None),
            "cluster_id": cluster_id,
            "churn_probability": round(churn_probability, 4),
            "risk_level": risk_level
        })

    return results

