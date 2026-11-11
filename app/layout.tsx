import type { Metadata } from 'next';
import '@/styles/globals.css';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'ShadowSpark Express — Courier across Nigeria (DHL-style demo)',
  description: 'A ShadowSpark Technologies courier website — track, quote and send parcels across Nigeria. Demonstration clone, not affiliated with DHL.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
