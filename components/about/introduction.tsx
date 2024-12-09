"use client";

import { Card } from '@/components/ui/card';

export function Introduction() {
  return (
    <Card className="p-6 bg-white/50 dark:bg-gray-900/50 shadow-lg border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
        What is the Backlink Quality Checker?
      </h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-400">
        <p>
          The Backlink Quality Checker is a free, powerful tool designed to help businesses, bloggers, and marketers
          across all industries analyze and improve their backlink strategies. By evaluating key metrics like Domain
          Authority, Traffic Value, and Niche Relevance, it provides actionable insights to optimize your SEO
          performance and drive organic growth.
        </p>
        <p>
          Our tool stands out by offering comprehensive backlink analysis that helps you:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Evaluate the quality of potential backlink opportunities</li>
          <li>Make data-driven decisions about your link-building strategy</li>
          <li>Identify high-value linking domains in your niche</li>
          <li>Optimize your anchor text distribution</li>
          <li>Track and improve your overall backlink profile</li>
        </ul>
      </div>
    </Card>
  );
}