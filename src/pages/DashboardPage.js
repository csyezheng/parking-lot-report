import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance'; // Use the custom Axios instance
import Header from '../components/Header';
import Footer from '../components/Footer';
import SummaryCard from '../components/SummaryCard';
import RevenueLineGraph from '../components/RevenueLineGraph';
import RevenueBarChart from '../components/RevenueBarChart';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DashboardPage.css'

const DashboardPage = () => {
  const currentDate = new Date();
  // Compute default values
  // getMonth() return zero-based value where zero indicates the first month of the year
  const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  
  const [summaryData, setSummaryData] = useState(null);
  const [revenueLineData, setRevenueLineData] = useState([]);
  const [revenueBarData, setRevenueBarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(lastMonth);

  useEffect(() => {
    // Fetch summary data
    const fetchSummaryData = async () => {
      try {
        const response = await axiosInstance.get('/api/summary/');
        setSummaryData(response.data);
      } catch (error) {
        console.error('Error fetching summary data:', error);
      }
    };

    // Fetch revenue line graph data
    const fetchRevenueLineData = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:8000/api/revenue-line/');
        setRevenueLineData(response.data);
      } catch (error) {
        console.error('Error fetching revenue line data:', error);
      }
    };

    // Fetch revenue bar chart data
    const fetchRevenueBarData = async (month, year) => {
      try {
        const response = await axiosInstance.get('/api/revenue-bar/', {
          params: { month, year },
        });
        setRevenueBarData(response.data);
      } catch (error) {
        console.error('Error fetching revenue bar data:', error);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchSummaryData(), fetchRevenueLineData()]);
      fetchRevenueBarData(selectedDate.getMonth() + 1, selectedDate.getFullYear());
      setLoading(false);
    };

    fetchData();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="dashboard">
          <h1>Parking Lot Operation Dashboard</h1>

          <div className="summary-cards" style={{ display: 'flex', justifyContent: 'space-around' }}>
            <SummaryCard title="Total Revenue" value={summaryData?.totalRevenue} />
            <SummaryCard title="Total Parking Lots" value={summaryData?.totalLots} />
            <SummaryCard title="Total Capacity" value={summaryData?.totalCapacity} />
          </div>

          <div className='dashboard-revenue-linegraph'>
            <h3>Revenue Trends Over Time</h3>
            <RevenueLineGraph data={revenueLineData} />
          </div>
          <div className='dashboard-revenue-barchart'>
            <h3>
              Revenue by Parking Lot for {' '}
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM yyyy"
                showMonthYearPicker
              />
            </h3>
            <RevenueBarChart data={revenueBarData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
