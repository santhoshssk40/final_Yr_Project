import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function SentimentChart() {
  const data = [
    { sentiment: "Positive", value: 65 },
    { sentiment: "Neutral", value: 20 },
    { sentiment: "Negative", value: 15 }
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

export default SentimentChart;
