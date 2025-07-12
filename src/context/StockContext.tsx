import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface StockContextType {
  recentSearches: string[];
  addRecentSearch: (ticker: string) => void;
}

const StockContext = createContext<StockContextType>({
  recentSearches: [],
  addRecentSearch: () => {},
});

export const useStockContext = () => useContext(StockContext);

interface StockProviderProps {
  children: ReactNode;
}

const MAX_RECENT_SEARCHES = 6;

export const StockProvider: React.FC<StockProviderProps> = ({ children }) => {
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const addRecentSearch = (ticker: string) => {
    setRecentSearches(prev => {
      // Remove ticker if it already exists
      const filtered = prev.filter(item => item !== ticker);
      
      // Add ticker to the beginning of the array and limit to MAX_RECENT_SEARCHES
      return [ticker, ...filtered].slice(0, MAX_RECENT_SEARCHES);
    });
  };

  return (
    <StockContext.Provider value={{ recentSearches, addRecentSearch }}>
      {children}
    </StockContext.Provider>
  );
};