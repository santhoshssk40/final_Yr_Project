import pandas as pd
import numpy as np
import joblib

# ---------------------------
# LOAD BASE CUSTOMER DATA
# ---------------------------
base = pd.read_csv("ml/outputs/customer_level_trained_dataset.csv")

# ❗ Ensure base does NOT already contain sentiment columns
base = base.drop(
    columns=[c for c in base.columns if "sentiment" in c or "neg_review" in c],
    errors="ignore"
)

# ---------------------------
# LOAD SENTIMENT DATA (ONLY SOURCE)
# ---------------------------
sentiment = pd.read_csv("ml/outputs/customer_sentiment.csv")

# ---------------------------
# MERGE CLEANLY
# ---------------------------
df = base.merge(sentiment, on="customer_id", how="left")

# ---------------------------
# FILL MISSING SENTIMENT
# ---------------------------
df["avg_sentiment"] = df["avg_sentiment"].fillna(3)
df["neg_review_ratio"] = df["neg_review_ratio"].fillna(0)
df["channel"] = np.random.choice(
    ["Email", "Chat", "Social"],
    size=len(df),
    p=[0.4, 0.35, 0.25]
)


# ---------------------------
# ADD GEOGRAPHY (SYNTHETIC)
# ---------------------------
np.random.seed(42)

df["lat"] = np.random.uniform(8, 37, len(df))
df["lng"] = np.random.uniform(68, 97, len(df))
df["region"] = np.random.choice(
    ["India", "USA", "Europe", "Asia", "Middle East"],
    len(df)
)

# ---------------------------
# SAVE FINAL ANALYTICS DATASET
# ---------------------------
df.to_csv("ml/outputs/analytics_master.csv", index=False)

print("✅ analytics_master.csv created successfully")
print("Final columns:")
print(df.columns.tolist())
