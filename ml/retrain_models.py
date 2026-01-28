import joblib
import pandas as pd
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

# -------------------------
# LOAD DATA
# -------------------------
df = pd.read_excel(
    r"ml/data/food_delivery_churn_raw_12000.xlsx"
)

df["order_date"] = pd.to_datetime(df["order_date"])

# -------------------------
# FEATURE ENGINEERING
# -------------------------

# Orders per month
orders_per_month = (
    df.groupby("customer_id")
      .resample("ME", on="order_date")
      .order_id.count()
      .groupby("customer_id")
      .mean()
)

# Average order value
avg_order_value = df.groupby("customer_id")["order_value"].mean()

# Average delivery time (minutes)
avg_delivery_time = df.groupby("customer_id")["delivery_time_min"].mean()

# Average rating
avg_rating = df.groupby("customer_id")["rating"].mean()

# Discount rate (0 or 1 → average = % usage)
discount_rate = df.groupby("customer_id")["discount_applied"].mean()

# Recency (days since last order)
last_order = df.groupby("customer_id")["order_date"].max()
recency_days = (df["order_date"].max() - last_order).dt.days

# Sentiment (not available → default 0)
avg_sentiment = avg_rating * 0  # safe zero series

# -------------------------
# FINAL FEATURE TABLE
# -------------------------
features_df = pd.DataFrame({
    "orders_per_month": orders_per_month,
    "avg_order_value": avg_order_value,
    "avg_delivery_time": avg_delivery_time,
    "avg_rating": avg_rating,
    "discount_rate": discount_rate,
    "recency_days": recency_days,
    "avg_sentiment": avg_sentiment
}).fillna(0)

# -------------------------
# CHURN LABEL (RULE-BASED)
# -------------------------
# Churn = no order in last 60 days
features_df["churn"] = (features_df["recency_days"] > 60).astype(int)

# -------------------------
# KMEANS SEGMENTATION
# -------------------------
BEHAVIOR_FEATURES = [
    "orders_per_month",
    "avg_order_value",
    "avg_delivery_time",
    "avg_rating",
    "discount_rate",
    "recency_days"
]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(features_df[BEHAVIOR_FEATURES])

kmeans = KMeans(n_clusters=3, random_state=42)
features_df["cluster"] = kmeans.fit_predict(X_scaled)

features_df["user_category"] = features_df["cluster"].map({
    0: "Seasonal",
    1: "Weekly",
    2: "Daily"
})

# -------------------------
# SAVE CLUSTER MODELS
# -------------------------
joblib.dump(kmeans, "ml_api/models/kmeans.pkl")
joblib.dump(scaler, "ml_api/models/scaler.pkl")

# -------------------------
# RANDOM FOREST MODELS
# -------------------------
for segment in ["Daily", "Weekly", "Seasonal"]:
    seg = features_df[features_df["user_category"] == segment]

    X = seg[BEHAVIOR_FEATURES + ["avg_sentiment"]]
    y = seg["churn"]

    rf = RandomForestClassifier(
        n_estimators=200,
        random_state=42,
        class_weight="balanced"
    )

    rf.fit(X, y)

    joblib.dump(
        rf,
        f"ml_api/models/rf_{segment.lower()}.pkl"
    )

print("Models retrained and saved successfully.")
