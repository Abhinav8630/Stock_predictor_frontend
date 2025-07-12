export interface HistoricalDataPoint {
  date: string;
  price: number;
}

export interface PredictionDataPoint {
  date: string;
  price: number;
}

export interface StockPrediction {
  ticker: string;
  currentPrice: number;
  predictedPrice: number;
  predictedChange: number;
  confidence: number;
  modelAccuracy: number;
  recommendation: string;
  currentDate: string;
  historicalData: HistoricalDataPoint[];
  futurePredictions: PredictionDataPoint[];
  factors: string[];
}