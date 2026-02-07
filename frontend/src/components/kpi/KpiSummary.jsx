import KpiCard from "./KpiCard";

export default function KpiSummary({ result }) {
  if (!result) return null;

  return (
    <div className="grid md:grid-cols-4 gap-6">
      <KpiCard
        title="Churn Probability"
        value={`${(result.churn_probability * 100).toFixed(1)}%`}
      />

      <KpiCard
        title="Risk Level"
        value={result.risk_level}
      />

      <KpiCard
        title="Cluster ID"
        value={result.cluster_id}
      />

      <KpiCard
        title="Retention Rate"
        value={`${(100 - result.churn_probability * 100).toFixed(1)}%`}
      />
    </div>
  );
}
