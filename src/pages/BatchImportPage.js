// src/pages/BatchImportPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BatchImportParkingHistory from '../components/BatchImportParkingHistory';
import './BatchImportPage.css';

const BatchImportPage = () => {
  return (
    <div className="BatchImportPage">
      <Header />
      <main>
        <div className="batch-import-container">
          <h1>Batch Import Parking History</h1>
          <p>
            Download the Excel template to ensure your data is formatted correctly before uploading.
          </p>
          <a href="http://localhost:8000/api/parking-history/template/" download>
            Download Excel Template
          </a>
          <BatchImportParkingHistory />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BatchImportPage;
