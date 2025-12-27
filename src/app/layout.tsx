import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { EmailProvider } from '@/contexts/EmailContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Email Risk Reviewer',
  description: 'Review and flag emails for risk assessment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EmailProvider>{children}</EmailProvider>
      </body>
    </html>
  );
}

