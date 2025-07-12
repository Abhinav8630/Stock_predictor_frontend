import React from 'react';
import { TrendingUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="ml-2 text-lg font-bold text-gray-800 dark:text-white">StockOracle</span>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Abhinav and Abhinandan. All rights reserved.
            </p>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          <p>Disclaimer: Stock predictions are based on machine learning models and should not be considered financial advice.</p>
          <p>Always consult with a financial advisor before making investment decisions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;