"use client";

export function TermsHeader() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
        Terms of Service
      </h1>
      <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Last Updated: 10-12-2024
      </p>
    </div>
  );
}