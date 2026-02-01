import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#ff4d4f", "#2ecc71"];

function ChurnCharts({ probability, factors }) {
  const pieData = [
    { name: "Churn Risk", value: probability },
    { name: "Retention", value: 1 - probability }
  ];

  // Rank-based importance (deterministic & explainable)
  const barData = factors.map((f, index) => ({
    factor: f.replaceAll("_", " "),
    importance: factors.length - index
  }));

  return (
    <div className="chart-container">

      {/* PIE CHART */}
      <div className="chart-card">
        <h4>Churn Probability</h4>
        <ResponsiveContainer width={250} height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={90}
              label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
              animationDuration={800}
            >
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div className="chart-card">
        <h4>Top Churn Drivers</h4>
        <ResponsiveContainer width={300} height={250}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="factor" />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="importance" fill="#3498db" />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default ChurnCharts;
