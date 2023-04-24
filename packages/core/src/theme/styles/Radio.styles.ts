import { cva } from 'class-variance-authority';

const base = cva(['cursor-pointer', 'form-radio'], {
  variants: {
    color: {
      blue: [
        'text-blue-500',
        'hover:text-blue-600',
        'focus:text-blue-600',
        'focus:ring-blue-100',
        'active:text-blue-700',
        'disabled:text-blue-300',
        'disabled:hover:text-blue-300',
      ],
      red: [
        'text-red-500',
        'hover:text-red-600',
        'focus:text-red-600',
        'focus:ring-red-100',
        'active:text-red-700',
        'disabled:text-red-300',
        'disabled:hover:text-red-300',
      ],
      green: [
        'text-green-500',
        'hover:text-green-600',
        'focus:text-green-600',
        'focus:ring-green-100',
        'active:text-green-700',
        'disabled:text-green-300',
        'disabled:hover:text-green-300',
      ],
      yellow: [
        'text-yellow-400',
        'hover:text-yellow-500',
        'focus:text-yellow-500',
        'focus:ring-yellow-100',
        'active:text-yellow-600',
        'disabled:text-yellow-200',
        'disabled:hover:text-yellow-200',
      ],
      purple: [
        'text-purple-500',
        'hover:text-purple-600',
        'focus:text-purple-600',
        'focus:ring-purple-100',
        'active:text-purple-700',
        'disabled:text-purple-300',
        'disabled:hover:text-purple-300',
      ],
      gray: [
        'text-gray-200',
        'hover:text-gray-300',
        'focus:text-gray-300',
        'focus:ring-gray-100',
        'active:text-gray-400',
        'disabled:text-gray-100',
        'disabled:hover:text-gray-100',
      ],
      dark: [
        'text-gray-700',
        'hover:text-gray-800',
        'focus:text-gray-800',
        'focus:ring-gray-200',
        'active:text-gray-900',
        'disabled:text-gray-500',
        'disabled:hover:text-gray-500',
      ],
      black: [
        'text-gray-800',
        'hover:text-gray-900',
        'focus:text-gray-900',
        'focus:ring-gray-400',
        'active:text-black',
        'disabled:text-gray-600',
        'disabled:hover:text-gray-600',
      ],
    },
    tone: {
      solid: [
        'bg-white',
        'hover:bg-gray-50',
        'active:bg-gray-100',
        'focus:outline-0',
        'focus:outline-transparent',
        'invalid:border-red-300',
      ],
      light: [
        'bg-gray-100',
        'hover:bg-gray-200',
        'active:bg-gray-300',
        'focus:outline-0',
        'focus:outline-transparent',
        'invalid:border-red-300',
      ],
    },
    validation: {
      valid: ['outline-0', 'border-gray-300'],
      invalid: ['outline-0', 'border-red-300'],
    },
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      base: ['rounded'],
      md: ['rounded-md'],
      lg: ['rounded-lg'],
      full: ['rounded-full'],
    },
    size: {
      sm: ['w-4', 'h-4'],
      md: ['w-5', 'h-5'],
      lg: ['w-6', 'h-6'],
      xl: ['w-7', 'h-7'],
    },
    withRing: {
      true: ['focus:ring', 'focus:ring-offset-1'],
      false: ['focus:ring-0'],
    },
  },
  defaultVariants: {
    tone: 'solid',
    color: 'blue',
  },
});

const label = cva(['cursor-pointer'], {
  variants: {
    size: {
      sm: ['text-sm', 'pl-1.5'],
      md: ['text-base', 'pl-1.5'],
      lg: ['text-lg', 'pl-2'],
      xl: ['text-xl', 'pl-2'],
    },
    disabled: {
      true: ['text-gray-500'],
      false: ['text-gray-700'],
    },
  },
});

const description = cva([], {
  variants: {
    size: {
      sm: ['text-xs', 'ml-1.5'],
      md: ['text-sm', 'ml-1.5'],
      lg: ['text-base', 'ml-2'],
      xl: ['text-lg', 'ml-2'],
    },
    disabled: {
      true: ['text-gray-400'],
      false: ['text-gray-500'],
    },
  },
});

const error = cva([], {
  variants: {
    size: {
      sm: ['text-xs', 'ml-1.5'],
      md: ['text-sm', 'ml-1.5'],
      lg: ['text-base', 'ml-2'],
      xl: ['text-lg', 'ml-2'],
    },
    disabled: {
      true: ['text-red-300'],
      false: ['text-red-500'],
    },
  },
});

const radioStyles = {
  base,
  description,
  error,
  label,
};

export { radioStyles };
