"use client";

export function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
      <p className="text-center text-sm text-gray-600 dark:text-gray-400">
        © {currentYear} Backlink Quality Checker by Spark X SEO. All rights reserved.
      </p>
    </div>
  );
}