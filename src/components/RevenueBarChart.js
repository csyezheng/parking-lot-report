// src/components/RevenueBarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const RevenueBarChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.lotName), // Parking lot names
    datasets: [
      {
        label: 'Total Revenue',
        data: data.map(d => d.revenue), // Revenue for each parking lot
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue (USD)',
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend if there's only one dataset
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default RevenueBarChart;
