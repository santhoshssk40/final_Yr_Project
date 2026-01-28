import pandas as pd
import numpy as np

orders = pd.read_excel("data/food_delivery_churn_raw_12000.xlsx")
orders["order_date"] = pd.to_datetime(orders["order_date"])

snapshot_date = orders["order_date"].max() + pd.Timedelta(days=1)

customer_df = orders.groupby("customer_id").agg(
    total_orders=("order_id", "count"),
    avg_order_value=("order_value", "mean"),
    avg_delivery_time=("delivery_time_min", "mean"),
    avg_rating=("rating", "mean"),
    discount_rate=("discount_applied", "mean"),
    last_order_date=("order_date", "max")
).reset_index()

customer_df["recency_days"] = (snapshot_date - customer_df["last_order_date"]).dt.days
customer_df["orders_per_month"] = customer_df["total_orders"] / 12

customer_df.drop(columns=["last_order_date"], inplace=True)

customer_df.to_csv("outputs/customer_features.csv", index=False)
