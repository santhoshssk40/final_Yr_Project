import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function ChurnDonut({ probability }) {
  const data = [
    { name: "Churn", value: probability },
    { name: "Retained", value: 1 - probability }
  ];

  const COLORS = ["#ff4d4f", "#2ecc71"];

  return (
    <div className="chart-card">
      <h4>Churn vs Retention</h4>
      <ResponsiveContainer width={250} height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={60} outerRadius={90}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChurnDonut;
