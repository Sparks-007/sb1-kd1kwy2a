"use client";

import { FooterSections } from './footer-sections';
import { FooterCopyright } from './footer-copyright';

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <FooterSections />
        <FooterCopyright />
      </div>
    </footer>
  );
}