"use client";

import { Card } from '@/components/ui/card';
import { FAQSection } from './faq-section';

export function SeoContent() {
  return (
    <Card className="p-8 space-y-6 bg-white/50 dark:bg-gray-900/50 shadow-lg border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm">
      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            What is the Backlink Quality Checker?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Backlink Quality Checker is an advanced SEO tool designed to help website owners and digital marketers evaluate and optimize their backlink strategy. By analyzing crucial metrics like Domain Authority, Traffic Value, and Niche Relevance, this tool provides actionable insights to enhance your website&apos;s SEO performance and link-building efforts.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Key Features
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Domain Authority Analysis:</strong> Evaluate the SEO strength of linking domains with scores from 0-100, helping you target high-authority websites.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Traffic Value Assessment:</strong> Measure the potential impact of backlinks based on the referring site&apos;s organic traffic.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Niche Relevance Scoring:</strong> Determine how closely the linking site matches your website&apos;s topic for maximum SEO benefit.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Anchor Text Analysis:</strong> Get insights into anchor text optimization with specific recommendations.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Benefits of Using Our Tool
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Data-Driven Decisions:</strong> Make informed choices about which backlinks to pursue based on comprehensive metrics.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Time Efficiency:</strong> Quickly evaluate potential link opportunities without manual research.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Strategic Insights:</strong> Receive personalized recommendations to improve your link-building strategy.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Quality Control:</strong> Maintain high standards in your backlink profile by identifying valuable opportunities.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            How to Use the Tool Effectively
          </h3>
          <ol className="space-y-3 text-gray-700 dark:text-gray-300 list-decimal pl-5">
            <li>Select your website&apos;s niche from the dropdown menu for accurate relevance scoring.</li>
            <li>Enter the Domain Authority of the potential linking website (0-100).</li>
            <li>Input the monthly organic traffic value of the linking site.</li>
            <li>Rate the niche relevance on a scale of 0-10 based on content alignment.</li>
            <li>Specify whether the link will be doFollow or noFollow.</li>
            <li>Optionally, include anchor text for additional analysis and recommendations.</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Why Backlink Quality Matters
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            High-quality backlinks remain one of the most important ranking factors in search engine algorithms. They serve as &quot;votes of confidence&quot; from other websites, signaling to search engines that your content is valuable and authoritative. However, not all backlinks are created equal. The quality, relevance, and authority of linking domains significantly impact their SEO value. Our checker helps you focus your efforts on acquiring backlinks that will genuinely benefit your website&apos;s search engine rankings.
          </p>
        </div>

        <FAQSection />

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-blue-800 dark:text-blue-200 text-center font-medium">
            Start evaluating your backlink opportunities today and build a stronger SEO strategy with data-driven insights.
          </p>
        </div>
      </section>
    </Card>
  );
}