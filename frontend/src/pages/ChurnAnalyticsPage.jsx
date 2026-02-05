import ChurnRiskGauge from '../components/ChurnRiskGauge';
import ChurnRiskDistribution from '../components/ChurnRiskDistribution';
import ChurnBySegment from '../components/ChurnBySegment';
import HighRiskTable from '../components/HighRiskTable';
import { useEffect, useState } from "react";
import {
  getChurnDistribution,
  getChurnSegments,
  getHighRiskCustomers,
} from '../services/api';

const ChurnAnalyticsPage = () => {
  const [distribution, setDistribution] = useState([]);
  const [segments, setSegments] = useState([]);
  const [highRisk, setHighRisk] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [dist, segs, risk] = await Promise.all([
          getChurnDistribution(),
          getChurnSegments(),
          getHighRiskCustomers(),
        ]);

        setDistribution(Array.isArray(dist) ? dist : []);
        setSegments(Array.isArray(segs) ? segs : []);
        setHighRisk(Array.isArray(risk) ? risk : []);
      } catch (err) {
        console.error("Churn analytics fetch failed:", err);
        setDistribution([]);
        setSegments([]);
        setHighRisk([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return <div className="text-gray-500">Loading churn analytics...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Churn Analytics</h2>
        <p className="text-gray-600">
          Analyze customer churn risk and identify at-risk customers
        </p>
      </div>

      {/* Top Section - Gauge and Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChurnRiskGauge riskPercentage={42} />
        <div className="lg:col-span-2">
          <ChurnRiskDistribution data={distribution} />
        </div>
      </div>

      {/* Segment Analysis */}
      <ChurnBySegment data={segments} />

      {/* High-Risk Customers Table */}
      <HighRiskTable data={highRisk} />
    </div>
  );
};

export default ChurnAnalyticsPage;
