import { useEffect, useState } from "react";
import SentimentOverview from "../components/SentimentOverview";
import SentimentBreakdown from "../components/SentimentBreakdown";
import SentimentTrend from "../components/SentimentTrend";
import SentimentByChannel from "../components/SentimentByChannel";
import WordFrequency from "../components/WordFrequency";

import {
  getSentimentOverview,
  getSentimentBreakdown,
  getSentimentTrend,
  getSentimentByChannel,
  getWordFrequency,
} from "../services/api";

const SentimentAnalysisPage = () => {
  const [overview, setOverview] = useState(null);
  const [breakdown, setBreakdown] = useState([]);
  const [trend, setTrend] = useState([]);
  const [channels, setChannels] = useState([]);
  const [words, setWords] = useState([]);

  useEffect(() => {
    getSentimentOverview().then(setOverview);
    getSentimentBreakdown().then(setBreakdown);
    getSentimentTrend().then(setTrend);
    getSentimentByChannel().then(setChannels);
    getWordFrequency().then(setWords);
  }, []);

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Sentiment Analysis
        </h2>
        <p className="text-gray-600">
          Monitor customer feedback and sentiment across all channels
        </p>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SentimentOverview data={overview} />
        <SentimentBreakdown data={breakdown} />
      </div>

      {/* Channel Distribution (FULL WIDTH) */}
      <div>
        <SentimentByChannel data={channels} />
      </div>

      {/* Trends & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SentimentTrend data={trend} />
        <WordFrequency data={words} />
      </div>
    </div>
  );
};

export default SentimentAnalysisPage;
