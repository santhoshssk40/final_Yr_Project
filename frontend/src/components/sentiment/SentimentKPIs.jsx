export default function SentimentKPIs() {
  return (
    <div className="grid grid-cols-4 gap-6">
      
      <div className="bg-white shadow-md rounded-xl p-6">
        <h4 className="text-sm text-gray-500">Total Feedback</h4>
        <p className="text-3xl font-bold text-black mt-2">
          10,482
        </p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h4 className="text-sm text-gray-500">Positive</h4>
        <p className="text-3xl font-bold text-green-600 mt-2">
          62%
        </p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h4 className="text-sm text-gray-500">Neutral</h4>
        <p className="text-3xl font-bold text-yellow-500 mt-2">
          25%
        </p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h4 className="text-sm text-gray-500">Negative</h4>
        <p className="text-3xl font-bold text-red-500 mt-2">
          13%
        </p>
      </div>

    </div>
  );
}
