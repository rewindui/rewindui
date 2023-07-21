'use client';
import { Menu } from './Menu';

export const Aside = () => {
  return (
    <aside className="fixed py-8 h-[calc(100%-9rem)] w-[16rem] scrollbar scrollbar-thin scrollbar-rounded-lg scrollbar-thumb-gray-200 scrollbar-track-gray-100 overflow-auto">
      <Menu />
    </aside>
  );
};
