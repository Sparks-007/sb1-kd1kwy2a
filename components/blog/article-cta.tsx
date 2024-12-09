"use client";

interface ArticleCtaProps {
  children: React.ReactNode;
}

export function ArticleCta({ children }: ArticleCtaProps) {
  return (
    <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
      {children}
    </div>
  );
}