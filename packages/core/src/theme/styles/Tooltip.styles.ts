import { cva } from 'class-variance-authority';

const base = cva(
  ['relative', 'text-center', 'max-w-xs', 'transition', 'duration-50', 'ease-in-out', 'z-50'],
  {
    variants: {
      open: {
        true: ['opacity-100', 'scale-100'],
        false: ['opacity-0', 'scale-95', 'invisible'],
      },
      tone: {
        solid: [],
        light: [],
      },
      arrowSide: {
        left: [],
        right: [],
        top: [],
        bottom: [],
      },
      size: {
        xs: ['text-xs', 'py-1', 'px-2'],
        sm: ['text-sm', 'py-1', 'px-2'],
        md: ['text-base', 'py-2', 'px-3'],
        lg: ['text-lg', 'py-2', 'px-3'],
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
        full: ['rounded-full'],
      },
      shadow: {
        none: ['shadow-none'],
        sm: ['shadow-sm'],
        base: ['shadow'],
        md: ['shadow-md'],
      },
    },
    compoundVariants: [
      {
        open: true,
        arrowSide: ['left', 'right'],
        className: ['translate-x-0'],
      },
      {
        open: true,
        arrowSide: ['top', 'bottom'],
        className: ['translate-y-0'],
      },
      {
        open: false,
        arrowSide: 'left',
        className: ['-translate-x-1'],
      },
      {
        open: false,
        arrowSide: 'right',
        className: ['translate-x-1'],
      },
      {
        open: false,
        arrowSide: 'top',
        className: ['-translate-y-1'],
      },
      {
        open: false,
        arrowSide: 'bottom',
        className: ['translate-y-1'],
      },
      {
        tone: 'solid',
        color: 'white',
        className: ['bg-white', 'text-gray-800'],
      },
      {
        tone: 'solid',
        color: 'blue',
        className: ['bg-blue-500', 'text-white'],
      },
      {
        tone: 'solid',
        color: 'red',
        className: ['bg-red-500', 'text-white'],
      },
      {
        tone: 'solid',
        color: 'green',
        className: ['bg-green-500', 'text-white'],
      },
      {
        tone: 'solid',
        color: 'yellow',
        className: ['bg-yellow-400', 'text-white'],
      },
      {
        tone: 'solid',
        color: 'purple',
        className: ['bg-purple-500', 'text-white'],
      },
      {
        tone: 'solid',
        color: 'gray',
        className: ['bg-gray-200', 'text-gray-800'],
      },
      {
        tone: 'solid',
        color: 'dark',
        className: ['bg-gray-700', 'text-white'],
      },
      {
        tone: 'solid',
        color: 'black',
        className: ['bg-black', 'text-white'],
      },
      {
        tone: 'light',
        color: 'white',
        className: ['bg-white', 'text-gray-800'],
      },
      {
        tone: 'light',
        color: 'blue',
        className: ['bg-blue-100', 'text-blue-500'],
      },
      {
        tone: 'light',
        color: 'red',
        className: ['bg-red-100', 'text-red-500'],
      },
      {
        tone: 'light',
        color: 'green',
        className: ['bg-green-100', 'text-green-500'],
      },
      {
        tone: 'light',
        color: 'yellow',
        className: ['bg-yellow-100', 'text-yellow-500'],
      },
      {
        tone: 'light',
        color: 'purple',
        className: ['bg-purple-100', 'text-purple-500'],
      },
      {
        tone: 'light',
        color: 'gray',
        className: ['bg-gray-100', 'text-gray-500'],
      },
      {
        tone: 'light',
        color: 'dark',
        className: ['bg-gray-200', 'text-gray-600'],
      },
      {
        tone: 'light',
        color: 'black',
        className: ['bg-gray-300', 'text-gray-700'],
      },
    ],
  }
);

const arrow = cva([], {
  variants: {
    tone: {
      solid: [],
      light: [],
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
      tone: 'solid',
      color: 'white',
      className: ['fill-white'],
    },
    {
      tone: 'solid',
      color: 'blue',
      className: ['fill-blue-500'],
    },
    {
      tone: 'solid',
      color: 'red',
      className: ['fill-red-500'],
    },
    {
      tone: 'solid',
      color: 'green',
      className: ['fill-green-500'],
    },
    {
      tone: 'solid',
      color: 'yellow',
      className: ['fill-yellow-400'],
    },
    {
      tone: 'solid',
      color: 'purple',
      className: ['fill-purple-500'],
    },
    {
      tone: 'solid',
      color: 'gray',
      className: ['fill-gray-200'],
    },
    {
      tone: 'solid',
      color: 'dark',
      className: ['fill-gray-700'],
    },
    {
      tone: 'solid',
      color: 'black',
      className: ['fill-black'],
    },
    {
      tone: 'light',
      color: 'white',
      className: ['fill-white'],
    },
    {
      tone: 'light',
      color: 'blue',
      className: ['fill-blue-100'],
    },
    {
      tone: 'light',
      color: 'red',
      className: ['fill-red-100'],
    },
    {
      tone: 'light',
      color: 'green',
      className: ['fill-green-100'],
    },
    {
      tone: 'light',
      color: 'yellow',
      className: ['fill-yellow-100'],
    },
    {
      tone: 'light',
      color: 'purple',
      className: ['fill-purple-100'],
    },
    {
      tone: 'light',
      color: 'gray',
      className: ['fill-gray-100'],
    },
    {
      tone: 'light',
      color: 'dark',
      className: ['fill-gray-200'],
    },
    {
      tone: 'light',
      color: 'black',
      className: ['fill-gray-300'],
    },
  ],
});

const tooltipStyles = {
  arrow,
  base,
};

export { tooltipStyles };
