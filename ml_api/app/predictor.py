def get_user_cluster(features, kmeans, scaler):
    scaled = scaler.transform([features])
    return int(kmeans.predict(scaled)[0])

def predict_churn_xgb(model, features):
    prob = model.predict_proba([features])[0][1]

    if prob < 0.3:
        risk = "Low"
    elif prob < 0.6:
        risk = "Medium"
    else:
        risk = "High"

    return prob, risk
