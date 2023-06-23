import { cva } from 'class-variance-authority';

const base = cva(
  ['inline-flex', 'items-center', 'justify-center', 'relative', 'hover:z-20', 'z-10'],
  {
    variants: {
      tone: {
        solid: ['antialiased'],
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
        xs: ['text-xs', 'w-7', 'h-7'],
        sm: ['text-xs', 'w-8', 'h-8'],
        md: ['text-sm', 'w-10', 'h-10'],
        lg: ['text-base', 'w-12', 'h-12'],
        xl: ['text-lg', 'w-16', 'h-16'],
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
      outlined: {
        true: ['outline'],
        false: [],
      },
    },
    compoundVariants: [
      {
        outlined: true,
        size: ['xs'],
        className: ['outline-0.5'],
      },
      {
        outlined: true,
        size: ['sm'],
        className: ['outline-1'],
      },
      {
        outlined: true,
        size: ['md', 'lg', 'xl'],
        className: ['outline-2'],
      },
      {
        outlined: true,
        color: 'white',
        className: ['outline-white'],
      },
      {
        outlined: true,
        color: 'blue',
        className: ['outline-blue-200'],
      },
      {
        outlined: true,
        color: 'red',
        className: ['outline-red-200'],
      },
      {
        outlined: true,
        color: 'green',
        className: ['outline-green-200'],
      },
      {
        outlined: true,
        color: 'yellow',
        className: ['outline-yellow-200'],
      },
      {
        outlined: true,
        color: 'purple',
        className: ['outline-purple-200'],
      },
      {
        outlined: true,
        color: 'gray',
        className: ['outline-gray-200'],
      },
      {
        outlined: true,
        color: 'dark',
        className: ['outline-gray-200'],
      },
      {
        outlined: true,
        color: 'black',
        className: ['outline-gray-300'],
      },
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
        className: ['text-blue-600', 'bg-blue-100/50'],
      },
      {
        tone: 'light',
        color: 'red',
        className: ['text-red-600', 'bg-red-100/50'],
      },
      {
        tone: 'light',
        color: 'green',
        className: ['text-green-600', 'bg-green-100/50'],
      },
      {
        tone: 'light',
        color: 'yellow',
        className: ['text-yellow-600', 'bg-yellow-100/50'],
      },
      {
        tone: 'light',
        color: 'purple',
        className: ['text-purple-600', 'bg-purple-100/50'],
      },
      {
        tone: 'light',
        color: 'gray',
        className: ['text-gray-600', 'bg-gray-100/50'],
      },
      {
        tone: 'light',
        color: 'dark',
        className: ['text-gray-700', 'bg-gray-300/50'],
      },
      {
        tone: 'light',
        color: 'black',
        className: ['text-black', 'bg-gray-400/50'],
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
  }
);

const status = cva(['absolute', 'rounded-full', 'outline'], {
  variants: {
    position: {
      'top-right': [],
      'top-left': [],
      'bottom-right': [],
      'bottom-left': [],
    },
    size: {
      xs: ['w-1.5', 'h-1.5'],
      sm: ['w-1.5', 'h-1.5'],
      md: ['w-2', 'h-2'],
      lg: ['w-2.5', 'h-2.5'],
      xl: ['w-3', 'h-3', 'outline-2'],
    },
    radius: {
      none: [],
      sm: [],
      base: [],
      md: [],
      lg: [],
      full: [],
    },
    status: {
      online: ['bg-green-400', 'outline-green-100'],
      offline: ['bg-gray-200', 'outline-gray-100'],
      busy: ['bg-red-400', 'outline-red-100'],
      away: ['bg-yellow-300', 'outline-yellow-100'],
    },
  },
  compoundVariants: [
    {
      radius: ['none', 'sm', 'base', 'md', 'lg'],
      position: 'top-right',
      className: ['top-0', 'right-0', 'translate-x-1/2', '-translate-y-1/2'],
    },
    {
      radius: ['none', 'sm', 'base', 'md', 'lg'],
      position: 'top-left',
      className: ['top-0', 'left-0', '-translate-x-1/2', '-translate-y-1/2'],
    },
    {
      radius: ['none', 'sm', 'base', 'md', 'lg'],
      position: 'bottom-right',
      className: ['bottom-0', 'right-0', 'translate-x-1/2', 'translate-y-1/2'],
    },
    {
      radius: ['none', 'sm', 'base', 'md', 'lg'],
      position: 'bottom-left',
      className: ['bottom-0', 'left-0', '-translate-x-1/2', 'translate-y-1/2'],
    },
    {
      radius: 'full',
      position: 'top-right',
      size: ['xs', 'sm'],
      className: ['top-[0.03rem]', 'right-[0.03rem]'],
    },
    {
      radius: 'full',
      position: 'top-left',
      size: ['xs', 'sm'],
      className: ['top-[0.03rem]', 'left-[0.03rem]'],
    },
    {
      radius: 'full',
      position: 'bottom-right',
      size: ['xs', 'sm'],
      className: ['bottom-[0.03rem]', 'right-[0.03rem]'],
    },
    {
      radius: 'full',
      position: 'bottom-left',
      size: ['xs', 'sm'],
      className: ['bottom-[0.03rem]', 'left-[0.03rem]'],
    },
    {
      radius: 'full',
      position: 'top-right',
      size: ['md', 'lg'],
      className: ['top-[0.05rem]', 'right-[0.05rem]'],
    },
    {
      radius: 'full',
      position: 'top-left',
      size: ['md', 'lg'],
      className: ['top-[0.05rem]', 'left-[0.05rem]'],
    },
    {
      radius: 'full',
      position: 'bottom-right',
      size: ['md', 'lg'],
      className: ['bottom-[0.05rem]', 'right-[0.05rem]'],
    },
    {
      radius: 'full',
      position: 'bottom-left',
      size: ['md', 'lg'],
      className: ['bottom-[0.05rem]', 'left-[0.05rem]'],
    },
    {
      radius: 'full',
      position: 'top-right',
      size: 'xl',
      className: ['top-[0.1rem]', 'right-[0.1rem]'],
    },
    {
      radius: 'full',
      position: 'top-left',
      size: 'xl',
      className: ['top-[0.1rem]', 'left-[0.1rem]'],
    },
    {
      radius: 'full',
      position: 'bottom-right',
      size: 'xl',
      className: ['bottom-[0.1rem]', 'right-[0.1rem]'],
    },
    {
      radius: 'full',
      position: 'bottom-left',
      size: 'xl',
      className: ['bottom-[0.1rem]', 'left-[0.1rem]'],
    },
  ],
});

const image = cva(['object-cover', 'w-fit', 'h-fit'], {
  variants: {
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      base: ['rounded'],
      md: ['rounded-md'],
      lg: ['rounded-lg'],
      full: ['rounded-full'],
    },
  },
});

const group = cva(['flex', 'isolate', '-space-x-3']);

const avatarStyles = {
  base,
  status,
  image,
  group,
};

export { avatarStyles };
