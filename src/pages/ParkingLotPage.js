import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParkingLotSummary from '../components/ParkingLotSummary';
import HistoricalOccupancyChart from '../components/HistoricalOccupancyChart';
import PeakHoursChart from '../components/PeakHoursChart';
import ParkingLotRevenueChart from '../components/ParkingLotRevenueChart';
import ParkingLotRevenueLineGraph from '../components/ParkingLotRevenueLineGraph';
import ParkingLotDropdown from '../components/ParkingLotDropdown';
import './ParkingLotPage.css';

const ParkingLotPage = () => {
  const [parkingLots, setParkingLots] = useState([]);
  const [selectedLotId, setSelectedLotId] = useState('');

  const [selectedHistoricalOccupancyMonth, setSelectedHistoricalOccupancyMonth] = useState('');
  const [selectedPeakHoursDate, setSelectedPeakHoursDate] = useState('');
  const [selectedRevenueGeneratedMonth, setSelectedRevenueGeneratedMonth] = useState('');
  const [selectedTotalRevenueYear, setSelectedTotalRevenueYear] = useState('');

  const [occupancyData, setOccupancyData] = useState([]);
  const [peakHoursData, setPeakHoursData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [monthlyRevenueData, setMonthlyRevenueData] = useState([]);

  useEffect(() => {
    axios.get('/api/parking-lots/')
      .then(response => setParkingLots(response.data))
      .catch(error => console.error('Error fetching parking lots:', error));
  }, []);

  useEffect(() => {
    if (selectedLotId) {
      // Fetch Historical Occupancy
      axios.get(`/api/parking-lot/${selectedLotId}/historical-occupancy/`, {
        params: { month: selectedHistoricalOccupancyMonth }
      }).then(response => setOccupancyData(response.data))
        .catch(error => console.error('Error fetching historical occupancy:', error));

      // Fetch Peak Hours
      axios.get(`/api/parking-lot/${selectedLotId}/peak-hours/`, {
        params: { date: selectedPeakHoursDate }
      }).then(response => setPeakHoursData(response.data))
        .catch(error => console.error('Error fetching peak hours:', error));

      // Fetch Revenue Data
      axios.get(`/api/parking-lot/${selectedLotId}/revenue/`, {
        params: { month: selectedRevenueGeneratedMonth }
      }).then(response => setRevenueData(response.data))
        .catch(error => console.error('Error fetching revenue data:', error));

      // Fetch Monthly Revenue Data
      axios.get(`/api/parking-lot/${selectedLotId}/monthly-revenue/`, {
        params: { year: selectedTotalRevenueYear }
      }).then(response => setMonthlyRevenueData(response.data))
        .catch(error => console.error('Error fetching monthly revenue:', error));
    }
  }, [selectedLotId, selectedHistoricalOccupancyMonth, selectedPeakHoursDate, selectedRevenueGeneratedMonth, selectedTotalRevenueYear]);

  const handleLotChange = (lotId) => setSelectedLotId(lotId);
  const handleHistoricalOccupancyMonthChange = (e) => setSelectedHistoricalOccupancyMonth(e.target.value);
  const handlePeakHoursDateChange = (e) => setSelectedPeakHoursDate(e.target.value);
  const handleRevenueGeneratedMonthChange = (e) => setSelectedRevenueGeneratedMonth(e.target.value);
  const handleTotalRevenueYearChange = (e) => setSelectedTotalRevenueYear(e.target.value);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="parking-lot-page">
          <h1>Parking Lot Details</h1>
          
          <ParkingLotDropdown 
            lots={parkingLots}
            selectedLot={selectedLotId}
            onSelect={handleLotChange}
          />

          {selectedLotId && (
            <>
              <div className="charts">
                <div className="chart-container">
                  <h3>Historical Occupancy</h3>
                  <div className="filter-container">
                  <label>
                    Historical Occupancy - Select Month:
                    <input type="month" value={selectedHistoricalOccupancyMonth} onChange={handleHistoricalOccupancyMonthChange} />
                  </label>
                </div>
                  <HistoricalOccupancyChart data={occupancyData} />
                </div>

                <div className="chart-container">
                  <h3>Peak Hours</h3>
                  <div className="filter-container">
                  <label>
                    Peak Hours - Select Date:
                    <input type="date" value={selectedPeakHoursDate} onChange={handlePeakHoursDateChange} />
                  </label>
                </div>
                  <PeakHoursChart data={peakHoursData} />
                </div>

                <div className="chart-container">
                  <h3>Revenue Generated</h3>
                  <div className="filter-container">
                  <label>
                    Revenue Generated - Select Month:
                    <input type="month" value={selectedRevenueGeneratedMonth} onChange={handleRevenueGeneratedMonthChange} />
                  </label>
                </div>
                  <ParkingLotRevenueChart data={revenueData} />
                </div>

                <div className="chart-container">
                  <h3>Total Revenue Per Month</h3>
                  <div className="filter-container">
                  <label>
                    Total Revenue Per Month - Select Year:
                    <input type="number" value={selectedTotalRevenueYear} onChange={handleTotalRevenueYearChange} placeholder="YYYY" />
                  </label>
                </div>
                  <ParkingLotRevenueLineGraph data={monthlyRevenueData} />
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ParkingLotPage;
