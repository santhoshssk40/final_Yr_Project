from pydantic import BaseModel

class ChurnRequest(BaseModel):
    avg_order_value: float
    avg_delivery_time: float
    avg_rating: float
    discount_rate: float
    value_per_minute: float
    rating_discount_interaction: float
    avg_sentiment: float
    neg_review_ratio: float
