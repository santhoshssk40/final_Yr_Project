import KPICard from "./KPICard";
import { Users, AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

const KPISummary = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <KPICard
        icon={Users}
        label="Total Customers"
        value={data.totalCustomers}
        change={data.totalCustomersChange}
      />
      <KPICard
        icon={AlertTriangle}
        label="At-Risk Customers"
        value={data.atRiskCustomers}
        change={data.atRiskCustomersChange}
      />
      <KPICard
        icon={TrendingDown}
        label="Churn Rate"
        value={data.churnRate}
        suffix="%"
        change={data.churnRateChange}
      />
      <KPICard
        icon={DollarSign}
        label="Monthly Revenue"
        value={`$${data.mrr}K`}
        change={data.mrrChange}
      />
    </div>
  );
};

export default KPISummary;
