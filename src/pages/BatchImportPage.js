// src/pages/BatchImportPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BatchImportParkingHistory from '../components/BatchImportParkingHistory';
import BatchImportParkingTransaction from '../components/BatchImportParkingTransaction';
import './BatchImportPage.css';

const BatchImportPage = () => {
  return (
    <div className="BatchImportPage">
      <Header />
      <main>
        <div className="batch-import-container">
          <h1>Batch Import Data</h1>
          
          {/* Parking History Import Section */}
          <section>
            <h2>Batch Import Parking History</h2>
            <p>
              Download the Excel template to ensure your data is formatted correctly before uploading.
            </p>
            <a href="http://localhost:8000/api/parking-history/template/" download>
              Download Parking History Excel Template
            </a>
            <BatchImportParkingHistory />
          </section>
          
          {/* Parking Transaction Import Section */}
          <section>
            <h2>Batch Import Parking Transactions</h2>
            <p>
              Download the Excel template to ensure your data is formatted correctly before uploading.
            </p>
            <a href="http://localhost:8000/api/parking-transaction/template/" download>
              Download Parking Transaction Excel Template
            </a>
            <BatchImportParkingTransaction />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BatchImportPage;
