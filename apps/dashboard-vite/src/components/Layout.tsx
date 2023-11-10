import { Outlet } from 'react-router-dom';
import Aside from './Aside';
import { useState } from 'react';
import { Overlay, useSidebar } from '@rewind-ui/core';
import Header from './Header';

export default function Layout() {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();

  return (
    <div className="relative antialiased flex flex-row bg-slate-100">
      <Aside setExpanded={setExpanded} setMobile={setMobile} />
      <main
        className={`transition-all transform duration-300 text-slate-700 flex w-full min-h-screen flex-col items-center ${
          expanded ? 'md:ml-[16rem]' : 'md:ml-[4.5rem]'
        }`}
      >
        {mobile && (
          <Overlay
            blur="none"
            onClick={() => {
              sidebar.toggleMobile();
            }}
            className="md:hidden z-40"
          />
        )}
        <Header />

        <div className="w-full h-full p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
