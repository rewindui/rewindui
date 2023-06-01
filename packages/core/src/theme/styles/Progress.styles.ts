import { cva } from 'class-variance-authority';

const wrapper = cva(['flex', 'flex-col', 'w-full'], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
    },
  },
});

const base = cva(['bg-gray-100', 'overflow-hidden', 'flex', 'items-center', 'shadow-gray-200'], {
  variants: {
    size: {
      xs: ['h-1', 'text-xs'],
      sm: ['h-2', 'text-xs'],
      md: ['h-4', 'text-sm'],
      lg: ['h-5', 'text-base'],
    },
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
  },
});

const bar = cva(
  [
    'relative',
    'flex',
    'items-center',
    'h-full',
    'justify-center',
    'transition-[width]',
    'duration-300',
  ],
  {
    variants: {
      color: {
        white: ['bg-white', 'text-gray-800'],
        blue: ['bg-blue-500'],
        red: ['bg-red-500'],
        green: ['bg-green-500'],
        yellow: ['bg-yellow-500'],
        purple: ['bg-purple-500'],
        gray: ['bg-gray-500'],
        dark: ['bg-gray-800'],
        black: ['bg-black'],
      },
    },
    compoundVariants: [
      {
        color: ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
        className: ['text-white'],
      },
    ],
  }
);

const label = cva(['flex', 'justify-between', 'text-gray-800'], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
});

const description = cva(['text-gray-600'], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-sm'],
    },
  },
});

const stripe = cva([], {
  variants: {
    size: {
      xs: ['0.5rem 0.5rem'],
      sm: ['1rem 1rem'],
      md: ['2rem 2rem'],
      lg: ['2.5rem 2.5rem'],
    },
  },
});

const progressStyles = {
  base,
  bar,
  description,
  label,
  wrapper,
  stripe,
};

export { progressStyles };
