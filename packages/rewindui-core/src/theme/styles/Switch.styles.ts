import { cva } from 'class-variance-authority';

const switchStyles = cva(
  [
    'relative',
    'border-0',
    'grid',
    'items-center',
    'transition',
    'duration-50',
    'ease-in-out',
    'cursor-pointer',
  ],
  {
    variants: {
      size: {
        sm: ['min-w-[36px]', 'p-[2px]'],
        md: ['min-w-[42px]', 'p-[3px]'],
        lg: ['min-w-[46px]', 'p-[3px]'],
        xl: ['min-w-[52px]', 'p-[3px]'],
      },
      color: {
        blue: [],
        red: [],
        green: [],
        yellow: [],
        purple: [],
        gray: [],
        dark: [],
        black: [],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        base: ['rounded'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        full: ['rounded-full'],
      },
      state: {
        active: [],
        inactive: [],
      },
      withRing: {
        true: [],
        false: ['focus:ring-0'],
      },
    },
    compoundVariants: [
      {
        state: 'active',
        withRing: true,
        className: ['focus:ring', 'focus:ring-offset-1'],
      },
      {
        state: 'active',
        color: 'blue',
        withRing: true,
        className: ['focus:ring-blue-100'],
      },
      {
        state: 'active',
        color: 'red',
        withRing: true,
        className: ['focus:ring-red-100'],
      },
      {
        state: 'active',
        color: 'green',
        withRing: true,
        className: ['focus:ring-green-100'],
      },
      {
        state: 'active',
        color: 'yellow',
        withRing: true,
        className: ['focus:ring-yellow-100'],
      },
      {
        state: 'active',
        color: 'purple',
        withRing: true,
        className: ['focus:ring-purple-100'],
      },
      {
        state: 'active',
        color: 'gray',
        withRing: true,
        className: ['focus:ring-gray-100'],
      },
      {
        state: 'active',
        color: 'dark',
        withRing: true,
        className: ['focus:ring-gray-200'],
      },
      {
        state: 'active',
        color: 'black',
        withRing: true,
        className: ['focus:ring-gray-400'],
      },
      {
        state: 'inactive',
        className: ['bg-gray-200', 'border-gray-200'],
      },
      {
        state: 'active',
        size: 'md',
        className: [],
      },
      {
        state: 'inactive',
        size: 'md',
        className: [],
      },
      {
        state: 'active',
        color: 'blue',
        className: [
          'bg-blue-500',
          'focus:bg-blue-600',
          'hover:bg-blue-600',
          'active:bg-blue-600/90',
          'disabled:bg-blue-300',
          'disabled:hover:bg-blue-300',
        ],
      },
      {
        state: 'active',
        color: 'red',
        className: [
          'bg-red-500',
          'focus:bg-red-600',
          'hover:bg-red-600',
          'active:bg-red-600/90',
          'disabled:bg-red-300',
          'disabled:hover:bg-red-300',
        ],
      },
      {
        state: 'active',
        color: 'green',
        className: [
          'bg-green-500',
          'focus:bg-green-600',
          'hover:bg-green-600',
          'active:bg-green-600/90',
          'disabled:bg-green-300',
          'disabled:hover:bg-green-300',
        ],
      },
      {
        state: 'active',
        color: 'yellow',
        className: [
          'bg-yellow-400',
          'focus:bg-yellow-500',
          'hover:bg-yellow-500',
          'active:bg-yellow-500/90',
          'disabled:bg-yellow-200',
          'disabled:hover:bg-yellow-200',
        ],
      },
      {
        state: 'active',
        color: 'purple',
        className: [
          'bg-purple-500',
          'focus:bg-purple-600',
          'hover:bg-purple-600',
          'active:bg-purple-600/90',
          'disabled:bg-purple-300',
          'disabled:hover:bg-purple-300',
        ],
      },
      {
        state: 'active',
        color: 'gray',
        className: [
          'bg-gray-200',
          'focus:bg-gray-300',
          'hover:bg-gray-300',
          'active:bg-gray-300/90',
          'disabled:bg-gray-100',
          'disabled:hover:bg-gray-100',
          'disabled:text-gray-400',
        ],
      },
      {
        state: 'active',
        color: 'dark',
        className: [
          'bg-gray-700',
          'focus:bg-gray-800',
          'hover:bg-gray-800',
          'active:bg-gray-800/90',
          'disabled:bg-gray-500',
          'disabled:hover:bg-gray-500',
        ],
      },
      {
        state: 'active',
        color: 'black',
        className: ['bg-black', 'active:bg-black/90', 'disabled:bg-gray-800'],
      },
    ],
  }
);

const switchInnerStyles = cva(['inline-block', 'bg-white', 'shadow'], {
  variants: {
    size: {
      sm: ['w-[17px]', 'h-[17px]'],
      md: ['w-[18px]', 'h-[18px]'],
      lg: ['w-[19px]', 'h-[19px]'],
      xl: ['w-[20px]', 'h-[20px]'],
    },
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      base: ['rounded'],
      md: ['rounded-md'],
      lg: ['rounded-lg'],
      full: ['rounded-full'],
    },
    state: {
      active: [],
      inactive: [],
    },
  },
  compoundVariants: [],
});

const switchLabelStyles = cva(['cursor-pointer'], {
  variants: {
    size: {
      sm: ['text-sm', 'pl-1.5'],
      md: ['text-base', 'pl-1.5'],
      lg: ['text-lg', 'pl-2'],
      xl: ['text-xl', 'pl-2'],
    },
  },
});

const switchDescriptionStyles = cva([], {
  variants: {
    size: {
      sm: ['text-xs', 'ml-1.5'],
      md: ['text-sm', 'ml-1.5'],
      lg: ['text-base', 'ml-2'],
      xl: ['text-lg', 'ml-2'],
    },
  },
});

const switchErrorStyles = cva(['text-red-500'], {
  variants: {
    size: {
      sm: ['text-xs', 'ml-1.5'],
      md: ['text-sm', 'ml-1.5'],
      lg: ['text-base', 'ml-2'],
      xl: ['text-lg', 'ml-2'],
    },
  },
});

export {
  switchStyles,
  switchInnerStyles,
  switchLabelStyles,
  switchDescriptionStyles,
  switchErrorStyles,
};
