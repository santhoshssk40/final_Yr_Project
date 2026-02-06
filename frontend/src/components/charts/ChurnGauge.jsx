import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

function ChurnGauge({ value }) {
  const data = [
    {
      name: "Churn",
      value: value * 100,
      fill: value > 0.6 ? "#ef4444" : value > 0.3 ? "#eab308" : "#22c55e",
    },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h3 className="text-lg mb-4">Churn Risk Gauge</h3>
      <ResponsiveContainer width="100%" height={250}>
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="text-center text-xl font-bold mt-4">
        {(value * 100).toFixed(1)}%
      </p>
    </div>
  );
}

export default ChurnGauge;
