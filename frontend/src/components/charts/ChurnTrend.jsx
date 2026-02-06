import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ChurnTrend() {
  const data = [
    { month: "Jan", risk: 12 },
    { month: "Feb", risk: 18 },
    { month: "Mar", risk: 22 },
    { month: "Apr", risk: 16 },
    { month: "May", risk: 24 },
    { month: "Jun", risk: 28 }
  ];

  return (
    <div className="card">
      <h3>Churn Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="risk" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChurnTrend;
