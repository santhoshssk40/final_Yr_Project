export default function KpiCard({ title, value }) {
  return (
    <div className="bg-gray-100 rounded-2xl shadow-md p-6 transition hover:shadow-xl">
      <h4 className="text-gray-500 text-sm font-medium mb-2">
        {title}
      </h4>

      <div className="text-3xl font-bold text-gray-900">
        {value}
      </div>
    </div>
  );
}