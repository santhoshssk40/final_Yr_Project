import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { word: "Late", value: 45 },
  { word: "Tasty", value: 38 },
  { word: "Discount", value: 30 },
  { word: "Service", value: 50 },
];

export default function WordFrequency() {
  return (
    <div className="card p-6">
      <h3 className="mb-4 font-semibold text-white">
        Word Frequency
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" stroke="#aaa" />
          <YAxis type="category" dataKey="word" stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="value" fill="#22c55e" isAnimationActive />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
