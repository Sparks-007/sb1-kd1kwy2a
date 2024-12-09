"use client";

import { ReactNode } from 'react';

interface FooterSectionProps {
  title: string;
  children: ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h4>
      {children}
    </div>
  );
}