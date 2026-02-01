import joblib
import os

BASE_DIR = os.path.dirname(__file__)
MODEL_DIR = os.path.abspath(
    os.path.join(BASE_DIR, "..", "..", "ml", "models")
)

def load_models():
    kmeans = joblib.load(os.path.join(MODEL_DIR, "kmeans.pkl"))
    scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))
    xgb_model = joblib.load(os.path.join(MODEL_DIR, "xgb_churn_model.pkl"))
    return kmeans, scaler, xgb_model
