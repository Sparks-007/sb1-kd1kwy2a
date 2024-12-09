export interface MetricInfo {
  label: string;
  description: string;
  weight: number;
  getRecommendation: (value: number) => string;
}

export const metrics: Record<string, MetricInfo> = {
  domainAuthority: {
    label: "Domain Authority",
    description: "Measures the website's overall SEO strength (0-100)",
    weight: 0.4,
    getRecommendation: (value: number) => {
      if (value < 30) return "Your backlink's domain authority is quite low. Focus on sites with DA 30+ for better SEO impact.";
      if (value < 50) return "Your backlink's domain authority is below average. Target sites with DA 50+ to enhance credibility.";
      return "Great domain authority! This backlink will positively impact your SEO.";
    }
  },
  trafficValue: {
    label: "Monthly Traffic",
    description: "Estimated monthly organic visitors to the website",
    weight: 0.3,
    getRecommendation: (value: number) => {
      if (value < 1000) return "The referring site has low traffic. Seek backlinks from sites with higher traffic to improve exposure.";
      if (value < 5000) return "Moderate traffic levels. Consider targeting sites with 5000+ monthly visitors for better reach.";
      return "Excellent traffic levels! This backlink will provide good exposure.";
    }
  },
  nicheRelevance: {
    label: "Niche Relevance",
    description: "How closely the linking site matches your niche (0-10)",
    weight: 0.2,
    getRecommendation: (value: number) => {
      if (value < 5) return "Low niche relevance. Try to get backlinks from more relevant websites in your industry.";
      if (value < 8) return "Good niche relevance. Continue focusing on industry-related websites.";
      return "Excellent niche relevance! The strong topical relationship will boost SEO impact.";
    }
  },
  doFollow: {
    label: "Link Type",
    description: "Whether the link passes SEO value (doFollow vs noFollow)",
    weight: 0.1,
    getRecommendation: (value: number) => {
      return value ? "The DoFollow link positively impacts your SEO." : "NoFollow links provide less SEO value. Try to obtain more DoFollow links.";
    }
  }
};