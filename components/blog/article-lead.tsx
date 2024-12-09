"use client";

interface ArticleLeadProps {
  children: React.ReactNode;
}

export function ArticleLead({ children }: ArticleLeadProps) {
  return (
    <p className="lead text-lg text-gray-600 dark:text-gray-400 mb-8">
      {children}
    </p>
  );
}