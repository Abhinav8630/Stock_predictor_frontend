import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useStockContext } from '../context/StockContext';

const RecentSearches: React.FC = () => {
  const { recentSearches } = useStockContext();

  if (recentSearches.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recentSearches.map((ticker) => (
        <Link
          key={ticker}
          to={`/prediction/${ticker}`}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
        >
          <span className="font-medium text-gray-800 dark:text-white">{ticker}</span>
          <ArrowRight className="h-4 w-4 text-primary" />
        </Link>
      ))}
    </div>
  );
};

export default RecentSearches;