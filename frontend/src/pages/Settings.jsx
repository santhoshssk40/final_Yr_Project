export default function Settings() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-white">
        System Settings
      </h1>

      <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">
            Risk Threshold (High)
          </label>
          <input
            type="number"
            defaultValue={0.6}
            className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-700"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-2">
            Model Refresh Frequency (Days)
          </label>
          <input
            type="number"
            defaultValue={30}
            className="w-full p-3 rounded-lg bg-[#0f172a] text-white border border-gray-700"
          />
        </div>

        <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Save Settings
        </button>
      </div>
    </div>
  );
}
