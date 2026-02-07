import { useEffect, useState } from "react";
import { predictBatch } from "../services/api";
import CustomerTable from "../components/tables/CustomerTable";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState("All");

  // Mock customer dataset
  useEffect(() => {
    const mockData = Array.from({ length: 20 }).map((_, i) => ({
      customer_id: i + 1,
      avg_order_value: 300 + Math.random() * 300,
      avg_delivery_time: 25 + Math.random() * 20,
      avg_rating: 3 + Math.random() * 2,
      discount_rate: Math.random(),
      value_per_minute: 10 + Math.random() * 5,
      rating_discount_interaction: Math.random() * 2,
      avg_sentiment: Math.random(),
      neg_review_ratio: Math.random() * 0.4,
      churn_probability: null,
      risk_level: null,
    }));

    setCustomers(mockData);
    setFiltered(mockData);
  }, []);

  // Search + Filter Logic
  useEffect(() => {
    let data = customers;

    if (search) {
      data = data.filter((c) =>
        c.customer_id.toString().includes(search)
      );
    }

    if (riskFilter !== "All") {
      data = data.filter((c) => c.risk_level === riskFilter);
    }

    setFiltered(data);
  }, [search, riskFilter, customers]);

  const runBatchPrediction = async () => {
    try {
      const res = await predictBatch(customers);
      const updated = customers.map((c) => {
        const match = res.data.find(
          (r) => r.customer_id === c.customer_id
        );
        return { ...c, ...match };
      });

      setCustomers(updated);
    } catch (err) {
      alert("Batch prediction failed");
    }
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">
          Customer Risk Analysis
        </h2>

        <button
          onClick={runBatchPrediction}
          className="bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-700 transition"
        >
          Run Batch Prediction
        </button>
      </div>

      {/* SEARCH + FILTER */}
      <div className="flex gap-6">
        <input
          type="text"
          placeholder="Search Customer ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 w-1/3"
        />

        <select
          value={riskFilter}
          onChange={(e) => setRiskFilter(e.target.value)}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600"
        >
          <option value="All">All Risks</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* TABLE */}
      <CustomerTable data={filtered} />
    </div>
  );
}
