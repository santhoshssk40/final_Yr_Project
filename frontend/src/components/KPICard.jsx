import { TrendingUp, TrendingDown } from "lucide-react";

const KPICard = ({ icon: Icon, label, value, delta }) => {
  const positive = delta >= 0;
  const TrendIcon = positive ? TrendingUp : TrendingDown;

  return (
    <div className="bg-white rounded-card shadow-card p-6 transition-smooth hover:shadow-card-hover">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
            {Icon && <Icon className="w-4 h-4 text-primary-500" />}
            <span>{label}</span>
          </div>

          <p className="text-3xl font-bold text-gray-900">{value}</p>

          {delta !== undefined && (
            <div
              className={`mt-2 flex items-center gap-1 text-sm font-semibold ${
                positive ? "text-success-600" : "text-danger-600"
              }`}
            >
              <TrendIcon className="w-4 h-4" />
              {Math.abs(delta)}%
              <span className="text-xs text-gray-500 ml-1">vs last period</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KPICard;
