import { config } from '@/lib/config';
import { Features } from '@/ui/Features';
import { Footer } from '@/ui/Footer';
import { Hero } from '@/ui/Hero';
import { Support } from '@/ui/Support';
import * as React from 'react';

export const generateMetadata = ({ params }) => {
  return {
    title: 'Main Title',
    description: 'Description',
    openGraph: {
      locale: 'en_US',
      url: 'https://rewind-ui.dev',
      title: 'Rewind-UI - A fully customizable React-TailwindCSS component library',
      description:
        'Rewind-UI offers a range of accessible, highly customizable components that can be easily integrated into any react project.',
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
  };
};

const LandingLayout = async ({ params }) => {
  return (
    <div className="flex flex-col divide-y divide-gray-100">
      <div className="bg-grid flex space-x-10 px-4 2xl:px-10 bg-gradient-to-r to-slate-50 from-transparent">
        <div className="container max-w-8xl mx-auto">
          <Hero />
        </div>
      </div>

      <div className="flex bg-white py-20 px-4 2xl:px-10">
        <div className="container max-w-8xl mx-auto">
          <Features />
        </div>
      </div>

      <div className="flex bg-neutral-50 py-20 px-4 2xl:px-10">
        <div className="container max-w-8xl mx-auto">
          <Support />
        </div>
      </div>

      <div className="flex bg-white py-10">
        <Footer />
      </div>
    </div>
  );
};

export default LandingLayout;
