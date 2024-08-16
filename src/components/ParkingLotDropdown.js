import React from 'react';

const ParkingLotDropdown = ({ lots, selectedLot, onSelect }) => {
  return (
    <div className="dropdown-container">
      <label htmlFor="parking-lot">Select Parking Lot:</label>
      <select 
        id="parking-lot" 
        value={selectedLot} 
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Select...</option>
        {lots.map((lot) => (
          <option key={lot.id} value={lot.id}>
            {lot.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ParkingLotDropdown;
