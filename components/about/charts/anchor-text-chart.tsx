"use client";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Card } from '@/components/ui/card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Exact Match', 'Partial Match', 'Branded', 'Generic', 'Naked URLs'],
  datasets: [{
    label: 'Percentage',
    data: [20, 25, 30, 15, 10],
    backgroundColor: '#3F51B5',
    hoverBackgroundColor: '#303F9F',
  }],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => `${context.raw}%`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        callback: (value: number) => `${value}%`,
      },
    },
  },
};

export function AnchorTextChart() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Anchor Text Distribution</h3>
      <div className="h-[200px]">
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
}