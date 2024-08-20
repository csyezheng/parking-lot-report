// src/components/BatchImportParkingTransaction.js
import React, { useState } from 'react';
import axios from 'axios';

const BatchImportParkingTransaction = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8000/api/parking-transaction/import/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('File uploaded successfully!');
    } catch (error) {
      setUploadStatus(`File upload failed: ${error.response?.data?.error || error.message}`);
    }
  };

  return (
    <div className="batch-import-transaction">
      <h3>Batch Import Parking Transactions</h3>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{uploadStatus}</p>
    </div>
  );
};

export default BatchImportParkingTransaction;
