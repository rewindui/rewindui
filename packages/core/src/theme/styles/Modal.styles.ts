import { cva } from 'class-variance-authority';

const base = cva(['fixed', 'top-0', 'flex', 'overflow-auto', 'justify-center', 'z-50'], {
  variants: {
    mode: {
      fullscreen: ['inset-0', 'mt-0'],
      dialog: ['mt-12', 'mx-2', 'max-h-[calc(100%-6rem)]'],
    },
    color: {
      white: 'bg-white',
      gray: 'bg-gray-50',
      slate: 'bg-slate-50',
      zinc: 'bg-zinc-50',
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
    size: {
      auto: [],
      sm: [],
      base: [],
      md: [],
      lg: [],
      xl: [],
      screen: [],
    },
  },
  compoundVariants: [
    {
      size: 'auto',
      mode: 'dialog',
      className: ['w-auto'],
    },
    {
      size: 'sm',
      mode: 'dialog',
      className: ['min-w-[18.75rem]'],
    },
    {
      size: 'md',
      mode: 'dialog',
      className: ['min-w-[31.25rem]'],
    },
    {
      size: 'lg',
      mode: 'dialog',
      className: ['min-w-[50rem]'],
    },
    {
      size: 'xl',
      mode: 'dialog',
      className: ['min-w-[71.25rem]'],
    },
    {
      size: 'screen',
      mode: 'dialog',
      className: ['min-w-screen'],
    },
  ],
});

const modalStyles = {
  base,
};

export { modalStyles };
