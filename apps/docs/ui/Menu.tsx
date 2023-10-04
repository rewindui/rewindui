'use client';
import { Text } from '@idb-dab/ui-core';
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
    newItem?: boolean;
    updated?: boolean;
  }[];
};

const menuItems: MenuItem[] = [
  {
    title: 'Getting Started',
    items: [
      {
        title: 'Introduction',
        path: '/introduction',
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
      },
      {
        title: 'Accessibility',
        path: '/accessibility',
        icon: <PersonArmsSpread size={18} weight="duotone" />,
      },
      {
        title: 'Roadmap',
        path: '/roadmap',
        icon: <RoadHorizon size={18} weight="duotone" />,
      },
      {
        title: 'Contributing',
        path: '/contributing',
        icon: <Lifebuoy size={18} weight="duotone" />,
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
        title: 'Avatar',
        path: '/components/avatar',
      },
      {
        title: 'Badge',
        path: '/components/badge',
      },
      {
        title: 'Card',
        path: '/components/card',
      },
      {
        title: 'Progress',
        path: '/components/progress',
      },
      {
        title: 'Ribbon',
        path: '/components/ribbon',
      },
      {
        title: 'Table',
        path: '/components/table',
      },
      {
        title: 'Tabs',
        path: '/components/tabs',
      },
      {
        title: 'Text',
        path: '/components/text',
      },
    ],
  },
  {
    title: 'Overlays',
    items: [
      {
        title: 'Drawer',
        path: '/components/drawer',
      },
      {
        title: 'Dropdown',
        path: '/components/dropdown',
      },
      {
        title: 'Modal',
        path: '/components/modal',
      },
      {
        title: 'Popover',
        path: '/components/popover',
      },
      {
        title: 'Sidebar',
        path: '/components/sidebar',
        newItem: true,
      },
      {
        title: 'Toast',
        path: '/components/toast',
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
        title: 'Checkbox',
        path: '/components/checkbox',
      },
      {
        title: 'Combobox',
        path: '/components/combobox',
      },
      {
        title: 'Form Control',
        path: '/components/form-control',
      },
      {
        title: 'Input',
        path: '/components/input',
      },
      {
        title: 'Input Group',
        path: '/components/input-group',
      },
      {
        title: 'Radio',
        path: '/components/radio',
      },
      {
        title: 'Select',
        path: '/components/select',
      },
      {
        title: 'Selector',
        path: '/components/selector',
      },
      {
        title: 'Switch',
        path: '/components/switch',
      },
      {
        title: 'Textarea',
        path: '/components/textarea',
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
                newItem={item.newItem}
                updated={item.updated}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
