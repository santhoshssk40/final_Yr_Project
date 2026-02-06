import ChurnTrend from "../components/charts/ChurnTrend";
import RiskDistribution from "../components/charts/RiskDistribution";
import SegmentScatter from "../components/charts/SegmentScatter";

export default function Analytics() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">
        Advanced Churn Analytics
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChurnTrend />
        <RiskDistribution riskLevel="Medium" />
      </div>

      <SegmentScatter />
    </div>
  );
}
