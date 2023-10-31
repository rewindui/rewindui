'use client';
import { Book } from '@/icons/Book';
import { Briefcase } from '@/icons/Briefcase';
import { EnvelopeOpen } from '@/icons/EnvelopeOpen';
import { Key } from '@/icons/Key';
import { RocketLaunch } from '@/icons/RocketLaunch';
import { Shield } from '@/icons/Shield';
import { Sliders } from '@/icons/Sliders';
import { LifeRing } from '@/icons/LifeRing';
import { Users } from '@/icons/Users';
import { Logo } from '@/icons/Logo';
import {
  Breadcrumbs,
  Button,
  Overlay,
  Sidebar,
  SidebarColor,
  SidebarState,
  useSidebar,
} from '@rewind-ui/core';
import { useState } from 'react';

export default function Home() {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();
  const [color, setColor] = useState<SidebarColor>('slate');

  return (
    <div className="relative antialiased flex flex-row bg-slate-100">
      <Sidebar
        color={color}
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
      >
        <Sidebar.Head>
          <Sidebar.Head.Logo>
            <Logo />
          </Sidebar.Head.Logo>
          <Sidebar.Head.Title>Rewind-UI</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>

        <Sidebar.Nav>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Item icon={<RocketLaunch />} label="Dashboard" href="#" active>
              <Sidebar.Nav.Section isChild>
                <Sidebar.Nav.Section.Item
                  as="button"
                  onClick={() => setColor('white')}
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="White"
                  active={color === 'white'}
                />
                <Sidebar.Nav.Section.Item
                  as="button"
                  onClick={() => setColor('gray')}
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Gray"
                  active={color === 'gray'}
                />
                <Sidebar.Nav.Section.Item
                  as="button"
                  onClick={() => setColor('dark')}
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Dark"
                  active={color === 'dark'}
                />
                <Sidebar.Nav.Section.Item
                  as="button"
                  onClick={() => setColor('slate')}
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Slate"
                  active={color === 'slate'}
                />
                <Sidebar.Nav.Section.Item
                  as="button"
                  onClick={() => setColor('zinc')}
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Zinc"
                  active={color === 'zinc'}
                />
              </Sidebar.Nav.Section>
            </Sidebar.Nav.Section.Item>
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Management</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<Briefcase />} label="Clients" href="#" />
            <Sidebar.Nav.Section.Item icon={<Users />} label="Users" as="button">
              <Sidebar.Nav.Section isChild>
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="List all"
                  href="#"
                />
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Add new"
                  href="#"
                />
                <Sidebar.Nav.Section.Item
                  icon={<span className="w-1 h-1 rounded bg-transparent" />}
                  label="Archived"
                  href="#"
                />
              </Sidebar.Nav.Section>
            </Sidebar.Nav.Section.Item>
            <Sidebar.Nav.Section.Item icon={<Shield />} label="Roles" href="#" />
            <Sidebar.Nav.Section.Item icon={<Key />} label="Permissions" href="#" />
            <Sidebar.Nav.Section.Item icon={<Sliders />} label="Settings" href="#" />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Support</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<LifeRing />} label="Contact" href="#" />
            <Sidebar.Nav.Section.Item icon={<EnvelopeOpen />} label="Tickets" href="#" />
            <Sidebar.Separator />
            <Sidebar.Nav.Section.Item icon={<Book />} label="Documentation" href="#" />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>

        <Sidebar.Footer>
          <div className="flex flex-col justify-center items-center text-sm">
            <span className="font-semibold">Rewind-UI</span>
            <span>version x.y.z</span>
          </div>
        </Sidebar.Footer>
      </Sidebar>

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
        <header className="flex flex-row sticky top-0 px-8 items-center bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]">
          <span>Navbar</span>

          <Button
            onClick={() => {
              sidebar.toggleMobile();
            }}
            size="sm"
            color="white"
            icon
            className="ml-auto flex md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
              <path
                className="opacity-50"
                d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
              />
            </svg>
          </Button>
        </header>

        <div className="w-full h-full p-8">
          <Breadcrumbs>
            <Breadcrumbs.Item href="/">
              <RocketLaunch />
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>Dashboard</Breadcrumbs.Item>
          </Breadcrumbs>
        </div>

        <div className="flex sticky bottom-0 items-center bg-white w-full min-h-[4rem] px-8">
          <span>Footer</span>
        </div>
      </main>
    </div>
  );
}
