import './globals.css';
import { Aside } from '@/ui/Aside';
import { Inter } from 'next/font/google';
import { Footer } from '@/ui/Footer';
import { Header } from '@/ui/Header';
import { Analytics } from '@vercel/analytics/react';
import { config } from '@/lib/config';

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
    locale: 'en_US',
    url: 'https://rewind-ui.dev',
    title: config.metadata.title,
    description: config.metadata.description,
    siteName: config.metadata.title,
    images: [
      {
        url: config.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: config.metadata.title,
      },
    ],
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

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="min-h-screen">
          <Header />

          <div className="container max-w-8xl h-full flex items-center mx-auto">
            <div className="flex w-full">
              <div className="hidden 2xl:block 2xl:w-1/6 border-r border-r-gray-100">
                <Aside />
              </div>

              <div className="w-full 2xl:block 2xl:w-5/6 min-h-[85vh] mb-4">{children}</div>
            </div>
          </div>

          <Footer />
        </main>

        <Analytics />
      </body>
    </html>
  );
}
