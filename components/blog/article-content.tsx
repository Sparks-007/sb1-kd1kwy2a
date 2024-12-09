"use client";

interface ArticleContentProps {
  children: React.ReactNode;
}

export function ArticleContent({ children }: ArticleContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <p className="lead text-lg text-gray-600 dark:text-gray-400">
        In the ever-evolving landscape of search engine optimization (SEO), backlinks remain a cornerstone of success. These critical "votes of confidence" from other websites signal to search engines that your content is valuable, credible, and worth ranking higher. However, not all backlinks are created equal. High-quality backlinks can boost your website's authority, while poor-quality ones can drag down your rankings.
      </p>
      {children}
    </div>
  );
}