import React from 'react';
import SentimentOverview from '../components/SentimentOverview';
import SentimentBreakdown from '../components/SentimentBreakdown';
import SentimentTrend from '../components/SentimentTrend';
import SentimentByChannel from '../components/SentimentByChannel';
import WordFrequency from '../components/WordFrequency';
import {
  sentimentOverview,
  sentimentBreakdown,
  sentimentTrend,
  sentimentByChannel,
  wordFrequency,
} from '../data/mockData';

const SentimentAnalysisPage = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Sentiment Analysis</h2>
        <p className="text-gray-600">Monitor customer feedback and sentiment across all channels</p>
      </div>

      {/* Top Row - Overview and Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SentimentOverview data={sentimentOverview} />
        <SentimentBreakdown data={sentimentBreakdown} />
        <div className="bg-white rounded-card shadow-card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Feedback by Channel</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="text-2xl font-bold text-gray-900">400</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Chat</p>
              <p className="text-2xl font-bold text-gray-900">300</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Social</p>
              <p className="text-2xl font-bold text-gray-900">300</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row - Trend and Words */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SentimentTrend data={sentimentTrend} />
        <WordFrequency data={wordFrequency} />
      </div>

      {/* Bottom Row - Channel Breakdown */}
      <SentimentByChannel data={sentimentByChannel} />
    </div>
  );
};

export default SentimentAnalysisPage;
