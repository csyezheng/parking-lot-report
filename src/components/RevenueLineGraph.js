// src/components/RevenueLineGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const RevenueLineGraph = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.month), // Example: ['January', 'February', ...]
    datasets: [
      {
        label: 'Monthly Revenue',
        data: data.map(d => d.revenue),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default RevenueLineGraph;
