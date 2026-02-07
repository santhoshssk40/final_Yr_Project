import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { x: 100, y: 30 },
  { x: 200, y: 50 },
  { x: 300, y: 70 },
  { x: 400, y: 60 },
];

export default function SegmentScatter() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-gray-700 font-semibold mb-4">
        Segment Risk Scatter
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <XAxis type="number" dataKey="x" name="Spending" />
          <YAxis type="number" dataKey="y" name="Risk" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter
            data={data}
            fill="#f59e0b"
            animationDuration={1200}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
