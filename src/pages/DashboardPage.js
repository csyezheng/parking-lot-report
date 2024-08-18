import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance'; // Use the custom Axios instance
import Header from '../components/Header';
import Footer from '../components/Footer';
import SummaryCard from '../components/SummaryCard';
import RevenueLineGraph from '../components/RevenueLineGraph';
import RevenueBarChart from '../components/RevenueBarChart';
import './DashboardPage.css'

const DashboardPage = () => {
  const [summaryData, setSummaryData] = useState(null);
  const [revenueLineData, setRevenueLineData] = useState([]);
  const [revenueBarData, setRevenueBarData] = useState([]);

  useEffect(() => {
    // Fetch summary data
    axiosInstance.get('/api/summary/')
      .then(response => {
        setSummaryData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the summary data!", error);
      });

    // Fetch revenue line graph data
    axiosInstance.get('/api/revenue-line/')
      .then(response => {
        setRevenueLineData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the revenue line data!", error);
      });

    // Fetch revenue bar chart data
    axiosInstance.get('/api/revenue-bar/')
      .then(response => {
        setRevenueBarData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the revenue bar data!", error);
      });
  }, []);

  if (!summaryData) {
    return <div>Loading...</div>;
  }

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
