import SectionCard from './SectionCard';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const WordFrequency = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-gray-500">No frequent words found</p>;
  }
  return (
    <SectionCard title="Word Frequency by Sentiment">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            type="category" 
            dataKey="word" 
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            type="number" 
            tick={{ fill: '#6b7280', fontSize: 12 }}
            label={{ value: 'Frequency', angle: -90, position: 'insideLeft', style: { fill: '#6b7280' } }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            formatter={(value, name, props) => [value, `Mentions (${props.payload.sentiment})`]}
          />
          <Bar dataKey="count" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 flex items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-success-500"></div>
          <span className="text-gray-600">Positive</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-warning-500"></div>
          <span className="text-gray-600">Neutral</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-danger-500"></div>
          <span className="text-gray-600">Negative</span>
        </div>
      </div>
    </SectionCard>
  );
};

export default WordFrequency;
