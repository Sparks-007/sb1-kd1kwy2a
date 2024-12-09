import { NextResponse } from 'next/server';
import { calculateMetricScores, calculateFinalScore, getTier, getMetricScores } from '@/lib/calculate-score';
import { getRecommendations } from '@/lib/recommendations';
import { analyzeAnchorText } from '@/lib/anchor-text';
import { BacklinkData } from '@/types/backlink';

function isValidNumber(value: number, min: number, max?: number): boolean {
  if (isNaN(value) || value < min) return false;
  if (max !== undefined && value > max) return false;
  return true;
}

export async function POST(request: Request) {
  try {
    const data: BacklinkData = await request.json();

    // Validate input
    if (!data.websiteNiche?.trim()) {
      return NextResponse.json({ error: 'Website niche is required' }, { status: 400 });
    }

    if (!isValidNumber(data.domainAuthority, 0, 100) || 
        !isValidNumber(data.trafficValue, 0) || 
        !isValidNumber(data.nicheRelevance, 0, 10)) {
      return NextResponse.json({ error: 'Invalid metric values provided' }, { status: 400 });
    }

    // Calculate scores
    const scores = calculateMetricScores(data);
    const { score, weights } = calculateFinalScore(scores);
    const tier = getTier(score);
    const metricScores = getMetricScores(data, weights);
    const recommendations = getRecommendations(data, score);
    
    // Analyze anchor text if provided
    const anchorTextAnalysis = data.anchorText ? 
      analyzeAnchorText(data.anchorText, data.websiteNiche) : 
      undefined;
    
    return NextResponse.json({
      score,
      tier,
      recommendations,
      metricScores,
      anchorTextAnalysis
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to calculate score' },
      { status: 500 }
    );
  }
}