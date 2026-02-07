export default function CustomerTable({ data }) {
  return (
    <div className="card p-6 overflow-x-auto">
      <table className="w-full text-left text-sm text-gray-300">
        <thead className="text-xs uppercase text-gray-400 border-b border-gray-600">
          <tr>
            <th className="py-3">Customer ID</th>
            <th>Order Value</th>
            <th>Delivery Time</th>
            <th>Rating</th>
            <th>Churn Probability</th>
            <th>Risk</th>
          </tr>
        </thead>

        <tbody>
          {data.map((c) => (
            <tr
              key={c.customer_id}
              className="border-b border-gray-700 hover:bg-gray-800 transition"
            >
              <td className="py-3">{c.customer_id}</td>
              <td>${c.avg_order_value.toFixed(0)}</td>
              <td>{c.avg_delivery_time.toFixed(0)} min</td>
              <td>{c.avg_rating.toFixed(1)}</td>
              <td>
                {c.churn_probability
                  ? (c.churn_probability * 100).toFixed(1) + "%"
                  : "--"}
              </td>
              <td>
                {c.risk_level ? (
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      c.risk_level === "High"
                        ? "bg-red-500/20 text-red-400"
                        : c.risk_level === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {c.risk_level}
                  </span>
                ) : (
                  "--"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
