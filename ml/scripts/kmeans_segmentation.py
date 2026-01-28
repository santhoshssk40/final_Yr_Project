import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import joblib

features = pd.read_csv("outputs/customer_features.csv")

cluster_cols = [
    "orders_per_month",
    "avg_order_value",
    "avg_delivery_time",
    "avg_rating",
    "discount_rate",
    "recency_days"
]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(features[cluster_cols])

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
features["cluster"] = kmeans.fit_predict(X_scaled)

cluster_order = features.groupby("cluster")["orders_per_month"].mean().sort_values()
cluster_map = {
    cluster_order.index[0]: "Seasonal",
    cluster_order.index[1]: "Weekly",
    cluster_order.index[2]: "Daily"
}

features["user_category"] = features["cluster"].map(cluster_map)

joblib.dump(kmeans, "models/kmeans.pkl")
joblib.dump(scaler, "models/scaler.pkl")

features.to_csv("outputs/customer_segmented.csv", index=False)
