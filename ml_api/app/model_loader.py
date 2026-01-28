import os
import joblib

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_DIR = os.path.join(BASE_DIR, "models")

def load_models():
    kmeans = joblib.load(os.path.join(MODEL_DIR, "kmeans.pkl"))
    scaler = joblib.load(os.path.join(MODEL_DIR, "scaler.pkl"))

    rf_models = {
        "Daily": joblib.load(os.path.join(MODEL_DIR, "rf_daily.pkl")),
        "Weekly": joblib.load(os.path.join(MODEL_DIR, "rf_weekly.pkl")),
        "Seasonal": joblib.load(os.path.join(MODEL_DIR, "rf_seasonal.pkl")),
    }

    return kmeans, scaler, rf_models
