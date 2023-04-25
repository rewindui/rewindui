'use client';
import { Text } from '@rewind-ui/core';
import { ReactNode } from 'react';
import { MenuItem } from './MenuItem';
import {
  Lifebuoy,
  Palette,
  PersonArmsSpread,
  RoadHorizon,
  Rocket,
  SlidersHorizontal,
} from '@phosphor-icons/react';

type MenuItem = {
  title: string;
  items: {
    title: string;
    path: string;
    icon?: ReactNode;
    wip?: boolean;
  }[];
};

const menuItems: MenuItem[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        path: '/',
        icon: <Rocket size={18} weight="duotone" />,
      },
      {
        title: 'Theming',
        path: '/theming',
        icon: <Palette size={18} weight="duotone" />,
      },
      {
        title: 'Variants',
        path: '/variants',
        icon: <SlidersHorizontal size={18} weight="duotone" />,
        wip: true,
      },
      {
        title: 'Accessibility',
        path: '/accessibility',
        icon: <PersonArmsSpread size={18} weight="duotone" />,
        wip: true,
      },
      {
        title: 'Roadmap',
        path: '/roadmap',
        icon: <RoadHorizon size={18} weight="duotone" />,
        wip: true,
      },
      {
        title: 'Contributing',
        path: '/contributing',
        icon: <Lifebuoy size={18} weight="duotone" />,
        wip: true,
      },
    ],
  },
  {
    title: 'Data display',
    items: [
      {
        title: 'Accordion',
        path: '/components/accordion',
      },
      {
        title: 'Alert',
        path: '/components/alert',
      },
      {
        title: 'Card',
        path: '/components/card',
      },
      {
        title: 'Modal',
        path: '/components/modal',
        wip: true,
      },
      {
        title: 'Popover',
        path: '/components/popover',
      },
      {
        title: 'Selector',
        path: '/components/selector',
      },
      {
        title: 'Tabs',
        path: '/components/tabs',
        wip: true,
      },
      {
        title: 'Text',
        path: '/components/text',
      },
      {
        title: 'Tooltip',
        path: '/components/tooltip',
      },
    ],
  },
  {
    title: 'Forms',
    items: [
      {
        title: 'Button',
        path: '/components/button',
      },
      {
        title: 'Dropdown',
        path: '/components/dropdown',
      },
      {
        title: 'Checkbox',
        path: '/components/checkbox',
      },
      {
        title: 'Radio',
        path: '/components/radio',
      },
      {
        title: 'Switch',
        path: '/components/switch',
      },
      {
        title: 'Input',
        path: '/components/input',
      },
      {
        title: 'Select',
        path: '/components/select',
      },
      {
        title: 'Textarea',
        path: '/components/textarea',
      },
      {
        title: 'Combobox',
        path: '/components/combobox',
        wip: true,
      },
      {
        title: 'Input Group',
        path: '/components/input-group',
      },
      {
        title: 'Form Control',
        path: '/components/form-control',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    items: [
      {
        title: 'Collapse',
        path: '/components/collapse',
        wip: true,
      },
      {
        title: 'Fader',
        path: '/components/fader',
        wip: true,
      },
      {
        title: 'Overlay',
        path: '/components/overlay',
        wip: true,
      },
      {
        title: 'Spinner',
        path: '/components/spinner',
        wip: true,
      },
    ],
  },
];

export const Menu = () => {
  return (
    <div className="flex flex-col space-y-6 pb-4">
      {menuItems.map((menuItem, categoryIndex) => (
        <div key={`title-${categoryIndex}`} className="flex flex-col space-y-3">
          <Text weight="medium" color="dark">
            {menuItem.title}
          </Text>
          <div className="flex flex-col text-sm">
            {menuItem.items.map((item, index) => (
              <MenuItem
                key={`item-${categoryIndex}-${index}`}
                icon={item.icon}
                title={item.title}
                path={item.path}
                wip={item.wip}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
