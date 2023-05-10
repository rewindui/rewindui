import { cva } from 'class-variance-authority';

const base = cva(['inline-flex', 'items-center', 'text-center'], {
  variants: {
    tone: {
      solid: ['border', 'border-transparent', 'antialiased'],
      light: [],
      glossy: ['bg-gradient-to-r'],
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
      xs: ['text-xs', 'px-1', 'h-5'],
      sm: ['text-sm', 'px-1.5', 'h-6'],
      md: ['text-base', 'px-1.5', 'h-7'],
      lg: ['text-lg', 'px-2', 'h-8'],
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
      tone: 'glossy',
      color: 'blue',
      className: ['text-white', 'from-blue-500', 'to-blue-700'],
    },
    {
      tone: 'glossy',
      color: 'red',
      className: ['text-white', 'from-red-500', 'to-red-700'],
    },
    {
      tone: 'glossy',
      color: 'green',
      className: ['text-white', 'from-green-500', 'to-green-700'],
    },
    {
      tone: 'glossy',
      color: 'yellow',
      className: ['text-white', 'from-yellow-400', 'to-yellow-600'],
    },
    {
      tone: 'glossy',
      color: 'purple',
      className: ['text-white', 'from-purple-500', 'to-purple-700'],
    },
    {
      tone: 'glossy',
      color: 'gray',
      className: ['text-gray-800', 'from-gray-100', 'to-gray-300'],
    },
    {
      tone: 'glossy',
      color: 'dark',
      className: ['text-white', 'from-gray-700', 'to-gray-900'],
    },
    {
      tone: 'glossy',
      color: 'black',
      className: ['text-white', 'from-gray-800', 'to-black'],
    },
    {
      tone: 'light',
      color: 'blue',
      className: ['text-blue-600', 'bg-blue-100/50', 'border-blue-500'],
    },
    {
      tone: 'light',
      color: 'red',
      className: ['text-red-600', 'bg-red-100/50', 'border-red-500'],
    },
    {
      tone: 'light',
      color: 'green',
      className: ['text-green-600', 'bg-green-100/50', 'border-green-500'],
    },
    {
      tone: 'light',
      color: 'yellow',
      className: ['text-yellow-600', 'bg-yellow-100/50', 'border-yellow-500'],
    },
    {
      tone: 'light',
      color: 'purple',
      className: ['text-purple-600', 'bg-purple-100/50', 'border-purple-500'],
    },
    {
      tone: 'light',
      color: 'gray',
      className: ['text-gray-600', 'bg-gray-100/50', 'border-gray-500'],
    },
    {
      tone: 'light',
      color: 'dark',
      className: ['text-gray-700', 'bg-gray-300/50', 'border-gray-700'],
    },
    {
      tone: 'light',
      color: 'black',
      className: ['text-black', 'bg-gray-400/50', 'border-gray-800'],
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

const badgeStyles = {
  base,
};

export { badgeStyles };
