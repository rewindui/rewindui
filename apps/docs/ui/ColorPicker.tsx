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
type Tone = 'light' | 'solid';

const Color = ({
  color,
  selectedColor,
  tone,
  onClick,
}: {
  color: Color;
  selectedColor: Color;
  tone: Tone;
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
    ],
    {
      variants: {
        color: {
          none: ['bg-transparent'],
          white: ['bg-white'],
          zinc: ['bg-zinc-500'],
          slate: ['bg-slate-500'],
          blue: [],
          red: [],
          green: [],
          yellow: [],
          purple: [],
          gray: [],
          dark: [],
          black: [],
        },
        tone: {
          light: [],
          solid: [],
        },
      },
      compoundVariants: [
        {
          color: 'blue',
          tone: 'light',
          className: ['bg-blue-50'],
        },
        {
          color: 'blue',
          tone: 'solid',
          className: ['bg-blue-500'],
        },
        {
          color: 'red',
          tone: 'light',
          className: ['bg-red-50'],
        },
        {
          color: 'red',
          tone: 'solid',
          className: ['bg-red-500'],
        },
        {
          color: 'green',
          tone: 'light',
          className: ['bg-green-50'],
        },
        {
          color: 'green',
          tone: 'solid',
          className: ['bg-green-500'],
        },
        {
          color: 'yellow',
          tone: 'light',
          className: ['bg-yellow-50'],
        },
        {
          color: 'yellow',
          tone: 'solid',
          className: ['bg-yellow-400'],
        },
        {
          color: 'purple',
          tone: 'light',
          className: ['bg-purple-50'],
        },
        {
          color: 'purple',
          tone: 'solid',
          className: ['bg-purple-500'],
        },
        {
          color: 'gray',
          tone: 'light',
          className: ['bg-gray-50'],
        },
        {
          color: 'gray',
          tone: 'solid',
          className: ['bg-gray-200'],
        },
        {
          color: 'dark',
          tone: 'light',
          className: ['bg-gray-200'],
        },
        {
          color: 'dark',
          tone: 'solid',
          className: ['bg-gray-700'],
        },
        {
          color: 'black',
          tone: 'light',
          className: ['bg-gray-400'],
        },
        {
          color: 'black',
          tone: 'solid',
          className: ['bg-black'],
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
    <div onClick={() => onClick(color)} className={style({ color, tone })}>
      {selectedColor === color && (
        <CheckFat size={14} weight="duotone" className={iconStyle({ color })} />
      )}
    </div>
  );
};

export const ColorPicker = ({
  tone = 'solid',
  onClick,
  colors = ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
  initialValue = 'white',
}: {
  tone?: Tone;
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
          tone={tone}
        />
      ))}
    </div>
  );
};
