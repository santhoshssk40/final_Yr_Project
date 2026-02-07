import { NavLink } from "react-router-dom";
import { LayoutDashboard, BarChart2, Users, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black text-white min-h-screen p-6">
      <h1 className="text-xl font-bold mb-10">Churn Analytics</h1>

      <nav className="space-y-4">
        <NavLink to="/" className="flex items-center gap-3 hover:text-green-400">
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>

        <NavLink to="/analytics" className="flex items-center gap-3 hover:text-green-400">
          <BarChart2 size={18} /> Analytics
        </NavLink>

        <NavLink to="/customers" className="flex items-center gap-3 hover:text-green-400">
          <Users size={18} /> Customers
        </NavLink>

        <NavLink to="/settings" className="flex items-center gap-3 hover:text-green-400">
          <Settings size={18} /> Settings
        </NavLink>
      </nav>
    </aside>
  );
}
