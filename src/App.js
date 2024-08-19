// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ParkingLotPage from './pages/ParkingLotPage';
import BatchImportPage from './pages/BatchImportPage';
import './App.css'; // Include any global styles if necessary

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/parking-lot" element={<ParkingLotPage />} />
        <Route path="/import" element={<BatchImportPage />} />
      </Routes>
    </Router>
  );
};

export default App;
