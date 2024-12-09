"use client";

interface ArticleSectionProps {
  title: string;
  children: React.ReactNode;
}

export function ArticleSection({ title, children }: ArticleSectionProps) {
  return (
    <section className="space-y-4 mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-400">
        {children}
      </div>
    </section>
  );
}