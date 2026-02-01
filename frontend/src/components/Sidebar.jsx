import { NavLink } from "react-router-dom";
import {
  Home,
  TrendingDown,
  MessageCircle,
  MapPin,
  BarChart3,
} from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Overview" },
  { path: "/churn", icon: TrendingDown, label: "Churn Analytics" },
  { path: "/sentiment", icon: MessageCircle, label: "Sentiment Analysis" },
  { path: "/geographic", icon: MapPin, label: "Geographic Insights" },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 w-64 h-screen bg-gray-900 text-white">
      {/* Brand */}
      <div className="px-6 py-5 border-gray-800 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight">Analytics</h1>
          <p className="text-xs text-gray-400">Churn Dashboard</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary-500 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-800 text-xs text-gray-500 text-center">
        © 2026 Analytics Platform
      </div>
    </aside>
  );
};

export default Sidebar;
