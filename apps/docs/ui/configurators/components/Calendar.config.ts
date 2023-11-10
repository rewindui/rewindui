import { CalendarCode, CalendarExample } from '@/ui/configurators/components/Calendar.example';

export const CalendarConfig = {
  example: CalendarExample,
  default: CalendarCode,
  state: {
    bordered: true,
    borderStyle: 'solid',
    dayFormat: 'EEEEE',
    disabledWeekends: true,
    horizontalBorders: true,
    radius: 'md',
    shadow: 'sm',
    size: 'md',
    verticalBorders: true,
  },
  options: [
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
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg'],
    },
    {
      label: 'Bordered',
      name: 'bordered',
      type: 'switch',
    },
    {
      label: 'Horizontal borders',
      name: 'horizontalBorders',
      type: 'switch',
    },
    {
      label: 'Vertical borders',
      name: 'verticalBorders',
      type: 'switch',
    },
    {
      label: 'Border style',
      name: 'borderStyle',
      type: 'selector',
      options: ['solid', 'dashed'],
    },
    {
      label: 'Disabled weekends',
      name: 'disabledWeekends',
      type: 'switch',
    },
    {
      label: 'Day format',
      name: 'dayFormat',
      type: 'select',
      options: ['EEE', 'EEEEE', 'EEEEEE'],
    },
  ],
};
