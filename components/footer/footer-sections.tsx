"use client";

import { Twitter, Linkedin } from 'lucide-react';
import { FooterSection } from './footer-section';
import { FooterLink } from './footer-link';

export function FooterSections() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row items-start justify-center gap-32 md:gap-64 lg:gap-80">
        <FooterSection title="Resources">
          <ul className="space-y-3">
            <li>
              <FooterLink href="/blog">Blog</FooterLink>
            </li>
            <li>
              <FooterLink href="/about">About Us</FooterLink>
            </li>
          </ul>
        </FooterSection>

        <FooterSection title="Legal">
          <ul className="space-y-3">
            <li>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </li>
            <li>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </li>
          </ul>
        </FooterSection>

        <FooterSection title="Connect">
          <div className="flex space-x-4">
            <FooterLink href="https://twitter.com" external>
              <Twitter className="w-5 h-5" />
            </FooterLink>
            <FooterLink href="https://linkedin.com" external>
              <Linkedin className="w-5 h-5" />
            </FooterLink>
          </div>
        </FooterSection>
      </div>
    </div>
  );
}