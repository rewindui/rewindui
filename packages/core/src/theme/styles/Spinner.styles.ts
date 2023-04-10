import { cva } from 'class-variance-authority';

const base = cva(['animate-spin'], {
  variants: {
    size: {
      xs: ['w-3', 'h-3'],
      sm: ['w-5', 'h-5'],
      md: ['w-6', 'h-6'],
      lg: ['w-8', 'h-8'],
    },
  },
});

const spinnerStyles = {
  base,
};

export { spinnerStyles };
