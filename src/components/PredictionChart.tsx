import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { StockPrediction } from '../types';

interface PredictionChartProps {
  prediction: StockPrediction;
}

const PredictionChart: React.FC<PredictionChartProps> = ({ prediction }) => {
  const data = [
    ...prediction.historicalData.map(item => ({
      date: item.date,
      actual: item.price,
      predicted: null
    })),
    // Current point - both actual and predicted
    {
      date: prediction.currentDate,
      actual: prediction.currentPrice,
      predicted: prediction.currentPrice
    },
    // Future predictions
    ...prediction.futurePredictions.map(item => ({
      date: item.date,
      actual: null,
      predicted: item.price
    }))
  ];

  return (
    <div className="h-72 md:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#6B7280' }}
            tickMargin={10}
          />
          <YAxis 
            tick={{ fill: '#6B7280' }}
            tickMargin={10}
            domain={['auto', 'auto']}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              border: 'none' 
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="actual" 
            stroke="#0A2463" 
            strokeWidth={2} 
            dot={{ r: 4 }} 
            activeDot={{ r: 6 }} 
            name="Historical Price"
          />
          <Line 
            type="monotone" 
            dataKey="predicted" 
            stroke="#4BB543" 
            strokeWidth={2} 
            strokeDasharray="5 5" 
            dot={{ r: 4 }} 
            activeDot={{ r: 6 }} 
            name="Predicted Price"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictionChart;