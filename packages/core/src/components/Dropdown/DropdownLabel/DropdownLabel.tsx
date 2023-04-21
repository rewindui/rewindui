import { useDropdownContext } from '@components/Dropdown/Dropdown.context';
import {
  DropdownLabelComponent,
  DropdownLabelProps,
} from '@components/Dropdown/DropdownLabel/DropdownLabel.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ElementType, forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { PolymorphicComponentProp, PolymorphicRef } from '../../../types';

const defaultProps: DropdownLabelProps = {
  color: 'gray',
  size: 'sm',
  weight: 'normal',
};

const DropdownLabel: DropdownLabelComponent = forwardRef(
  <C extends ElementType = 'div'>(
    props: PolymorphicComponentProp<C, DropdownLabelProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const theme = useComponentTheme('Dropdown');
    const {
      as,
      children,
      color,
      weight,
      className = '',
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const { size, mode } = {
      ...defaultProps,
      ...useDropdownContext(),
      ...props,
    };
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(
        theme.label({
          className,
          color,
          mode,
          size,
          weight,
        })
      );
    }, [className, color, mode, size, weight, theme]);
    const Component = as || 'div';

    return (
      <Component id={id} className={classes} ref={ref} {...additionalProps}>
        {children}
      </Component>
    );
  }
);

DropdownLabel.displayName = 'DropdownLabel';

export { DropdownLabel };
