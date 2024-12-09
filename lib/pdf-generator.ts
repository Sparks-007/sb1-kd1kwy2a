import { jsPDF } from 'jspdf';
import { Result } from '@/types/backlink';
import { metrics } from './metrics';

export const generatePDF = (result: Result, websiteNiche: string) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFontSize(20);
  doc.text('Backlink Analysis Report', pageWidth / 2, 20, { align: 'center' });
  
  // Overall Score
  doc.setFontSize(16);
  doc.text(`Overall Score: ${result.score} - ${result.tier} Quality`, pageWidth / 2, 40, { align: 'center' });
  
  // Website Niche
  doc.setFontSize(12);
  doc.text(`Website Niche: ${websiteNiche}`, 20, 60);
  
  // Metric Scores
  doc.setFontSize(14);
  doc.text('Metric Breakdown:', 20, 80);
  
  let yPos = 90;
  result.metricScores.forEach((metric) => {
    doc.setFontSize(12);
    doc.text(`${metric.label}: ${metric.score.toFixed(1)} (Weight: ${(metric.weight * 100).toFixed(0)}%)`, 30, yPos);
    yPos += 10;
  });
  
  // Recommendations
  yPos += 10;
  doc.setFontSize(14);
  doc.text('Recommendations:', 20, yPos);
  yPos += 10;
  
  result.recommendations.forEach((rec) => {
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(`• ${rec}`, pageWidth - 40);
    lines.forEach((line: string) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.text(line, 30, yPos);
      yPos += 10;
    });
  });
  
  // Anchor Text Analysis
  if (result.anchorTextAnalysis) {
    yPos += 10;
    doc.setFontSize(14);
    doc.text('Anchor Text Analysis:', 20, yPos);
    yPos += 10;
    
    doc.setFontSize(12);
    doc.text(`Type: ${result.anchorTextAnalysis.type}`, 30, yPos);
    yPos += 10;
    
    result.anchorTextAnalysis.suggestions.forEach((suggestion) => {
      const lines = doc.splitTextToSize(`• ${suggestion}`, pageWidth - 40);
      lines.forEach((line: string) => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(line, 30, yPos);
        yPos += 10;
      });
    });
  }
  
  // Footer
  const today = new Date().toLocaleDateString();
  doc.setFontSize(10);
  doc.text(`Generated on ${today}`, pageWidth - 20, 280, { align: 'right' });
  
  return doc;
};