import React from 'react';
import SectionCard from './SectionCard';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Mail, MessageCircle, Share2 } from 'lucide-react';

const SentimentByChannel = ({ data }) => {
  const getChannelIcon = (channel) => {
    switch (channel.toLowerCase()) {
      case 'email':
        return <Mail className="w-5 h-5" />;
      case 'chat':
        return <MessageCircle className="w-5 h-5" />;
      case 'social media':
        return <Share2 className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const createPieData = (channelData) => [
    { name: 'Positive', value: channelData.positive, fill: '#22c55e' },
    { name: 'Neutral', value: channelData.neutral, fill: '#eab308' },
    { name: 'Negative', value: channelData.negative, fill: '#ef4444' },
  ];

  return (
    <SectionCard title="Sentiment Distribution by Channel">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((channel, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              {getChannelIcon(channel.channel)}
              <h3 className="text-lg font-semibold text-gray-800">{channel.channel}</h3>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={createPieData(channel)}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {createPieData(channel).map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.fill} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="text-center mt-2">
              <p className="text-2xl font-bold text-gray-900">{channel.total}</p>
              <p className="text-sm text-gray-600">total feedback</p>
            </div>
            <div className="flex gap-4 mt-3 text-xs">
              <span className="text-success-600 font-semibold">{channel.positive}% ●</span>
              <span className="text-warning-600 font-semibold">{channel.neutral}% ●</span>
              <span className="text-danger-600 font-semibold">{channel.negative}% ●</span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default SentimentByChannel;
