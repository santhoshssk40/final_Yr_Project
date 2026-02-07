import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { theme: "Delivery", value: 80 },
  { theme: "Pricing", value: 65 },
  { theme: "Quality", value: 70 },
  { theme: "Support", value: 55 },
];

export default function TopThemes() {
  return (
    <div className="card p-6">
      <h3 className="mb-4 font-semibold text-white">
        Top Themes
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="theme" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" isAnimationActive />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
