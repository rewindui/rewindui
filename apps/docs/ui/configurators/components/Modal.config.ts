import { ModalCode, ModalExample } from '@/ui/configurators/components/Modal.example';

export const ModalConfig = {
  example: ModalExample,
  default: ModalCode,
  state: {
    closeOnEscape: true,
    color: 'white',
    mode: 'dialog',
    overlayBlur: 'sm',
    overlayCloseOnClick: true,
    overlayColor: 'dark',
    overlayOpacity: '50',
    radius: 'md',
    shadow: 'base',
    size: 'sm',
  },
  options: [
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'gray', 'zinc', 'slate'],
    },
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
      label: 'Mode',
      name: 'mode',
      type: 'selector',
      options: ['fullscreen', 'dialog'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'select',
      options: ['auto', 'sm', 'base', 'md', 'lg', 'xl', 'screen'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg'],
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
