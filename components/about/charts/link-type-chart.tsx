"use client";

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card } from '@/components/ui/card';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['DoFollow', 'NoFollow'],
  datasets: [{
    data: [30, 70],
    backgroundColor: [
      '#007bff', // Blue for DoFollow
      '#6c757d', // Gray for NoFollow
    ],
    hoverBackgroundColor: [
      '#0056b3', // Darker blue for DoFollow hover
      '#545b62', // Darker gray for NoFollow hover
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
            text: `${label} (${datasets[0].data[i]}%)`,
            fillStyle: datasets[0].backgroundColor[i],
            hidden: false,
            index: i,
          }));
        },
      },
    },
    tooltip: {
      callbacks: {
        label: (context: any) => `${context.label}: ${context.raw}%`,
      },
    },
  },
};

export function LinkTypeChart() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Link Type Distribution</h3>
      <div className="h-[200px]">
        <Pie data={data} options={options} />
      </div>
    </Card>
  );
}