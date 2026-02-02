import pandas as pd
import joblib
from xgboost import XGBClassifier
from xgboost.callback import EarlyStopping
from sklearn.metrics import roc_auc_score
from sklearn.model_selection import train_test_split

df = pd.read_csv("ml/outputs/customer_churn_labeled.csv")
sentiment = pd.read_csv("ml/outputs/customer_sentiment.csv")

df = df.merge(sentiment, on="customer_id", how="left")
df[["avg_sentiment", "neg_review_ratio"]] = df[
    ["avg_sentiment", "neg_review_ratio"]
].fillna(3)

features = [
    "avg_order_value",
    "avg_delivery_time",
    "avg_rating",
    "discount_rate",
    "value_per_minute",
    "rating_discount_interaction",
    "avg_sentiment",
    "neg_review_ratio",
    "cluster_id"
    # "recency_days"            leackage of features
    # "order_frequency"
]

X = df[features]
y = df["churn"]

df = df.sort_values("recency_days")

train = df.iloc[:int(0.75 * len(df))]
test = df.iloc[int(0.75 * len(df)):]

X_train = train[features]
y_train = train["churn"]

X_test = test[features]
y_test = test["churn"]


model = XGBClassifier(
    n_estimators=2000,
    learning_rate=0.03,
    max_depth=5,
    min_child_weight=5,
    subsample=0.85,
    colsample_bytree=0.85,
    scale_pos_weight=len(y_train) / y_train.sum(),
    eval_metric="auc",
    callbacks=[EarlyStopping(rounds=75, save_best=True)],
    random_state=42
)

model.fit(
    X_train,
    y_train,
    eval_set=[(X_test, y_test)],
    verbose=True
)

auc = roc_auc_score(
    y_test,
    model.predict_proba(X_test)[:, 1]
)

print("Global Model AUC (Early Stopped):", auc)


joblib.dump(model, "ml/models/xgb_churn_model.pkl")

df.to_excel("ml/outputs/customer_level_trained_dataset.xlsx", index=False)
