"use client";

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card } from '@/components/ui/card';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['0-20', '21-40', '41-60', '61-80', '81-100'],
  datasets: [{
    data: [25, 30, 20, 15, 10],
    backgroundColor: [
      '#E3F2FD', // Lightest blue
      '#90CAF9',
      '#42A5F5',
      '#1E88E5',
      '#1565C0', // Darkest blue
    ],
    hoverBackgroundColor: [
      '#C1E3FC',
      '#64B5F6',
      '#2196F3',
      '#1976D2',
      '#0D47A1',
    ],
  }],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
      labels: {
        generateLabels: (chart: any) => {
          const datasets = chart.data.datasets;
          return chart.data.labels.map((label: string, i: number) => ({
            text: `${label} DA (${datasets[0].data[i]}%)`,
            fillStyle: datasets[0].backgroundColor[i],
            hidden: false,
            index: i,
          }));
        },
      },
    },
    tooltip: {
      callbacks: {
        label: (context: any) => `Domain Authority ${context.label}: ${context.raw}%`,
      },
    },
  },
};

export function DomainAuthorityChart() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Domain Authority Distribution</h3>
      <div className="h-[200px]">
        <Doughnut data={data} options={options} />
      </div>
    </Card>
  );
}