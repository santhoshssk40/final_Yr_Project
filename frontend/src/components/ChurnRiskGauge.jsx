import SectionCard from "./SectionCard";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const getColor = (value) => {
  if (value >= 60) return "#ef4444";
  if (value >= 40) return "#eab308";
  return "#22c55e";
};

const getLabel = (value) => {
  if (value >= 60) return "High Risk";
  if (value >= 40) return "Medium Risk";
  return "Low Risk";
};

const ChurnRiskGauge = ({ riskPercentage }) => {
  const data = [{ value: riskPercentage, fill: getColor(riskPercentage) }];

  return (
    <SectionCard title="Overall Churn Risk">
      <div className="relative flex items-center justify-center h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius="70%"
            outerRadius="100%"
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              tick={false}
            />
            <RadialBar
              dataKey="value"
              cornerRadius={12}
              clockWise
            />
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="absolute text-center">
          <p className="text-6xl font-bold text-gray-900">
            {riskPercentage}%
          </p>
          <p
            className="text-lg font-semibold mt-1"
            style={{ color: getColor(riskPercentage) }}
          >
            {getLabel(riskPercentage)}
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default ChurnRiskGauge;
