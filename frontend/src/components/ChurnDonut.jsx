import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import SectionCard from "./SectionCard";

const COLORS = ["#ef4444", "#22c55e"];

const ChurnDonut = ({ probability }) => {
  const data = [
    { name: "Churn", value: probability * 100 },
    { name: "Retained", value: (1 - probability) * 100 },
  ];

  return (
    <SectionCard title="Churn vs Retention">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
            paddingAngle={2}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip formatter={(v) => `${v.toFixed(1)}%`} />
        </PieChart>
      </ResponsiveContainer>
    </SectionCard>
  );
};

export default ChurnDonut;
