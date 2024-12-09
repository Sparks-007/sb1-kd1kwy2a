"use client";

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card } from '@/components/ui/card';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Highly Relevant', 'Moderately Relevant', 'Irrelevant'],
  datasets: [{
    data: [40, 35, 25],
    backgroundColor: [
      '#4CAF50', // Green
      '#FFA726', // Orange
      '#EF5350', // Red
    ],
    hoverBackgroundColor: [
      '#43A047',
      '#FB8C00',
      '#E53935',
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

export function NicheRelevanceChart() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Niche Relevance</h3>
      <div className="h-[200px]">
        <Pie data={data} options={options} />
      </div>
    </Card>
  );
}