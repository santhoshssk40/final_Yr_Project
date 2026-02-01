import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import SectionCard from "./SectionCard";

const ChurnTrend = ({ data }) => {
  return (
    <SectionCard title="Churn Trend Over Time">
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(v) => `${v * 100}%`} />
          <Tooltip formatter={(v) => `${(v * 100).toFixed(1)}%`} />
          <Line
            type="monotone"
            dataKey="churn"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </SectionCard>
  );
};

export default ChurnTrend;
