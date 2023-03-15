import { cva } from 'class-variance-authority';

const base = cva([], {
  variants: {
    fit: {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    },
    radius: {
      none: '',
      sm: 'rounded-sm',
      base: 'rounded',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    },
  },
});

const caption = cva(['w-full', 'text-base', 'text-center', 'p-2', 'absolute', 'bottom-0'], {
  variants: {
    mode: {
      light: ['bg-gray-200/75', 'text-gray-900'],
      dark: ['bg-gray-800/50', 'text-gray-50'],
    },
  },
});

const wrapper = cva(['relative']);

const imageStyles = {
  base,
  caption,
  wrapper,
};

export { imageStyles };
