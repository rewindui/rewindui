import { DrawerCode, DrawerExample } from '@/ui/configurators/components/Drawer.example';

export const DrawerConfig = {
  example: DrawerExample,
  default: DrawerCode,
  state: {
    closeOnEscape: true,
    overlayBlur: 'sm',
    overlayCloseOnClick: true,
    overlayColor: 'dark',
    overlayOpacity: '50',
    position: 'right',
    shadow: 'base',
  },
  options: [
    {
      label: 'Overlay color',
      name: 'overlayColor',
      type: 'color',
      colors: ['white', 'gray', 'dark'],
    },
    {
      label: 'Overlay opacity',
      name: 'overlayOpacity',
      type: 'selector',
      options: ['25', '50', '75'],
    },
    {
      label: 'Position',
      name: 'position',
      type: 'selector',
      options: ['top', 'bottom', 'left', 'right'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
    {
      label: 'Close on escape',
      name: 'closeOnEscape',
      type: 'switch',
    },
    {
      label: 'Close on overlay click',
      name: 'overlayCloseOnClick',
      type: 'switch',
    },
  ],
};
