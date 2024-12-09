"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';

const blogPosts = [
  {
    id: 'high-quality-backlinks',
    title: 'The Importance of High-Quality Backlinks in SEO Success',
    excerpt: 'Learn how quality backlinks can significantly impact your website\'s search engine rankings and why not all backlinks are created equal.',
    date: 'December 7, 2024',
    readTime: '5 min read',
    slug: '/blog/high-quality-backlinks'
  },
  {
    id: 'saas-backlink-strategy',
    title: 'How to Build a Backlink Strategy for Your SaaS Business',
    excerpt: 'Discover how to create an effective backlink strategy specifically tailored for SaaS companies, overcome unique challenges, and drive sustainable growth.',
    date: 'December 8, 2024',
    readTime: '8 min read',
    slug: '/blog/saas-backlink-strategy'
  },
  {
    id: 'anchor-text-optimization',
    title: 'Anchor Text Optimization: Best Practices for Better SEO',
    excerpt: 'Learn anchor text optimization best practices to boost SEO rankings. Discover tips, avoid mistakes, and analyze anchor text with expert insights.',
    date: 'December 9, 2024',
    readTime: '6 min read',
    slug: '/blog/anchor-text-optimization'
  }
];

export default function BlogPage() {
  return (
    <>
      <Head>
        <meta name="description" content="Explore our latest blogs on SEO, backlink strategies, and digital marketing trends. Stay updated with actionable insights and tips." />
      </Head>
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Blog
            </h1>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Insights and guides for better SEO performance
            </p>
          </div>

          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <Card 
                key={post.id}
                className="p-6 bg-white/50 dark:bg-gray-900/50 shadow-lg transition-all hover:shadow-xl border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm"
              >
                <article className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-4">
                    <Link href={post.slug}>
                      <Button variant="outline" className="gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}