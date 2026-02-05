import SectionCard from "./SectionCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import { Users } from "lucide-react";

const SEGMENT_LABELS = {
  0: "Low-Value Customers",
  1: "Mid-Value Customers",
  2: "High-Value Customers"
};

const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

const ChurnBySegment = ({ data = [] }) => {
  // 🔄 Transform backend response → chart-ready data
  const chartData = data.map((d, index) => ({
    segment: SEGMENT_LABELS[d.cluster_id] ?? `Segment ${d.cluster_id}`,
    churnRisk: Math.round(d.avg_risk * 100), // convert to %
    customers: d.customers,
    fill: COLORS[index % COLORS.length]
  }));

  if (chartData.length === 0) {
    return (
      <SectionCard title="Churn Risk by Customer Segment">
        <p className="text-gray-500">No segment data available</p>
      </SectionCard>
    );
  }

  return (
    <SectionCard title="Churn Risk by Customer Segment">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="segment" width={180} />
          <Tooltip formatter={(v) => `${v}%`} />
          <Bar dataKey="churnRisk" radius={[0, 8, 8, 0]}>
            {chartData.map((d, i) => (
              <Cell key={i} fill={d.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {chartData.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
          >
            <Users className="w-8 h-8 text-primary-500" />
            <div>
              <p className="text-xs text-gray-600">{s.segment}</p>
              <p className="text-lg font-bold text-gray-900">
                {s.customers.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">customers</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default ChurnBySegment;
