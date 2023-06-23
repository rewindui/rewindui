import { AvatarCode, AvatarExample } from '@/ui/configurators/components/Avatar.example';

export const AvatarConfig = {
  example: AvatarExample,
  default: AvatarCode,
  state: {
    color: 'purple',
    radius: 'full',
    shadow: 'none',
    shadowColor: 'none',
    size: 'xl',
    tone: 'glossy',
    status: 'online',
    statusPosition: 'bottom-right',
    outlined: true,
    initials: 'ND',
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'glossy', 'outline'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Outlined',
      name: 'outlined',
      type: 'switch',
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
    {
      label: 'Shadow Color',
      name: 'shadowColor',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
    },
    {
      label: 'Status',
      name: 'status',
      type: 'select',
      options: ['none', 'online', 'offline', 'busy', 'away'],
    },
    {
      label: 'Status Position',
      name: 'statusPosition',
      type: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
  ],
};
