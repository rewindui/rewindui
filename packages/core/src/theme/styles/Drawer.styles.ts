import { cva } from 'class-variance-authority';

const base = cva(['fixed', 'flex', 'overflow-auto', 'justify-center', 'z-[60]', 'bg-white'], {
  variants: {
    shadow: {
      none: ['shadow-none'],
      sm: ['shadow-sm'],
      base: ['shadow'],
      md: ['shadow-md'],
      lg: ['shadow-lg'],
      xl: ['shadow-xl'],
    },
    position: {
      top: ['w-full', 'top-0'],
      bottom: ['w-full', 'bottom-0'],
      left: ['h-full', 'left-0', 'top-0'],
      right: ['h-full', 'right-0', 'top-0'],
    },
  },
  compoundVariants: [],
});

const drawerStyles = {
  base,
};

export { drawerStyles };
