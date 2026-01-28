from fastapi import FastAPI
from ml_api.app.schemas import ChurnRequest
from ml_api.app.model_loader import load_models
from ml_api.app.predictor import get_user_category, predict_churn
from ml_api.app.utils import get_top_features
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all origins (safe for dev)
    allow_credentials=True,
    allow_methods=["*"],   # allow POST, OPTIONS, etc.
    allow_headers=["*"],
)


@app.on_event("startup")
def startup():
    global kmeans, scaler, rf_models
    kmeans, scaler, rf_models = load_models()

FEATURE_NAMES = [
    "orders_per_month",
    "avg_order_value",
    "avg_delivery_time",
    "avg_rating",
    "discount_rate",
    "recency_days",
    "avg_sentiment"
]

@app.post("/predict/churn")
def churn_prediction(data: ChurnRequest):
    behavior_features = [
        data.orders_per_month,
        data.avg_order_value,
        data.avg_delivery_time,
        data.avg_rating,
        data.discount_rate,
        data.recency_days
    ]

    user_category = get_user_category(behavior_features, kmeans, scaler)

    churn_features = behavior_features + [data.avg_sentiment]

    model = rf_models[user_category]
    prob, risk = predict_churn(model, churn_features)

    reasons = get_top_features(model, FEATURE_NAMES)

    return {
        "user_category": user_category,
        "churn_probability": prob,
        "risk_level": risk,
        "top_churn_factors": reasons
    }
