'use client';
import { Menu } from '@/ui/Menu';
import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import { Drawer } from '@rewind-ui/core';

const headerButtonClasses =
  'flex items-center justify-center w-8 h-8 md:w-10 bg-white md:h-10 rounded-lg border border-gray-100 p-2';

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
  const menuButtonClasses = pathname === '/' ? '' : '2xl:hidden';

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="sticky top-0 flex items-center w-full h-20 bg-white 2xl:bg-transparent 2xl:backdrop-blur-md border-b border-b-gray-100 z-50">
        <div className="container max-w-8xl h-full flex items-center justify-between mx-auto px-4 2xl:px-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/rewind.svg"
              width={48}
              height={48}
              alt="Rewind-UI"
              className="mr-0.5 sm:mr-2 h-7 w-7 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
            <div className="flex flex-col space-y-0">
              <span className="flex items-center font-semibold text-gray-800 text-xl sm:text-2xl md:text-3xl">
                <span>rewind-ui</span>
                <span className="ml-2 text-xs text-red-50 py-0.5 px-1 bg-gradient-to-r from-red-500 to-red-700 shadow shadow-red-200 rounded">
                  beta
                </span>
              </span>
              <span className="hidden md:block text-gray-500">Effortless user interfaces</span>
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

            <SocialLink href="https://twitter.com/rewindui">
              <Image
                priority
                src="/images/twitter.svg"
                height={18}
                width={18}
                alt="Follow us on Twitter!"
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

            <div className={menuButtonClasses}>
              <button onClick={() => setOpen(true)} className={headerButtonClasses}>
                <List size={32} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        className="w-full sm:w-fit min-w-[350px] z-[70]"
        position="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="overflow-auto w-full h-full bg-white">
          <div className="flex h-20 justify-between items-center px-4 py-2 bg-gray-50 border-b border-b-gray-100">
            <span className="text-xl font-semibold">Menu</span>
            <button onClick={() => setOpen(false)} className={headerButtonClasses}>
              <X size={16} />
            </button>
          </div>
          <div className="h-full p-4 mb-4">
            <Menu />
          </div>
        </div>
      </Drawer>
    </>
  );
};
