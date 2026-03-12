// app/layout.tsx — Root layout for the entire app, sets up fonts, metadata, and structure

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';

export const metadata: Metadata = {
  title: 'IPL XI Predictor — Pick. Predict. Prove.',
  description:
    'Build your dream IPL XI, predict match winners, and compete with fans worldwide. Free to use!',
  keywords: ['IPL', 'cricket', 'predictor', 'fantasy', 'team picker'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: '#0a0a1a', color: '#ffffff' }}
      >
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
