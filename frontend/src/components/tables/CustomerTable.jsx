import { useState } from "react";

export default function CustomerTable() {
  const [search, setSearch] = useState("");

  const sampleCustomers = [
    { id: 101, name: "Arjun Kumar", risk: "High", churn: 0.82 },
    { id: 102, name: "Priya Sharma", risk: "Medium", churn: 0.54 },
    { id: 103, name: "Rahul Verma", risk: "Low", churn: 0.12 },
    { id: 104, name: "Anjali Rao", risk: "High", churn: 0.75 },
  ];

  const filtered = sampleCustomers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const riskColor = (risk) => {
    if (risk === "High") return "bg-red-500/20 text-red-400";
    if (risk === "Medium") return "bg-yellow-500/20 text-yellow-400";
    return "bg-green-500/20 text-green-400";
  };

  return (
    <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-white">
          Customer Risk Table
        </h3>

        <input
          type="text"
          placeholder="Search customer..."
          className="px-4 py-2 rounded-lg bg-[#0f172a] text-white border border-gray-700"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 border-b border-gray-700">
            <th className="py-3">ID</th>
            <th>Name</th>
            <th>Churn %</th>
            <th>Risk Level</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((customer) => (
            <tr
              key={customer.id}
              className="border-b border-gray-800 hover:bg-[#0f172a] transition"
            >
              <td className="py-3">{customer.id}</td>
              <td>{customer.name}</td>
              <td>{(customer.churn * 100).toFixed(1)}%</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${riskColor(
                    customer.risk
                  )}`}
                >
                  {customer.risk}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
