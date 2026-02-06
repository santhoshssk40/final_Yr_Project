import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell
} from "recharts";

function RiskDistribution({ riskLevel }) {
  const data = [
    { level: "Low", count: 1 },
    { level: "Medium", count: 1 },
    { level: "High", count: 1 }
  ];

  const getColor = (level) => {
    if (level === riskLevel) return "#ef4444";
    return "#1e293b";
  };

  return (
    <div className="card">
      <h3>Risk Distribution</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="level" />
          <YAxis hide />
          <Bar dataKey="count">
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={getColor(entry.level)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RiskDistribution;
