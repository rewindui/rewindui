'use client';
import { Text } from '@rewind-ui/core';

export const Footer = () => {
  return (
    <div className="w-full border-t border-t-gray-100 bg-white">
      <div className="container mx-auto flex items-center h-20 justify-center text-sm">
        <Text size="sm" color="gray">
          Copyright © 2023
        </Text>
      </div>
    </div>
  );
};
