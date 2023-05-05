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
        light: ['text-gray-800', 'border', 'focus:bg-gray-50', 'placeholder:text-gray-400'],
        solid: ['text-gray-800', 'border', 'focus:bg-gray-100', 'placeholder:text-gray-400'],
        transparent: ['text-gray-800', 'border', 'placeholder:text-gray-400'],
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
        true: ['focus:ring-2', 'focus:ring-offset-1'],
        false: ['focus:ring-0'],
      },
      disabled: {
        true: ['cursor-not-allowed'],
        false: ['read-only:cursor-default'],
      },
    },
    compoundVariants: [
      {
        validation: 'none',
        withRing: true,
        className: ['focus:ring-blue-100'],
      },
      {
        validation: 'invalid',
        withRing: true,
        className: ['focus:ring-red-100'],
      },
      {
        validation: 'valid',
        withRing: true,
        className: ['focus:ring-green-100'],
      },
      {
        validation: 'warning',
        withRing: true,
        className: ['focus:ring-yellow-100'],
      },
      {
        tone: 'light',
        disabled: false,
        className: ['bg-white'],
      },
      {
        tone: 'solid',
        disabled: false,
        className: ['bg-gray-50'],
      },
      {
        tone: 'transparent',
        disabled: false,
        className: ['bg-transparent'],
      },
      {
        tone: 'light',
        disabled: true,
        className: ['bg-gray-100'],
      },
      {
        tone: 'solid',
        disabled: true,
        className: ['bg-gray-200'],
      },
      {
        tone: 'transparent',
        disabled: true,
        className: ['bg-gray-50'],
      },
      {
        tone: 'light',
        validation: 'none',
        className: ['border-gray-300', 'focus-visible:border-blue-500'],
      },
      {
        tone: 'solid',
        validation: 'none',
        className: ['border-gray-200', 'focus-visible:border-blue-500'],
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
      light: ['text-gray-600'],
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
    '[scroll-margin-top:6px]',
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
    '[scroll-margin-top:6px]',
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
      mode: {
        spacey: [],
        tight: [],
      },
      radius: {
        none: [],
        sm: [],
        base: [],
        md: [],
        lg: [],
      },
      size: {
        xs: ['text-xs', 'px-2', 'py-1'],
        sm: ['text-sm', 'px-2', 'py-1'],
        md: ['text-base', 'px-2', 'py-2'],
        lg: ['text-lg', 'px-2', 'py-2'],
      },
      selected: {
        true: [],
        false: [
          'focus-within:bg-gray-100',
          'focus:bg-gray-100',
          'focus-visible:bg-gray-100',
          'hover:bg-gray-100',
        ],
      },
    },
    compoundVariants: [
      {
        mode: 'spacey',
        radius: 'none',
        className: ['rounded-none'],
      },
      {
        mode: 'spacey',
        radius: 'sm',
        className: ['rounded-sm'],
      },
      {
        mode: 'spacey',
        radius: 'base',
        className: ['rounded'],
      },
      {
        mode: 'spacey',
        radius: 'md',
        className: ['rounded-md'],
      },
      {
        mode: 'spacey',
        radius: 'lg',
        className: ['rounded-lg'],
      },
      {
        selected: true,
        color: 'blue',
        className: ['bg-blue-500', 'text-white'],
      },
      {
        selected: true,
        color: 'red',
        className: ['bg-red-500', 'text-white'],
      },
      {
        selected: true,
        color: 'green',
        className: ['bg-green-500', 'text-white'],
      },
      {
        selected: true,
        color: 'yellow',
        className: ['bg-yellow-400', 'text-white'],
      },
      {
        selected: true,
        color: 'purple',
        className: ['bg-purple-500', 'text-white'],
      },
      {
        selected: true,
        color: 'gray',
        className: ['bg-gray-200', 'text-gray-700'],
      },
      {
        selected: true,
        color: 'dark',
        className: ['bg-gray-500', 'text-white'],
      },
      {
        selected: true,
        color: 'black',
        className: ['bg-black', 'text-white'],
      },
    ],
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

const optionWrapper = cva(['grid', 'grid-flow-col', 'justify-items-start', 'gap-x-2', 'mr-5']);

const infoWrapper = cva(['flex', 'flex-col', 'text-left']);

const label = cva([], {
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
  ],
});

const description = cva(['whitespace-normal'], {
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
