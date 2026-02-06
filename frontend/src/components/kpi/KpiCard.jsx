import { Users, AlertTriangle, TrendingUp, ShieldCheck } from "lucide-react";

export default function KpiSummary({ data }) {
  const kpis = [
    {
      title: "Total Customers",
      value: data?.total_customers || 12000,
      icon: <Users size={20} />,
    },
    {
      title: "High Risk Customers",
      value: data?.high_risk || 320,
      icon: <AlertTriangle size={20} />,
    },
    {
      title: "Avg Churn Probability",
      value: `${((data?.avg_churn || 0.35) * 100).toFixed(1)}%`,
      icon: <TrendingUp size={20} />,
    },
    {
      title: "Retention Rate",
      value: `${(100 - ((data?.avg_churn || 0.35) * 100)).toFixed(1)}%`,
      icon: <ShieldCheck size={20} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {kpis.map((item, index) => (
        <div
          key={index}
          className="bg-[#1e293b] p-6 rounded-xl shadow-lg flex justify-between items-center"
        >
          <div>
            <p className="text-gray-400 text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold text-white mt-2">
              {item.value}
            </h2>
          </div>

          <div className="bg-blue-600/20 text-blue-400 p-3 rounded-lg">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
