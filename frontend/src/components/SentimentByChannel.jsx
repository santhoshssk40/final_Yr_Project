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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((channel, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              {getChannelIcon(channel.channel)}
              <h3 className="text-lg font-semibold text-gray-800">
                {channel.channel}
              </h3>
            </div>

            {/* Pie Chart (FIXED + CENTERED) */}
            <div className="w-full max-w-[180px] h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={createPieData(channel)}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {createPieData(channel).map((entry, idx) => (
                      <Cell key={`cell-${idx}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Total */}
            <div className="text-center mt-4">
              <p className="text-2xl font-bold text-gray-900">
                {channel.total}
              </p>
              <p className="text-sm text-gray-600">total feedback</p>
            </div>

            {/* Legend */}
            <div className="flex gap-4 mt-4 text-xs">
              <span className="text-green-600 font-semibold">
                {channel.positive}% ●
              </span>
              <span className="text-yellow-600 font-semibold">
                {channel.neutral}% ●
              </span>
              <span className="text-red-600 font-semibold">
                {channel.negative}% ●
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default SentimentByChannel;
