import { useState } from "react";
import { predictChurn } from "../services/api";
import KpiSummary from "../components/kpi/KpiSummary";


import ChurnGauge from "../components/charts/ChurnGauge";
import ChurnDonut from "../components/charts/ChurnDonut";
import ChurnTrend from "../components/charts/ChurnTrend";
import RiskDistribution from "../components/charts/RiskDistribution";
import SegmentScatter from "../components/charts/SegmentScatter";
import GeographicChurnMap from "../components/charts/GeographicChurnMap";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const sampleInput = {
    avg_order_value: 450,
    avg_delivery_time: 32,
    avg_rating: 4.5,
    discount_rate: 0.3,
    value_per_minute: 15,
    rating_discount_interaction: 1.35,
    avg_sentiment: 0.6,
    neg_review_ratio: 0.1
  };

  const handlePredict = async () => {
    setLoading(true);
    try {
      const res = await predictChurn(sampleInput);
      setResult(res.data);
    } catch (err) {
      console.log(err.response?.data);
      alert("Prediction failed. Check console.");
    }
    setLoading(false);
  };

  return (
    <div className="p-8 space-y-6 text-white">
        {result && <KpiSummary />}

      <button
        onClick={handlePredict}
        className="px-6 py-2 bg-blue-600 rounded-lg"
      >
        {loading ? "Loading..." : "Run Prediction"}
      </button>

      {result && (
        <>
          <div className="grid grid-cols-2 gap-6">
            <ChurnGauge value={result.churn_probability} />
            <ChurnDonut value={result.churn_probability} />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <RiskDistribution riskLevel={result.risk_level} />
            <SegmentScatter cluster={result.cluster_id} />
          </div>

          <ChurnTrend />
          <GeographicChurnMap />
        </>
      )}
    </div>
  );
}
