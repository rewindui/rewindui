import { cva } from 'class-variance-authority';

const base = cva(['flex', 'flex-col', 'text-gray-700', 'isolate'], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
      xl: ['text-lg', 'md:text-xl'],
    },
  },
});

const nav = cva(['flex', 'items-center', 'justify-between', 'mb-2']);

const navButton = cva(
  [
    'flex',
    'basis-1/8',
    'items-center',
    'justify-center',
    'bg-white',
    'disabled:bg-gray-50',
    'disabled:cursor-not-allowed',
    'disabled:text-gray-400',
    'hover:bg-gray-50',
  ],
  {
    variants: {
      size: {
        xs: ['w-6', 'h-6'],
        sm: ['w-7', 'h-7'],
        md: ['w-8', 'h-8'],
        lg: ['w-10', 'h-10'],
        xl: ['w-10', 'h-10', 'md:w-12', 'md:h-12'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        base: ['rounded'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
      },
      bordered: {
        true: ['border', 'border-gray-200'],
        false: [],
      },
      shadow: {
        none: ['shadow-none'],
        sm: ['shadow-sm'],
        base: ['shadow'],
        md: ['shadow-md'],
        lg: ['shadow-lg'],
        xl: ['shadow-xl'],
      },
      borderStyle: {
        dashed: [],
        solid: [],
      },
    },
    compoundVariants: [
      {
        bordered: true,
        borderStyle: 'dashed',
        className: ['border-dashed'],
      },
      {
        bordered: true,
        borderStyle: 'solid',
        className: ['border-solid'],
      },
    ],
  }
);
const navMonth = cva([
  'flex',
  'basis-6/8',
  'items-center',
  'justify-center',
  'w-6/8',
  'font-medium',
]);

const head = cva(['flex', 'items-center', 'justify-between', 'p-1', 'text-gray-500']);

const calendar = cva(['flex', 'flex-col', 'overflow-hidden', 'bg-white'], {
  variants: {
    bordered: {
      true: ['border', 'border-gray-200'],
      false: [],
    },
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      base: ['rounded'],
      md: ['rounded-md'],
      lg: ['rounded-lg'],
    },
    shadow: {
      none: ['shadow-none'],
      sm: ['shadow-sm'],
      base: ['shadow'],
      md: ['shadow-md'],
      lg: ['shadow-lg'],
      xl: ['shadow-xl'],
    },
    horizontalBorders: {
      true: ['divide-y', 'divide-gray-200'],
      false: [],
    },
    borderStyle: {
      dashed: [],
      solid: [],
    },
  },
  compoundVariants: [
    {
      bordered: true,
      borderStyle: 'dashed',
      className: ['border-dashed'],
    },
    {
      bordered: true,
      borderStyle: 'solid',
      className: ['border-solid'],
    },
    {
      horizontalBorders: true,
      borderStyle: 'dashed',
      className: ['divide-dashed'],
    },
    {
      horizontalBorders: true,
      borderStyle: 'solid',
      className: ['divide-solid'],
    },
  ],
});

const weekDay = cva(['flex-1', 'flex', 'items-center', 'justify-center']);

const calendarCell = cva(
  ['flex-1', 'relative', 'flex', 'items-center', 'justify-center', 'disabled:cursor-not-allowed'],
  {
    variants: {
      size: {
        xs: ['h-8'],
        sm: ['h-10'],
        md: ['h-11'],
        lg: ['h-12'],
        xl: ['h-12', 'md:h-14'],
      },
      color: {
        undefined: [],
        white: [],
        blue: ['bg-blue-50', 'enabled:hover:bg-blue-100'],
        red: ['bg-red-50', 'enabled:hover:bg-red-100'],
        green: ['bg-green-100', 'enabled:hover:bg-green-200'],
        yellow: ['bg-yellow-50', 'enabled:hover:bg-yellow-100'],
        purple: ['bg-purple-50', 'enabled:hover:bg-purple-100'],
      },
      isToday: {
        true: ['font-bold'],
        false: [],
      },
      isSameDay: {
        true: [],
        false: [],
      },
      isSameMonth: {
        true: [],
        false: ['bg-gray-50'],
      },
    },
    compoundVariants: [
      {
        color: ['undefined', 'white'],
        className: ['disabled:text-gray-400', 'disabled:bg-gray-50', 'enabled:hover:bg-gray-100'],
      },
    ],
  }
);

const thumb = cva(
  ['absolute', 'rounded-full', 'bg-transparent', 'border', 'border-gray-600', 'shadow', 'z-10'],
  {
    variants: {
      size: {
        xs: ['w-6', 'h-6'],
        sm: ['w-7', 'h-7'],
        md: ['w-8', 'h-8'],
        lg: ['w-9', 'h-9'],
        xl: ['w-9', 'h-9', 'md:w-11', 'md:h-11'],
      },
    },
  }
);
const dayLabel = cva(['z-20']);

const calendarRow = cva(['flex', 'w-full'], {
  variants: {
    verticalBorders: {
      true: ['divide-x', 'divide-gray-200'],
      false: [],
    },
    borderStyle: {
      dashed: [],
      solid: [],
    },
  },
  compoundVariants: [
    {
      verticalBorders: true,
      borderStyle: 'dashed',
      className: ['divide-dashed'],
    },
    {
      verticalBorders: true,
      borderStyle: 'solid',
      className: ['divide-solid'],
    },
  ],
});

const calendarStyles = {
  base,
  nav,
  navButton,
  navMonth,
  head,
  calendar,
  weekDay,
  calendarCell,
  calendarRow,
  thumb,
  dayLabel,
};

export { calendarStyles };
