import React from 'react';
import { StockPrediction } from '../types';

interface PredictionSummaryProps {
  prediction: StockPrediction;
}

const PredictionSummary: React.FC<PredictionSummaryProps> = ({ prediction }) => {
  const isPositivePrediction = prediction.predictedChange > 0;
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Summary</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Based on our ML model analysis for <span className="font-medium">{prediction.ticker}</span>
          </p>
        </div>
        <div className={`mt-2 md:mt-0 px-4 py-2 rounded-full ${isPositivePrediction ? 'bg-success-light text-success' : 'bg-error-light text-error'} inline-flex items-center`}>
          <span className="text-sm font-medium">
            {isPositivePrediction ? 'Bullish Outlook' : 'Bearish Outlook'}
          </span>
        </div>
      </div>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p>
          Our ML model predicts that <strong>{prediction.ticker}</strong> will
          {isPositivePrediction 
            ? ` increase by ${prediction.predictedChange.toFixed(2)}% `
            : ` decrease by ${Math.abs(prediction.predictedChange).toFixed(2)}% `}
          over the next {prediction.futurePredictions.length} days, reaching 
          <strong> ${prediction.predictedPrice.toFixed(2)}</strong> from the current price of 
          <strong> ${prediction.currentPrice.toFixed(2)}</strong>.
        </p>
        
        <p>
          This prediction is based on historical price movements, market trends, and other factors 
          analyzed by our machine learning model. The model has shown a historical accuracy of 
          <strong> {(prediction.modelAccuracy * 100).toFixed(0)}%</strong> and has a confidence level of 
          <strong> {(prediction.confidence * 100).toFixed(0)}%</strong> for this specific prediction.
        </p>
        
        <p>
          <strong>Key factors influencing this prediction:</strong>
        </p>
        
        <ul>
          {prediction.factors.map((factor, index) => (
            <li key={index}>{factor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PredictionSummary;