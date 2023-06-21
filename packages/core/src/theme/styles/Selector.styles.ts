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
      xs: [],
      sm: [],
      md: [],
      lg: [],
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
      className: ['bg-yellow-400'],
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

const wrapper = cva(['flex', 'relative', 'bg-gray-50', 'items-center'], {
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
    size: {
      xs: ['p-0.5'],
      sm: ['p-0.5'],
      md: ['p-[3px]'],
      lg: ['p-[3px]'],
    },
    orientation: {
      horizontal: ['flex-inline'],
      vertical: ['flex-col', 'gap-y-1', 'h-auto'],
    },
    fullWidth: {
      true: ['w-full', 'gap-x-0.5'],
      false: ['w-fit'],
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      size: 'xs',
      className: ['h-6'],
    },
    {
      orientation: 'horizontal',
      size: 'sm',
      className: ['h-8'],
    },
    {
      orientation: 'horizontal',
      size: 'md',
      className: ['h-10'],
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      className: ['h-12'],
    },
  ],
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
        xs: ['text-xs', 'px-1.5'],
        sm: ['text-sm', 'px-2.5'],
        md: ['text-base', 'px-3'],
        lg: ['text-lg', 'px-4'],
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
        horizontal: ['flex-1', 'h-full'],
        vertical: ['w-full'],
      },
    },
    compoundVariants: [
      {
        size: 'xs',
        orientation: 'vertical',
        className: ['h-6'],
      },
      {
        size: 'sm',
        orientation: 'vertical',
        className: ['h-8'],
      },
      {
        size: 'md',
        orientation: 'vertical',
        className: ['h-10'],
      },
      {
        size: 'lg',
        orientation: 'vertical',
        className: ['h-12'],
      },
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
        className: ['text-yellow-400'],
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

const separator = cva(['last-of-type:hidden', 'text-gray-300', 'mx-0.5', 'self-center'], {
  variants: {
    orientation: {
      horizontal: ['bg-gray-300'],
      vertical: ['bg-gray-300'],
    },
    size: {
      xs: [],
      sm: [],
      md: [],
      lg: [],
    },
  },
  compoundVariants: [
    {
      orientation: 'horizontal',
      size: 'xs',
      className: ['w-px h-3'],
    },
    {
      orientation: 'horizontal',
      size: 'sm',
      className: ['w-px h-4'],
    },
    {
      orientation: 'horizontal',
      size: 'md',
      className: ['w-px h-5'],
    },
    {
      orientation: 'horizontal',
      size: 'lg',
      className: ['w-px h-6'],
    },
    {
      orientation: 'vertical',
      size: 'xs',
      className: ['w-3 h-px'],
    },
    {
      orientation: 'vertical',
      size: 'sm',
      className: ['w-4 h-px'],
    },
    {
      orientation: 'vertical',
      size: 'md',
      className: ['w-5 h-px'],
    },
    {
      orientation: 'vertical',
      size: 'lg',
      className: ['w-6 h-px'],
    },
  ],
});

const selectorStyles = {
  base,
  separator,
  tab,
  wrapper,
};

export { selectorStyles };
