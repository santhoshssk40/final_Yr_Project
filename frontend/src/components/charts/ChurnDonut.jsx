import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function ChurnDonut({ value = 0.65 }) {
  const data = [
    { name: "Churn", value: value },
    { name: "Retained", value: 1 - value },
  ];

  const COLORS = ["#ef4444", "#22c55e"];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-700 font-semibold mb-4">
        Churn Distribution
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            animationDuration={1200}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
