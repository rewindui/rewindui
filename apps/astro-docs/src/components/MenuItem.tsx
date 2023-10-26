import type { FC, ReactNode } from 'react'
import {
  Lifebuoy,
  Palette,
  PersonArmsSpread,
  RoadHorizon,
  Rocket,
  SlidersHorizontal
} from '@phosphor-icons/react'
import { cva } from 'class-variance-authority';

const iconStyles = cva(['border', 'rounded', 'p-1'], {
  variants: {
    active: {
      true: [
        'border-purple-500',
        'text-purple-500',
        'bg-purple-50',
        'shadow-sm',
        'shadow-purple-500/50'
      ],
      false: [
        'border-gray-300',
        'text-gray-400',
        'group-hover:text-purple-300',
        'group-hover:border-purple-300',
        'group-hover:bg-purple-50'
      ]
    }
  }
})

const menuItemStyles = cva(['rounded-l', 'flex', 'relative'], {
  variants: {
    active: {
      true: [],
      false: ['text-neutral-500', 'hover:text-purple-500', 'hover:border-purple-200', 'border-transparent']
    },
    type: {
      page: [],
      component: []
    }
  },
  compoundVariants: [
    {
      type: 'component',
      active: true,
      className: ['text-purple-600', 'border-purple-600']
    },
    {
      type: 'page',
      active: true,
      className: ['text-purple-600', 'border-purple-600']
    },
  ]
});

const icons: Map<string, ReactNode> = new Map([
  ['introduction', <Rocket size={18} weight="duotone" />],
  ['theming', <Palette size={18} weight="duotone" />],
  ['variants', <SlidersHorizontal size={18} weight="duotone" />],
  ['accessibility', <PersonArmsSpread size={18} weight="duotone" />],
  ['roadmap', <RoadHorizon size={18} weight="duotone" />],
  ['contributing', <Lifebuoy size={18} weight="duotone" />]
]);

type MenuItemProps = {
  active: boolean,
  slug: string,
  title: string,
  type: 'page' | 'component',
  href: string
};

export const MenuItem: FC<MenuItemProps> = ({ active, slug, title, type, href }: MenuItemProps) => {
  return (
    <li className={menuItemStyles({ active, type: type })}>
      <a className="w-full py-2 flex items-center gap-2" href={href}>
        {type === 'page' ? <div className="border rounded-md p-1">{icons.get(slug)}</div> : null} {title}
      </a>
      {active && <span className="w-[2px] h-full bg-purple-500 right-0 absolute"></span>}
    </li>
  )
}
