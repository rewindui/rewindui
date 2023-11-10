import './globals.css';
import { GeistSans } from 'geist/font';
import { Header } from '@/ui/Header';
import { config } from '@/lib/config';
import Script from 'next/script';
import * as process from 'process';
import { ReactNode } from 'react';

export const metadata = {
  title: {
    default: config.metadata.title,
    template: 'Rewind-UI - %s',
  },
  description: config.metadata.description,
  generator: 'Next.js',
  applicationName: 'Rewind-UI - Documentation',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'UI', 'React component library'],
  authors: [{ name: 'Nick Dunas' }],
  colorScheme: 'light',
  creator: 'Nick Dunas',
  publisher: 'Nick Dunas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      default: config.metadata.title,
      template: 'Rewind-UI - %s',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.metadata.title,
    description: config.metadata.description,
    images: [config.metadata.ogImage],
    creator: '@NickDunas',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <main className="min-h-screen antialiased">
          <Header />
          {children}
        </main>

        {process.env.NODE_ENV !== 'development' && (
          <Script
            src="https://analytics.rewind-ui.dev/script.js"
            data-website-id="74796605-6068-498d-99ff-89b791669743"
          />
        )}
      </body>
    </html>
  );
}
