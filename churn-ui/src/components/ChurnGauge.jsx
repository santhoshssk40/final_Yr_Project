import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function ChurnGauge({ probability }) {
  const data = [
    { value: probability },
    { value: 1 - probability }
  ];

  return (
    <div className="chart-card">
      <h4>Churn Risk Gauge</h4>
      <ResponsiveContainer width={300} height={180}>
        <PieChart>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius={70}
            outerRadius={100}
            dataKey="value"
          >
            <Cell fill="#e74c3c" />
            <Cell fill="#2ecc71" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className="gauge-text">{(probability * 100).toFixed(1)}%</p>
    </div>
  );
}

export default ChurnGauge;
