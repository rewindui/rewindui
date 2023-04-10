import { cva } from 'class-variance-authority';

const base = cva(['flex', 'items-stretch', 'group'], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
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
});

const text = cva(
  [
    'flex',
    'items-center',
    'justify-center',
    'data-[has-left-element=true]:border-l-0',
    'data-[has-left-element=true]:rounded-l-none',
    'data-[has-right-element=true]:border-r-0',
    'data-[has-right-element=true]:rounded-r-none',
  ],
  {
    variants: {
      size: {
        xs: ['text-xs', 'px-2'],
        sm: ['text-sm', 'px-3'],
        md: ['text-base', 'px-3'],
        lg: ['text-lg', 'px-4'],
      },
      tone: {
        light: ['border', 'border-gray-300', 'bg-gray-50', 'text-gray-800'],
        solid: ['border', 'border-gray-200', 'bg-gray-100', 'text-gray-800'],
        transparent: ['border', 'border-transparent', 'text-gray-800'],
      },
      radius: {
        none: ['rounded-none'],
        sm: ['rounded-sm'],
        base: ['rounded'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        full: ['rounded-full'],
      },
    },
  }
);

const inputGroupStyles = {
  base,
  text,
};

export { inputGroupStyles };
