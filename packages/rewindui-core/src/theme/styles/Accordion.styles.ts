import { cva } from 'class-variance-authority';

const accordionStyles = cva([], {
  variants: {
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
    shadowColor: {
      none: [''],
      gray: ['shadow-gray-400/50 hover:shadow-gray-400/60'],
      slate: ['shadow-slate-600/50 hover:shadow-slate-600/60'],
      zinc: ['shadow-zinc-600/50 hover:shadow-zinc-600/60'],
    },
    size: {
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
      xl: ['text-xl'],
    },
    tone: {
      solid: [],
      light: [],
      transparent: [],
    },
    bordered: {
      true: ['border', 'border-gray-100'],
    },
  },
});

const accordionBodyStyles = cva([], {
  variants: {
    size: {
      sm: ['text-sm', 'px-4', 'py-2'],
      md: ['text-base', 'px-4', 'py-3'],
      lg: ['text-base', 'px-4', 'py-4'],
      xl: ['text-lg', 'px-4', 'py-5'],
    },
    bordered: {
      true: [],
      false: [],
    },
  },
});

const accordionHeaderStyles = cva(
  [
    'cursor-pointer',
    'flex',
    'flex-row',
    'justify-between',
    'items-center',
    'transition-colors',
    'duration-250',
    'ease-in-out',
    'w-full',
    'focus:outline-none',
  ],
  {
    variants: {
      activeColor: {
        white: ['focus:ring-gray-50'],
        blue: ['focus:ring-blue-50'],
        red: ['focus:ring-red-50'],
        green: ['focus:ring-green-50'],
        yellow: ['focus:ring-yellow-50'],
        purple: ['focus:ring-purple-50'],
        gray: ['focus:ring-gray-50'],
        dark: ['focus:ring-gray-200'],
        black: ['focus:ring-gray-300'],
      },
      size: {
        sm: ['px-4', 'py-2'],
        md: ['px-4', 'py-3'],
        lg: ['px-4', 'py-4'],
        xl: ['px-4', 'py-5'],
      },
      state: {
        active: [],
        inactive: [],
      },
      tone: {
        solid: [],
        light: [],
      },
      radius: {
        none: ['first:rounded-t-none'],
        sm: ['first:rounded-t-sm'],
        base: ['first:rounded-t'],
        md: ['first:rounded-t-md'],
        lg: ['first:rounded-t-lg'],
      },
      bordered: {
        true: ['border-t', 'first:border-t-0', 'border-gray-100'],
        false: [],
      },
      withRing: {
        true: ['focus:ring', 'focus:ring-offset-1'],
        false: ['focus:ring-0'],
      },
    },
    compoundVariants: [
      {
        state: 'active',
        tone: 'solid',
        className: ['antialiased'],
      },
      {
        bordered: false,
        radius: 'sm',
        className: 'rounded-sm',
      },
      {
        bordered: false,
        radius: 'base',
        className: 'rounded',
      },
      {
        bordered: false,
        radius: 'md',
        className: 'rounded-md',
      },
      {
        bordered: false,
        radius: 'lg',
        className: 'rounded-lg',
      },
      {
        activeColor: 'white',
        state: 'active',
        tone: 'solid',
        className: ['bg-white', 'text-gray-800'],
      },
      {
        activeColor: 'blue',
        state: 'active',
        tone: 'solid',
        className: ['bg-blue-500', 'text-white'],
      },
      {
        activeColor: 'red',
        state: 'active',
        tone: 'solid',
        className: ['bg-red-500', 'text-white'],
      },
      {
        activeColor: 'green',
        state: 'active',
        tone: 'solid',
        className: ['bg-green-500', 'text-white'],
      },
      {
        activeColor: 'yellow',
        state: 'active',
        tone: 'solid',
        className: ['bg-yellow-500', 'text-white'],
      },
      {
        activeColor: 'purple',
        state: 'active',
        tone: 'solid',
        className: ['bg-purple-500', 'text-white'],
      },
      {
        activeColor: 'gray',
        state: 'active',
        tone: 'solid',
        className: ['bg-gray-200', 'text-gray-800'],
      },
      {
        activeColor: 'dark',
        state: 'active',
        tone: 'solid',
        className: ['bg-gray-700', 'text-white'],
      },
      {
        activeColor: 'black',
        state: 'active',
        tone: 'solid',
        className: ['bg-black', 'text-white'],
      },
      {
        activeColor: 'white',
        state: 'active',
        tone: 'light',
        className: ['bg-white', 'text-gray-800'],
      },
      {
        activeColor: 'blue',
        state: 'active',
        tone: 'light',
        className: ['bg-blue-50/50', 'text-blue-900'],
      },
      {
        activeColor: 'red',
        state: 'active',
        tone: 'light',
        className: ['bg-red-50/50', 'text-red-800'],
      },
      {
        activeColor: 'green',
        state: 'active',
        tone: 'light',
        className: ['bg-green-50/50', 'text-green-800'],
      },
      {
        activeColor: 'yellow',
        state: 'active',
        tone: 'light',
        className: ['bg-yellow-50/50', 'text-yellow-800'],
      },
      {
        activeColor: 'purple',
        state: 'active',
        tone: 'light',
        className: ['bg-purple-50/50', 'text-purple-800'],
      },
      {
        activeColor: 'gray',
        state: 'active',
        tone: 'light',
        className: ['bg-gray-50/50', 'text-gray-600'],
      },
      {
        activeColor: 'dark',
        state: 'active',
        tone: 'light',
        className: ['bg-gray-200/50', 'text-gray-800'],
      },
      {
        activeColor: 'black',
        state: 'active',
        tone: 'light',
        className: ['bg-gray-400/50', 'text-gray-800'],
      },
    ],
  }
);

const accordionIconStyles = cva(['transition', 'transform', 'duration-250', 'ease-in-out'], {
  variants: {
    state: {
      active: 'rotate-180',
      inactive: '',
    },
    size: {
      sm: ['w-4', 'h-4'],
      md: ['w-5', 'h-5'],
      lg: ['w-5', 'h-5'],
      xl: ['w-6', 'h-6'],
    },
  },
});

export { accordionStyles, accordionBodyStyles, accordionHeaderStyles, accordionIconStyles };
