import React from 'react';
import { ArrowUpCircle, ArrowDownCircle, Percent, DollarSign, TrendingUp, BarChart2 } from 'lucide-react';
import { StockPrediction } from '../types';

interface PredictionMetricsProps {
  prediction: StockPrediction;
}

const PredictionMetrics: React.FC<PredictionMetricsProps> = ({ prediction }) => {
  const isPositivePrediction = prediction.predictedChange > 0;
  const confidenceColor = prediction.confidence >= 0.7 ? 'text-success' : prediction.confidence >= 0.5 ? 'text-warning' : 'text-error';
  
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">Current Price</span>
          </div>
          <span className="font-semibold text-gray-800 dark:text-white">
            ${prediction.currentPrice.toFixed(2)}
          </span>
        </div>
        
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">Predicted Price</span>
          </div>
          <span className="font-semibold text-gray-800 dark:text-white">
            ${prediction.predictedPrice.toFixed(2)}
          </span>
        </div>
        
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
          <div className="flex items-center">
            {isPositivePrediction ? (
              <ArrowUpCircle className="h-5 w-5 text-success mr-2" />
            ) : (
              <ArrowDownCircle className="h-5 w-5 text-error mr-2" />
            )}
            <span className="text-gray-600 dark:text-gray-400">Predicted Change</span>
          </div>
          <span className={`font-semibold ${isPositivePrediction ? 'text-success' : 'text-error'}`}>
            {isPositivePrediction ? '+' : ''}{prediction.predictedChange.toFixed(2)}%
          </span>
        </div>
        
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
          <div className="flex items-center">
            <BarChart2 className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">ML Confidence</span>
          </div>
          <span className={`font-semibold ${confidenceColor}`}>
            {(prediction.confidence * 100).toFixed(0)}%
          </span>
        </div>
        
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-600 dark:text-gray-400">Model Accuracy</span>
          </div>
          <span className="font-semibold text-gray-800 dark:text-white">
            {(prediction.modelAccuracy * 100).toFixed(0)}%
          </span>
        </div>
      </div>
      
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">AI Recommendation</h3>
        <div className={`text-${isPositivePrediction ? 'success' : 'error'} font-semibold`}>
          {prediction.recommendation}
        </div>
      </div>
    </div>
  );
};

export default PredictionMetrics;