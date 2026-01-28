import pandas as pd

df = pd.read_excel("ml/outputs/customer_level_trained_dataset.xlsx")

churn_rate = df["churn"].mean()
print("Overall Churn Rate:", churn_rate)

print("\nChurn Rate by Segment:")
print(df.groupby("user_category")["churn"].mean())
