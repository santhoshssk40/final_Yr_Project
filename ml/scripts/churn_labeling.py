import pandas as pd
import numpy as np

df = pd.read_csv("ml/outputs/customer_segmented.csv")

def label_churn(row):
    if row["cluster_id"] == 0:
        return int(row["recency_days"] > 90)   # Seasonal
    elif row["cluster_id"] == 1:
        return int(row["recency_days"] > 45)   # Weekly
    else:
        return int(row["recency_days"] > 21)   # Daily

df["churn"] = df.apply(label_churn, axis=1)

df.to_csv("ml/outputs/customer_churn_labeled.csv", index=False)
