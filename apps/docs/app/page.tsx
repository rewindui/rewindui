import { config } from '@/lib/config';
import { Features } from '@/ui/Features';
import { Footer } from '@/ui/Footer';
import { Hero } from '@/ui/Hero';
import { Support } from '@/ui/Support';
import * as React from 'react';

export const generateMetadata = ({ params }) => {
  const title = 'Rewind-UI - A fully customizable React-TailwindCSS component library';
  const description =
    'Rewind-UI offers a range of accessible, highly customizable components that can be easily integrated into any react project.';

  return {
    title,
    description,
    openGraph: {
      locale: 'en_US',
      url: 'https://rewind-ui.dev',
      title,
      description,
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
    <div className="flex flex-col divide-y divide-slate-100">
      <div className="bg-grid">
        <div className="flex space-x-10 px-4 2xl:px-10 bg-gradient-to-tr to-slate-100 from-transparent">
          <div className="container max-w-8xl mx-auto">
            <Hero />
          </div>
        </div>
      </div>

      <div className="flex bg-white py-20 px-4 2xl:px-10">
        <div className="container max-w-8xl mx-auto">
          <Features />
        </div>
      </div>

      <div className="flex bg-slate-50 py-20 px-4 2xl:px-10">
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
