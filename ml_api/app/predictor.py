import numpy as np

def get_user_cluster(features, kmeans, scaler):
    features = np.array(features).reshape(1, -1)
    scaled = scaler.transform(features)
    return int(kmeans.predict(scaled)[0])

def predict_churn_xgb(model, features):
    features = np.array(features).reshape(1, -1)
    prob = float(model.predict_proba(features)[0][1])

    if prob < 0.3:
        risk = "Low"
    elif prob < 0.6:
        risk = "Medium"
    else:
        risk = "High"

    return round(prob, 4), risk
