'use client';
import { Text } from '@rewind-ui/core';

export const Footer = () => {
  return (
    <footer className="relative w-full border-t border-t-gray-100 bg-white">
      <div className="container mx-auto flex flex-col items-center h-20 justify-center text-sm">
        <Text size="sm" color="dark">
          Copyright © 2023
        </Text>
        <Text size="sm" color="gray">
          Rewind-UI is free and open-source, licensed under MIT.
        </Text>
      </div>
    </footer>
  );
};
