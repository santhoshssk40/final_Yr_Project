from pydantic import BaseModel

class ChurnRequest(BaseModel):
    orders_per_month: float
    avg_order_value: float
    avg_delivery_time: float
    avg_rating: float
    discount_rate: float
    recency_days: float
    avg_sentiment: float
