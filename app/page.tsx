"use client";

import { useState } from 'react';
import { BacklinkForm } from '@/components/backlink-form';
import { ResultsCard } from '@/components/results-card';
import { SeoContent } from '@/components/seo-content';
import { useToast } from '@/components/ui/use-toast';
import type { FormData, Result } from '@/types/backlink';

export default function Home() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    websiteNiche: '',
    domainAuthority: 50,
    trafficValue: 1000,
    nicheRelevance: 5,
    doFollow: true,
    anchorText: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleCalculate = async () => {
    if (!formData.websiteNiche.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your website niche",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze backlink quality');
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to analyze backlink quality",
      });
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Backlink Quality Checker
            </h1>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              by Spark X SEO
            </p>
          </div>
          <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empower Your SEO Strategy with Actionable Backlink Insights
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <BacklinkForm
            formData={formData}
            loading={loading}
            onSubmit={handleCalculate}
            onChange={setFormData}
          />
          <ResultsCard 
            result={result}
            websiteNiche={formData.websiteNiche}
          />
        </div>

        <div className="mt-12">
          <SeoContent />
        </div>
      </div>
    </main>
  );
}