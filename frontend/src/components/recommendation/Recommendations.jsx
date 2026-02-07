import { AlertTriangle, CheckCircle, Shield } from "lucide-react";

export default function Recommendations({ riskLevel = "Medium" }) {
  const getRecommendations = () => {
    switch (riskLevel) {
      case "High":
        return [
          "Offer immediate retention discount",
          "Assign dedicated account manager",
          "Send personalized recovery email campaign",
        ];
      case "Medium":
        return [
          "Provide loyalty points incentive",
          "Improve delivery turnaround time",
          "Trigger engagement email automation",
        ];
      default:
        return [
          "Maintain current engagement strategy",
          "Upsell premium features",
          "Encourage referrals and reviews",
        ];
    }
  };

  const getRiskColor = () => {
    switch (riskLevel) {
      case "High":
        return "bg-red-100 text-red-600";
      case "Medium":
        return "bg-yellow-100 text-yellow-600";
      default:
        return "bg-green-100 text-green-600";
    }
  };

  const getIcon = () => {
    switch (riskLevel) {
      case "High":
        return <AlertTriangle className="text-red-500" size={24} />;
      case "Medium":
        return <Shield className="text-yellow-500" size={24} />;
      default:
        return <CheckCircle className="text-green-500" size={24} />;
    }
  };

  const recommendations = getRecommendations();

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recommended Actions</h3>

        <span
          className={`px-3 py-1 text-sm rounded-full font-semibold ${getRiskColor()}`}
        >
          {riskLevel} Risk
        </span>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:shadow transition duration-300"
          >
            {getIcon()}
            <p className="text-gray-700">{rec}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
