import { cva } from 'class-variance-authority';

const base = cva(
  [
    'relative',
    'flex',
    'flex-col',
    'gap-y-1',
    'max-w-prose',
    'transition',
    'duration-50',
    'ease-in-out',
    'border',
    'z-40',
  ],
  {
    variants: {
      open: {
        true: ['opacity-100', 'scale-100'],
        false: ['opacity-0', 'scale-95', 'invisible'],
      },
      arrowSide: {
        left: [],
        right: [],
        top: [],
        bottom: [],
      },
      mode: {
        tight: ['p-0'],
        spacey: [],
      },
      size: {
        xs: ['text-xs'],
        sm: ['text-sm'],
        md: ['text-base'],
        lg: ['text-lg'],
      },
      color: {
        white: ['bg-white', 'text-gray-800', 'border-gray-200'],
        gray: ['bg-gray-50', 'text-gray-800', 'border-gray-300'],
        slate: ['bg-slate-50', 'text-slate-800', 'border-slate-300'],
        zinc: ['bg-zinc-50', 'text-zinc-800', 'border-zinc-300'],
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
      },
    },
    compoundVariants: [
      {
        mode: 'spacey',
        size: ['xs', 'sm'],
        className: ['p-1'],
      },
      {
        mode: 'spacey',
        size: ['md', 'lg'],
        className: ['p-1.5'],
      },
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
        className: ['-translate-x-2'],
      },
      {
        open: false,
        arrowSide: 'right',
        className: ['translate-x-2'],
      },
      {
        open: false,
        arrowSide: 'top',
        className: ['-translate-y-2'],
      },
      {
        open: false,
        arrowSide: 'bottom',
        className: ['translate-y-2'],
      },
    ],
  }
);

const arrow = cva(
  ['absolute', 'w-2', 'h-2', 'bg-inherit', 'rotate-45', 'border', 'box-border', 'z-0'],
  {
    variants: {
      color: {
        white: ['border-gray-200'],
        gray: ['border-gray-300'],
        slate: ['border-slate-300'],
        zinc: ['border-zinc-300'],
      },
      arrowSide: {
        left: ['border-r-0', 'border-t-0'],
        right: ['border-l-0', 'border-b-0'],
        top: ['border-r-0', 'border-b-0'],
        bottom: ['border-l-0', 'border-t-0'],
      },
    },
  }
);

const content = cva(['flex', 'flex-col'], {
  variants: {
    size: {
      xs: ['space-y-0.5'],
      sm: ['space-y-0.5'],
      md: ['space-y-1'],
      lg: ['space-y-1'],
    },
  },
});

const divider = cva([], {
  variants: {
    color: {
      gray: 'border-gray-200',
      slate: 'border-slate-200',
      dark: 'border-gray-400',
    },
  },
});

const item = cva(
  [
    'z-10',
    'flex',
    'items-center',
    'justify-start',
    'text-gray-900',
    'disabled:text-gray-300',
    'hover:disabled:text-gray-300',
    'hover:disabled:bg-gray-50',
    'disabled:cursor-not-allowed',
    'focus-visible:outline-none',
    'hover:ring-0',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-0',
  ],
  {
    variants: {
      tone: {
        solid: [],
        light: [],
      },
      mode: {
        spacey: ['rounded'],
        tight: [],
      },
      color: {
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
        xs: ['text-xs', 'py-1', 'px-1'],
        sm: ['text-sm', 'py-1.5', 'px-2'],
        md: ['text-base', 'py-1.5', 'px-2'],
        lg: ['text-lg', 'py-1.5', 'px-2'],
      },
      radius: {
        none: [],
        sm: [],
        base: [],
        md: [],
        lg: [],
      },
    },
    compoundVariants: [
      {
        mode: 'tight',
        radius: 'sm',
        className: ['last:rounded-b-sm'],
      },
      {
        mode: 'tight',
        radius: 'base',
        className: ['last:rounded-b'],
      },
      {
        mode: 'tight',
        radius: 'md',
        className: ['last:rounded-b-md'],
      },
      {
        mode: 'tight',
        radius: 'lg',
        className: ['last:rounded-b-lg'],
      },
      {
        tone: 'solid',
        color: 'blue',
        className: [
          'focus-visible:ring-blue-500',
          'hover:bg-blue-500',
          'active:bg-blue-600',
          'hover:text-white',
        ],
      },
      {
        tone: 'light',
        color: 'blue',
        className: [
          'focus-visible:ring-blue-100',
          'hover:bg-blue-100',
          'active:bg-blue-200',
          'hover:text-blue-800',
        ],
      },
      {
        tone: 'solid',
        color: 'red',
        className: [
          'focus-visible:ring-red-500',
          'hover:bg-red-500',
          'active:bg-red-600',
          'hover:text-white',
        ],
      },
      {
        tone: 'light',
        color: 'red',
        className: [
          'focus-visible:ring-red-100',
          'hover:bg-red-100',
          'active:bg-red-200',
          'hover:text-red-800',
        ],
      },
      {
        tone: 'solid',
        color: 'green',
        className: [
          'focus-visible:ring-green-500',
          'hover:bg-green-500',
          'active:bg-green-600',
          'hover:text-white',
        ],
      },
      {
        tone: 'light',
        color: 'green',
        className: [
          'focus-visible:ring-green-100',
          'hover:bg-green-100',
          'active:bg-green-200',
          'hover:text-green-800',
        ],
      },
      {
        tone: 'solid',
        color: 'yellow',
        className: [
          'focus-visible:ring-yellow-400',
          'hover:bg-yellow-400',
          'active:bg-yellow-500',
          'hover:text-white',
        ],
      },
      {
        tone: 'light',
        color: 'yellow',
        className: [
          'focus-visible:ring-yellow-100',
          'hover:bg-yellow-100',
          'active:bg-yellow-200',
          'hover:text-yellow-800',
        ],
      },
      {
        tone: 'solid',
        color: 'purple',
        className: [
          'focus-visible:ring-purple-500',
          'hover:bg-purple-500',
          'active:bg-purple-600',
          'hover:text-white',
        ],
      },
      {
        tone: 'light',
        color: 'purple',
        className: [
          'focus-visible:ring-purple-100',
          'hover:bg-purple-100',
          'active:bg-purple-200',
          'hover:text-purple-800',
        ],
      },
      {
        tone: 'solid',
        color: 'gray',
        className: [
          'focus-visible:ring-gray-200',
          'hover:bg-gray-200',
          'active:bg-gray-300',
          'hover:text-gray-700',
        ],
      },
      {
        tone: 'light',
        color: 'gray',
        className: [
          'focus-visible:ring-gray-100',
          'hover:bg-gray-100',
          'active:bg-gray-200',
          'hover:text-gray-800',
        ],
      },
      {
        tone: 'solid',
        color: 'dark',
        className: [
          'focus-visible:ring-gray-500',
          'hover:bg-gray-500',
          'active:bg-gray-600',
          'hover:text-white',
        ],
      },
      {
        tone: 'light',
        color: 'dark',
        className: [
          'focus-visible:ring-gray-300',
          'hover:bg-gray-300',
          'active:bg-gray-400',
          'hover:text-gray-800',
        ],
      },
      {
        tone: 'solid',
        color: 'black',
        className: [
          'focus-visible:ring-gray-900',
          'hover:bg-gray-900',
          'active:bg-black',
          'hover:text-white',
        ],
      },
      {
        tone: 'light',
        color: 'black',
        className: [
          'focus-visible:ring-gray-700',
          'hover:bg-gray-700',
          'active:bg-gray-800',
          'hover:text-white',
        ],
      },
    ],
  }
);

const label = cva([], {
  variants: {
    mode: {
      spacey: [],
      tight: [],
    },
    color: {
      blue: 'text-blue-500',
      red: 'text-red-500',
      green: 'text-green-500',
      yellow: 'text-yellow-400',
      purple: 'text-purple-500',
      gray: 'text-gray-400',
      dark: 'text-gray-800',
      black: 'text-black',
    },
    weight: {
      thin: 'font-thin',
      extraLight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semiBold: 'font-semibold',
      bold: 'font-bold',
      extraBold: 'font-extrabold',
      black: 'font-black',
    },
    size: {
      xs: ['text-xs'],
      sm: ['text-sm', 'py-1'],
      md: ['text-base', 'py-1'],
      lg: ['text-lg', 'py-1'],
    },
  },
  compoundVariants: [
    {
      mode: 'tight',
      size: 'xs',
      className: ['px-1.5', 'pt-2', 'pb-1'],
    },
    {
      mode: 'spacey',
      size: 'xs',
      className: ['px-1', 'py-0.5'],
    },
    {
      mode: 'tight',
      size: 'sm',
      className: ['px-2.5', 'pt-2', 'pb-1'],
    },
    {
      mode: 'spacey',
      size: 'sm',
      className: ['px-2.5', 'py-1'],
    },
    {
      mode: 'tight',
      size: 'md',
      className: ['px-2.5', 'pt-2', 'pb-1'],
    },
    {
      mode: 'spacey',
      size: 'md',
      className: ['px-2.5', 'py-1'],
    },
    {
      mode: 'tight',
      size: 'lg',
      className: ['px-2.5', 'pt-2', 'pb-1'],
    },
    {
      mode: 'spacey',
      size: 'lg',
      className: ['px-2.5', 'py-1'],
    },
  ],
});

const dropdownStyles = {
  arrow,
  base,
  content,
  divider,
  item,
  label,
};

export { dropdownStyles };
