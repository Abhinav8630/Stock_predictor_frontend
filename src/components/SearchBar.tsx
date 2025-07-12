import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (ticker: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [ticker, setTicker] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(ticker);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex">
        <input
          type="text"
          placeholder="Enter stock ticker (e.g., AAPL, MSFT, TSLA)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="w-full px-5 py-3 pr-12 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-r-md transition-colors flex items-center justify-center"
        >
          <Search className="h-5 w-5 mr-2" />
          Predict
        </button>
      </div>
    </form>
  );
};

export default SearchBar;