import { ToastCode, ToastExample } from '@/ui/configurators/components/Toast.example';

export const ToastConfig = {
  example: ToastExample,
  default: ToastCode,
  state: {
    closeOnClick: true,
    color: 'purple',
    description: 'Do you really want to delete the selected items?',
    duration: 3000,
    iconType: 'question',
    max: 5,
    pauseOnHover: true,
    position: 'top-right',
    radius: 'lg',
    shadow: 'none',
    shadowColor: 'none',
    showProgress: true,
    title: 'Are you sure?',
    tone: 'solid',
    withActions: true,
  },
  options: [
    {
      label: 'Position',
      name: 'position',
      type: 'select',
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
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
      options: ['none', 'sm', 'base', 'md', 'lg'],
    },
    {
      label: 'Icon type',
      name: 'iconType',
      type: 'select',
      options: ['', 'info', 'success', 'warning', 'error', 'question'],
    },
    {
      label: 'Duration',
      name: 'duration',
      type: 'number',
    },
    {
      label: 'Close on click',
      name: 'closeOnClick',
      type: 'switch',
    },
    {
      label: 'Pause on hover',
      name: 'pauseOnHover',
      type: 'switch',
    },
    {
      label: 'Show progress',
      name: 'showProgress',
      type: 'switch',
    },
    {
      label: 'Show actions',
      name: 'withActions',
      type: 'switch',
    },
    {
      label: 'Title',
      name: 'title',
      type: 'input',
    },
    {
      label: 'Description',
      name: 'description',
      type: 'input',
    },
  ],
};
