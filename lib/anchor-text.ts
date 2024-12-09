interface AnchorTextMetrics {
  length: number;
  words: number;
  containsNiche: boolean;
}

export function analyzeAnchorText(anchorText: string, niche: string) {
  const text = anchorText.toLowerCase();
  const nicheText = niche.toLowerCase();
  const words = text.split(/\s+/);
  
  const metrics: AnchorTextMetrics = {
    length: text.length,
    words: words.length,
    containsNiche: text.includes(nicheText)
  };

  let type = 'Generic';
  const suggestions: string[] = [];
  
  if (text === nicheText) {
    type = 'Exact Match';
    suggestions.push('Consider varying anchor text to maintain a natural link profile');
    suggestions.push('Mix with branded and partial match anchors for diversity');
  } else if (text.includes(nicheText)) {
    type = 'Partial Match';
    suggestions.push('Good balance of keyword relevance and natural text');
    suggestions.push('Continue using variations to maintain diversity');
  } else if (words.length <= 2 && (
    text.includes('click') ||
    text.includes('here') ||
    text.includes('link') ||
    text.includes('this')
  )) {
    type = 'Generic (Low Value)';
    suggestions.push('Avoid generic anchor text like "click here" or "read more"');
    suggestions.push(`Include relevant terms from your niche: "${niche}"`);
  } else if (text.length < 3) {
    type = 'Too Short';
    suggestions.push('Use more descriptive anchor text (3-50 characters)');
  } else if (text.length > 50) {
    type = 'Long-form';
    suggestions.push('Consider using more concise anchor text for better user experience');
    suggestions.push('Aim for 3-50 characters in length');
  }
  
  if (!suggestions.length) {
    suggestions.push('Maintain a diverse anchor text profile');
    suggestions.push(`Include relevant terms from your niche naturally: "${niche}"`);
  }
  
  return { type, suggestions, metrics };
}