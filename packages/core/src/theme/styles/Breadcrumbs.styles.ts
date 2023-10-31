import { cva } from 'class-variance-authority';

const base = cva(['flex', 'flex-row', 'items-center'], {
  variants: {
    color: {
      gray: ['text-gray-300'],
      slate: ['text-slate-300'],
      zinc: ['text-zinc-300'],
    },
    size: {
      sm: ['text-xs', 'gap-1'],
      base: ['text-sm', 'gap-1'],
      md: ['text-base', 'gap-1.5'],
      lg: ['text-lg', 'gap-2'],
    },
  },
});

const item = cva(['flex', 'flex-nowrap'], {
  variants: {
    color: {
      gray: [],
      dark: [],
      slate: [],
      zinc: [],
    },
    isLink: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      color: 'gray',
      isLink: true,
      className: ['text-gray-700', 'hover:text-gray-900'],
    },
    {
      color: 'gray',
      isLink: false,
      className: ['text-gray-500'],
    },
    {
      color: 'slate',
      isLink: true,
      className: ['text-slate-700', 'hover:text-slate-900'],
    },
    {
      color: 'slate',
      isLink: false,
      className: ['text-slate-500'],
    },
    {
      color: 'zinc',
      isLink: true,
      className: ['text-zinc-700', 'hover:text-zinc-900'],
    },
    {
      color: 'zinc',
      isLink: false,
      className: ['text-zinc-500'],
    },
  ],
});

const anchor = cva(['flex', 'flex-nowrap', 'items-center', 'gap-1']);

const breadcrumbsStyles = {
  anchor,
  base,
  item,
};

export { breadcrumbsStyles };
