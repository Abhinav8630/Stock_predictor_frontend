import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PredictionPage from './pages/PredictionPage';
import NotFoundPage from './pages/NotFoundPage';
import { StockProvider } from './context/StockContext';

function App() {
  return (
    <StockProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/prediction/:ticker" element={<PredictionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </StockProvider>
  );
}

export default App;