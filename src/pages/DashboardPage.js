// src/pages/DashboardPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SummaryCard from '../components/SummaryCard';
import RevenueLineGraph from '../components/RevenueLineGraph';
import RevenueBarChart from '../components/RevenueBarChart';
import './DashboardPage.css'

const DashboardPage = () => {
  // Mock data for the components
  const summaryData = {
    totalRevenue: '$150,000',
    totalLots: 10,
    totalCapacity: 2000,
    totalOccupied: 1600,
  };

  const revenueLineData = [
    { month: 'January', revenue: 12000 },
    { month: 'February', revenue: 13000 },
    { month: 'March', revenue: 12500 },
    { month: 'April', revenue: 12000 },
    { month: 'May', revenue: 13000 },
    { month: 'June', revenue: 12500 },
    { month: 'July', revenue: 12000 },
    { month: 'August', revenue: 13000 },
    { month: 'September', revenue: 12500 },
    { month: 'October', revenue: 12000 },
    { month: 'November', revenue: 13000 },
    { month: 'December ', revenue: 12500 },
    // Add more data for each month
  ];

  const revenueBarData = [
    { lotName: 'Main Street Parking', revenue: 12000 },
    { lotName: 'Riverside Parking', revenue: 15000 },
    { lotName: 'Downtown Parking', revenue: 13000 },
    { lotName: 'Main Street Parking', revenue: 12000 },
    { lotName: 'Riverside Parking', revenue: 15000 },
    { lotName: 'Downtown Parking', revenue: 13000 },
    { lotName: 'Main Street Parking', revenue: 12000 },
    { lotName: 'Riverside Parking', revenue: 15000 },
    { lotName: 'Downtown Parking', revenue: 13000 },
    { lotName: 'Main Street Parking', revenue: 12000 },
    { lotName: 'Riverside Parking', revenue: 15000 },
    { lotName: 'Downtown Parking', revenue: 13000 },
    // Add more parking lots as needed
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <div className="dashboard">
            <h1>Parking Lot Operation Dashboard</h1>

            <div className="summary-cards" style={{ display: 'flex', justifyContent: 'space-around' }}>
                <SummaryCard title="Total Revenue" value={summaryData.totalRevenue} />
                <SummaryCard title="Total Parking Lots" value={summaryData.totalLots} />
                <SummaryCard title="Total Capacity" value={summaryData.totalCapacity} />
                <SummaryCard title="Total Occupied" value={summaryData.totalOccupied} />
            </div>

            <div className='dashboard-revenue-linegraph'>
                <h3>Revenue Trends Over Time</h3>
                <RevenueLineGraph data={revenueLineData} />
            </div>
            <div className='dashboard-revenue-barchart'>
                <h3>Revenue by Parking Lot for the Most Recent Month</h3>
                <RevenueBarChart data={revenueBarData} />
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
