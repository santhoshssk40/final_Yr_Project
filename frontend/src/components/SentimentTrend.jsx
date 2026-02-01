import React from 'react';
import SectionCard from './SectionCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const SentimentTrend = ({ data }) => {
  return (
    <SectionCard title="Sentiment Trend Overview">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            tick={{ fill: '#6b7280', fontSize: 12 }}
            label={{ value: 'No. of Comments', angle: -90, position: 'insideLeft', style: { fill: '#6b7280' } }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="positive" 
            stroke="#22c55e" 
            strokeWidth={2}
            name="Positive"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="neutral" 
            stroke="#eab308" 
            strokeWidth={2}
            name="Neutral"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="negative" 
            stroke="#ef4444" 
            strokeWidth={2}
            name="Negative"
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </SectionCard>
  );
};

export default SentimentTrend;
