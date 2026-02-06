function Recommendations({ risk = "Low", factors = [] }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mt-6">
      <h3 className="text-xl font-semibold mb-4">Recommendations</h3>

      {risk === "High" && (
        <div className="text-red-400">
          <p>• Offer targeted discounts</p>
          <p>• Improve delivery time</p>
          <p>• Personalize engagement campaigns</p>
        </div>
      )}

      {risk === "Medium" && (
        <div className="text-yellow-400">
          <p>• Send retention email</p>
          <p>• Improve customer experience</p>
        </div>
      )}

      {risk === "Low" && (
        <div className="text-green-400">
          <p>• Maintain engagement</p>
          <p>• Loyalty rewards</p>
        </div>
      )}

      {factors.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium">Key Risk Drivers:</h4>
          <ul className="list-disc ml-6 mt-2 text-gray-300">
            {factors.map((f) => (
              <li key={f}>{f.replaceAll("_", " ")}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Recommendations;
