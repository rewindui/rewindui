import { cva } from 'class-variance-authority';

const base = cva(['flex', 'flex-col', 'rounded-lg', 'shadow-md'], {
  variants: {
    bordered: {
      true: ['border'],
      false: [],
    },
    color: {
      white: 'bg-white',
      gray: 'bg-gray-50',
      slate: 'bg-slate-50',
      zinc: 'bg-zinc-50',
    },
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      base: ['rounded-lg'], // Updated to rounded-lg for the card style
      md: ['rounded-md'],
      lg: ['rounded-lg'],
    },
    shadow: {
      none: ['shadow-none'],
      sm: ['shadow-sm'],
      base: ['shadow-md'], // Updated to shadow-md for the card style
      md: ['shadow-md'],
      lg: ['shadow-lg'],
      xl: ['shadow-xl'],
    },
    withDivider: {
      true: ['divide-y'],
      false: [],
    },
  },
  compoundVariants: [
    {
      color: 'white',
      withDivider: true,
      className: ['divide-gray-100'],
    },
    {
      color: 'gray',
      withDivider: true,
      className: ['divide-gray-200'],
    },
    {
      color: 'slate',
      withDivider: true,
      className: ['divide-slate-200'],
    },
    {
      color: 'zinc',
      withDivider: true,
      className: ['divide-zinc-200'],
    },
    {
      color: 'white',
      bordered: true,
      className: ['border-gray-100'],
    },
    {
      color: 'gray',
      bordered: true,
      className: ['border-gray-200'],
    },
    {
      color: 'slate',
      bordered: true,
      className: ['border-slate-200'],
    },
    {
      color: 'zinc',
      bordered: true,
      className: ['border-zinc-200'],
    },
  ],
});

const body = cva([], {
  variants: {
    size: {
      sm: ['px-4', 'text-sm'],
      base: ['px-5', 'text-base'],
      md: ['px-6', 'text-md'],
      lg: ['px-7', 'text-lg'],
    },
    withDivider: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      withDivider: true,
      className: ['py-3'],
    },
    {
      size: 'base',
      withDivider: true,
      className: ['py-4'],
    },
    {
      size: 'md',
      withDivider: true,
      className: ['py-5'],
    },
    {
      size: 'lg',
      withDivider: true,
      className: ['py-6'],
    },
    {
      size: 'sm',
      withDivider: false,
      className: ['py-1'],
    },
    {
      size: 'base',
      withDivider: false,
      className: ['py-2'],
    },
    {
      size: 'md',
      withDivider: false,
      className: ['py-3'],
    },
    {
      size: 'lg',
      withDivider: false,
      className: ['py-4'],
    },
  ],
});

const header = cva(['flex', 'flex-row', 'justify-between', 'items-center'], {
  variants: {
    size: {
      sm: ['p-4', 'text-sm'],
      base: ['p-5', 'text-base'],
      md: ['p-6', 'text-md'],
      lg: ['p-7', 'text-lg'],
    },
    radius: {
      none: ['rounded-t-none'],
      sm: ['rounded-t-sm'],
      base: ['rounded-t-lg'], // Updated to rounded-t-lg for the card style
      md: ['rounded-t-md'],
      lg: ['rounded-t-lg'],
    },
  },
});

const footer = cva(['flex', 'items-center'], {
  variants: {
    size: {
      sm: ['p-4', 'text-sm'],
      base: ['p-5', 'text-base'],
      md: ['p-6', 'text-md'],
      lg: ['p-7', 'text-lg'],
    },
    radius: {
      none: ['rounded-b-none'],
      sm: ['rounded-b-sm'],
      base: ['rounded-b-lg'], // Updated to rounded-b-lg for the card style
      md: ['rounded-b-md'],
      lg: ['rounded-b-lg'],
    },
  },
});

const image = cva(['flex', 'flex-row', 'items-center', 'justify-center'], {
  variants: {
    radius: {
      none: ['rounded-t-none'],
      sm: ['rounded-t-sm'],
      base: ['rounded-t-lg'], // Updated to rounded-t-lg for the card style
      md: ['rounded-t-md'],
      lg: ['rounded-t-lg'],
    },
  },
});

const cardStyles = {
  base,
  body,
  footer,
  header,
  image,
};

export { cardStyles };
