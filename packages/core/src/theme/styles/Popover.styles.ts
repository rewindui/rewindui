import { cva } from 'class-variance-authority';

const base = cva(
  [
    'relative',
    'max-w-prose',
    'text-center',
    'transition',
    'duration-50',
    'ease-in-out',
    'border',
    'z-50',
  ],
  {
    variants: {
      open: {
        true: ['opacity-100'],
        false: ['opacity-0'],
      },
      arrowSide: {
        left: [],
        right: [],
        top: [],
        bottom: [],
      },
      size: {
        tight: ['p-0'],
        xs: ['text-xs', 'py-1', 'px-2'],
        sm: ['text-sm', 'py-1', 'px-2'],
        md: ['text-sm', 'py-2', 'px-3'],
        lg: ['text-base', 'py-2', 'px-3'],
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
    ],
  }
);

const arrow = cva(['absolute', 'w-2', 'h-2', 'bg-inherit', 'rotate-45', 'border', 'box-border'], {
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
});

const popoverStyles = {
  arrow,
  base,
};

export { popoverStyles };
