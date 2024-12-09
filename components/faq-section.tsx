"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is a backlink?",
    answer: "A backlink is a link from one website to another. In SEO terms, it's considered a 'vote of confidence' from one site to another, signaling to search engines that the content is valuable, credible, and useful. Quality backlinks from authoritative websites can significantly improve your site's search engine rankings."
  },
  {
    question: "How does the Backlink Score Calculator work?",
    answer: "The calculator evaluates backlinks based on four key metrics: Domain Authority (40%), Traffic Value (30%), Niche Relevance (20%), and Link Type (10%). It analyzes these factors to generate a comprehensive score from 0-100, along with detailed recommendations for improvement."
  },
  {
    question: "Why is Niche Relevance important?",
    answer: "Niche relevance ensures that backlinks come from websites that are topically related to your content. Search engines value contextual relevance highly, as it indicates that the link is natural and valuable to users. Higher niche relevance typically results in better SEO impact."
  },
  {
    question: "What's the difference between DoFollow and NoFollow links?",
    answer: "DoFollow links pass SEO value (also known as 'link juice') to your website, helping improve search rankings. NoFollow links include a rel='nofollow' attribute that tells search engines not to count the link for ranking purposes, though they can still drive referral traffic."
  },
  {
    question: "How often should I evaluate my backlinks?",
    answer: "It's recommended to evaluate your backlinks at least monthly to maintain a healthy link profile. Regular monitoring helps identify toxic links early, ensures continued quality, and helps you adjust your link-building strategy based on performance data."
  },
  {
    question: "What makes a high-quality backlink?",
    answer: "A high-quality backlink typically comes from a website with high domain authority, significant organic traffic, strong niche relevance, and uses DoFollow attribution. The link should appear naturally within relevant content and use appropriate anchor text."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        Frequently Asked Questions
      </h3>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-gray-500 transition-transform",
                  openIndex === index && "transform rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-200 ease-in-out",
                openIndex === index ? "max-h-96" : "max-h-0"
              )}
            >
              <p className="p-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}