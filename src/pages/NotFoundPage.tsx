import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Page not found</p>
      <Link 
        to="/" 
        className="flex items-center bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
      >
        <Home className="h-5 w-5 mr-2" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;