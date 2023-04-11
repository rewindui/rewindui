'use client';
import { Menu } from './Menu';

export const Aside = () => {
  return (
    <aside className="fixed py-8 h-[calc(100vh-10rem)] w-[16rem] overflow-auto">
      <Menu />
    </aside>
  );
};
