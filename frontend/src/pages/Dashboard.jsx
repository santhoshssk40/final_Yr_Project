import { useState, useEffect } from "react";
import { predictChurn } from "../services/api";
import { motion } from "framer-motion";

import KpiSummary from "../components/kpi/KpiSummary";
import ChurnGauge from "../components/charts/ChurnGauge";
import ChurnDonut from "../components/charts/ChurnDonut";
import ChurnTrend from "../components/charts/ChurnTrend";
import RiskDistribution from "../components/charts/RiskDistribution";
import SegmentScatter from "../components/charts/SegmentScatter";
import GeographicChurnMap from "../components/charts/GeographicChurnMap";

export default function Dashboard() {
  const [result, setResult] = useState(null);

  // Default mock input for auto prediction
  const autoInput = {
    avg_order_value: 450,
    avg_delivery_time: 32,
    avg_rating: 4.5,
    discount_rate: 0.3,
    value_per_minute: 12,
    rating_discount_interaction: 1.2,
    avg_sentiment: 0.6,
    neg_review_ratio: 0.15,
  };

  useEffect(() => {
    async function fetchPrediction() {
      try {
        const res = await predictChurn(autoInput);
        setResult(res.data);
      } catch (error) {
        console.log("Backend error. Using fallback data.");
        setResult({
          churn_probability: 0.38,
          risk_level: "Medium",
          cluster_id: 1,
        });
      }
    }

    fetchPrediction();
  }, []);

  if (!result) return null;

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <KpiSummary result={result} />
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <ChurnGauge value={result.churn_probability} />
        <ChurnDonut value={result.churn_probability} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <RiskDistribution riskLevel={result.risk_level} />
        <SegmentScatter />
      </div>

      <ChurnTrend />
      <GeographicChurnMap />
    </div>
  );
}
