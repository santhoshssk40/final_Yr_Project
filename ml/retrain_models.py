import pandas as pd
import joblib
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from xgboost import XGBClassifier
from xgboost.callback import EarlyStopping
from sklearn.metrics import roc_auc_score

# -------------------------
# LOAD DATA
# -------------------------
df = pd.read_excel("ml/data/food_delivery_churn_raw_12000.xlsx")
df["order_date"] = pd.to_datetime(df["order_date"])

snapshot_date = df["order_date"].max() + pd.Timedelta(days=1)

# -------------------------
# FEATURE ENGINEERING
# -------------------------
customer_df = df.groupby("customer_id").agg(
    total_orders=("order_id", "count"),
    avg_order_value=("order_value", "mean"),
    avg_delivery_time=("delivery_time_min", "mean"),
    avg_rating=("rating", "mean"),
    discount_rate=("discount_applied", "mean"),
    last_order_date=("order_date", "max")
).reset_index()

customer_df["recency_days"] = (
    snapshot_date - customer_df["last_order_date"]
).dt.days

# Advanced features
customer_df["order_frequency"] = (
    customer_df["total_orders"] / (customer_df["recency_days"] + 1)
)

customer_df["value_per_minute"] = (
    customer_df["avg_order_value"] / (customer_df["avg_delivery_time"] + 1)
)

customer_df["rating_discount_interaction"] = (
    customer_df["avg_rating"] * customer_df["discount_rate"]
)

customer_df.drop(columns=["last_order_date"], inplace=True)

# -------------------------
# KMEANS SEGMENTATION
# -------------------------
cluster_features = [
    "avg_order_value",
    "avg_delivery_time",
    "avg_rating",
    "discount_rate"
]

scaler = StandardScaler()
X_scaled = scaler.fit_transform(customer_df[cluster_features])

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
customer_df["cluster_id"] = kmeans.fit_predict(X_scaled)

joblib.dump(kmeans, "ml/models/kmeans.pkl")
joblib.dump(scaler, "ml/models/scaler.pkl")

# -------------------------
# CHURN LABELING (SEGMENT AWARE)
# -------------------------
def label_churn(row):
    if row["cluster_id"] == 0:      # Seasonal
        return int(row["recency_days"] > 90)
    elif row["cluster_id"] == 1:    # Weekly
        return int(row["recency_days"] > 45)
    else:                           # Daily
        return int(row["recency_days"] > 21)

customer_df["churn"] = customer_df.apply(label_churn, axis=1)

# -------------------------
# XGBOOST TRAINING
# -------------------------
xgb_features = [
    "avg_order_value",
    "avg_delivery_time",
    "avg_rating",
    "discount_rate",
    "value_per_minute",
    "rating_discount_interaction",
    "cluster_id"
]

X = customer_df[xgb_features]
y = customer_df["churn"]

# Time-aware split
customer_df = customer_df.sort_values("recency_days")
split = int(0.75 * len(customer_df))

X_train = X.iloc[:split]
y_train = y.iloc[:split]

X_test = X.iloc[split:]
y_test = y.iloc[split:]

model = XGBClassifier(
    n_estimators=2000,
    learning_rate=0.03,
    max_depth=5,
    min_child_weight=5,
    subsample=0.85,
    colsample_bytree=0.85,
    scale_pos_weight=len(y_train) / y_train.sum(),
    eval_metric="auc",
    random_state=42,
    callbacks=[EarlyStopping(rounds=75, save_best=True)]
)

model.fit(
    X_train,
    y_train,
    eval_set=[(X_test, y_test)],
    verbose=True
)

auc = roc_auc_score(
    y_test,
    model.predict_proba(X_test)[:, 1]
)

print("XGBoost AUC:", auc)

joblib.dump(model, "ml/models/xgb_churn_model.pkl")

customer_df.to_csv(
    "ml/outputs/customer_level_trained_dataset.csv",
    index=False
)

print("XGBoost model retrained and saved successfully.")