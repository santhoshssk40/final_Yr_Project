export default function HighRiskTable() {
  const data = [
    { id: 201, name: "Robert", prob: 0.82 },
    { id: 202, name: "Emma", prob: 0.76 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4 text-red-600">
        High Risk Customers
      </h3>

      <table className="w-full text-left">
        <thead className="border-b">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Probability</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b">
              <td className="py-2">{row.id}</td>
              <td>{row.name}</td>
              <td>{(row.prob * 100).toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
