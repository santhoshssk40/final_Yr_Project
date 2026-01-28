import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function ChurnTrend() {
  const data = [
    { month: "Jan", churn: 0.22 },
    { month: "Feb", churn: 0.25 },
    { month: "Mar", churn: 0.27 },
    { month: "Apr", churn: 0.24 }
  ];

  return (
    <div className="chart-card wide">
      <h4>Churn Trend Over Time</h4>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <Tooltip />
          <Line type="monotone" dataKey="churn" stroke="#e67e22" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChurnTrend;
