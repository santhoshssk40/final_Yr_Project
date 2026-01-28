import { useState } from "react";
import axios from "axios";
import "./App.css";

/* DASHBOARD COMPONENTS */
import KpiCards from "./components/KpiCards";
import ChurnGauge from "./components/ChurnGauge";
import ChurnDonut from "./components/ChurnDonut";
import SegmentChart from "./components/SegmentChart";
import SentimentChart from "./components/SentimentChart";
import ChurnTrend from "./components/ChurnTrend";
import Recommendations from "./components/Recommendations";

function App() {
  const [form, setForm] = useState({
    orders_per_month: "",
    avg_order_value: "",
    avg_delivery_time: "",
    avg_rating: "",
    discount_rate: "",
    recency_days: "",
    avg_sentiment: 0
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const predictChurn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/predict/churn",
        form
      );
      setResult(res.data);
    } catch (err) {
      alert("Backend not reachable. Make sure FastAPI is running.");
      console.error(err);
    }

    setLoading(false);
  };

  /* KPI DATA (derived safely) */
  const kpiData = result
    ? {
        totalCustomers: 12000,        // static / from DB later
        highRisk: result.risk_level === "High" ? 1 : 0,
        avgChurn: result.churn_probability
      }
    : null;

  return (
    <div className="App dashboard">
      <h1 className="title">Customer Churn Analytics Dashboard</h1>

      {/* ================= INPUT SECTION ================= */}
      <div className="card">
        <h3>Customer Behavior Input</h3>

        <form onSubmit={predictChurn} className="form-grid">
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              placeholder={key.replaceAll("_", " ")}
              value={form[key]}
              onChange={handleChange}
              required
            />
          ))}

          <button type="submit" disabled={loading}>
            {loading ? "Predicting..." : "Predict"}
          </button>
        </form>
      </div>

      {/* ================= DASHBOARD ================= */}
      {result && (
        <>
          {/* KPI SUMMARY */}
          <KpiCards data={kpiData} />

          {/* GAUGE + DONUT */}
          <div className="chart-container">
            <ChurnGauge probability={result.churn_probability} />
            <ChurnDonut probability={result.churn_probability} />
          </div>

          {/* SEGMENT + SENTIMENT */}
          <div className="chart-container">
            <SegmentChart category={result.user_category} />
            <SentimentChart sentiment={form.avg_sentiment} />
          </div>

          {/* TREND */}
          <div className="chart-container wide">
            <ChurnTrend />
          </div>

          {/* RECOMMENDATIONS */}
          <Recommendations
            risk={result.risk_level}
            factors={result.top_churn_factors}
          />
        </>
      )}
    </div>
  );
}

export default App;
