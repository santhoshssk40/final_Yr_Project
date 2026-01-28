import joblib
import pandas as pd
import random
df = pd.read_excel("ml/outputs/customer_level_trained_dataset.xlsx")
n=random.randint(0, len(df)-1)
customer = df.iloc[n]

model = joblib.load("ml/models/rf_" + customer["user_category"].lower() + ".pkl")
features = [[
    customer["orders_per_month"],
    customer["avg_order_value"],
    customer["avg_delivery_time"],
    customer["avg_rating"],
    customer["discount_rate"],
    customer["recency_days"],
    customer["avg_sentiment"]
]]

prob = model.predict_proba(features)[0][1]

print("Customer ID:", customer["customer_id"])
print("Churn Probability:", prob)
