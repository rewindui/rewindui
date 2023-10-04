import { Sidebar, SidebarColor, SidebarProps, SidebarShadow } from '@idb-dab/ui-core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Briefcase, Key, RocketLaunch, Shield, Users } from '@phosphor-icons/react';

const colors: SidebarColor[] = ['white', 'gray', 'dark', 'slate', 'zinc'];
const shadows: SidebarShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];

const Template = (args: SidebarProps) => (
  <Sidebar {...args}>
    <Sidebar.Head>
      <Sidebar.Head.Logo>
        <img src="/assets/rewind.svg" width={48} height={48} alt="Rewind-UI" />
      </Sidebar.Head.Logo>
      <Sidebar.Head.Title>Rewind-UI</Sidebar.Head.Title>
      <Sidebar.Head.Toggle />
    </Sidebar.Head>

    <Sidebar.Nav>
      <Sidebar.Nav.Section>
        <Sidebar.Nav.Section.Item
          icon={<RocketLaunch size={32} weight="duotone" />}
          label="Dashboard"
          href="#"
          active
        />
      </Sidebar.Nav.Section>

      <Sidebar.Nav.Section>
        <Sidebar.Nav.Section.Title>Management</Sidebar.Nav.Section.Title>
        <Sidebar.Nav.Section.Item
          icon={<Briefcase size={32} weight="duotone" />}
          label="Clients"
          href="#"
        />
        <Sidebar.Nav.Section.Item
          icon={<Users size={32} weight="duotone" />}
          label="Users"
          as="button"
        >
          <Sidebar.Nav.Section isChild>
            <Sidebar.Nav.Section.Item
              icon={<span className="w-1 h-1 rounded bg-gray-500" />}
              label="List all"
              href="#"
            />
            <Sidebar.Nav.Section.Item
              icon={<span className="w-1 h-1 rounded bg-gray-500" />}
              label="Add new"
              href="#"
            />
            <Sidebar.Nav.Section.Item
              icon={<span className="w-1 h-1 rounded bg-gray-500" />}
              label="Archived"
              href="#"
            />
          </Sidebar.Nav.Section>
        </Sidebar.Nav.Section.Item>
        <Sidebar.Nav.Section.Item
          icon={<Shield size={32} weight="duotone" />}
          label="Roles"
          href="#"
        />
        <Sidebar.Nav.Section.Item
          icon={<Key size={32} weight="duotone" />}
          label="Permissions"
          href="#"
        />
      </Sidebar.Nav.Section>
    </Sidebar.Nav>

    <Sidebar.Footer>
      <div className="flex flex-col justify-center items-center text-sm">
        <span className="font-semibold">Rewind-UI</span>
        <span>version 0.16.0</span>
      </div>
    </Sidebar.Footer>
  </Sidebar>
);

const meta: Meta = {
  component: Template,
  title: 'Components/Sidebar',
  decorators: [(story) => <div className="min-h-[50rem]">{story()}</div>],
  argTypes: {
    color: {
      options: colors,
      control: { type: 'select' },
    },
    shadow: {
      options: shadows,
      control: { type: 'select' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true, sort: 'alpha' },
  },
};

export default meta;

export const Default = {
  args: {},
};
