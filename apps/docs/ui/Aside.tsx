'use client';
import { Menu } from './Menu';

export const Aside = () => {
  return (
    <aside className="fixed py-8 h-[calc(100vh-10rem)] w-full overflow-auto">
      <Menu />
    </aside>
  );
};
