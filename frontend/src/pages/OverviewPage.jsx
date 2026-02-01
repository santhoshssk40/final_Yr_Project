import KPISummary from "../components/KPISummary";
import ChurnRiskGauge from "../components/ChurnRiskGauge";
import SectionCard from "../components/SectionCard";
import { Activity, AlertTriangle, TrendingUp } from "lucide-react";
import { getStats } from "../services/api";
import { useEffect, useState } from "react";

const OverviewPage = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  return (
    <div className="space-y-8">
      <KPISummary
        data={{
          totalCustomers: stats?.total_customers ?? 12450,
          totalCustomersChange: 8,
          atRiskCustomers: stats?.churn_count ?? 320,
          atRiskCustomersChange: -12,
          churnRate: stats?.churn_rate ?? 3.4,
          churnRateChange: -0.6,
          mrr: stats ? Math.round(stats.mrr / 1000) : 860,
          mrrChange: 4.1,
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChurnRiskGauge riskPercentage={42} />
        </div>

        <div className="space-y-6">
          <SectionCard title="Recent Activity">
              <ActivityRow
                icon={AlertTriangle}
                color="danger"
                title="High churn risk detected"
                desc="8 customers flagged in last 24h"
              />
              <ActivityRow
                icon={TrendingUp}
                color="success"
                title="Sentiment improving"
                desc="+5% positive feedback this week"
              />
              <ActivityRow
                icon={Activity}
                color="primary"
                title="New customers added"
                desc="156 new signups this month"
              />
          </SectionCard>

          <SectionCard title="Quick Stats">
            <StatRow label="Retention Rate" value="84.9%" />
            <StatRow label="Avg Customer Value" value="$42.15" />
            <StatRow label="Active Campaigns" value="12" />
            <StatRow label="Support Tickets" value="34" />
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

const ActivityRow = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-3 pb-3 last:border-0">
    <Icon className="w-5 h-5 text-primary-600" />
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  </div>
);

const StatRow = ({ label, value }) => (
  <div className="flex justify-between py-2 last:border-0">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

export default OverviewPage;
