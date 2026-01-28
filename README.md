# Customer Churn Prediction System

An end-to-end full-stack machine learning application that predicts customer churn for a food delivery platform using behavioral segmentation, sentiment analysis, and ensemble learning.

---

## 📌 Project Overview

This project predicts whether a customer is likely to churn by analyzing:
- Order behavior
- Service experience
- Customer sentiment from reviews

The system segments users into **Daily, Weekly, and Seasonal** categories and applies **segment-specific churn models** to improve accuracy.

---

## 🧠 Machine Learning Approach

### Models Used
- **K-Means Clustering** – Customer segmentation
- **Random Forest Classifier** – Churn prediction
- **BERT (Transformer)** – Sentiment analysis from customer reviews

### Key Features
- Orders per month
- Average order value
- Delivery performance
- Ratings
- Recency
- Sentiment score

---

## 🏗️ Tech Stack

### Machine Learning
- Python
- scikit-learn
- Hugging Face Transformers (BERT)

### Backend
- FastAPI (ML inference service)
- Node.js (application backend)

### Frontend
- React
- HTML / CSS
- Chart.js / Recharts

### Database
- PostgreSQL

---

## 📂 Project Structure

