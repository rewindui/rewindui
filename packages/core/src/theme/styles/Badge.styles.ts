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
  },
  compoundVariants: [
    {
      tone: ['solid', 'glossy', 'outline'],
      shadowColor: 'white',
      className: ['shadow-gray-200/50 hover:shadow-gray-200/60'],
    },
    {
      tone: ['solid', 'glossy', 'outline'],
      shadowColor: 'blue',
      className: ['shadow-blue-500/50', 'hover:shadow-blue-500/60'],
    },
    {
      tone: ['solid', 'glossy', 'outline'],
      shadowColor: 'red',
      className: ['shadow-red-500/50 hover:shadow-red-500/60'],
    },
    {
      tone: ['solid', 'glossy', 'outline'],
      shadowColor: 'green',
      className: ['shadow-green-500/50 hover:shadow-green-500/60'],
    },
    {
      tone: ['solid', 'glossy', 'outline'],
      shadowColor: 'yellow',
      className: ['shadow-yellow-500/50 hover:shadow-yellow-500/60'],
    },
    {
      tone: ['solid', 'glossy', 'outline'],
      shadowColor: 'purple',
      className: ['shadow-purple-500/50 hover:shadow-purple-500/60'],
    },
    {
      tone: ['solid', 'glossy', 'outline'],
      shadowColor: 'gray',
      className: ['shadow-gray-400/50 hover:shadow-gray-400/60'],
    },
    {
      tone: ['solid', 'glossy', 'outline'],
      shadowColor: 'dark',
      className: ['shadow-gray-600/50 hover:shadow-gray-600/60'],
    },
    {
      tone: ['solid', 'glossy', 'outline'],
      shadowColor: 'black',
      className: ['shadow-gray-800/50 hover:shadow-gray-800/60'],
    },
    {
      tone: 'light',
      shadowColor: 'white',
      className: ['shadow-gray-200/50 hover:shadow-gray-200/60'],
    },
    {
      tone: 'light',
      shadowColor: 'blue',
      className: ['shadow-blue-300/50', 'hover:shadow-blue-300/60'],
    },
    {
      tone: 'light',
      shadowColor: 'red',
      className: ['shadow-red-300/50 hover:shadow-red-300/60'],
    },
    {
      tone: 'light',
      shadowColor: 'green',
      className: ['shadow-green-300/50 hover:shadow-green-300/60'],
    },
    {
      tone: 'light',
      shadowColor: 'yellow',
      className: ['shadow-yellow-300/50 hover:shadow-yellow-300/60'],
    },
    {
      tone: 'light',
      shadowColor: 'purple',
      className: ['shadow-purple-300/50 hover:shadow-purple-300/60'],
    },
    {
      tone: 'light',
      shadowColor: 'gray',
      className: ['shadow-gray-300/50 hover:shadow-gray-300/60'],
    },
    {
      tone: 'light',
      shadowColor: 'dark',
      className: ['shadow-gray-400/50 hover:shadow-gray-400/60'],
    },
    {
      tone: 'light',
      shadowColor: 'black',
      className: ['shadow-gray-500/50 hover:shadow-gray-500/60'],
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
      tone: 'glossy',
      color: 'blue',
      className: ['text-white', 'from-blue-600', 'to-blue-500'],
    },
    {
      tone: 'glossy',
      color: 'red',
      className: ['text-white', 'from-red-600', 'to-red-500'],
    },
    {
      tone: 'glossy',
      color: 'green',
      className: ['text-white', 'from-green-600', 'to-green-500'],
    },
    {
      tone: 'glossy',
      color: 'yellow',
      className: ['text-white', 'from-yellow-500', 'to-yellow-400'],
    },
    {
      tone: 'glossy',
      color: 'purple',
      className: ['text-white', 'from-purple-600', 'to-purple-500'],
    },
    {
      tone: 'glossy',
      color: 'gray',
      className: ['text-gray-800', 'from-gray-200', 'to-gray-100'],
    },
    {
      tone: 'glossy',
      color: 'dark',
      className: ['text-white', 'from-gray-600', 'to-gray-500'],
    },
    {
      tone: 'glossy',
      color: 'black',
      className: ['text-white', 'from-black', 'to-gray-700'],
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
      className: ['text-blue-700', 'border-blue-200', 'bg-blue-50'],
    },
    {
      tone: 'outline',
      color: 'red',
      className: ['text-red-700', 'border-red-200', 'bg-red-50'],
    },
    {
      tone: 'outline',
      color: 'green',
      className: ['text-green-700', 'border-green-200', 'bg-green-50'],
    },
    {
      tone: 'outline',
      color: 'yellow',
      className: ['text-yellow-700', 'border-yellow-200', 'bg-yellow-50'],
    },
    {
      tone: 'outline',
      color: 'purple',
      className: ['text-purple-700', 'border-purple-200', 'bg-purple-50'],
    },
    {
      tone: 'outline',
      color: 'gray',
      className: ['text-gray-700', 'border-gray-200', 'bg-gray-50'],
    },
    {
      tone: 'outline',
      color: 'dark',
      className: ['text-gray-800', 'border-gray-400', 'bg-gray-50'],
    },
    {
      tone: 'outline',
      color: 'black',
      className: ['text-black', 'border-gray-500', 'bg-gray-50'],
    },
  ],
});

const badgeStyles = {
  base,
};

export { badgeStyles };
