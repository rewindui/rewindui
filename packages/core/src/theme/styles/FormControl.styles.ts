import { cva } from 'class-variance-authority';

const base = cva(['flex', 'flex-col', 'space-y-1']);

const label = cva(['text-gray-700', 'font-medium', 'w-fit'], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
    required: {
      true: ["after:content-['*']", 'after:ml-0.5', 'after:text-red-500'],
      false: [],
    },
  },
});

const text = cva([], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
    validation: {
      none: ['text-gray-500'],
      invalid: ['text-red-500'],
      valid: ['text-green-500'],
      warning: ['text-yellow-400'],
    },
  },
});

const formControlStyles = {
  base,
  label,
  text,
};

export { formControlStyles };
