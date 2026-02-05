import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv("ml/outputs/customer_level_trained_dataset.csv")

churn_rates = df.groupby("user_category")["churn"].mean()

plt.figure()
plt.bar(churn_rates.index, churn_rates.values)
plt.xlabel("User Category")
plt.ylabel("Churn Rate")
plt.title("Churn Rate by User Segment")
plt.show()


import joblib
import numpy as np

models = {
    "Daily": joblib.load("ml/models/rf_daily.pkl"),
    "Weekly": joblib.load("ml/models/rf_weekly.pkl"),
    "Seasonal": joblib.load("ml/models/rf_seasonal.pkl")
}

features = [
    "orders_per_month",
    "avg_order_value",
    "avg_delivery_time",
    "avg_rating",
    "discount_rate",
    "recency_days",
    "avg_sentiment"
]

plt.figure()

for segment, model in models.items():
    seg_df = df[df["user_category"] == segment]
    probs = model.predict_proba(seg_df[features])[:, 1]
    plt.hist(probs, bins=30, alpha=0.5, label=segment)

plt.xlabel("Churn Probability")
plt.ylabel("Customer Count")
plt.legend()
plt.title("Churn Risk Distribution")
plt.show()

