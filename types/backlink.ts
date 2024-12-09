export interface BacklinkData {
  websiteNiche: string;
  domainAuthority: number;
  trafficValue: number;
  nicheRelevance: number;
  doFollow: boolean;
  anchorText?: string;
}

export interface FormData extends BacklinkData {}

export interface MetricScore {
  score: number;
  weight: number;
  label: string;
}

export interface Result {
  score: number;
  tier: string;
  recommendations: string[];
  metricScores: MetricScore[];
  anchorTextAnalysis?: {
    type: string;
    suggestions: string[];
    metrics: {
      length: number;
      words: number;
      containsNiche: boolean;
    };
  };
}