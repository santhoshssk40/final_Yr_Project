import { PieChart, Pie, Cell } from "recharts";

function RiskChart({ probability }) {
  const data = [
    { name: "Churn", value: probability },
    { name: "Retained", value: 1 - probability }
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100}>
        <Cell fill="red" />
        <Cell fill="green" />
      </Pie>
    </PieChart>
  );
}

export default RiskChart;
