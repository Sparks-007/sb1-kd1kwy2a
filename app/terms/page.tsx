"use client";

import { Card } from '@/components/ui/card';
import { TermsHeader } from '@/components/terms/terms-header';
import { TermsSection } from '@/components/terms/terms-section';
import { TermsAcceptance } from '@/components/terms/terms-acceptance';
import { TermsContact } from '@/components/terms/terms-contact';
import { Shield, Book, Cookie, AlertTriangle, Scale, Clock, Users, MessageSquare } from 'lucide-react';
import Head from 'next/head';

export default function TermsOfServicePage() {
  return (
    <>
      <Head>
        <meta name="description" content="Review the Terms of Service for the Backlink Quality Checker. Learn about usage guidelines, responsibilities, and support policies." />
      </Head>
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <TermsHeader />

          <Card className="p-8 bg-white/50 dark:bg-gray-900/50 shadow-lg border border-gray-100/50 dark:border-gray-800/50 backdrop-blur-sm">
            <div className="space-y-8">
              <TermsSection title="1. Acceptance of Terms">
                <p className="text-gray-600 dark:text-gray-400">
                  By accessing or using the Backlink Quality Checker service, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the service.
                </p>
              </TermsSection>

              <TermsSection title="2. Service Description">
                <p className="text-gray-600 dark:text-gray-400">
                  The Backlink Quality Checker is a tool designed to analyze and evaluate backlink quality for SEO purposes. We provide this service on an "as is" and "as available" basis.
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Analysis of backlink metrics</li>
                  <li>Quality scoring and recommendations</li>
                  <li>SEO insights and reporting</li>
                </ul>
              </TermsSection>

              <TermsSection title="3. Data Collection and Cookies">
                <p className="text-gray-600 dark:text-gray-400">
                  We use cookies and tracking technologies, including:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Google Analytics 4 (GA4) for usage analysis</li>
                  <li>Advertising cookies for targeted content</li>
                  <li>Essential cookies for service functionality</li>
                </ul>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  By using our service, you consent to the use of cookies in accordance with our Privacy Policy.
                </p>
              </TermsSection>

              <TermsSection title="4. User Responsibilities">
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Provide accurate information when using the service</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the service in compliance with applicable laws</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </TermsSection>

              <TermsSection title="5. Limitations of Use">
                <p className="text-gray-600 dark:text-gray-400">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Use the service for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Reproduce or distribute the service without permission</li>
                </ul>
              </TermsSection>

              <TermsSection title="6. Intellectual Property">
                <p className="text-gray-600 dark:text-gray-400">
                  All content, features, and functionality of the Backlink Quality Checker, including but not limited to text, graphics, logos, and software, are owned by us and protected by intellectual property laws.
                </p>
              </TermsSection>

              <TermsSection title="7. Disclaimer of Warranties">
                <p className="text-gray-600 dark:text-gray-400">
                  The service is provided "as is" without warranties of any kind, either express or implied. We do not guarantee the accuracy, completeness, or reliability of any results or information obtained through the service.
                </p>
              </TermsSection>

              <TermsSection title="8. Limitation of Liability">
                <p className="text-gray-600 dark:text-gray-400">
                  We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.
                </p>
              </TermsSection>

              <TermsSection title="9. Changes to Terms">
                <p className="text-gray-600 dark:text-gray-400">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the service. Continued use of the service after such modifications constitutes acceptance of the updated terms.
                </p>
              </TermsSection>

              <TermsAcceptance />
              <TermsContact />
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}