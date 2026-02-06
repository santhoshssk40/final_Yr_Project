import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

function ChurnDonut({ value }) {
  const percentage = value * 100;

  const data = [
    { name: "Churn", value: percentage },
    { name: "Retention", value: 100 - percentage }
  ];

  const COLORS = ["#ef4444", "#22c55e"];

  return (
    <div className="card">
      <h3>Churn vs Retention</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChurnDonut;
