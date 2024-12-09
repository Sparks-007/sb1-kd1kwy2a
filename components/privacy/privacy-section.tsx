"use client";

import { LucideIcon } from 'lucide-react';

interface PrivacySectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export function PrivacySection({ icon: Icon, title, children }: PrivacySectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <Icon className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="space-y-3 text-gray-600 dark:text-gray-400">
        {children}
      </div>
    </section>
  );
}