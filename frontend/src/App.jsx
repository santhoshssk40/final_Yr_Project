import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import OverviewPage from './pages/OverviewPage';
import ChurnAnalyticsPage from './pages/ChurnAnalyticsPage';
import SentimentAnalysisPage from './pages/SentimentAnalysisPage';
import GeographicAnalysisPage from './pages/GeographicAnalysisPage';
import PredictionPage from './pages/PredictionPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="churn" element={<ChurnAnalyticsPage />} />
          <Route path="sentiment" element={<SentimentAnalysisPage />} />
          <Route path="geographic" element={<GeographicAnalysisPage />} />
          <Route path="prediction" element={<PredictionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
