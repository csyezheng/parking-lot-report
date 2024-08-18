// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', // Set your backend domain and port here
//   baseURL: process.env.REACT_APP_API_BASE_URL,
//   baseURL: '', // No need to specify domain and port
});

export default axiosInstance;
