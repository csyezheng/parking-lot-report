// src/components/SummaryCard.js
import React from 'react';

const SummaryCard = ({ title, value }) => {
  return (
    <div style={{ padding: '20px', margin: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
      <h3>{title}</h3>
      <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{value}</p>
    </div>
  );
};

export default SummaryCard;
