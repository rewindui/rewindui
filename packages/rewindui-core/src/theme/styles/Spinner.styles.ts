import { cva } from 'class-variance-authority';

const spinnerStyles = cva(['animate-spin'], {
  variants: {
    color: {
      gray: ['text-gray-800'],
      slate: ['text-slate-800'],
      white: ['text-white'],
    },
    size: {
      xs: ['w-3', 'h-3'],
      sm: ['w-5', 'h-5'],
      md: ['w-6', 'h-6'],
      lg: ['w-8', 'h-8'],
    },
  },
});

export { spinnerStyles };
