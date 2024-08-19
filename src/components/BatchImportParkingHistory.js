// src/components/BatchImportParkingHistory.js
import React, { useState } from 'react';
import axios from 'axios';

const BatchImportParkingHistory = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
    setSuccess('');
  };

  const handleFileUpload = async () => {
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    // Create a FormData object and append the file
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/api/parking-history/import/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setSuccess('Data imported successfully!');
      } else {
        setError('Failed to import data.');
      }
    } catch (error) {
      console.error('Error importing data:', error);
      setError('Error importing data.');
    }
  };

  return (
    <div>
      <h2>Batch Import Parking History</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default BatchImportParkingHistory;
