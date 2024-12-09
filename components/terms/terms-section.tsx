"use client";

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

export function TermsSection({ title, children }: TermsSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <div className="space-y-3">
        {children}
      </div>
    </section>
  );
}