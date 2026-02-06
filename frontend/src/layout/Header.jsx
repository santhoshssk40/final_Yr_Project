export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center">
      
      <h1 className="text-lg font-semibold">
        Customer Churn Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 bg-primary-600 rounded-lg hover:bg-primary-700 transition">
          Export
        </button>

        <div className="w-8 h-8 bg-primary-500 rounded-full"></div>
      </div>

    </header>
  );
}
