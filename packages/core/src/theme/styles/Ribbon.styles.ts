import { cva } from 'class-variance-authority';

const base = cva(['flex', 'items-center', 'text-center', 'absolute'], {
  variants: {
    clipped: {
      true: ['overflow-hidden'],
      false: [],
    },
    tone: {
      solid: [],
      light: [],
      glossy: ['bg-gradient-to-r'],
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
    position: {
      left: ['left-0', 'top-auto', 'transform', '-translate-x-1'],
      right: ['right-0', 'top-auto', 'transform', 'translate-x-1'],
      'top-left': ['top-0', 'left-0', 'transform', 'translate-x-4', '-translate-y-1'],
      'top-right': ['top-0', 'right-0', 'transform', '-translate-x-4', '-translate-y-1'],
    },
    size: {
      sm: ['text-sm', 'px-1.5', 'h-7'],
      md: ['text-sm', 'px-2', 'h-8'],
      lg: ['text-base', 'px-2.5', 'h-9'],
    },
    radius: {
      none: ['rounded-none'],
      sm: [],
      base: [],
      md: [],
      lg: [],
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
      none: ['shadow-neutral-300'],
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
      tone: ['solid', 'glossy'],
      shadowColor: 'white',
      className: ['shadow-gray-200/50 hover:shadow-gray-200/60'],
    },
    {
      tone: ['solid', 'glossy'],
      shadowColor: 'blue',
      className: ['shadow-blue-500/50', 'hover:shadow-blue-500/60'],
    },
    {
      tone: ['solid', 'glossy'],
      shadowColor: 'red',
      className: ['shadow-red-500/50 hover:shadow-red-500/60'],
    },
    {
      tone: ['solid', 'glossy'],
      shadowColor: 'green',
      className: ['shadow-green-500/50 hover:shadow-green-500/60'],
    },
    {
      tone: ['solid', 'glossy'],
      shadowColor: 'yellow',
      className: ['shadow-yellow-500/50 hover:shadow-yellow-500/60'],
    },
    {
      tone: ['solid', 'glossy'],
      shadowColor: 'purple',
      className: ['shadow-purple-500/50 hover:shadow-purple-500/60'],
    },
    {
      tone: ['solid', 'glossy'],
      shadowColor: 'gray',
      className: ['shadow-gray-400/50 hover:shadow-gray-400/60'],
    },
    {
      tone: ['solid', 'glossy'],
      shadowColor: 'dark',
      className: ['shadow-gray-600/50 hover:shadow-gray-600/60'],
    },
    {
      tone: ['solid', 'glossy'],
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
      position: ['top-left', 'top-right'],
      radius: 'sm',
      className: ['rounded-b-sm'],
    },
    {
      position: ['top-left', 'top-right'],
      radius: 'base',
      className: ['rounded-b'],
    },
    {
      position: ['top-left', 'top-right'],
      radius: 'md',
      className: ['rounded-b-md'],
    },
    {
      position: ['top-left', 'top-right'],
      radius: 'lg',
      className: ['rounded-b-lg'],
    },
    {
      position: 'right',
      radius: 'sm',
      className: ['rounded-l-sm'],
    },
    {
      position: 'right',
      radius: 'base',
      className: ['rounded-l'],
    },
    {
      position: 'right',
      radius: 'md',
      className: ['rounded-l-md'],
    },
    {
      position: 'right',
      radius: 'lg',
      className: ['rounded-l-lg'],
    },
    {
      position: 'left',
      radius: 'sm',
      className: ['rounded-r-sm'],
    },
    {
      position: 'left',
      radius: 'base',
      className: ['rounded-r'],
    },
    {
      position: 'left',
      radius: 'md',
      className: ['rounded-r-md'],
    },
    {
      position: 'left',
      radius: 'lg',
      className: ['rounded-r-lg'],
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
      className: ['text-blue-600', 'bg-blue-100', 'border-blue-500'],
    },
    {
      tone: 'light',
      color: 'red',
      className: ['text-red-600', 'bg-red-100', 'border-red-500'],
    },
    {
      tone: 'light',
      color: 'green',
      className: ['text-green-600', 'bg-green-100', 'border-green-500'],
    },
    {
      tone: 'light',
      color: 'yellow',
      className: ['text-yellow-600', 'bg-yellow-100', 'border-yellow-500'],
    },
    {
      tone: 'light',
      color: 'purple',
      className: ['text-purple-600', 'bg-purple-100', 'border-purple-500'],
    },
    {
      tone: 'light',
      color: 'gray',
      className: ['text-gray-600', 'bg-gray-100', 'border-gray-500'],
    },
    {
      tone: 'light',
      color: 'dark',
      className: ['text-gray-700', 'bg-gray-300', 'border-gray-700'],
    },
    {
      tone: 'light',
      color: 'black',
      className: ['text-black', 'bg-gray-400', 'border-gray-800'],
    },
  ],
});

const ribbonStyles = {
  base,
};

export { ribbonStyles };
