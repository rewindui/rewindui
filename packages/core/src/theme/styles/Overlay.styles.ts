import { cva } from 'class-variance-authority';

const base = cva(
  [
    'fixed',
    'inset-0',
    'overflow-hidden',
    'z-[45]',
    'transition-all',
    'duration-300',
    'ease-in-out',
  ],
  {
    variants: {
      opacity: {
        '25': [],
        '50': [],
        '75': [],
      },
      open: {
        true: ['opacity-100', 'visible'],
        false: ['opacity-0', 'invisible'],
      },
      color: {
        white: [],
        gray: [],
        dark: [],
      },
      blur: {
        none: ['backdrop-blur-none'],
        sm: ['backdrop-blur-sm'],
        base: ['backdrop-blur'],
        md: ['backdrop-blur-md'],
        lg: ['backdrop-blur-lg'],
        xl: ['backdrop-blur-xl'],
      },
    },
    compoundVariants: [
      {
        color: 'white',
        opacity: '25',
        className: ['bg-white/25'],
      },
      {
        color: 'white',
        opacity: '50',
        className: ['bg-white/50'],
      },
      {
        color: 'white',
        opacity: '75',
        className: ['bg-white/75'],
      },
      {
        color: 'gray',
        opacity: '25',
        className: ['bg-gray-500/25'],
      },
      {
        color: 'gray',
        opacity: '50',
        className: ['bg-gray-500/50'],
      },
      {
        color: 'gray',
        opacity: '75',
        className: ['bg-gray-500/75'],
      },
      {
        color: 'dark',
        opacity: '25',
        className: ['bg-gray-900/25'],
      },
      {
        color: 'dark',
        opacity: '50',
        className: ['bg-gray-900/50'],
      },
      {
        color: 'dark',
        opacity: '75',
        className: ['bg-gray-900/75'],
      },
    ],
  }
);

const overlayStyles = {
  base,
};

export { overlayStyles };
