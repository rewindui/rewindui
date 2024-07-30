import { Key } from '@/ui/icons/Key';
import { RocketLaunch } from '@/ui/icons/RocketLaunch';
import { LifeRing } from '@/ui/icons/LifeRing';
import { EnvelopeOpen } from '@/ui/icons/EnvelopeOpen';
import { Shield } from '@/ui/icons/Shield';
import { Sliders } from '@/ui/icons/Sliders';
import { Users } from '@/ui/icons/Users';
import {
  Badge,
  Button,
  Overlay,
  Sidebar,
  SidebarProps,
  SidebarState,
  useSidebar,
} from '@rewind-ui/core';
import { ReactNode, useState } from 'react';
import * as React from 'react';
import Image from 'next/image';
import { Logo } from '@/ui/Logo';
import Link from 'next/link';

export type SidebarShowcaseProps = {
  showcase:
    | 'colors'
    | 'shadows'
    | 'head'
    | 'nav'
    | 'title'
    | 'render-as'
    | 'separator'
    | 'child-items'
    | 'footer';
};

export const SidebarShowcase = (props: SidebarShowcaseProps) => {
  const { showcase } = props;

  const components = {
    colors: <Colors />,
    shadows: <Shadows />,
    head: <Head />,
    nav: <Nav />,
    title: <Title />,
    separator: <Separator />,
    item: <Item />,
    'render-as': <RenderAs />,
    'child-items': <ChildItems />,
    footer: <Footer />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const Container = ({
  expanded,
  mobile,
  children,
}: {
  expanded: boolean;
  mobile: boolean;
  children: ReactNode;
}) => {
  const sidebar = useSidebar();

  return (
    <div className="relative flex flex-row w-full h-full min-h-[20rem] bg-grid bg-neutral-50 rounded border border-neutral-200 shadow-sm shadow-neutral-100 overflow-hidden mt-6">
      {children}

      <main
        className={`transition-all transform duration-100 text-slate-700 flex w-full flex-col items-center ${
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
          <p>Dashboard</p>
        </div>
      </main>
    </div>
  );
};

const SidebarTemplate = (props: SidebarProps) => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <Container expanded={expanded} mobile={mobile}>
      <Sidebar
        {...props}
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="absolute"
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
            <Sidebar.Nav.Section.Item icon={<RocketLaunch />} label="Dashboard" href="#" active />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>
      </Sidebar>
    </Container>
  );
};

const Colors = () => {
  return (
    <div className="flex flex-col">
      <SidebarTemplate color="white" />
      <SidebarTemplate color="gray" />
      <SidebarTemplate color="dark" />
      <SidebarTemplate color="slate" />
      <SidebarTemplate color="zinc" />
    </div>
  );
};

const Shadows = () => {
  return (
    <div className="flex flex-col">
      <SidebarTemplate shadow="none" />
      <SidebarTemplate shadow="sm" />
      <SidebarTemplate shadow="base" />
      <SidebarTemplate shadow="md" />
      <SidebarTemplate shadow="lg" />
      <SidebarTemplate shadow="xl" />
    </div>
  );
};

const Head = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <Container expanded={expanded} mobile={mobile}>
      <Sidebar
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="absolute"
      >
        <Sidebar.Head>
          <Sidebar.Head.Logo>
            <Logo />
          </Sidebar.Head.Logo>
          <Sidebar.Head.Title>Rewind-UI</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>
      </Sidebar>
    </Container>
  );
};

const Nav = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <Container expanded={expanded} mobile={mobile}>
      <Sidebar
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="absolute"
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
            <Sidebar.Nav.Section.Item icon={<RocketLaunch />} label="Dashboard" href="#" active />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Item icon={<LifeRing />} label="Contact" href="#" />
            <Sidebar.Nav.Section.Item icon={<EnvelopeOpen />} label="Tickets" href="#" />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>
      </Sidebar>
    </Container>
  );
};

const RenderAs = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <Container expanded={expanded} mobile={mobile}>
      <Sidebar
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="absolute"
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
            <Sidebar.Nav.Section.Item
              icon={<RocketLaunch />}
              label="Dashboard"
              as={Link}
              asProps={{ href: '/' }}
              active
            />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>
      </Sidebar>
    </Container>
  );
};

const Title = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <Container expanded={expanded} mobile={mobile}>
      <Sidebar
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="absolute"
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
            <Sidebar.Nav.Section.Item icon={<RocketLaunch />} label="Dashboard" href="#" active />
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Support</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<LifeRing />} label="Contact" href="#" />
            <Sidebar.Nav.Section.Item icon={<EnvelopeOpen />} label="Tickets" href="#" />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>
      </Sidebar>
    </Container>
  );
};

const Separator = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <Container expanded={expanded} mobile={mobile}>
      <Sidebar
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="absolute"
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
            <Sidebar.Nav.Section.Title>Support</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item icon={<LifeRing />} label="Contact" href="#" />
            <Sidebar.Separator />
            <Sidebar.Nav.Section.Item icon={<EnvelopeOpen />} label="Tickets" href="#" />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>
      </Sidebar>
    </Container>
  );
};

const Item = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <Container expanded={expanded} mobile={mobile}>
      <Sidebar
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="absolute"
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
            <Sidebar.Nav.Section.Item
              icon={<RocketLaunch />}
              label={
                <span>
                  Dashboard
                  <Badge color="red" size="xs" className="ml-2">
                    Beta
                  </Badge>
                </span>
              }
              href="#"
              active
            />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>
      </Sidebar>
    </Container>
  );
};

const ChildItems = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <Container expanded={expanded} mobile={mobile}>
      <Sidebar
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="absolute"
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
            <Sidebar.Nav.Section.Title>Management</Sidebar.Nav.Section.Title>
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
        </Sidebar.Nav>
      </Sidebar>
    </Container>
  );
};

const Footer = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <Container expanded={expanded} mobile={mobile}>
      <Sidebar
        onToggle={(state: SidebarState) => {
          setExpanded(state.expanded);
          setMobile(state.mobile);
        }}
        className="absolute"
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
            <Sidebar.Nav.Section.Item icon={<RocketLaunch />} label="Dashboard" href="#" active />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>

        <Sidebar.Footer>
          <div className="flex flex-col justify-center items-center text-sm">
            <span className="font-semibold">Rewind-UI</span>
            <span>version x.y.z</span>
          </div>
        </Sidebar.Footer>
      </Sidebar>
    </Container>
  );
};
