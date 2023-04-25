import { cva } from 'class-variance-authority';

const tab = cva(
  ['flex', 'flex-inline', 'justify-center', 'items-center', 'focus-visible:outline-0'],
  {
    variants: {
      tone: {
        line: [],
        pill: ['antialiased'],
      },
      color: {
        blue: ['focus-visible:bg-blue-100/50'],
        red: ['focus-visible:bg-red-100/50'],
        green: ['focus-visible:bg-green-100/50'],
        yellow: ['focus-visible:bg-yellow-100/50'],
        purple: ['focus-visible:bg-purple-100/50'],
        gray: ['focus-visible:bg-gray-100/50'],
        dark: ['focus-visible:bg-gray-200/50'],
        black: ['focus-visible:bg-gray-300/50'],
      },
      state: {
        active: [],
        inactive: [],
      },
      radius: {
        none: ['rounded-none'],
        sm: [],
        base: [],
        md: [],
        lg: [],
        full: [],
      },
      size: {
        sm: ['text-sm', 'px-2', 'py-1'],
        md: ['text-base', 'px-2.5', 'py-1.5'],
        lg: ['text-lg', 'px-3', 'py-2'],
      },
      fullWidth: {
        true: ['flex-1'],
        false: [],
      },
    },
    defaultVariants: {
      tone: 'line',
      color: 'blue',
      size: 'md',
    },
    compoundVariants: [
      {
        tone: 'pill',
        radius: 'sm',
        className: ['rounded-sm'],
      },
      {
        tone: 'pill',
        radius: 'base',
        className: ['rounded'],
      },
      {
        tone: 'pill',
        radius: 'md',
        className: ['rounded-md'],
      },
      {
        tone: 'pill',
        radius: 'lg',
        className: ['rounded-lg'],
      },
      {
        tone: 'pill',
        radius: 'full',
        className: ['rounded-full'],
      },
      {
        tone: 'line',
        state: 'active',
        className: ['text-gray-900', 'border-b-2'],
      },
      {
        tone: 'line',
        state: 'inactive',
        className: ['text-gray-500', 'border-b-2'],
      },
      {
        tone: 'line',
        color: 'blue',
        state: 'active',
        className: ['border-b-blue-400'],
      },
      {
        tone: 'line',
        color: 'blue',
        state: 'inactive',
        className: ['border-b-gray-100', 'hover:border-b-blue-200'],
      },
      {
        tone: 'line',
        color: 'red',
        state: 'active',
        className: ['border-b-red-400'],
      },
      {
        tone: 'line',
        color: 'red',
        state: 'inactive',
        className: ['border-b-gray-100', 'hover:border-b-red-200'],
      },
      {
        tone: 'line',
        color: 'green',
        state: 'active',
        className: ['border-b-green-400'],
      },
      {
        tone: 'line',
        color: 'green',
        state: 'inactive',
        className: ['border-b-gray-100', 'hover:border-b-green-200'],
      },
      {
        tone: 'line',
        color: 'yellow',
        state: 'active',
        className: ['border-b-yellow-300'],
      },
      {
        tone: 'line',
        color: 'yellow',
        state: 'inactive',
        className: ['border-b-gray-100', 'hover:border-b-yellow-100'],
      },
      {
        tone: 'line',
        color: 'purple',
        state: 'active',
        className: ['border-b-purple-400'],
      },
      {
        tone: 'line',
        color: 'purple',
        state: 'inactive',
        className: ['border-b-gray-100', 'hover:border-b-purple-200'],
      },
      {
        tone: 'line',
        color: 'gray',
        state: 'active',
        className: ['border-b-gray-400'],
      },
      {
        tone: 'line',
        color: 'gray',
        state: 'inactive',
        className: ['border-b-gray-100', 'hover:border-b-gray-200'],
      },
      {
        tone: 'line',
        color: 'dark',
        state: 'active',
        className: ['border-b-gray-700'],
      },
      {
        tone: 'line',
        color: 'dark',
        state: 'inactive',
        className: ['border-b-gray-100', 'hover:border-b-gray-200'],
      },
      {
        tone: 'line',
        color: 'black',
        state: 'active',
        className: ['border-b-black'],
      },
      {
        tone: 'line',
        color: 'black',
        state: 'inactive',
        className: ['border-b-gray-200', 'hover:border-b-gray-300'],
      },
      {
        tone: 'pill',
        state: 'inactive',
        className: ['text-gray-500', 'bg-transparent'],
      },
      {
        tone: 'pill',
        color: 'blue',
        state: 'active',
        className: ['bg-blue-500', 'text-white'],
      },
      {
        tone: 'pill',
        color: 'blue',
        state: 'inactive',
        className: ['hover:bg-blue-50'],
      },
      {
        tone: 'pill',
        color: 'red',
        state: 'active',
        className: ['bg-red-500', 'text-white'],
      },
      {
        tone: 'pill',
        color: 'red',
        state: 'inactive',
        className: ['hover:bg-red-50'],
      },
      {
        tone: 'pill',
        color: 'green',
        state: 'active',
        className: ['bg-green-500', 'text-white'],
      },
      {
        tone: 'pill',
        color: 'green',
        state: 'inactive',
        className: ['hover:bg-green-50'],
      },
      {
        tone: 'pill',
        color: 'yellow',
        state: 'active',
        className: ['bg-yellow-400', 'text-white'],
      },
      {
        tone: 'pill',
        color: 'yellow',
        state: 'inactive',
        className: ['hover:bg-yellow-50'],
      },
      {
        tone: 'pill',
        color: 'purple',
        state: 'active',
        className: ['bg-purple-500', 'text-white'],
      },
      {
        tone: 'pill',
        color: 'purple',
        state: 'inactive',
        className: ['hover:bg-purple-50'],
      },
      {
        tone: 'pill',
        color: 'gray',
        state: 'active',
        className: ['bg-gray-500', 'text-white'],
      },
      {
        tone: 'pill',
        color: 'gray',
        state: 'inactive',
        className: ['hover:bg-gray-50'],
      },
      {
        tone: 'pill',
        color: 'dark',
        state: 'active',
        className: ['bg-gray-800', 'text-white'],
      },
      {
        tone: 'pill',
        color: 'dark',
        state: 'inactive',
        className: ['hover:bg-gray-50'],
      },
      {
        tone: 'pill',
        color: 'black',
        state: 'active',
        className: ['bg-black', 'text-white'],
      },
      {
        tone: 'pill',
        color: 'black',
        state: 'inactive',
        className: ['hover:bg-gray-100'],
      },
    ],
  }
);

const wrapper = cva(['overflow-auto'], {
  variants: {
    fullWidth: {
      true: ['w-full'],
      false: [],
    },
  },
});

const list = cva(['flex', 'flex-inline', 'space-x-2', 'px-1', 'mb-2', 'py-2', 'overflow-auto']);

const tabStyles = {
  wrapper,
  tab,
  list,
};

export { tabStyles };
