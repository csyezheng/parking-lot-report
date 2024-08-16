import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParkingLotSummary from '../components/ParkingLotSummary';
import HistoricalOccupancyChart from '../components/HistoricalOccupancyChart';
import PeakHoursChart from '../components/PeakHoursChart';
import ParkingLotRevenueChart from '../components/ParkingLotRevenueChart';
import ParkingLotRevenueLineGraph from '../components/ParkingLotRevenueLineGraph';
import ParkingLotDropdown from '../components/ParkingLotDropdown';
import './ParkingLotPage.css'; // Import the CSS file

const ParkingLotPage = () => {
  const [selectedLotId, setSelectedLotId] = useState('');

  // Mock data for parking lots
  const parkingLots = [
    { id: '1', name: 'Main Street Parking' },
    { id: '2', name: 'Riverside Parking' },
    { id: '3', name: 'Downtown Parking' }
  ];

  // Mock data for different parking lots
  const parkingLotData = {
    '1': {
      summary: {
        lotName: 'Main Street Parking',
        location: '123 Main St',
        totalCapacity: 100,
        currentOccupancy: 75,
      },
      historicalOccupancy: [
        { date: '2024-08-01', occupancy: 60 },
        { date: '2024-08-02', occupancy: 70 },
        { date: '2024-08-03', occupancy: 65 },
      ],
      peakHours: [
        { hour: '08:00', occupancy: 50 },
        { hour: '12:00', occupancy: 70 },
        { hour: '18:00', occupancy: 90 },
      ],
      revenueData: [
        { date: '2024-08-01', revenue: 500 },
        { date: '2024-08-02', revenue: 600 },
        { date: '2024-08-03', revenue: 550 },
      ],
      monthlyRevenueData: [
        { month: 'January', revenue: 12000 },
        { month: 'February', revenue: 13000 },
        // more months...
      ],
    },
    // Add similar data for other lots with ids '2' and '3'
    // For simplicity, I'm adding the same data for other lots here
    '2': { /* similar data */ },
    '3': { /* similar data */ },
  };

  const handleLotChange = (lotId) => {
    setSelectedLotId(lotId);
  };

  const selectedLot = parkingLotData[selectedLotId] || {};
  
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
              <ParkingLotSummary
                lotName={selectedLot.summary?.lotName}
                location={selectedLot.summary?.location}
                totalCapacity={selectedLot.summary?.totalCapacity}
                currentOccupancy={selectedLot.summary?.currentOccupancy}
              />

              <div className="charts">
                <div className="chart-container">
                  <h3>Historical Occupancy</h3>
                  <HistoricalOccupancyChart data={selectedLot.historicalOccupancy} />
                </div>

                <div className="chart-container">
                  <h3>Peak Hours</h3>
                  <PeakHoursChart data={selectedLot.peakHours} />
                </div>

                <div className="chart-container">
                  <h3>Revenue Generated</h3>
                  <ParkingLotRevenueChart data={selectedLot.revenueData} />
                </div>

                <div className="chart-container">
                  <h3>Total Revenue Per Month</h3>
                  <ParkingLotRevenueLineGraph data={selectedLot.monthlyRevenueData} />
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
