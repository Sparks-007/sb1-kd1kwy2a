"use client";

interface ArticleListProps {
  items: string[];
  ordered?: boolean;
}

export function ArticleList({ items, ordered = false }: ArticleListProps) {
  const ListComponent = ordered ? 'ol' : 'ul';
  
  return (
    <ListComponent className="space-y-2 ml-6 text-gray-600 dark:text-gray-400">
      {items.map((item, index) => (
        <li key={index} className="list-disc">{item}</li>
      ))}
    </ListComponent>
  );
}