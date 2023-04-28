import { cva } from 'class-variance-authority';

const base = cva(
  ['w-full', 'transition-colors', 'duration-100', 'ease-in-out', 'outline-none', 'z-10'],
  {
    variants: {
      size: {
        xs: ['text-xs', 'h-6'],
        sm: ['text-sm', 'h-8'],
        md: ['text-base', 'h-10'],
        lg: ['text-lg', 'h-12'],
      },
      tone: {
        base: ['text-gray-800', 'border', 'focus:bg-gray-50/50', 'placeholder:text-gray-400'],
        solid: ['text-gray-800', 'border', 'focus:bg-slate-200/60', 'placeholder:text-slate-400'],
        transparent: ['text-gray-800', 'border', 'placeholder:text-gray-400'],
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
      },
      hasLeftIcon: {
        true: [],
        false: [],
      },
      hasRightIcon: {
        true: [],
        false: [],
      },
      hasLeftElement: {
        true: ['rounded-l-none'],
        false: [],
      },
      hasRightElement: {
        true: ['rounded-r-none'],
        false: [],
      },
      validation: {
        none: [],
        invalid: ['border-red-500', 'focus-visible:border-red-500'],
        valid: ['border-green-500', 'focus-visible:border-green-500'],
        warning: ['border-yellow-400', 'focus-visible:border-yellow-400'],
      },
      withRing: {
        true: ['focus:ring-2'],
        false: [],
      },
      disabled: {
        true: ['cursor-not-allowed'],
        false: [],
      },
    },
    compoundVariants: [
      {
        validation: 'none',
        withRing: true,
        className: ['focus:ring-blue-300'],
      },
      {
        validation: 'invalid',
        withRing: true,
        className: ['focus:ring-red-300'],
      },
      {
        validation: 'valid',
        withRing: true,
        className: ['focus:ring-green-300'],
      },
      {
        validation: 'warning',
        withRing: true,
        className: ['focus:ring-yellow-200'],
      },
      {
        tone: 'base',
        disabled: false,
        className: ['bg-white'],
      },
      {
        tone: 'solid',
        disabled: false,
        className: ['bg-slate-100'],
      },
      {
        tone: 'transparent',
        disabled: false,
        className: ['bg-transparent'],
      },
      {
        tone: 'base',
        disabled: true,
        className: ['bg-gray-100'],
      },
      {
        tone: 'solid',
        disabled: true,
        className: ['bg-slate-200'],
      },
      {
        tone: 'transparent',
        disabled: true,
        className: ['bg-gray-50'],
      },
      {
        tone: ['base', 'transparent'],
        shadow: ['sm', 'base', 'md', 'lg'],
        className: ['shadow-gray-400/50'],
      },
      {
        tone: 'solid',
        shadow: ['sm', 'base', 'md', 'lg'],
        className: ['shadow-slate-400/50'],
      },
      {
        tone: 'base',
        validation: 'none',
        className: ['border-gray-300', 'focus-visible:border-blue-500'],
      },
      {
        tone: 'solid',
        validation: 'none',
        className: ['border-slate-100', 'focus-visible:border-blue-500'],
      },
      {
        tone: 'transparent',
        validation: 'none',
        className: ['border-transparent'],
      },
      {
        hasLeftIcon: false,
        size: 'xs',
        className: ['px-2'],
      },
      {
        hasLeftIcon: false,
        size: 'sm',
        className: ['px-3'],
      },
      {
        hasLeftIcon: false,
        size: 'md',
        className: ['px-3'],
      },
      {
        hasLeftIcon: false,
        size: 'lg',
        className: ['px-4'],
      },
      {
        hasLeftIcon: true,
        size: 'xs',
        className: ['pl-7', 'pr-2'],
      },
      {
        hasLeftIcon: true,
        hasRightIcon: false,
        size: 'sm',
        className: ['pl-8', 'pr-3'],
      },
      {
        hasLeftIcon: true,
        hasRightIcon: false,
        size: 'md',
        className: ['pl-11', 'pr-3'],
      },
      {
        hasLeftIcon: true,
        hasRightIcon: false,
        size: 'lg',
        className: ['pl-12', 'pr-4'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: true,
        size: 'xs',
        className: ['pr-7', 'pl-2'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: true,
        size: 'sm',
        className: ['pr-8', 'pl-3'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: true,
        size: 'md',
        className: ['pr-11', 'pl-3'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: true,
        size: 'lg',
        className: ['pr-12', 'pl-4'],
      },
      {
        hasLeftIcon: true,
        hasRightIcon: true,
        size: 'xs',
        className: ['px-7'],
      },
      {
        hasLeftIcon: true,
        hasRightIcon: true,
        size: 'sm',
        className: ['px-8'],
      },
      {
        hasLeftIcon: true,
        hasRightIcon: true,
        size: 'md',
        className: ['px-11'],
      },
      {
        hasLeftIcon: true,
        hasRightIcon: true,
        size: 'lg',
        className: ['px-12'],
      },
    ],
  }
);

const wrapper = cva(['relative', 'w-full', 'flex', 'items-center'], {
  variants: {
    disabled: {
      true: ['cursor-not-allowed'],
      false: [],
    },
  },
});

const noResults = cva(['w-full', 'flex', 'items-center'], {
  variants: {
    size: {
      xs: ['text-xs', 'px-2', 'py-1'],
      sm: ['text-sm', 'px-2', 'py-1'],
      md: ['text-base', 'px-2', 'py-2'],
      lg: ['text-lg', 'px-2', 'py-2'],
    },
  },
});

const list = cva(
  ['flex', 'flex-col', 'border', 'border-gray-200', 'snap-y', 'isolation-auto', 'z-40', 'bg-white'],
  {
    variants: {
      overflown: {
        true: ['overflow-y-scroll'],
        false: ['overflow-y-hidden'],
      },
      open: {
        true: ['opacity-100', 'scale-100'],
        false: ['opacity-0', 'scale-95', 'hidden'],
      },
      size: {
        xs: [],
        sm: [],
        md: [],
        lg: [],
      },
      mode: {
        tight: ['p-0'],
        spacey: ['space-y-1'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        base: ['rounded'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        full: ['rounded-lg'],
      },
      shadow: {
        none: ['shadow-none'],
        sm: ['shadow-sm'],
        base: ['shadow'],
        md: ['shadow-md'],
        lg: ['shadow-lg'],
      },
    },
    compoundVariants: [
      {
        mode: 'spacey',
        overflown: false,
        size: ['xs', 'sm'],
        className: ['p-1'],
      },
      {
        mode: 'spacey',
        overflown: false,
        size: ['md', 'lg'],
        className: ['p-1.5'],
      },
      {
        mode: 'spacey',
        overflown: true,
        size: ['xs', 'sm'],
        className: ['py-1', 'px-1'],
      },
      {
        mode: 'spacey',
        overflown: true,
        size: ['md', 'lg'],
        className: ['py-1.5', 'px-1.5'],
      },
    ],
  }
);

const icon = cva([], {
  variants: {
    tone: {
      base: ['text-gray-600'],
      solid: ['text-gray-600'],
      transparent: ['text-gray-600'],
    },
    size: {
      xs: ['h-3.5', 'w-3.5'],
      sm: ['h-4', 'w-4'],
      md: ['h-5', 'w-5'],
      lg: ['h-6', 'w-6'],
    },
  },
});

const leftIconWrapper = cva(['absolute', 'left-0', 'z-20'], {
  variants: {
    size: {
      xs: ['pl-2'],
      sm: ['pl-2.5'],
      md: ['pl-3'],
      lg: ['pl-3'],
    },
  },
});

const rightIconWrapper = cva(
  [
    'absolute',
    'right-0',
    'z-20',
    'pointer-events-auto',
    'h-full',
    'flex',
    'items-center',
    'enabled:cursor-pointer',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        xs: ['pr-2'],
        sm: ['pr-2.5'],
        md: ['pr-3'],
        lg: ['pr-3'],
      },
    },
  }
);

const group = cva(
  [
    'antialiased',
    'snap-always',
    'snap-mandatory',
    'snap-start',
    'border-dashed',
    'border-b',
    'border-b-gray-200',
    'mb-1',
  ],
  {
    variants: {
      hidden: {
        true: ['hidden'],
        false: [],
      },
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
        dark: 'text-gray-900',
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
        xs: ['text-xs', 'px-2', 'py-1'],
        sm: ['text-sm', 'px-2', 'py-1'],
        md: ['text-base', 'px-2', 'py-2'],
        lg: ['text-lg', 'px-2', 'py-2'],
      },
    },
  }
);

const button = cva(
  [
    'antialiased',
    'cursor-pointer',
    'disabled:cursor-not-allowed',
    'snap-always',
    'snap-mandatory',
    'snap-start',
    'w-full',
    'flex',
    'items-center',
    'justify-between',
    'disabled:text-gray-300',
    'focus-visible:outline-none',
    'hover:ring-0',
    'focus-visible:ring-0',
  ],
  {
    variants: {
      hidden: {
        true: ['hidden'],
        false: [],
      },
      mode: {
        spacey: ['rounded'],
        tight: [],
      },
      size: {
        xs: ['text-xs', 'px-2', 'py-1'],
        sm: ['text-sm', 'px-2', 'py-1'],
        md: ['text-base', 'px-2', 'py-2'],
        lg: ['text-lg', 'px-2', 'py-2'],
      },
      selected: {
        true: ['bg-blue-500', 'text-gray-50'],
        false: [
          'focus-within:bg-gray-100',
          'focus:bg-gray-100',
          'focus-visible:bg-gray-100',
          'hover:bg-gray-100',
        ],
      },
    },
  }
);

const optionIcon = cva([], {
  variants: {
    size: {
      xs: ['w-4', 'h-4'],
      sm: ['w-4', 'h-4'],
      md: ['w-6', 'h-6'],
      lg: ['w-6', 'h-6'],
    },
  },
});

const optionWrapper = cva(['flex', 'items-center', 'space-x-2', 'mr-5']);

const infoWrapper = cva(['grid', 'grid-cols-1', 'justify-items-start']);

const label = cva(['font-medium'], {
  variants: {
    disabled: {
      true: [],
      false: [],
    },
    selected: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      disabled: false,
      selected: false,
      className: ['text-gray-700'],
    },
    {
      disabled: false,
      selected: true,
      className: ['text-gray-50'],
    },
  ],
});

const description = cva([], {
  variants: {
    disabled: {
      true: [],
      false: [],
    },
    selected: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      disabled: false,
      selected: false,
      className: ['text-gray-500'],
    },
    {
      disabled: false,
      selected: true,
      className: ['text-gray-50'],
    },
  ],
});

const comboboxStyles = {
  base,
  wrapper,
  noResults,
  list,
  icon,
  leftIconWrapper,
  rightIconWrapper,
  group,
};

const comboboxOptionStyles = {
  button,
  optionWrapper,
  infoWrapper,
  label,
  description,
  optionIcon,
};

export { comboboxStyles, comboboxOptionStyles };
