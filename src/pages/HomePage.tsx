import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Search } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import RecentSearches from '../components/RecentSearches';
import { useStockContext } from '../context/StockContext';

const HomePage: React.FC = () => {
  const [searchError, setSearchError] = useState<string | null>(null);
  const { recentSearches } = useStockContext();
  const navigate = useNavigate();

  const handleSearch = (ticker: string) => {
    if (!ticker.trim()) {
      setSearchError('Please enter a stock ticker');
      return;
    }
    
    setSearchError(null);
    navigate(`/prediction/${ticker.toUpperCase()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
      <div className="w-full max-w-3xl text-center">
        <div className="flex justify-center mb-6">
          <TrendingUp className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800 dark:text-white">
          Stock Prediction AI
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Get advanced ML-powered predictions for any stock
        </p>
        
        <div className="w-full max-w-xl mx-auto mb-8">
          <SearchBar onSearch={handleSearch} />
          {searchError && (
            <p className="text-error mt-2 text-sm">{searchError}</p>
          )}
        </div>
        
        {recentSearches.length > 0 && (
          <div className="w-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Recent Searches
            </h2>
            <RecentSearches />
          </div>
        )}
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-light text-primary mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Accurate Predictions</h3>
            <p className="text-gray-600 dark:text-gray-300">Our ML model provides state-of-the-art stock predictions based on historical data.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-light text-primary mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Easy Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300">Get clear, actionable insights with visual data representation and analysis.</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-light text-primary mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Track Performance</h3>
            <p className="text-gray-600 dark:text-gray-300">Monitor how our predictions perform over time with detailed tracking.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;