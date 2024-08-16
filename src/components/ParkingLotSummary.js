// src/components/ParkingLotSummary.js
import React from 'react';

const ParkingLotSummary = ({ lotName, location, totalCapacity, currentOccupancy }) => {
  return (
    <div style={{ padding: '20px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>{lotName}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Total Capacity:</strong> {totalCapacity} spaces</p>
      <p><strong>Current Occupancy:</strong> {currentOccupancy} spaces</p>
    </div>
  );
};

export default ParkingLotSummary;
