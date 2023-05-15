import { cva } from 'class-variance-authority';

const base = cva(['fixed', 'top-0', 'flex', 'overflow-auto', 'justify-center', 'z-[60]'], {
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
      className: ['w-[calc(100vw-6rem)]', 'sm:w-[18.75rem]'],
    },
    {
      size: 'md',
      mode: 'dialog',
      className: ['w-[calc(100vw-6rem)]', 'sm:w-[18.75rem]', 'md:w-[31.25rem]'],
    },
    {
      size: 'lg',
      mode: 'dialog',
      className: ['w-[calc(100vw-6rem)]', 'sm:w-[18.75rem]', 'md:w-[31.25rem]', 'lg:w-[50rem]'],
    },
    {
      size: 'xl',
      mode: 'dialog',
      className: [
        'w-[calc(100vw-6rem)]',
        'sm:w-[18.75rem]',
        'md:w-[31.25rem]',
        'lg:w-[50rem]',
        'xl:w-[71.25rem]',
      ],
    },
    {
      size: 'screen',
      mode: 'dialog',
      className: ['w-[calc(100vw-6rem)]'],
    },
  ],
});

const modalStyles = {
  base,
};

export { modalStyles };
