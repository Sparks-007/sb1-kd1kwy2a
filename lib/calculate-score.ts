import { BacklinkData } from '@/types/backlink';

export function calculateMetricScores(data: BacklinkData) {
  const daScore = data.domainAuthority;
  const trafficScore = Math.min(Math.log10(Math.max(data.trafficValue, 1)) * 20, 100);
  const nicheScore = data.nicheRelevance * 10;
  const followScore = data.doFollow ? 100 : 60;

  return {
    daScore,
    trafficScore,
    nicheScore,
    followScore
  };
}

export function calculateFinalScore(scores: ReturnType<typeof calculateMetricScores>) {
  const weights = {
    da: 0.4,
    traffic: 0.3,
    niche: 0.2,
    follow: 0.1
  };

  const score = Math.min(Math.round(
    scores.daScore * weights.da +
    scores.trafficScore * weights.traffic +
    scores.nicheScore * weights.niche +
    scores.followScore * weights.follow
  ), 100);

  return { score, weights };
}

export function getTier(score: number): string {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Moderate';
  return 'Low';
}

export function getMetricScores(data: BacklinkData, weights: Record<string, number>) {
  const scores = calculateMetricScores(data);
  
  return [
    { score: scores.daScore, weight: weights.da, label: 'Domain Authority' },
    { score: scores.trafficScore, weight: weights.traffic, label: 'Traffic Value' },
    { score: scores.nicheScore, weight: weights.niche, label: 'Niche Relevance' },
    { score: scores.followScore, weight: weights.follow, label: 'Link Type' }
  ];
}