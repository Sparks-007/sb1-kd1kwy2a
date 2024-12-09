import { BacklinkData } from '@/types/backlink';

export function getRecommendations(data: BacklinkData, score: number): string[] {
  const recommendations: string[] = [];
  
  // Domain Authority recommendations
  if (data.domainAuthority < 30) {
    recommendations.push('Target websites with higher Domain Authority (30+) for better SEO impact');
  } else if (data.domainAuthority < 50) {
    recommendations.push('Consider focusing on websites with DA 50+ for stronger link equity');
  }
  
  // Traffic recommendations
  if (data.trafficValue < 1000) {
    recommendations.push('Look for sites with more monthly organic traffic (1000+ visits)');
  } else if (data.trafficValue < 5000) {
    recommendations.push('Target sites with 5000+ monthly visitors for better exposure');
  }
  
  // Niche relevance recommendations
  if (data.nicheRelevance < 7) {
    recommendations.push(`Focus on websites more closely related to ${data.websiteNiche}`);
    if (data.nicheRelevance < 4) {
      recommendations.push('Consider guest posting on industry-specific blogs');
    }
  }
  
  // Link type recommendations
  if (!data.doFollow) {
    recommendations.push('Prioritize doFollow links for better SEO value');
  }
  
  // Overall score-based recommendations
  if (score < 40) {
    recommendations.push('Consider improving your outreach strategy to target higher-quality websites');
  } else if (score >= 80) {
    recommendations.push('Excellent backlink profile! Maintain this quality standard for future links');
  }
  
  return recommendations;
}