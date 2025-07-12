import { StockPrediction } from '../types';

// This function simulates an API call to your ML model
// In a real application, this would call your actual ML service
export const getPrediction = async (ticker: string): Promise<StockPrediction> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Generate random prediction data based on the ticker
  // This is a placeholder for your actual ML model response
  const currentPrice = 100 + Math.random() * 900;
  const isPositive = Math.random() > 0.3; // 70% chance of positive prediction
  const changePercent = isPositive 
    ? (Math.random() * 10) + 0.5 
    : -((Math.random() * 8) + 0.5);
    
  const predictedPrice = currentPrice * (1 + (changePercent / 100));
  const confidence = 0.5 + Math.random() * 0.4;
  
  // Generate historical data (past 30 days)
  const historicalData = Array.from({ length: 30 }, (_, i) => {
    const dayOffset = 30 - i;
    const randomFactor = 0.98 + (Math.random() * 0.04);
    return {
      date: formatDate(new Date(Date.now() - (dayOffset * 24 * 60 * 60 * 1000))),
      price: (currentPrice * randomFactor) - (dayOffset * (Math.random() * 2))
    };
  });
  
  // Generate future predictions (next 7 days)
  const futurePredictions = Array.from({ length: 7 }, (_, i) => {
    const dayOffset = i + 1;
    const accumulatedChange = (changePercent / 7) * dayOffset;
    return {
      date: formatDate(new Date(Date.now() + (dayOffset * 24 * 60 * 60 * 1000))),
      price: currentPrice * (1 + (accumulatedChange / 100))
    };
  });
  
  // Recommendation based on prediction
  const recommendation = isPositive 
    ? confidence > 0.7 
      ? "Strong Buy" 
      : "Buy" 
    : confidence > 0.7 
      ? "Strong Sell" 
      : "Sell";
  
  // Generate random factors that influenced the prediction
  const factorPool = [
    "Recent positive earnings report",
    "Increasing market sentiment",
    "Strong technical indicators",
    "Positive industry trends",
    "Favorable economic conditions",
    "Recent product announcements",
    "Increasing institutional ownership",
    "Recent negative earnings report",
    "Decreasing market sentiment",
    "Weak technical indicators",
    "Negative industry trends",
    "Unfavorable economic conditions",
    "Recent product delays",
    "Decreasing institutional ownership"
  ];
  
  // Select 3-5 random factors, with positive factors for positive predictions
  // and negative factors for negative predictions
  const startIndex = isPositive ? 0 : 7;
  const endIndex = isPositive ? 7 : factorPool.length;
  const factorCount = Math.floor(Math.random() * 3) + 3; // 3-5 factors
  
  const factors: string[] = [];
  for (let i = 0; i < factorCount; i++) {
    const randomIndex = startIndex + Math.floor(Math.random() * (endIndex - startIndex));
    if (!factors.includes(factorPool[randomIndex])) {
      factors.push(factorPool[randomIndex]);
    }
  }
  
  return {
    ticker: ticker.toUpperCase(),
    currentPrice,
    predictedPrice,
    predictedChange: changePercent,
    confidence,
    modelAccuracy: 0.75 + (Math.random() * 0.15),
    recommendation,
    currentDate: formatDate(new Date()),
    historicalData,
    futurePredictions,
    factors
  };
};

// Helper function to format dates as MM/DD/YYYY
const formatDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};