import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import joblib

features = pd.read_csv("ml/outputs/customer_features.csv")

cluster_cols = [
    # "order_frequency",
    "avg_order_value",
    "avg_delivery_time",
    "avg_rating",
    "discount_rate"
    # "recency_days"
]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(features[cluster_cols])

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
features["cluster_id"] = kmeans.fit_predict(X_scaled)

joblib.dump(kmeans, "ml/models/kmeans.pkl")
joblib.dump(scaler, "ml/models/scaler.pkl")

features.to_csv("ml/outputs/customer_segmented.csv", index=False)