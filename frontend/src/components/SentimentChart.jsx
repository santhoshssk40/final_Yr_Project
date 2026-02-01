import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function SentimentChart({ sentiment }) {
  const data = [
    { sentiment: "Positive", value: sentiment > 0 ? 1 : 0 },
    { sentiment: "Neutral", value: sentiment === 0 ? 1 : 0 },
    { sentiment: "Negative", value: sentiment < 0 ? 1 : 0 }
  ];

  return (
    <div className="chart-card">
      <h4>Sentiment Distribution</h4>
      <ResponsiveContainer width={300} height={200}>
        <BarChart data={data}>
          <XAxis dataKey="sentiment" />
          <Tooltip />
          <Bar dataKey="value" fill="#1abc9c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SentimentChart;   // ✅ DEFAULT EXPORT
