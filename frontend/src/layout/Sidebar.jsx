import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0f172a] min-h-screen p-6 text-white">
      <h2 className="text-xl font-bold mb-8">Churn Analytics</h2>

      <nav className="space-y-4">
        <NavLink to="/" className="block hover:text-blue-400">
          Dashboard
        </NavLink>

        <NavLink to="/analytics" className="block hover:text-blue-400">
          Analytics
        </NavLink>

        <NavLink to="/customers" className="block hover:text-blue-400">
          Customers
        </NavLink>

        <NavLink to="/settings" className="block hover:text-blue-400">
          Settings
        </NavLink>
      </nav>
    </div>
  );
}
