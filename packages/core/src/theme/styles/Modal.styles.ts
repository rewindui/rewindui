import { cva } from 'class-variance-authority';

const base = cva(['fixed', 'flex', 'overflow-auto', 'justify-center', 'z-[60]'], {
  variants: {
    mode: {
      fullscreen: ['inset-0', 'mt-0'],
      dialog: ['mx-2', 'max-h-[calc(100%-6rem)]'],
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
      xl: ['rounded-xl'],
      '2xl': ['rounded-2xl'],
    },
    shadow: {
      none: ['shadow-none'],
      sm: ['shadow-sm'],
      base: ['shadow'],
      md: ['shadow-md'],
      lg: ['shadow-lg'],
      xl: ['shadow-xl'],
      modal: ['shadow-modal'],
    },
    size: {
      auto: [],
      sm: [],
      md: [],
      lg: [],
      xl: [],
      screen: [],
    },
    position: {
      top: [],
      bottom: [],
      center: [],
    },
  },
  compoundVariants: [
    {
      position: 'top',
      mode: 'dialog',
      className: ['mt-12', 'top-0'],
    },
    {
      position: 'bottom',
      mode: 'dialog',
      className: ['mb-12', 'top-auto', 'bottom-0'],
    },
    {
      position: 'center',
      mode: 'dialog',
      className: ['top-1/2'],
    },
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
