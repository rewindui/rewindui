import { SidebarCode, SidebarExample } from '@/ui/configurators/components/Sidebar.example';

export const SidebarConfig = {
  example: SidebarExample,
  default: SidebarCode,
  state: {
    color: 'slate',
    shadow: 'lg',
  },
  options: [
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'gray', 'dark', 'slate', 'zinc'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
  ],
};
