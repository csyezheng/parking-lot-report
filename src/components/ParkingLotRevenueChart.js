// src/components/ParkingLotRevenueChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ParkingLotRevenueChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.date), // Dates
    datasets: [
      {
        label: 'Revenue Generated',
        data: data.map(d => d.revenue), // Revenue data
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default ParkingLotRevenueChart;
