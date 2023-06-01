import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

export const MenuItem = (props: {
  title: string;
  path: string;
  icon?: ReactNode;
  wip?: boolean;
  newItem?: boolean;
}) => {
  const { title, path, icon, wip = false, newItem = false } = props;
  const pathname = usePathname();
  const active = pathname === path;
  const hasIcon = !!icon;
  const styles = cva(
    ['group', 'w-full', 'py-1.5', 'flex', 'space-x-2', 'items-center', 'text-sm'],
    {
      variants: {
        active: {
          true: ['text-purple-600', 'font-medium'],
          false: ['text-gray-600'],
        },
        hasIcon: {
          true: ['pr-4'],
          false: ['border-l-2', 'px-4'],
        },
        wip: {
          true: ['cursor-not-allowed', 'opacity-50'],
          false: [],
        },
      },
      compoundVariants: [
        {
          active: true,
          hasIcon: false,
          className: ['border-l-purple-500', 'bg-purple-50'],
        },
        {
          active: false,
          hasIcon: false,
          className: ['hover:border-l-purple-300', 'hover:bg-purple-50/25'],
        },
      ],
    }
  );

  const iconStyles = cva(['border', 'rounded', 'p-1'], {
    variants: {
      active: {
        true: [
          'border-purple-500',
          'text-purple-500',
          'bg-purple-50',
          'shadow-sm',
          'shadow-purple-500/50',
        ],
        false: [
          'border-gray-300',
          'text-gray-400',
          'group-hover:text-purple-300',
          'group-hover:border-purple-300',
          'group-hover:bg-purple-50',
        ],
      },
    },
  });

  const Component = wip ? 'div' : Link;

  return (
    <Component className={styles({ active, hasIcon, wip })} href={path}>
      {icon && <span className={iconStyles({ active })}>{icon}</span>}
      <span>{title}</span>
      {wip && (
        <span className="text-xs bg-yellow-50 border border-dashed border-yellow-100 rounded py-[0.15rem] px-[0.3rem] text-yellow-500">
          WIP
        </span>
      )}
      {newItem && (
        <span className="text-xs bg-purple-50/75 border border-dashed border-purple-100 rounded py-[0.15rem] px-[0.3rem] text-purple-600">
          NEW
        </span>
      )}
    </Component>
  );
};
