"use client";

interface ArticleHeaderProps {
  title: string;
  date: string;
  readTime: string;
}

export function ArticleHeader({ title, date, readTime }: ArticleHeaderProps) {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
        {title}
      </h1>
      <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>
    </div>
  );
}