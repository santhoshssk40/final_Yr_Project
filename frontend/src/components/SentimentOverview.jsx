import SectionCard from "./SectionCard";
import { Smile } from "lucide-react";

const SentimentOverview = ({ data }) => {
  if (!data) {
    return (
      <SectionCard title="Overall Sentiment Level">
        <p className="text-gray-500 text-center py-12">
          Loading sentiment summary...
        </p>
      </SectionCard>
    );
  }

  const score = data.overallScore ?? 0;
  const total = data.totalFeedback ?? 0;

  const getScoreColor = (score) => {
    if (score >= 4) return "text-success-600";
    if (score >= 3) return "text-warning-600";
    return "text-danger-600";
  };

  const getScoreLabel = (score) => {
    if (score >= 4) return "Positive";
    if (score >= 3) return "Neutral";
    return "Negative";
  };

  const percentage = (score / 5) * 100;
  const rotation = (percentage / 100) * 180 - 90;

  return (
    <SectionCard title="Overall Sentiment Level">
      <div className="flex flex-col items-center justify-center py-8">
        <div className="relative w-48 h-24">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <path d="M 20 80 A 80 80 0 0 1 180 80" fill="none" stroke="#fee2e2" strokeWidth="20" />
            <path d="M 20 80 A 80 80 0 0 1 100 20" fill="none" stroke="#fef08a" strokeWidth="20" />
            <path d="M 100 20 A 80 80 0 0 1 180 80" fill="none" stroke="#bbf7d0" strokeWidth="20" />
            <line
              x1="100"
              y1="80"
              x2="100"
              y2="30"
              stroke="#1f2937"
              strokeWidth="3"
              transform={`rotate(${rotation} 100 80)`}
            />
            <circle cx="100" cy="80" r="6" fill="#1f2937" />
          </svg>
        </div>

        <div className="text-center mt-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Smile className="w-8 h-8 text-gray-400" />
            <span className={`text-5xl font-bold ${getScoreColor(score)}`}>
              {score.toFixed(2)}
            </span>
          </div>
          <p className="text-lg text-gray-600">out of 5</p>
          <p className={`text-xl font-semibold mt-2 ${getScoreColor(score)}`}>
            {getScoreLabel(score)}
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Based on {total.toLocaleString()} feedback items
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default SentimentOverview;
