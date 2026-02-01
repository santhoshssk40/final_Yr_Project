import React from 'react';
import ChurnRiskGauge from '../components/ChurnRiskGauge';
import ChurnRiskDistribution from '../components/ChurnRiskDistribution';
import ChurnBySegment from '../components/ChurnBySegment';
import HighRiskTable from '../components/HighRiskTable';
import {
  churnRiskDistribution,
  churnBySegment,
  highRiskCustomers,
} from '../data/mockData';

const ChurnAnalyticsPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Churn Analytics</h2>
        <p className="text-gray-600">Analyze customer churn risk and identify at-risk customers</p>
      </div>

      {/* Top Section - Gauge and Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ChurnRiskGauge riskPercentage={42} />
        <div className="lg:col-span-2">
          <ChurnRiskDistribution data={churnRiskDistribution} />
        </div>
      </div>

      {/* Segment Analysis */}
      <ChurnBySegment data={churnBySegment} />

      {/* High-Risk Customers Table */}
      <HighRiskTable data={highRiskCustomers} />
    </div>
  );
};

export default ChurnAnalyticsPage;
