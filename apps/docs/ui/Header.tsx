'use client';
import { Menu } from '@/ui/Menu';
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import { Overlay } from '@rewind-ui/core';

const headerButtonClasses =
  'flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-50 hover:bg-gray-100 p-2';

const SocialLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href} target="_blank" className={headerButtonClasses}>
      {children}
    </Link>
  );
};

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="sticky top-0 flex items-center w-full h-20 backdrop-blur-md border-b border-b-gray-100 z-50">
        <div className="container max-w-8xl h-full flex items-center justify-between mx-auto px-4 2xl:px-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/rewind.svg"
              width={48}
              height={48}
              alt="Rewind-UI"
              className="mr-2 h-8 w-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <span className="font-bold hidden px-2 h-[50px] rounded bg-gradient-to-r from-blue-500 to-blue-700 flex items-center shadow shadow-blue-500/75 text-white">
              <span className="mx-auto">rewind</span>
            </span>
            <div className="flex flex-col space-y-0">
              <span className="flex items-center font-semibold text-gray-800 text-xl sm:text-2xl md:text-3xl">
                rewind-ui
              </span>
              <span className="hidden md:block text-gray-700">Effortless user interfaces</span>
            </div>
          </Link>

          <div className="flex space-x-2">
            <SocialLink href="https://github.com/rewindui/rewindui">
              <Image
                priority
                src="/images/github.svg"
                height={18}
                width={18}
                alt="Check our source code!"
              />
            </SocialLink>

            <SocialLink href="https://storybook.rewind-ui.dev/">
              <Image
                priority
                src="/images/storybook.svg"
                height={18}
                width={18}
                alt="Check our storybook!"
              />
            </SocialLink>

            <SocialLink href="#">
              <Image
                priority
                src="/images/twitter.svg"
                height={18}
                width={18}
                alt="Follow us on Twitter"
              />
            </SocialLink>

            <div className="2xl:hidden">
              <button onClick={() => setOpen(true)} className={headerButtonClasses}>
                <List size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed top-0 left-0 overflow-auto w-full sm:w-fit min-w-[300px] h-full bg-white z-[70]">
          <div className="flex justify-between items-center px-4 py-2 bg-gray-50 border-b border-b-gray-100">
            <span className="font-semibold">Menu</span>
            <button onClick={() => setOpen(false)} className={headerButtonClasses}>
              <X size={16} />
            </button>
          </div>
          <div className="h-full p-4 mb-4">
            <Menu />
          </div>
        </div>
      )}

      {open && <Overlay onClose={() => setOpen(false)} closeOnClick={true} className="z-[60]" />}
    </>
  );
};
