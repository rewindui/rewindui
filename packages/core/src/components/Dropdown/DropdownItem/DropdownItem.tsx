import { useDropdownContext } from '@components/Dropdown/Dropdown.context';
import {
  DropdownItemComponent,
  DropdownItemProps,
} from '@components/Dropdown/DropdownItem/DropdownItem.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { Ref, forwardRef, useRef, useMemo } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { twMerge } from 'tailwind-merge';

const DropdownItem: DropdownItemComponent = forwardRef(
  (props: DropdownItemProps, ref?: Ref<HTMLButtonElement>) => {
    const theme = useComponentTheme('Dropdown');
    const { tone, itemColor, mode, radius, size, setOpen } = {
      ...props,
      ...useDropdownContext(),
    };
    const {
      children,
      className = '',
      color = itemColor,
      tabIndex,
      onClick,
      ...additionalProps
    } = {
      ...props,
    };
    const localRef = useRef<HTMLButtonElement>(null);
    const mergedRef = useMergeRefs([ref || null, localRef]);

    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(
        theme.item({
          tone,
          className,
          color,
          mode,
          radius,
          size,
        })
      );
    }, [tone, className, color, mode, radius, size, theme]);

    const handleMouseEnter = () => {
      if (localRef.current) {
        localRef.current.focus();
      }
    };
    const handleMouseLeave = () => {
      if (localRef.current) {
        localRef.current.blur();
      }
    };

    return (
      <button
        id={id}
        ref={mergedRef}
        tabIndex={tabIndex}
        className={classes}
        role={'menuitem'}
        onClick={(event) => {
          setOpen(false);

          if (onClick) {
            onClick(event);
          }
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...additionalProps}
      >
        {children}
      </button>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

export { DropdownItem };
