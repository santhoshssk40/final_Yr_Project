import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function SegmentScatter() {
  const data = [
    { spend: 400, churn: 15 },
    { spend: 800, churn: 25 },
    { spend: 1200, churn: 35 },
    { spend: 600, churn: 18 }
  ];

  return (
    <div className="card">
      <h3>Segments vs Churn</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <XAxis dataKey="spend" name="Spending" />
          <YAxis dataKey="churn" name="Churn %" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter data={data} fill="#6366f1" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SegmentScatter;
