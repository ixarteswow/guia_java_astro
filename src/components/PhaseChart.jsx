import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PhaseChart = ({ labels, dataPoints, description = 'Gráfico de distribución de esfuerzo por categoría.' }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        data: dataPoints,
        backgroundColor: [
          '#f97316', // Orange 500
          '#3b82f6', // Blue 500
          '#64748b', // Slate 500
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
    },
    cutout: '70%',
  };

  return (
    <figure>
      <div
        style={{ width: '100%', height: '300px', maxWidth: '400px', margin: '0 auto' }}
        role="img"
        aria-label={description}
      >
        <Doughnut data={data} options={options} />
      </div>
      <figcaption className="sr-only">{description}</figcaption>
    </figure>
  );
};

export default PhaseChart;
