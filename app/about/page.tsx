"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, ExternalLink, Rocket, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { Introduction } from '@/components/about/introduction';
import { BacklinkChart } from '@/components/about/backlink-chart';
import { Card } from '@/components/ui/card';
import Head from 'next/head';

export default function AboutPage() {
  const [openSections, setOpenSections] = useState({
    why: false,
    empowering: false,
    powered: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      <Head>
        <meta name="description" content="Learn about the mission and values behind the Backlink Quality Checker, designed to help businesses and marketers achieve SEO success." />
      </Head>
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              About Backlink Quality Checker
            </h1>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Empowering Your SEO with Backlink Insights
            </p>
          </div>

          <Introduction />
          <BacklinkChart />

          <div className="space-y-6">
            {/* Why Did We Create It for Free? Section */}
            <Card className="bg-white/50 dark:bg-gray-900/50 shadow-lg border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm">
              <button
                onClick={() => toggleSection('why')}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Why Did We Create It for Free?</h2>
                </div>
                {openSections.why ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openSections.why && (
                <div className="px-6 pb-4 animate-in slide-in-from-top">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    We believe in democratizing SEO tools and making them accessible to everyone. Our free
                    Backlink Quality Checker represents our commitment to supporting the digital marketing
                    community, helping businesses and individuals make informed decisions about their
                    link-building strategies without financial barriers.
                  </p>
                </div>
              )}
            </Card>

            {/* Empowering Small Businesses Section */}
            <Card className="bg-white/50 dark:bg-gray-900/50 shadow-lg border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm">
              <button
                onClick={() => toggleSection('empowering')}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Empowering Small Businesses, Bloggers, and Marketers</h2>
                </div>
                {openSections.empowering ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openSections.empowering && (
                <div className="px-6 pb-4 animate-in slide-in-from-top">
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2 hover:text-blue-500 transition-colors">
                      <span className="mt-1.5">•</span>
                      <span>Providing enterprise-level SEO analysis tools at no cost</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-blue-500 transition-colors">
                      <span className="mt-1.5">•</span>
                      <span>Helping you make data-driven decisions about your backlink strategy</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-blue-500 transition-colors">
                      <span className="mt-1.5">•</span>
                      <span>Supporting sustainable growth through quality link building</span>
                    </li>
                  </ul>
                </div>
              )}
            </Card>

            {/* Powered by Spark X SEO Section */}
            <Card className="bg-white/50 dark:bg-gray-900/50 shadow-lg border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm">
              <button
                onClick={() => toggleSection('powered')}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <h2 className="text-xl font-semibold">Powered by Spark X SEO</h2>
                </div>
                {openSections.powered ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openSections.powered && (
                <div className="px-6 pb-4 animate-in slide-in-from-top">
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    At Spark X SEO, we specialize in:
                  </p>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2 hover:text-blue-500 transition-colors">
                      <span className="mt-1.5">•</span>
                      <span>Advanced SEO analysis and optimization</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-blue-500 transition-colors">
                      <span className="mt-1.5">•</span>
                      <span>Data-driven link building strategies</span>
                    </li>
                    <li className="flex items-start gap-2 hover:text-blue-500 transition-colors">
                      <span className="mt-1.5">•</span>
                      <span>Comprehensive SEO tools and solutions</span>
                    </li>
                  </ul>
                </div>
              )}
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Ready to evaluate your backlinks?
            </p>
            <Link href="/">
              <Button size="lg" className="gap-2">
                Start Using the Backlink Quality Checker Now!
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}