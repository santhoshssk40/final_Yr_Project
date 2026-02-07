import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", value: 55 },
  { month: "Feb", value: 60 },
  { month: "Mar", value: 58 },
  { month: "Apr", value: 65 },
  { month: "May", value: 70 },
  { month: "Jun", value: 62 },
];

export default function SentimentTrend() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-black mb-4">
        Sentiment Trend
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />

          <XAxis
            dataKey="month"
            stroke="#000"
            tick={{ fill: "#000" }}
          />

          <YAxis
            stroke="#000"
            tick={{ fill: "#000" }}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ fill: "#22c55e" }}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
