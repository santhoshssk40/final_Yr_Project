def get_user_category(features, kmeans, scaler):
    """
    Predicts user segment using KMeans clustering
    """
    scaled_features = scaler.transform([features])
    cluster = int(kmeans.predict(scaled_features)[0])

    cluster_map = {
        0: "Seasonal",
        1: "Weekly",
        2: "Daily"
    }

    return cluster_map.get(cluster, "Unknown")


def predict_churn(model, features):
    """
    Predicts churn probability and assigns risk level
    (Business-tuned thresholds)
    """
    # Churn probability (class 1)
    prob = float(model.predict_proba([features])[0][1])

    # 🔧 ADJUSTED RISK THRESHOLDS (important)
    if prob >= 0.50:
        risk = "High"
    elif prob >= 0.25:
        risk = "Medium"
    else:
        risk = "Low"

    return round(prob, 3), risk
