import { cva } from 'class-variance-authority';

const container = cva(['fixed', 'flex', 'flex-col', 'gap-y-2', 'z-[60]'], {
  variants: {
    position: {
      'top-left': ['top-2', 'left-2'],
      'top-right': ['top-2', 'right-2'],
      'bottom-left': ['bottom-2', 'left-2'],
      'bottom-right': ['bottom-2', 'right-2'],
    },
  },
});

const toast = cva(['flex', 'flex-col', 'w-72', 'overflow-hidden', 'transition-colors'], {
  variants: {
    tone: {
      solid: [],
      light: [],
      minimal: [],
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
      tone: 'minimal',
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
      className: ['text-yellow-900', 'bg-yellow-400'],
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
      className: ['text-blue-700', 'bg-blue-100/95'],
    },
    {
      tone: 'light',
      color: 'red',
      className: ['text-red-700', 'bg-red-100/95'],
    },
    {
      tone: 'light',
      color: 'green',
      className: ['text-green-700', 'bg-green-100/95'],
    },
    {
      tone: 'light',
      color: 'yellow',
      className: ['text-yellow-700', 'bg-yellow-100/95'],
    },
    {
      tone: 'light',
      color: 'purple',
      className: ['text-purple-700', 'bg-purple-100/95'],
    },
    {
      tone: 'light',
      color: 'gray',
      className: ['text-gray-700', 'bg-gray-100/95'],
    },
    {
      tone: 'light',
      color: 'dark',
      className: ['text-gray-800', 'bg-gray-300/95'],
    },
    {
      tone: 'light',
      color: 'black',
      className: ['text-black', 'bg-gray-400/95'],
    },
  ],
});

const progress = cva(['w-full', 'h-2'], {
  variants: {
    tone: {
      solid: [],
      light: [],
      minimal: ['rounded', 'overflow-hidden'],
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
  },
  compoundVariants: [
    {
      color: 'white',
      tone: ['solid', 'light'],
      className: ['bg-gray-300'],
    },
    {
      tone: ['solid', 'minimal'],
      color: 'blue',
      className: ['bg-blue-700'],
    },
    {
      tone: 'solid',
      color: 'red',
      className: ['bg-red-700'],
    },
    {
      tone: 'solid',
      color: 'green',
      className: ['bg-green-700'],
    },
    {
      tone: 'solid',
      color: 'yellow',
      className: ['bg-yellow-700'],
    },
    {
      tone: 'solid',
      color: 'purple',
      className: ['bg-purple-700'],
    },
    {
      tone: 'solid',
      color: 'gray',
      className: ['bg-gray-300'],
    },
    {
      tone: 'solid',
      color: 'dark',
      className: ['bg-gray-800'],
    },
    {
      tone: 'solid',
      color: 'black',
      className: ['bg-gray-900'],
    },
    {
      tone: 'light',
      color: 'blue',
      className: ['bg-blue-500'],
    },
    {
      tone: 'light',
      color: 'red',
      className: ['bg-red-500'],
    },
    {
      tone: 'light',
      color: 'green',
      className: ['bg-green-500'],
    },
    {
      tone: 'light',
      color: 'yellow',
      className: ['bg-yellow-500'],
    },
    {
      tone: 'light',
      color: 'purple',
      className: ['bg-purple-500'],
    },
    {
      tone: 'light',
      color: 'gray',
      className: ['bg-gray-300'],
    },
    {
      tone: 'light',
      color: 'dark',
      className: ['bg-gray-600'],
    },
    {
      tone: 'light',
      color: 'black',
      className: ['bg-gray-700'],
    },
  ],
});

const progressInner = cva(['transition-[width]', 'h-full'], {
  variants: {
    tone: {
      solid: [],
      light: [],
      minimal: [],
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
  },
  compoundVariants: [
    {
      color: 'white',
      tone: ['solid', 'light'],
      className: ['bg-gray-200'],
    },
    {
      tone: ['solid', 'minimal'],
      color: 'blue',
      className: ['bg-blue-400'],
    },
    {
      tone: 'solid',
      color: 'red',
      className: ['bg-red-400'],
    },
    {
      tone: 'solid',
      color: 'green',
      className: ['bg-green-400'],
    },
    {
      tone: 'solid',
      color: 'yellow',
      className: ['bg-yellow-300'],
    },
    {
      tone: 'solid',
      color: 'purple',
      className: ['bg-purple-400'],
    },
    {
      tone: 'solid',
      color: 'gray',
      className: ['bg-gray-100'],
    },
    {
      tone: 'solid',
      color: 'dark',
      className: ['bg-gray-600'],
    },
    {
      tone: 'solid',
      color: 'black',
      className: ['bg-gray-700'],
    },
    {
      tone: 'light',
      color: 'blue',
      className: ['bg-blue-300'],
    },
    {
      tone: 'light',
      color: 'red',
      className: ['bg-red-300'],
    },
    {
      tone: 'light',
      color: 'green',
      className: ['bg-green-300'],
    },
    {
      tone: 'light',
      color: 'yellow',
      className: ['bg-yellow-200'],
    },
    {
      tone: 'light',
      color: 'purple',
      className: ['bg-purple-300'],
    },
    {
      tone: 'light',
      color: 'gray',
      className: ['bg-gray-200'],
    },
    {
      tone: 'light',
      color: 'dark',
      className: ['bg-gray-500'],
    },
    {
      tone: 'light',
      color: 'black',
      className: ['bg-gray-600'],
    },
  ],
});

const contentWrapper = cva(['flex', 'gap-x-3', 'p-3', 'items-center'], {
  variants: {
    closeOnClick: {
      true: ['cursor-pointer'],
      false: [],
    },
  },
});

const content = cva(['flex', 'flex-col', 'gap-y-1.5']);

const title = cva(['text-xl', 'font-medium', 'leading-none']);

const description = cva([], {
  variants: {
    hasTitle: {
      true: ['text-sm'],
      false: ['text-base'],
    },
  },
});

const actionsWrapper = cva(['flex', 'items-center', 'w-full', 'divide-x', 'border-t'], {
  variants: {
    tone: {
      solid: [],
      light: [],
      minimal: [],
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
  },
  compoundVariants: [
    {
      color: 'white',
      tone: ['solid', 'light'],
      className: ['border-gray-200', 'divide-gray-200'],
    },
    {
      color: 'blue',
      tone: 'solid',
      className: ['border-blue-600', 'divide-blue-600'],
    },
    {
      color: 'red',
      tone: 'solid',
      className: ['border-red-600', 'divide-red-600'],
    },
    {
      color: 'green',
      tone: 'solid',
      className: ['border-green-600', 'divide-green-600'],
    },
    {
      color: 'yellow',
      tone: 'solid',
      className: ['border-yellow-500', 'divide-yellow-500'],
    },
    {
      color: 'purple',
      tone: 'solid',
      className: ['border-purple-600', 'divide-purple-600'],
    },
    {
      color: 'gray',
      tone: 'solid',
      className: ['border-gray-300', 'divide-gray-300'],
    },
    {
      color: 'dark',
      tone: 'solid',
      className: ['border-gray-600', 'divide-gray-600'],
    },
    {
      color: 'black',
      tone: 'solid',
      className: ['border-gray-800', 'divide-gray-800'],
    },
    {
      color: 'blue',
      tone: 'light',
      className: ['border-blue-200', 'divide-blue-200'],
    },
    {
      color: 'red',
      tone: 'light',
      className: ['border-red-200', 'divide-red-200'],
    },
    {
      color: 'green',
      tone: 'light',
      className: ['border-green-200', 'divide-green-200'],
    },
    {
      color: 'yellow',
      tone: 'light',
      className: ['border-yellow-200', 'divide-yellow-200'],
    },
    {
      color: 'purple',
      tone: 'light',
      className: ['border-purple-200', 'divide-purple-200'],
    },
    {
      color: 'gray',
      tone: 'light',
      className: ['border-gray-200', 'divide-gray-200'],
    },
    {
      color: 'dark',
      tone: 'light',
      className: ['border-gray-400', 'divide-gray-400'],
    },
    {
      color: 'black',
      tone: 'light',
      className: ['border-gray-500', 'divide-gray-500'],
    },
  ],
});

const action = cva(['w-full', 'py-2.5', 'text-sm'], {
  variants: {
    primary: {
      true: ['font-bold'],
      false: [],
    },
    tone: {
      solid: [],
      light: [],
      minimal: [],
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
  },
  compoundVariants: [
    {
      color: 'white',
      tone: 'solid',
      className: ['hover:bg-gray-200', 'active:bg-gray-300'],
    },
    {
      color: 'blue',
      tone: 'solid',
      className: ['hover:bg-blue-600', 'active:bg-blue-700'],
    },
    {
      color: 'red',
      tone: 'solid',
      className: ['hover:bg-red-600', 'active:bg-red-700'],
    },
    {
      color: 'green',
      tone: 'solid',
      className: ['hover:bg-green-600', 'active:bg-green-700'],
    },
    {
      color: 'yellow',
      tone: 'solid',
      className: ['hover:bg-yellow-500', 'active:bg-yellow-600'],
    },
    {
      color: 'purple',
      tone: 'solid',
      className: ['hover:bg-purple-600', 'active:bg-purple-700'],
    },
    {
      color: 'gray',
      tone: 'solid',
      className: ['hover:bg-gray-300', 'active:bg-gray-400'],
    },
    {
      color: 'dark',
      tone: 'solid',
      className: ['hover:bg-gray-800', 'active:bg-gray-900'],
    },
    {
      color: 'black',
      tone: 'solid',
      className: ['hover:bg-gray-950', 'active:bg-black'],
    },
    {
      color: 'white',
      tone: 'light',
      className: ['hover:bg-gray-100', 'active:bg-gray-200'],
    },
    {
      color: 'blue',
      tone: 'light',
      className: ['hover:bg-blue-100/50', 'active:bg-blue-200/50'],
    },
    {
      color: 'red',
      tone: 'light',
      className: ['hover:bg-red-100/50', 'active:bg-red-200/50'],
    },
    {
      color: 'green',
      tone: 'light',
      className: ['hover:bg-green-100/50', 'active:bg-green-200/50'],
    },
    {
      color: 'yellow',
      tone: 'light',
      className: ['hover:bg-yellow-100/50', 'active:bg-yellow-200/50'],
    },
    {
      color: 'purple',
      tone: 'light',
      className: ['hover:bg-purple-100/50', 'active:bg-purple-200/50'],
    },
    {
      color: 'gray',
      tone: 'light',
      className: ['hover:bg-gray-200/50', 'active:bg-gray-300/50'],
    },
    {
      color: 'dark',
      tone: 'light',
      className: ['hover:bg-gray-300/50', 'active:bg-gray-400/50'],
    },
    {
      color: 'black',
      tone: 'light',
      className: ['hover:bg-gray-400/50', 'active:bg-gray-500/50'],
    },
  ],
});

const toastStyles = {
  container,
  toast,
  progress,
  progressInner,
  contentWrapper,
  content,
  title,
  description,
  actionsWrapper,
  action,
};

export { toastStyles };
