import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score
import joblib

df = pd.read_csv("outputs/customer_churn_labeled.csv")
sentiment = pd.read_csv("outputs/customer_sentiment.csv")

df = df.merge(sentiment, on="customer_id", how="left")
df["avg_sentiment"].fillna(3, inplace=True)

features = [
    "orders_per_month",
    "avg_order_value",
    "avg_delivery_time",
    "avg_rating",
    "discount_rate",
    "recency_days",
    "avg_sentiment"
]

for segment in df["user_category"].unique():
    seg_df = df[df["user_category"] == segment]

    X = seg_df[features]
    y = seg_df["churn"]

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.25, stratify=y, random_state=42
    )

    model = RandomForestClassifier(
        n_estimators=300,
        max_depth=12,
        min_samples_split=10,
        class_weight="balanced",
        random_state=42
    )

    model.fit(X_train, y_train)

    auc = roc_auc_score(y_test, model.predict_proba(X_test)[:, 1])
    print(f"{segment} AUC:", auc)

    joblib.dump(model, f"models/rf_{segment.lower()}.pkl")

df.to_excel("outputs/customer_level_trained_dataset.xlsx", index=False)
