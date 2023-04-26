import { cva } from 'class-variance-authority';

const base = cva(
  [
    'fixed',
    'top-0',
    'flex',
    'overflow-auto',
    'justify-center',
    'transition',
    'transform',
    'duration-100',
    'ease-in-out',
  ],
  {
    variants: {
      mode: {
        fullscreen: ['inset-0', 'mt-0'],
        dialog: ['inset-x-0', 'mt-12', 'mx-auto', 'max-h-[calc(100%-6rem)]'],
      },
      open: {
        true: ['opacity-100', 'scale-100', 'z-50'],
        false: ['opacity-0', 'scale-75', 'invisible', 'z-10'],
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
        className: ['w-2/5'],
      },
      {
        size: 'base',
        mode: 'dialog',
        className: ['w-2/4'],
      },
      {
        size: 'md',
        mode: 'dialog',
        className: ['w-3/5'],
      },
      {
        size: 'lg',
        mode: 'dialog',
        className: ['w-4/5'],
      },
      {
        size: 'xl',
        mode: 'dialog',
        className: ['w-5/6'],
      },
      {
        size: 'screen',
        mode: 'dialog',
        className: ['min-w-screen'],
      },
    ],
  }
);

const modalStyles = {
  base,
};

export { modalStyles };
