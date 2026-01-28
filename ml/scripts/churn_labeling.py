import pandas as pd
import numpy as np

df = pd.read_csv("outputs/customer_segmented.csv")

df["churn"] = np.where(df["recency_days"] > 60, 1, 0)

df.to_csv("outputs/customer_churn_labeled.csv", index=False)
