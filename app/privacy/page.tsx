"use client";

import { Card } from '@/components/ui/card';
import { Shield, Lock, Eye, FileText, Cookie, Database, ChartBar, Phone } from 'lucide-react';
import { PrivacyHeader } from '@/components/privacy/privacy-header';
import { PrivacySection } from '@/components/privacy/privacy-section';
import Head from 'next/head';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <meta name="description" content="Understand how your data is collected, used, and protected while using the Backlink Quality Checker. Your privacy matters." />
      </Head>
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <PrivacyHeader />

          <Card className="p-8 bg-white/50 dark:bg-gray-900/50 shadow-lg border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm">
            <div className="space-y-8">
              <PrivacySection icon={Shield} title="Introduction">
                <p>
                  At Backlink Quality Checker, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our service.
                </p>
              </PrivacySection>

              <PrivacySection icon={Database} title="Information We Collect">
                <p>We collect the following types of information:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Website usage data</li>
                  <li>Technical information about your device and browser</li>
                  <li>Information you provide when using our tools</li>
                </ul>
              </PrivacySection>

              <PrivacySection icon={Cookie} title="Cookies and Tracking">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience and collect usage data:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Google Analytics 4 (GA4) for website analytics and performance monitoring</li>
                  <li>Advertising cookies to provide more relevant advertisements</li>
                  <li>Essential cookies for website functionality</li>
                </ul>
                <p className="mt-4">
                  You can control cookie preferences through your browser settings. However, disabling certain cookies may limit functionality.
                </p>
              </PrivacySection>

              <PrivacySection icon={Eye} title="How We Use Your Information">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Improve our services and user experience</li>
                  <li>Analyze website performance and usage patterns</li>
                  <li>Personalize content and advertisements</li>
                  <li>Communicate important updates and information</li>
                </ul>
              </PrivacySection>

              <PrivacySection icon={Lock} title="Data Security">
                <p>
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Encryption of sensitive data</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information</li>
                  <li>Secure data storage practices</li>
                </ul>
              </PrivacySection>

              <PrivacySection icon={FileText} title="Your Rights">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Control cookie preferences</li>
                </ul>
              </PrivacySection>

              <PrivacySection icon={ChartBar} title="Analytics and Advertising">
                <p>
                  We use Google Analytics 4 (GA4) to understand how users interact with our website. This helps us:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Analyze user behavior and preferences</li>
                  <li>Improve our services based on usage data</li>
                  <li>Measure the effectiveness of our features</li>
                </ul>
                <p className="mt-4">
                  We also use advertising cookies to serve relevant ads and measure their performance.
                </p>
              </PrivacySection>

              <PrivacySection icon={Phone} title="Contact Us">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-2">
                  <p>Email: privacy@sparkxseo.com</p>
                  <p>Address: 123 SEO Street, Digital City, DC 12345</p>
                </div>
              </PrivacySection>

              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Last updated: December 10, 2024
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}