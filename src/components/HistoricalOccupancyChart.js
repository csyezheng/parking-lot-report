// src/components/HistoricalOccupancyChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const HistoricalOccupancyChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.date), // Dates as labels
    datasets: [
      {
        label: 'Occupancy Over Time',
        data: data.map(d => d.occupancy), // Occupancy data
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default HistoricalOccupancyChart;
