import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Nervescape Analytics | Premium Multicloud Managed Services',
  description: 'Nervescape Analytics is a multicloud managed service provider offering top-tier, custom-tailored solutions. Optimize, Secure, Innovate your cloud infrastructure.',
  keywords: 'CloudOps, DevOps, DataOps, AppOps, DBOps, Cloud Management, Multicloud, Managed Services',
  authors: [{ name: 'Nervescape Analytics LLP' }],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Nervescape Analytics | Premium Multicloud Managed Services',
    description: 'Experience unmatched premium cloud managed services with Nervescape. Optimize, Secure, Innovate.',
    url: 'https://nervescape.com',
    siteName: 'Nervescape Analytics',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
