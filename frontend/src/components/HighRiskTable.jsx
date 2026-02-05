import SectionCard from "./SectionCard";
import { ArrowUpDown } from "lucide-react";
import { useMemo, useState } from "react";

const HighRiskTable = ({ data = [] }) => {
  const [sortAsc, setSortAsc] = useState(false);

  // ✅ Normalize backend data safely
  const normalized = useMemo(() => {
    if (!Array.isArray(data)) return [];

    return data.map((c, idx) => ({
      id: c.customer_id ?? idx,
      name: c.customer_name ?? "Customer",
      customerId: c.customer_id ?? "—",
      churnRisk: Math.round((c.churn_probability ?? 0) * 100),
      causes: c.causes ?? ["Low engagement", "Negative sentiment"],
      recommendation:
        c.recommendation ??
        (c.churn_probability > 0.7
          ? "Immediate retention offer"
          : "Monitor closely"),
    }));
  }, [data]);

  if (normalized.length === 0) {
    return (
      <SectionCard title="High-Risk Customers">
        <p className="text-gray-500">No high-risk customers found</p>
      </SectionCard>
    );
  }

  const sorted = useMemo(() => {
    return [...normalized].sort((a, b) =>
      sortAsc ? a.churnRisk - b.churnRisk : b.churnRisk - a.churnRisk
    );
  }, [normalized, sortAsc]);

  return (
    <SectionCard title="High-Risk Customers">
      <table className="w-full text-sm">
        <thead className="border-b">
          <tr className="text-left text-gray-600">
            <th className="py-3">Customer</th>
            <th>ID</th>
            <th
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setSortAsc(!sortAsc)}
            >
              Risk <ArrowUpDown className="w-4 h-4" />
            </th>
            <th>Causes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((c) => (
            <tr key={c.id} className="border-b hover:bg-gray-50">
              <td className="py-3 font-medium">{c.name}</td>
              <td className="text-gray-600">{c.customerId}</td>
              <td className="font-semibold">{c.churnRisk}%</td>
              <td className="flex flex-wrap gap-1 py-2">
                {c.causes.map((cause, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 rounded text-xs"
                  >
                    {cause}
                  </span>
                ))}
              </td>
              <td className="text-primary-600 font-medium">
                {c.recommendation}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionCard>
  );
};

export default HighRiskTable;
