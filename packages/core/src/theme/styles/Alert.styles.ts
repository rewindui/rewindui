import { cva } from 'class-variance-authority';

const base = cva(['flex', 'gap-x-3', 'w-full'], {
  variants: {
    tone: {
      solid: ['border', 'border-transparent', 'antialiased'],
      light: ['border'],
      outline: ['border', 'bg-white'],
    },
    color: {
      white: [],
      blue: [],
      red: [],
      green: [],
      yellow: [],
      purple: [],
      gray: [],
      dark: [],
      black: [],
    },
    size: {
      xs: ['text-xs', 'px-2.5', 'py-2'],
      sm: ['text-sm', 'px-3', 'py-2.5'],
      md: ['text-base', 'px-4', 'py-3'],
      lg: ['text-lg', 'px-5', 'py-4'],
    },
    accent: {
      none: [],
      top: ['border-t-2'],
      right: ['border-r-2'],
      bottom: ['border-b-2'],
      left: ['border-l-2'],
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
    shadowColor: {
      none: [],
      white: ['shadow-gray-200/50 hover:shadow-gray-200/60'],
      blue: ['shadow-blue-500/50', 'hover:shadow-blue-500/60'],
      red: ['shadow-red-500/50 hover:shadow-red-500/60'],
      green: ['shadow-green-500/50 hover:shadow-green-500/60'],
      yellow: ['shadow-yellow-500/50 hover:shadow-yellow-500/60'],
      purple: ['shadow-purple-500/50 hover:shadow-purple-500/60'],
      gray: ['shadow-gray-400/50 hover:shadow-gray-400/60'],
      dark: ['shadow-gray-600/50 hover:shadow-gray-600/60'],
      black: ['shadow-gray-800/50 hover:shadow-gray-800/60'],
    },
  },
  compoundVariants: [
    {
      accent: ['top', 'right', 'bottom', 'left'],
      color: 'white',
      tone: 'solid',
      className: ['border-gray-200'],
    },
    {
      accent: ['top', 'right', 'bottom', 'left'],
      color: 'blue',
      tone: 'solid',
      className: ['border-blue-200'],
    },
    {
      accent: ['top', 'right', 'bottom', 'left'],
      color: 'red',
      tone: 'solid',
      className: ['border-red-200'],
    },
    {
      accent: ['top', 'right', 'bottom', 'left'],
      color: 'green',
      tone: 'solid',
      className: ['border-green-200'],
    },
    {
      accent: ['top', 'right', 'bottom', 'left'],
      color: 'yellow',
      tone: 'solid',
      className: ['border-yellow-200'],
    },
    {
      accent: ['top', 'right', 'bottom', 'left'],
      color: 'purple',
      tone: 'solid',
      className: ['border-purple-200'],
    },
    {
      accent: ['top', 'right', 'bottom', 'left'],
      color: 'gray',
      tone: 'solid',
      className: ['border-gray-100'],
    },
    {
      accent: ['top', 'right', 'bottom', 'left'],
      color: 'dark',
      tone: 'solid',
      className: ['border-gray-300'],
    },
    {
      accent: ['top', 'right', 'bottom', 'left'],
      color: 'black',
      tone: 'solid',
      className: ['border-gray-400'],
    },
    {
      color: 'white',
      className: ['text-gray-800', 'bg-white'],
    },
    {
      tone: 'solid',
      color: 'blue',
      className: ['text-white', 'bg-blue-500'],
    },
    {
      tone: 'solid',
      color: 'red',
      className: ['text-white', 'bg-red-500'],
    },
    {
      tone: 'solid',
      color: 'green',
      className: ['text-white', 'bg-green-500'],
    },
    {
      tone: 'solid',
      color: 'yellow',
      className: ['text-white', 'bg-yellow-400'],
    },
    {
      tone: 'solid',
      color: 'purple',
      className: ['text-white', 'bg-purple-500'],
    },
    {
      tone: 'solid',
      color: 'gray',
      className: ['text-gray-800', 'bg-gray-200'],
    },
    {
      tone: 'solid',
      color: 'dark',
      className: ['text-white', 'bg-gray-700'],
    },
    {
      tone: 'solid',
      color: 'black',
      className: ['text-white', 'bg-black'],
    },
    {
      tone: 'light',
      color: 'blue',
      className: ['text-blue-700', 'bg-blue-100/95', 'border-blue-500'],
    },
    {
      tone: 'light',
      color: 'red',
      className: ['text-red-700', 'bg-red-100/95', 'border-red-500'],
    },
    {
      tone: 'light',
      color: 'green',
      className: ['text-green-700', 'bg-green-100/95', 'border-green-500'],
    },
    {
      tone: 'light',
      color: 'yellow',
      className: ['text-yellow-700', 'bg-yellow-100/95', 'border-yellow-500'],
    },
    {
      tone: 'light',
      color: 'purple',
      className: ['text-purple-700', 'bg-purple-100/95', 'border-purple-500'],
    },
    {
      tone: 'light',
      color: 'gray',
      className: ['text-gray-700', 'bg-gray-100/95', 'border-gray-500'],
    },
    {
      tone: 'light',
      color: 'dark',
      className: ['text-gray-800', 'bg-gray-300/95', 'border-gray-700'],
    },
    {
      tone: 'light',
      color: 'black',
      className: ['text-black', 'bg-gray-400/95', 'border-gray-800'],
    },
    {
      tone: 'outline',
      color: 'blue',
      className: ['text-blue-500', 'border-blue-500'],
    },
    {
      tone: 'outline',
      color: 'red',
      className: ['text-red-500', 'border-red-500'],
    },
    {
      tone: 'outline',
      color: 'green',
      className: ['text-green-500', 'border-green-500'],
    },
    {
      tone: 'outline',
      color: 'yellow',
      className: ['text-yellow-400', 'border-yellow-400'],
    },
    {
      tone: 'outline',
      color: 'purple',
      className: ['text-purple-500', 'border-purple-500'],
    },
    {
      tone: 'outline',
      color: 'gray',
      className: ['text-gray-600', 'border-gray-500'],
    },
    {
      tone: 'outline',
      color: 'dark',
      className: ['text-gray-600', 'border-gray-700'],
    },
    {
      tone: 'outline',
      color: 'black',
      className: ['text-black', 'border-gray-800'],
    },
  ],
});

const infoWrapper = cva(['flex', 'flex-col', 'w-full'], {
  variants: {
    size: {
      xs: ['gap-y-1'],
      sm: ['gap-y-1.5'],
      md: ['gap-y-1.5'],
      lg: ['gap-y-2'],
    },
  },
});

const title = cva(['font-medium', 'leading-none'], {
  variants: {
    size: {
      xs: ['text-sm'],
      sm: ['text-base'],
      md: ['text-lg'],
      lg: ['text-xl'],
    },
    color: {
      white: [],
      blue: [],
      red: [],
      green: [],
      yellow: [],
      purple: [],
      gray: [],
      dark: [],
      black: [],
    },
    tone: {
      solid: [],
      light: [],
      outline: [],
    },
  },
  compoundVariants: [
    {
      tone: 'light',
      color: 'blue',
      className: ['text-blue-800'],
    },
    {
      tone: 'light',
      color: 'red',
      className: ['text-red-800'],
    },
    {
      tone: 'light',
      color: 'green',
      className: ['text-green-800'],
    },
    {
      tone: 'light',
      color: 'yellow',
      className: ['text-yellow-800'],
    },
    {
      tone: 'light',
      color: 'purple',
      className: ['text-purple-800'],
    },
    {
      tone: 'light',
      color: 'gray',
      className: ['text-gray-800'],
    },
    {
      tone: 'light',
      color: 'dark',
      className: ['text-gray-900'],
    },
  ],
});

const text = cva([]);

const iconWrapper = cva(['self-start']);

const dismissIcon = cva(['hover:opacity-75'], {
  variants: {
    size: {
      xs: ['w-4', 'h-4'],
      sm: ['w-4', 'h-4'],
      md: ['w-5', 'h-5'],
      lg: ['w-5', 'h-5'],
    },
  },
});

const alertStyles = {
  base,
  infoWrapper,
  iconWrapper,
  dismissIcon,
  title,
  text,
};

export { alertStyles };
