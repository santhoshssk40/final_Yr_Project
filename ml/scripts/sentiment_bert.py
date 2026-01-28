import pandas as pd
from transformers import pipeline

reviews = pd.read_excel("data/customer_reviews.xlsx")

sentiment_model = pipeline(
    "sentiment-analysis",
    model="nlptown/bert-base-multilingual-uncased-sentiment"
)

def extract_sentiment(text):
    return int(sentiment_model(text)[0]["label"][0])

reviews["sentiment_score"] = reviews["review_text"].apply(extract_sentiment)

sentiment_agg = reviews.groupby("customer_id").agg(
    avg_sentiment=("sentiment_score", "mean")
).reset_index()

sentiment_agg.to_csv("outputs/customer_sentiment.csv", index=False)
