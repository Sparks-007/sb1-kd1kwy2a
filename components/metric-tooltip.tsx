import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import { metrics } from "@/lib/metrics";

interface MetricTooltipProps {
  metricKey: keyof typeof metrics;
}

export function MetricTooltip({ metricKey }: MetricTooltipProps) {
  const metric = metrics[metricKey];
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <HelpCircle className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </TooltipTrigger>
        <TooltipContent>
          <div className="max-w-xs">
            <p className="font-medium mb-1">{metric.label}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {metric.description}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Weight: {(metric.weight * 100).toFixed(0)}% of total score
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}