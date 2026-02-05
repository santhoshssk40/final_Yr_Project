import SectionCard from "./SectionCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SentimentTrend = ({ data = [] }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <SectionCard title="Sentiment Trend">
        <p className="text-gray-500 text-center py-12">
          No sentiment trend data available
        </p>
      </SectionCard>
    );
  }

  return (
    <SectionCard title="Sentiment Trend">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="sentiment_label" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#3b82f6"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </SectionCard>
  );
};

export default SentimentTrend;
