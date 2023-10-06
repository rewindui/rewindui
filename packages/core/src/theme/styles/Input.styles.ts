import { cva } from 'class-variance-authority';

const base = cva(
  [
    'w-full',
    'transition-colors',
    'duration-100',
    'ease-in-out',
    'outline-none',
    'data-[has-left-element=true]:rounded-l-none',
    'data-[has-right-element=true]:rounded-r-none',
    'z-10',
    'rounded',
    'font-medium',
  ],
  {
    variants: {
      color: {
        blue: [,
          'border-blue-200',
          'focus:border-blue-200',
          'focus:outline-none',
          'active:border-blue-200',
          'active:outline-none'
        ],
        purple: [],
        gray: [],
        dark: [],
        black: [],
      },
      size: {
        xs: ['text-xs', 'h-6'],
        sm: ['text-sm', 'h-10'],
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
        full: ['rounded-full'],
      },
      shadow: {
        none: ['shadow-none'],
        sm: ['shadow-sm'],
        base: ['shadow'],
        md: ['shadow-md'],
      },
      hasLeftIcon: {
        true: [],
        false: [],
      },
      hasRightIcon: {
        true: [],
        false: [],
      },
      type: {
        'datetime-local': [],
        color: [],
        date: [],
        email: [],
        file: [
          'pl-0',
          'hover:cursor-pointer',
          'file:hover:cursor-pointer',
          'file:font-medium',
          'file:mr-4',
          'file:px-4',
          'file:border-0',
        ],
        number: [],
        password: [],
        range: [],
        search: [],
        text: [],
        time: [],
        tel: [],
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
      loading: {
        true: [],
        false: [],
      },
      disabled: {
        true: [],
        false: [],
      },
      withKeyboard: {
        true: [],
        false: [],
      },
      enabledPasswordToggle: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        disabled: true,
        loading: true,
        className: ['cursor-progress'],
      },
      {
        disabled: true,
        loading: false,
        className: ['cursor-not-allowed'],
      },
      {
        validation: 'none',
        color: 'blue',
        withRing: true,
        className: ['focus:ring-blue-100'],
      },
      {
        validation: 'none',
        color: 'purple',
        withRing: true,
        className: ['focus:ring-purple-100'],
      },
      {
        validation: 'none',
        color: 'gray',
        withRing: true,
        className: ['focus:ring-gray-100'],
      },
      {
        validation: 'none',
        color: 'dark',
        withRing: true,
        className: ['focus:ring-gray-200'],
      },
      {
        validation: 'none',
        color: 'black',
        withRing: true,
        className: ['focus:ring-gray-300'],
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
        type: 'file',
        tone: ['light', 'solid'],
        className: [
          'file:bg-gray-100',
          'file:hover:bg-gray-200',
          'file:active:bg-gray-300',
          'file:text-gray-800',
        ],
      },
      {
        type: 'file',
        tone: 'transparent',
        className: [
          'file:bg-gray-50',
          'file:hover:bg-gray-100',
          'file:active:bg-gray-200',
          'file:text-gray-800',
        ],
      },
      {
        type: 'file',
        size: 'xs',
        className: ['file:text-xs'],
      },
      {
        type: 'file',
        size: 'sm',
        className: ['file:text-sm'],
      },
      {
        type: 'file',
        size: 'md',
        className: ['file:text-base'],
      },
      {
        type: 'file',
        size: 'lg',
        className: ['file:text-lg'],
      },
      {
        type: 'file',
        size: 'xs',
        className: ['file:h-6', 'file:text-xs'],
      },
      {
        type: 'file',
        size: 'sm',
        className: ['file:h-8'],
      },
      {
        type: 'file',
        size: 'md',
        className: ['file:h-10'],
      },
      {
        type: 'file',
        size: 'lg',
        className: ['file:h-12'],
      },
      {
        type: 'color',
        size: 'xs',
        className: ['py-1'],
      },
      {
        type: 'color',
        size: 'sm',
        className: ['py-2'],
      },
      {
        type: 'color',
        size: 'md',
        className: ['py-3'],
      },
      {
        type: 'color',
        size: 'lg',
        className: ['py-4'],
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
        className: ['focus-visible:border-blue-500'],
      },
      {
        validation: 'none',
        color: 'purple',
        className: ['focus-visible:border-purple-500'],
      },
      {
        validation: 'none',
        color: 'gray',
        className: ['focus-visible:border-gray-500'],
      },
      {
        validation: 'none',
        color: 'dark',
        className: ['focus-visible:border-gray-700'],
      },
      {
        validation: 'none',
        color: 'black',
        className: ['focus-visible:border-black'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: false,
        size: 'xs',
        type: [
          'text',
          'number',
          'password',
          'date',
          'time',
          'email',
          'search',
          'range',
          'datetime-local',
          'color',
          'tel',
        ],
        className: ['px-2'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: false,
        size: 'sm',
        type: [
          'text',
          'number',
          'password',
          'date',
          'time',
          'email',
          'search',
          'range',
          'datetime-local',
          'color',
          'tel',
        ],
        className: ['px-3'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: false,
        size: 'md',
        type: [
          'text',
          'number',
          'password',
          'date',
          'time',
          'email',
          'search',
          'range',
          'datetime-local',
          'color',
          'tel',
        ],
        className: ['px-3'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: false,
        size: 'lg',
        type: [
          'text',
          'number',
          'password',
          'date',
          'time',
          'email',
          'search',
          'range',
          'datetime-local',
          'color',
          'tel',
        ],
        className: ['px-4'],
      },
      {
        hasLeftIcon: true,
        hasRightIcon: false,
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
        type: [
          'text',
          'number',
          'password',
          'date',
          'time',
          'email',
          'search',
          'range',
          'datetime-local',
          'color',
          'tel',
        ],
        className: ['pr-7', 'pl-2'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: true,
        size: 'sm',
        type: [
          'text',
          'number',
          'password',
          'date',
          'time',
          'email',
          'search',
          'range',
          'datetime-local',
          'color',
          'tel',
        ],
        className: ['pr-8', 'pl-3'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: true,
        size: 'md',
        type: [
          'text',
          'number',
          'password',
          'date',
          'time',
          'email',
          'search',
          'range',
          'datetime-local',
          'color',
          'tel',
        ],
        className: ['pr-11', 'pl-3'],
      },
      {
        hasLeftIcon: false,
        hasRightIcon: true,
        size: 'lg',
        type: [
          'text',
          'number',
          'password',
          'date',
          'time',
          'email',
          'search',
          'range',
          'datetime-local',
          'color',
          'tel',
        ],
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

const wrapper = cva(['relative', 'flex', 'items-center', 'w-full']);

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

const rightIconWrapper = cva(['absolute', 'right-0', 'z-20'], {
  variants: {
    size: {
      xs: ['pr-2'],
      sm: ['pr-2.5'],
      md: ['pr-3'],
      lg: ['pr-3'],
    },
  },
});

const keyboardIconWrapper = cva(['absolute', 'inset-y-0', 'right-0', 'flex', 'items-center', 'pr-3'], {
  variants: {
    size: {
      xs: [],
      sm: [],
      md: [],
      lg: [],
    },
  },
});

const eyeIconWrapper = cva(['absolute', 'inset-y-0', 'right-0', 'flex', 'items-center', 'pr-12'], {
  variants: {
    size: {
      xs: [],
      sm: [],
      md: [],
      lg: [],
    },
    withKeyboard: {
      true: [],
      false: [],
    },
    enabledPasswordToggle: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      withKeyboard: true,
      enabledPasswordToggle: true,
      className: ['pr-12'],
    },
    {
      withKeyboard: false,
      enabledPasswordToggle: true,
      className: ['pr-3'],
    }
  ],
  defaultVariants: {
    withKeyboard: false,
    enabledPasswordToggle: true
  }
});

const inputStyles = {
  base,
  wrapper,
  icon,
  leftIconWrapper,
  rightIconWrapper,
  keyboardIconWrapper,
  eyeIconWrapper
};

export { inputStyles };
