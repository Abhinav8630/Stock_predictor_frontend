import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PredictionChart from '../components/PredictionChart';
import PredictionMetrics from '../components/PredictionMetrics';
import PredictionSummary from '../components/PredictionSummary';
import { useStockContext } from '../context/StockContext';
import { getPrediction } from '../services/api';
import { StockPrediction } from '../types';
import LoadingSpinner from '../components/LoadingSpinner';

const PredictionPage: React.FC = () => {
  const { ticker = '' } = useParams<{ ticker: string }>();
  const [prediction, setPrediction] = useState<StockPrediction | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addRecentSearch } = useStockContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await getPrediction(ticker);
        setPrediction(data);
        addRecentSearch(ticker);
      } catch (err) {
        console.error('Error fetching prediction:', err);
        setError('Failed to fetch prediction data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (ticker) {
      fetchPrediction();
    }
  }, [ticker, addRecentSearch]);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button 
        onClick={handleBack}
        className="flex items-center text-primary hover:text-primary-dark transition-colors mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Search
      </button>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{ticker.toUpperCase()}</h1>
        <p className="text-gray-600 dark:text-gray-300">Stock Prediction Analysis</p>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div className="bg-error-light text-error p-4 rounded-lg">
          <p>{error}</p>
        </div>
      ) : prediction ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Price Prediction</h2>
              <PredictionChart prediction={prediction} />
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Prediction Summary</h2>
              <PredictionSummary prediction={prediction} />
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Key Metrics</h2>
              <PredictionMetrics prediction={prediction} />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-warning-light text-warning p-4 rounded-lg">
          <p>No prediction data available for {ticker.toUpperCase()}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionPage;