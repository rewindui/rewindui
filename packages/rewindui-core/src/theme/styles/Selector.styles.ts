import { cva } from 'class-variance-authority';

const base = cva(['absolute', 'shadow-sm', 'z-30'], {
  variants: {
    color: {
      white: [],
      blue: [],
      red: [],
      green: [],
      yellow: [],
      purple: [],
      gray: [],
      dark: [],
      black: [],
    },
    size: {
      xs: ['h-6'],
      sm: ['h-8'],
      md: ['h-10'],
      lg: ['h-12'],
    },
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      base: ['rounded'],
      md: ['rounded-md'],
      lg: ['rounded-lg'],
      full: ['rounded-full'],
    },
    tone: {
      solid: [],
      light: [],
    },
  },
  compoundVariants: [
    {
      color: 'white',
      tone: 'solid',
      className: ['bg-white'],
    },
    {
      color: 'blue',
      tone: 'solid',
      className: ['bg-blue-500'],
    },
    {
      color: 'red',
      tone: 'solid',
      className: ['bg-red-500'],
    },
    {
      color: 'green',
      tone: 'solid',
      className: ['bg-green-500'],
    },
    {
      color: 'yellow',
      tone: 'solid',
      className: ['bg-yellow-500'],
    },
    {
      color: 'purple',
      tone: 'solid',
      className: ['bg-purple-500'],
    },
    {
      color: 'gray',
      tone: 'solid',
      className: ['bg-gray-500'],
    },
    {
      color: 'dark',
      tone: 'solid',
      className: ['bg-gray-800'],
    },
    {
      color: 'black',
      tone: 'solid',
      className: ['bg-black'],
    },
    {
      color: 'white',
      tone: 'light',
      className: ['bg-white'],
    },
    {
      color: 'blue',
      tone: 'light',
      className: ['bg-blue-100'],
    },
    {
      color: 'red',
      tone: 'light',
      className: ['bg-red-100'],
    },
    {
      color: 'green',
      tone: 'light',
      className: ['bg-green-100'],
    },
    {
      color: 'yellow',
      tone: 'light',
      className: ['bg-yellow-100'],
    },
    {
      color: 'purple',
      tone: 'light',
      className: ['bg-purple-100'],
    },
    {
      color: 'gray',
      tone: 'light',
      className: ['bg-gray-100'],
    },
    {
      color: 'dark',
      tone: 'light',
      className: ['bg-gray-200'],
    },
    {
      color: 'black',
      tone: 'light',
      className: ['bg-gray-300'],
    },
  ],
  defaultVariants: {
    color: 'white',
  },
});

const wrapper = cva(['flex', 'relative', 'p-1', 'bg-gray-50'], {
  variants: {
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      base: ['rounded'],
      md: ['rounded-md'],
      lg: ['rounded-lg'],
      full: ['rounded-full'],
    },
    shadow: {
      none: ['shadow-none'],
      sm: ['shadow-sm'],
      base: ['shadow'],
      md: ['shadow-md'],
      lg: ['shadow-lg'],
      xl: ['shadow-xl'],
    },
    orientation: {
      horizontal: ['flex-inline'],
      vertical: ['flex-col', 'gap-y-1'],
    },
    fullWidth: {
      true: ['w-full'],
      false: ['w-fit'],
    },
  },
});

const tab = cva(
  [
    'enabled:hover:shadow-sm',
    'enabled:hover:bg-white',
    'cursor-pointer',
    'flex',
    'flex-inline',
    'items-center',
    'justify-center',
    'box-border',
    'focus-visible:bg-white',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-0',
    'focus:outline-none',
  ],
  {
    variants: {
      size: {
        xs: ['text-xs', 'h-6', 'px-1.5'],
        sm: ['text-sm', 'h-8', 'px-2.5'],
        md: ['text-base', 'h-10', 'px-3'],
        lg: ['text-lg', 'h-12', 'px-4'],
      },
      color: {
        white: ['focus-visible:ring-gray-100'],
        blue: ['focus-visible:ring-blue-100'],
        red: ['focus-visible:ring-red-100'],
        green: ['focus-visible:ring-green-100'],
        yellow: ['focus-visible:ring-yellow-100'],
        purple: ['focus-visible:ring-purple-100'],
        gray: ['focus-visible:ring-gray-100'],
        dark: ['focus-visible:ring-gray-200'],
        black: ['focus-visible:ring-gray-300'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        base: ['rounded'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        full: ['rounded-full'],
      },
      tone: {
        solid: [],
        light: [],
      },
      active: {
        true: [],
        false: ['text-gray-800', 'disabled:text-gray-400', 'hover:disabled:cursor-not-allowed'],
      },
      orientation: {
        horizontal: ['flex-1'],
        vertical: ['w-full'],
      },
    },
    compoundVariants: [
      {
        active: true,
        color: ['white'],
        tone: 'solid',
        className: ['text-gray-800'],
      },
      {
        active: true,
        tone: 'solid',
        color: ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
        className: ['text-white'],
      },
      {
        active: true,
        color: ['white'],
        tone: 'light',
        className: ['text-gray-800'],
      },
      {
        active: true,
        tone: 'light',
        color: 'dark',
        className: ['text-gray-600'],
      },
      {
        active: true,
        tone: 'light',
        color: 'black',
        className: ['text-gray-700'],
      },
      {
        active: true,
        tone: 'light',
        color: 'blue',
        className: ['text-blue-500'],
      },
      {
        active: true,
        tone: 'light',
        color: 'red',
        className: ['text-red-500'],
      },
      {
        active: true,
        tone: 'light',
        color: 'green',
        className: ['text-green-500'],
      },
      {
        active: true,
        tone: 'light',
        color: 'yellow',
        className: ['text-yellow-500'],
      },
      {
        active: true,
        tone: 'light',
        color: 'purple',
        className: ['text-purple-500'],
      },
      {
        active: true,
        tone: 'light',
        color: 'gray',
        className: ['text-gray-600'],
      },
    ],
  }
);

const separator = cva(['last-of-type:hidden', 'text-gray-300', 'mx-0.5', 'self-center']);

const selectorStyles = {
  base,
  separator,
  tab,
  wrapper,
};

export { selectorStyles };
