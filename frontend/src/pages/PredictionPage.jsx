import { useState } from "react";
import SectionCard from "../components/SectionCard";
import ChurnRiskGauge from "../components/ChurnRiskGauge";
import { predictChurn } from "../services/api";

const PredictionPage = () => {
  const [form, setForm] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await predictChurn(form);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Churn Prediction Simulator</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SectionCard title="Customer Parameters">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {[
              "avg_order_value",
              "avg_delivery_time",
              "avg_rating",
              "discount_rate",
              "value_per_minute",
              "rating_discount_interaction",
              "avg_sentiment",
              "neg_review_ratio",
            ].map((f) => (
              <input
                key={f}
                name={f}
                placeholder={f.replaceAll("_", " ")}
                onChange={handleChange}
                className="p-2 border rounded"
                required
              />
            ))}

            <button
              className="col-span-2 bg-primary-600 text-white py-2 rounded"
              disabled={loading}
            >
              {loading ? "Calculating..." : "Predict Churn Risk"}
            </button>
          </form>
        </SectionCard>

        {result && (
          <SectionCard title="Prediction Result">
            <ChurnRiskGauge riskPercentage={result.churn_probability * 100} />
            <p className="text-center mt-4 text-lg font-semibold">
              Risk Level: {result.risk_level}
            </p>
          </SectionCard>
        )}
      </div>
    </div>
  );
};

export default PredictionPage;
