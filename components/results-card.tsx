"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Gauge, AlertCircle, Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import type { Result } from '@/types/backlink';
import { generatePDF } from '@/lib/pdf-generator';

interface ResultsCardProps {
  result: Result | null;
  websiteNiche: string;
}

export function ResultsCard({ result, websiteNiche }: ResultsCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'score-excellent';
    if (score >= 60) return 'score-good';
    if (score >= 40) return 'score-moderate';
    return 'score-low';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return 'bg-score-excellent';
    if (score >= 60) return 'bg-score-good';
    if (score >= 40) return 'bg-score-moderate';
    return 'bg-score-low';
  };

  const getAnchorTextAlert = (type: string) => {
    switch (type) {
      case 'Exact Match':
        return {
          title: 'Exact Match Anchor Text',
          description: 'High keyword relevance but avoid overuse to maintain natural link profile.'
        };
      case 'Partial Match':
        return {
          title: 'Partial Match Anchor Text',
          description: 'Good balance of keyword relevance and natural text. Ideal for SEO.'
        };
      case 'Generic (Low Value)':
        return {
          title: 'Generic Anchor Text',
          description: 'Consider using more descriptive and relevant anchor text.'
        };
      default:
        return {
          title: type,
          description: 'Analyze the suggestions below to optimize your anchor text.'
        };
    }
  };

  const handleDownloadPDF = () => {
    if (!result) return;
    
    const doc = generatePDF(result, websiteNiche);
    doc.save('backlink-analysis.pdf');
  };

  return (
    <Card className="p-6 space-y-6 bg-white dark:bg-gray-900 shadow-lg transition-all hover:shadow-xl border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
          <Gauge className="w-6 h-6" />
          Results
        </h2>
        {result && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadPDF}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        )}
      </div>

      {result ? (
        <div className="space-y-6">
          <div className="text-center">
            <div className={cn("text-6xl font-bold mb-2", getScoreColor(result.score))}>
              {result.score}
            </div>
            <div className="text-xl font-medium text-gray-900 dark:text-gray-100">
              {result.tier} Quality
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Metric Breakdown:</h3>
            <div className="space-y-3">
              {result.metricScores.map((metric, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger className="w-full">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-900 dark:text-gray-100">{metric.label}</span>
                        <span className={getScoreColor(metric.score)}>
                          {metric.score.toFixed(1)} ({(metric.weight * 100).toFixed(0)}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 mt-1.5">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all",
                            getScoreBackground(metric.score)
                          )}
                          style={{ width: `${metric.score}%` }}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Contributes {(metric.weight * result.score).toFixed(1)} points to total score</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          {result.anchorTextAnalysis && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Anchor Text Analysis:</h3>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>{getAnchorTextAlert(result.anchorTextAnalysis.type).title}</AlertTitle>
                <AlertDescription>
                  {getAnchorTextAlert(result.anchorTextAnalysis.type).description}
                </AlertDescription>
              </Alert>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Length</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {result.anchorTextAnalysis.metrics.length} chars
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Words</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {result.anchorTextAnalysis.metrics.words}
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="font-medium text-gray-900 dark:text-gray-100">Niche Match</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {result.anchorTextAnalysis.metrics.containsNiche ? 'Yes' : 'No'}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-gray-900 dark:text-gray-100">Suggestions:</div>
                <ul className="list-disc list-inside space-y-1.5">
                  {result.anchorTextAnalysis.suggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Recommendations:</h3>
            <ul className="space-y-2">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                  • {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-600 dark:text-gray-400">
          Enter your backlink metrics and calculate to see results
        </div>
      )}
    </Card>
  );
}