import { cva } from 'class-variance-authority';

const base = cva(
  [
    'antialiased',
    'transition-width',
    'ease-in-out',
    'duration-300',
    'flex',
    'flex-col',
    'fixed',
    'top-0',
    'left-0',
    'h-full',
    'z-10',
  ],
  {
    variants: {
      color: {
        white: ['bg-white', 'text-gray-700', 'border-r', 'border-gray-100', 'shadow-gray-300'],
        gray: ['bg-gray-50', 'text-gray-800', 'border-r', 'border-gray-200', 'shadow-gray-300'],
        dark: ['bg-gray-900', 'text-gray-200', 'shadow-gray-950'],
        slate: ['bg-slate-900', 'text-slate-200', 'shadow-slate-950'],
        zinc: ['bg-zinc-900', 'text-zinc-200', 'shadow-zinc-950'],
      },
      shadow: {
        none: ['shadow-none'],
        sm: ['shadow-sm'],
        base: ['shadow'],
        md: ['shadow-md'],
        lg: ['shadow-lg'],
        xl: ['shadow-xl'],
      },
      expanded: {
        true: ['md:min-w-[16rem]'],
        false: [],
      },
      hovered: {
        true: ['md:min-w-[16rem]'],
        false: [],
      },
      mobile: {
        true: ['w-[16rem]', 'overflow-y-auto', 'md:overflow-y-visible'],
        false: ['w-0'],
      },
    },
    compoundVariants: [
      {
        expanded: false,
        hovered: false,
        className: ['md:min-w-[4.5rem]'],
      },
    ],
  }
);

const head = cva(
  [
    'transition-opacity',
    'top-0',
    'w-full',
    'items-center',
    'min-h-[4rem]',
    'px-5',
    'border-b',
    'border-dashed',
    'bg-inherit',
    'flex',
    'flex-nowrap',
    'truncate',
  ],
  {
    variants: {
      mobile: {
        true: ['opacity-100'],
        false: ['opacity-0', 'md:opacity-100'],
      },
      color: {
        white: ['border-gray-200'],
        gray: ['border-gray-200'],
        dark: ['border-gray-700'],
        slate: ['border-slate-700'],
        zinc: ['border-zinc-700'],
      },
    },
  }
);

const headTitle = cva(['text-lg', 'font-medium', 'truncate'], {
  variants: {
    opened: {
      true: ['ml-2'],
      false: [],
    },
  },
});

const headLogo = cva(['h-8', 'flex', 'flex-none', 'items-center', 'justify-center']);

const headToggle = cva(
  [
    'hidden',
    'md:flex',
    'items-center',
    'w-7',
    'h-7',
    'p-2',
    'rounded',
    'shadow',
    'ring-1',
    'absolute',
    'right-0',
    'translate-x-1/2',
  ],
  {
    variants: {
      color: {
        white: ['ring-gray-100', 'bg-white', 'text-gray-500'],
        gray: ['ring-gray-200', 'bg-gray-50', 'text-gray-600'],
        dark: ['ring-gray-100', 'bg-white', 'text-gray-500'],
        slate: ['ring-slate-100', 'bg-white', 'text-slate-500'],
        zinc: ['ring-zinc-100', 'bg-white', 'text-zinc-500'],
      },
    },
  }
);

const headToggleIcon = cva(['transition', 'transform', 'duration-250', 'ease-in-out'], {
  variants: {
    expanded: {
      true: [],
      false: ['rotate-180'],
    },
  },
});

const nav = cva(
  [
    'my-4',
    'overflow-x-hidden',
    'scrollbar-thin',
    'scrollbar-thumb-rounded-lg',
    'scrollbar-track-rounded-lg',
    'flex',
    'flex-col',
    'gap-y-6',
  ],
  {
    variants: {
      color: {
        white: ['scrollbar-thumb-gray-200'],
        gray: ['scrollbar-thumb-gray-400'],
        dark: ['scrollbar-thumb-gray-700'],
        slate: ['scrollbar-thumb-slate-700'],
        zinc: ['scrollbar-thumb-zinc-700'],
      },
      opened: {
        true: ['overflow-y-auto'],
        false: ['overflow-y-hidden'],
      },
    },
  }
);

const navSection = cva(['flex', 'flex-col'], {
  variants: {
    isChild: {
      true: [],
      false: [],
    },
    color: {
      white: [],
      gray: [],
      dark: [],
      slate: [],
      zinc: [],
    },
  },
  compoundVariants: [
    {
      isChild: true,
      color: 'white',
      className: ['bg-gray-100'],
    },
    {
      isChild: true,
      color: 'gray',
      className: ['bg-gray-200'],
    },
    {
      isChild: true,
      color: 'dark',
      className: ['bg-gray-950'],
    },
    {
      isChild: true,
      color: 'slate',
      className: ['bg-slate-950'],
    },
    {
      isChild: true,
      color: 'zinc',
      className: ['bg-zinc-950'],
    },
  ],
});

const navSectionTitle = cva(
  ['transition-opacity', 'text-sm', 'font-medium', 'truncate', 'uppercase', 'mb-3', 'px-5'],
  {
    variants: {
      color: {
        white: ['text-gray-400'],
        gray: ['text-gray-500'],
        dark: ['text-gray-500'],
        slate: ['text-slate-500'],
        zinc: ['text-zinc-500'],
      },
      opened: {
        true: ['opacity-100'],
        false: ['opacity-0'],
      },
    },
  }
);

const navSectionItemWrapper = cva(['cursor-pointer'], {
  variants: {
    opened: {
      true: [],
      false: ['px-3'],
    },
  },
});

const navSectionItem = cva(
  [
    'group',
    'truncate',
    'w-full',
    'flex',
    'items-center',
    'text-sm',
    'outline-none',
    'ring-inset',
    'focus-visible:ring-2',
    'focus-visible:rounded',
    'py-2.5',
    'gap-x-3',
    'border',
  ],
  {
    variants: {
      color: {
        white: ['focus-visible:ring-gray-300'],
        gray: ['focus-visible:ring-gray-300'],
        dark: ['focus-visible:ring-gray-400'],
        slate: ['focus-visible:ring-slate-400'],
        zinc: ['focus-visible:ring-zinc-400'],
      },
      active: {
        true: [],
        false: ['border-transparent'],
      },
      expanded: {
        true: [],
        false: [],
      },
      opened: {
        true: ['px-6', 'border-transparent'],
        false: ['justify-start', 'px-3', 'rounded'],
      },
    },
    compoundVariants: [
      {
        active: true,
        color: 'white',
        className: ['bg-gray-50', 'text-gray-600'],
      },
      {
        active: true,
        opened: false,
        color: 'white',
        className: ['border-gray-100'],
      },
      {
        active: false,
        color: 'white',
        className: ['text-gray-500', 'hover:text-gray-700'],
      },
      {
        active: true,
        color: 'gray',
        className: ['bg-gray-100', 'text-gray-600'],
      },
      {
        active: true,
        opened: false,
        color: 'gray',
        className: ['border-gray-200'],
      },
      {
        active: false,
        color: 'gray',
        className: ['text-gray-700', 'hover:text-gray-950'],
      },
      {
        active: true,
        color: 'dark',
        className: ['bg-gray-800', 'text-gray-100'],
      },
      {
        active: true,
        opened: false,
        color: 'dark',
        className: ['border-gray-700'],
      },
      {
        active: false,
        color: 'dark',
        className: ['text-gray-400', 'hover:text-gray-200'],
      },
      {
        active: true,
        color: 'slate',
        className: ['bg-slate-800', 'text-slate-100'],
      },
      {
        active: true,
        opened: false,
        color: 'slate',
        className: ['border-slate-700'],
      },
      {
        active: false,
        color: 'slate',
        className: ['text-slate-400', 'hover:text-slate-200'],
      },
      {
        active: true,
        color: 'zinc',
        className: ['bg-zinc-800', 'text-zinc-100'],
      },
      {
        active: true,
        opened: false,
        color: 'zinc',
        className: ['border-zinc-700'],
      },
      {
        active: false,
        color: 'zinc',
        className: ['text-zinc-400', 'hover:text-zinc-200'],
      },
    ],
  }
);

const navSectionItemIcon = cva([
  'w-6',
  'h-6',
  'flex-none',
  'flex',
  'items-center',
  'justify-center',
]);

const navSectionItemLabelWrapper = cva(
  ['transition-opacity', 'duration-1500', 'flex', 'items-center', 'justify-between', 'w-full'],
  {
    variants: {
      opened: {
        true: ['opacity-100'],
        false: ['opacity-0'],
      },
    },
  }
);

const navSectionItemLabel = cva(['text-left']);

const navSectionItemCollapseIcon = cva(
  ['transition', 'transform', 'duration-250', 'ease-in-out', 'h-4', 'w-4', 'ml-auto'],
  {
    variants: {
      collapsed: {
        true: [],
        false: ['rotate-180'],
      },
    },
  }
);

const separator = cva(['border-t', 'border-slate-700', 'border-dashed', 'my-2'], {
  variants: {
    color: {
      white: ['border-gray-200'],
      gray: ['border-gray-200'],
      dark: ['border-gray-700'],
      slate: ['border-slate-700'],
      zinc: ['border-zinc-700'],
    },
  },
});

const footer = cva(
  [
    'truncate',
    'w-full',
    'items-center',
    'justify-center',
    'min-h-[4rem]',
    'mt-auto',
    'sticky',
    'bottom-0',
    'border-t',
    'border-dashed',
    'bg-inherit',
    'px-4',
  ],
  {
    variants: {
      color: {
        white: ['border-gray-200'],
        gray: ['border-gray-200'],
        dark: ['border-gray-700'],
        slate: ['border-slate-700'],
        zinc: ['border-zinc-700'],
      },
      mobile: {
        true: ['flex'],
        false: ['hidden'],
      },
      expanded: {
        true: ['md:flex'],
        false: ['hidden'],
      },
      hovered: {
        true: ['md:flex'],
        false: [],
      },
    },
  }
);

const sidebarStyles = {
  base,
  head,
  headTitle,
  headLogo,
  headToggle,
  headToggleIcon,
  nav,
  navSection,
  navSectionTitle,
  navSectionItemWrapper,
  navSectionItem,
  navSectionItemIcon,
  navSectionItemLabelWrapper,
  navSectionItemLabel,
  navSectionItemCollapseIcon,
  separator,
  footer,
};

export { sidebarStyles };
