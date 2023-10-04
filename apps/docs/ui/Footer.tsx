'use client';
import { Text } from '@idb-dab/ui-core';
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative w-full bg-white">
      <div className="container mx-auto flex flex-col space-y-1.5 py-4 items-center justify-center text-sm">
        <Text size="sm" color="dark">
          Copyright © 2023
        </Text>
        <Text size="sm" color="gray">
          Rewind-UI is free and open-source, licensed under MIT.
        </Text>
        <Link href="https://vercel.com?utm_source=[RewindUI]&utm_campaign=oss." target="_blank">
          <Image
            src="/images/powered-by-vercel.svg"
            width={169}
            height={35}
            alt="Powered by Vercel"
            className=""
          />
        </Link>
      </div>
    </footer>
  );
};
