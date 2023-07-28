import { cva } from 'class-variance-authority';

const base = cva(
  ['w-full', 'flex', 'items-center', 'transition-colors', 'duration-100', 'ease-in-out', 'z-10'],
  {
    variants: {
      color: {
        blue: [],
        purple: [],
        gray: [],
        dark: [],
        black: [],
      },
      size: {
        xs: ['text-xs', 'min-h-[1.5rem]'],
        sm: ['text-sm', 'min-h-[2rem]'],
        md: ['text-base', 'min-h-[2.5rem]'],
        lg: ['text-lg', 'min-h-[3rem]'],
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
        invalid: ['border-red-500', 'focus-within:border-red-500'],
        valid: ['border-green-500', 'focus-within:border-green-500'],
        warning: ['border-yellow-400', 'focus-within:border-yellow-400'],
      },
      withRing: {
        true: ['focus-within:ring-2', 'focus-within:ring-offset-1'],
        false: ['focus-within:ring-0'],
      },
      disabled: {
        true: ['cursor-not-allowed'],
        false: ['read-only:cursor-default'],
      },
    },
    compoundVariants: [
      {
        validation: 'none',
        color: 'blue',
        withRing: true,
        className: ['focus-within:ring-blue-100'],
      },
      {
        validation: 'none',
        color: 'purple',
        withRing: true,
        className: ['focus-within:ring-purple-100'],
      },
      {
        validation: 'none',
        color: 'gray',
        withRing: true,
        className: ['focus-within:ring-gray-100'],
      },
      {
        validation: 'none',
        color: 'dark',
        withRing: true,
        className: ['focus-within:ring-gray-200'],
      },
      {
        validation: 'none',
        color: 'black',
        withRing: true,
        className: ['focus-within:ring-gray-300'],
      },
      {
        validation: 'invalid',
        withRing: true,
        className: ['focus-within:ring-red-100'],
      },
      {
        validation: 'valid',
        withRing: true,
        className: ['focus-within:ring-green-100'],
      },
      {
        validation: 'warning',
        withRing: true,
        className: ['focus-within:ring-yellow-100'],
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
        className: ['border-gray-300'],
      },
      {
        tone: 'solid',
        validation: 'none',
        className: ['border-gray-200'],
      },
      {
        tone: 'transparent',
        validation: 'none',
        className: ['border-transparent'],
      },
      {
        validation: 'none',
        color: 'blue',
        className: ['focus-within:border-blue-500'],
      },
      {
        validation: 'none',
        color: 'purple',
        className: ['focus-within:border-purple-500'],
      },
      {
        validation: 'none',
        color: 'gray',
        className: ['focus-within:border-gray-500'],
      },
      {
        validation: 'none',
        color: 'dark',
        className: ['focus-within:border-gray-700'],
      },
      {
        validation: 'none',
        color: 'black',
        className: ['focus-within:border-black'],
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

const input = cva(
  ['outline-none', 'bg-transparent', 'w-full', 'min-w-[1rem]', 'h-full', 'flex-1'],
  {
    variants: {
      size: {
        xs: ['min-h-[1.125rem]'],
        sm: ['min-h-[1.375rem]'],
        md: ['min-h-[1.625rem]'],
        lg: ['min-h-[1.875rem]'],
      },
    },
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

const tagWrapper = cva(['flex', 'flex-wrap', 'items-center', 'flex-start', 'mr-2'], {
  variants: {
    size: {
      xs: ['gap-0.5', 'py-0.5'],
      sm: ['gap-1', 'py-1'],
      md: ['gap-1.5', 'py-1.5'],
      lg: ['gap-1.5', 'py-1.5'],
    },
  },
});

const tagButton = cva(['flex', 'items-center', 'h-full', 'mr-1'], {
  variants: {
    disabled: {
      true: ['cursor-not-allowed'],
      false: ['cursor-pointer'],
    },
    color: {
      blue: ['focus-visible:outline-blue-100'],
      purple: ['focus-visible:outline-purple-100'],
      gray: ['focus-visible:outline-gray-100'],
      dark: ['focus-visible:outline-gray-200'],
      black: ['focus-visible:outline-gray-300'],
    },
  },
});

const tagButtonIcon = cva(['text-xs', 'text-gray-500']);

const tag = cva(
  [
    'flex',
    'items-center',
    'rounded',
    'border',
    'border-gray-200',
    'whitespace-nowrap',
    'leading-none',
    'shadow-sm',
  ],
  {
    variants: {
      disabled: {
        true: [],
        false: ['text-gray-600'],
      },
      tone: {
        light: [],
        solid: [],
        transparent: [],
      },
      size: {
        xs: ['text-xs', 'px-1', 'h-[1.125rem]'],
        sm: ['text-sm', 'px-1.5', 'h-[1.375rem]'],
        md: ['text-sm', 'px-2', 'h-[1.625rem]'],
        lg: ['text-base', 'px-2.5', 'h-[1.875rem]'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        base: ['rounded'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
      },
    },
    compoundVariants: [
      {
        disabled: true,
        tone: ['light', 'transparent'],
        className: ['bg-gray-100', 'text-gray-500'],
      },
      {
        disabled: false,
        tone: ['light', 'transparent'],
        className: ['bg-gray-50'],
      },
      {
        disabled: true,
        tone: 'solid',
        className: ['bg-gray-50', 'text-gray-500'],
      },
      {
        disabled: false,
        tone: 'solid',
        className: ['bg-white'],
      },
    ],
  }
);

const noResults = cva(['w-full', 'flex', 'items-center'], {
  variants: {
    size: {
      xs: ['text-xs', 'px-2', 'py-1'],
      sm: ['text-sm', 'px-2', 'py-1'],
      md: ['text-sm', 'px-2', 'py-1.5'],
      lg: ['text-base', 'px-2', 'py-2'],
    },
  },
});

const list = cva(
  [
    'flex',
    'flex-col',
    'border',
    'border-gray-200',
    'snap-y',
    'isolation-auto',
    'z-40',
    'bg-white',
    'overflow-x-clip',
    'scrollbar',
    'scrollbar-thin',
    'scrollbar-rounded-lg',
    'scrollbar-thumb-gray-200',
    'scrollbar-track-gray-100',
  ],
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
      light: ['fill-gray-600'],
      solid: ['fill-gray-600'],
      transparent: ['fill-gray-600'],
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
    'rounded',
    'enabled:cursor-pointer',
    'disabled:cursor-not-allowed',
    'focus:outline-none',
    'focus:ring',
    'focus:ring-offset-1',
  ],
  {
    variants: {
      color: {
        blue: ['focus-visible:ring-blue-100'],
        purple: ['focus-visible:ring-purple-100'],
        gray: ['focus-visible:ring-gray-100'],
        dark: ['focus-visible:ring-gray-200'],
        black: ['focus-visible:ring-gray-300'],
      },
      size: {
        xs: ['px-2'],
        sm: ['px-2.5'],
        md: ['px-3'],
        lg: ['px-3'],
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
    'text-gray-400',
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
      optionColor: {
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
        md: ['text-sm', 'px-2', 'py-1.5'],
        lg: ['text-base', 'px-2', 'py-2'],
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
        optionColor: 'blue',
        className: ['bg-blue-500', 'text-white'],
      },
      {
        selected: true,
        optionColor: 'red',
        className: ['bg-red-500', 'text-white'],
      },
      {
        selected: true,
        optionColor: 'green',
        className: ['bg-green-500', 'text-white'],
      },
      {
        selected: true,
        optionColor: 'yellow',
        className: ['bg-yellow-400', 'text-white'],
      },
      {
        selected: true,
        optionColor: 'purple',
        className: ['bg-purple-500', 'text-white'],
      },
      {
        selected: true,
        optionColor: 'gray',
        className: ['bg-gray-200', 'text-gray-700'],
      },
      {
        selected: true,
        optionColor: 'dark',
        className: ['bg-gray-500', 'text-white'],
      },
      {
        selected: true,
        optionColor: 'black',
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
  ],
});

const comboboxStyles = {
  base,
  input,
  group,
  icon,
  leftIconWrapper,
  list,
  noResults,
  rightIconWrapper,
  wrapper,
  tag,
  tagWrapper,
  tagButton,
  tagButtonIcon,
};

const comboboxOptionStyles = {
  button,
  description,
  icon,
  infoWrapper,
  label,
  optionIcon,
  optionWrapper,
};

export { comboboxStyles, comboboxOptionStyles };
