"use client";

import { Card } from '@/components/ui/card';
import { DomainAuthorityChart } from './charts/domain-authority-chart';
import { NicheRelevanceChart } from './charts/niche-relevance-chart';
import { LinkTypeChart } from './charts/link-type-chart';
import { AnchorTextChart } from './charts/anchor-text-chart';

export function BacklinkChart() {
  return (
    <Card className="p-6 bg-white/50 dark:bg-gray-900/50 shadow-lg border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Backlink Quality Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DomainAuthorityChart />
        <NicheRelevanceChart />
        <LinkTypeChart />
        <AnchorTextChart />
      </div>
      <p className="mt-6 text-sm text-gray-600 dark:text-gray-400 text-center">
        Comprehensive analysis of backlink quality metrics and their distribution
      </p>
    </Card>
  );
}