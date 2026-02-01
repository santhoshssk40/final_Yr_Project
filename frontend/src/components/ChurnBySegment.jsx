import SectionCard from "./SectionCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Users } from "lucide-react";

const ChurnBySegment = ({ data }) => {
  return (
    <SectionCard title="Churn Risk by Customer Segment">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="segment" width={180} />
          <Tooltip formatter={(v) => `${v}%`} />
          <Bar dataKey="churnRisk" radius={[0, 8, 8, 0]}>
            {data.map((d, i) => (
              <cell key={i} fill={d.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {data.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
          >
            <Users className="w-8 h-8 text-primary-500" />
            <div>
              <p className="text-xs text-gray-600">{s.segment}</p>
              <p className="text-lg font-bold text-gray-900">
                {s.customers.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500">customers</p>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default ChurnBySegment;
