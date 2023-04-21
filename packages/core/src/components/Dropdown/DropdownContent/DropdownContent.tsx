import { DropdownArrowPlacement } from '@components/Dropdown';
import { useDropdownContext } from '@components/Dropdown/Dropdown.context';
import {
  DropdownContentComponent,
  DropdownContentProps,
} from '@components/Dropdown/DropdownContent/DropdownContent.types';
import { DropdownItem } from '@components/Dropdown/DropdownItem/DropdownItem';
import { FloatingPortal } from '@floating-ui/react';
import { arrowSideDictionary } from '@helpers/arrow-side.dictionary';
import { useVerticalArrows } from '@hooks/use-vertical-arrows.hook';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { Children, cloneElement, ForwardedRef, forwardRef, useMemo, useRef } from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { twMerge } from 'tailwind-merge';

const DropdownContent: DropdownContentComponent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (props: DropdownContentProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const theme = useComponentTheme('Dropdown');
    const {
      children,
      className = '',
      ...additionalProps
    } = {
      ...props,
    };
    const id = usePropId(props.id);
    const refs: HTMLButtonElement[] = [];
    const localRef = useRef<HTMLDivElement>();
    const {
      x,
      y,
      context,
      open,
      floating,
      strategy,
      color,
      size,
      mode,
      radius,
      shadow,
      withinPortal,
      arrowRef,
      getFloatingProps,
    } = useDropdownContext();
    const mergedRef = useMergeRefs([floating, localRef]);

    const arrowX = context.middlewareData.arrow?.x || 0;
    const arrowY = context.middlewareData.arrow?.y || 0;
    const arrowSide = arrowSideDictionary({
      side: context.placement,
    }) as DropdownArrowPlacement;

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          arrowSide,
          className,
          color,
          mode,
          open,
          radius,
          shadow,
          size,
        })
      );
    }, [arrowSide, className, color, mode, open, radius, shadow, size, theme]);

    const arrowElement = (
      <span
        ref={arrowRef}
        className={theme.arrow({ arrowSide, color })}
        style={{
          ...(arrowSide !== 'right' && { left: `${arrowX}px` }),
          ...(arrowSide !== 'top' && arrowSide !== 'left' && { bottom: `${arrowY}px` }),
          ...(arrowSide === 'left' && { top: `${arrowY}px` }),
          ...(arrowSide === 'right' && { top: `${arrowY}px` }),
          [arrowSide]: '-5px',
        }}
      />
    );
    const items = Children.map(children, (child: any, index: number) => {
      if (child.type.displayName !== DropdownItem.displayName) {
        return child;
      }

      return cloneElement(child, {
        ...child.props,
        tabIndex: index + 1,
        ref: (ref: HTMLButtonElement) => {
          if (!ref?.disabled) {
            refs.push(ref);
          }
        },
      });
    });
    const dropdownElement = (
      <div
        id={id}
        ref={mergedRef}
        className={classes}
        role={'menu'}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
        }}
        {...getFloatingProps}
        {...additionalProps}
      >
        {arrowElement}
        {items}
      </div>
    );

    useVerticalArrows(refs, open);

    return (
      <div ref={ref} className={className}>
        {withinPortal ? <FloatingPortal>{dropdownElement}</FloatingPortal> : dropdownElement}
      </div>
    );
  }
);

DropdownContent.displayName = 'DropdownContent';

export { DropdownContent };
