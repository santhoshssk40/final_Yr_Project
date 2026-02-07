export default function SentimentKPIs() {
  const data = [
    { title: "Total Feedback", value: "10,482" },
    { title: "Positive", value: "62%" },
    { title: "Neutral", value: "25%" },
    { title: "Negative", value: "13%" },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-2xl shadow-md p-6"
        >
          <h4 className="text-gray-500 text-sm font-medium mb-2">
            {item.title}
          </h4>

          <div className="text-3xl font-bold text-gray-900">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}
