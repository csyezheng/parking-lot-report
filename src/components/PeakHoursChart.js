// src/components/PeakHoursChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const PeakHoursChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.hour), // Hours of the day
    datasets: [
      {
        label: 'Number of Cars Parked',
        data: data.map(d => d.occupancy),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
          text: 'Cars Parked',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Hour of Day',
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default PeakHoursChart;
