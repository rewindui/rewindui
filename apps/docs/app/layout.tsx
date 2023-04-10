import './globals.css';
import { Aside } from '@/ui/Aside';
import { Inter } from 'next/font/google';
import { Footer } from '@/ui/Footer';
import { Header } from '@/ui/Header';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
      </body>
    </html>
  );
}