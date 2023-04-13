import { cva } from 'class-variance-authority';
import { useState } from 'react';
import { CheckFat } from '@phosphor-icons/react';

export type Color =
  | 'white'
  | 'zinc'
  | 'slate'
  | 'blue'
  | 'red'
  | 'green'
  | 'yellow'
  | 'purple'
  | 'gray'
  | 'dark'
  | 'black';

const Color = ({
  color,
  selectedColor,
  onClick,
}: {
  color: Color;
  selectedColor: Color;
  onClick: (color: Color) => void;
}) => {
  const style = cva(
    [
      'border',
      'border-gray-200',
      'rounded',
      'w-6',
      'h-6',
      'cursor-pointer',
      'flex',
      'items-center',
      'justify-center',
      'outline',
    ],
    {
      variants: {
        color: {
          none: ['bg-transparent'],
          white: ['bg-white'],
          zinc: ['bg-zinc-500'],
          slate: ['bg-slate-500'],
          blue: ['bg-blue-500'],
          red: ['bg-red-500'],
          green: ['bg-green-500'],
          yellow: ['bg-yellow-400'],
          purple: ['bg-purple-500'],
          gray: ['bg-gray-200'],
          dark: ['bg-gray-700'],
          black: ['bg-black'],
        },
        selected: {
          true: [],
          false: ['outline-transparent'],
        },
      },
      compoundVariants: [
        {
          color: 'white',
          selected: true,
          className: ['outline-gray-50'],
        },
        {
          color: 'zinc',
          selected: true,
          className: ['outline-zinc-300'],
        },
        {
          color: 'slate',
          selected: true,
          className: ['outline-slate-300'],
        },
        {
          color: 'blue',
          selected: true,
          className: ['outline-blue-300'],
        },
        {
          color: 'red',
          selected: true,
          className: ['outline-red-300'],
        },
        {
          color: 'green',
          selected: true,
          className: ['outline-green-300'],
        },
        {
          color: 'yellow',
          selected: true,
          className: ['outline-yellow-200'],
        },
        {
          color: 'purple',
          selected: true,
          className: ['outline-purple-300'],
        },
        {
          color: 'gray',
          selected: true,
          className: ['outline-gray-100'],
        },
        {
          color: 'dark',
          selected: true,
          className: ['outline-gray-500'],
        },
        {
          color: 'black',
          selected: true,
          className: ['outline-gray-700'],
        },
      ],
    }
  );

  const iconStyle = cva([], {
    variants: {
      color: {
        none: ['text-transparent'],
        white: ['text-gray-600'],
        zinc: ['text-zinc-200'],
        slate: ['text-slate-200'],
        blue: ['text-blue-200'],
        red: ['text-red-200'],
        green: ['text-green-200'],
        yellow: ['text-yellow-200'],
        purple: ['text-purple-200'],
        gray: ['text-gray-700'],
        dark: ['text-gray-200'],
        black: ['text-gray-200'],
      },
    },
  });
  return (
    <div
      onClick={() => onClick(color)}
      className={style({ color, selected: selectedColor === color })}
    >
      {selectedColor === color && (
        <CheckFat size={13} weight="duotone" className={iconStyle({ color })} />
      )}
    </div>
  );
};

export const ColorPicker = ({
  onClick,
  colors = ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
  initialValue = 'white',
}: {
  onClick: (color: Color) => void;
  colors?: Color[];
  initialValue?: Color;
}) => {
  const [selectedColor, setSelectedColor] = useState<Color>(initialValue);

  return (
    <div className="flex flex-wrap gap-1">
      {colors.map((color: Color) => (
        <Color
          key={color}
          onClick={(event) => {
            setSelectedColor(event);
            onClick(event);
          }}
          selectedColor={selectedColor}
          color={color}
        />
      ))}
    </div>
  );
};
