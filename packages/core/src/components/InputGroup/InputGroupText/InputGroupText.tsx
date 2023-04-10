import { useInputGroupContext } from '@components/InputGroup/InputGroup.context';
import {
  InputGroupTextComponent,
  InputGroupTextProps,
} from '@components/InputGroup/InputGroupText/InputGroupText.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const InputGroupText: InputGroupTextComponent = forwardRef(
  (props: InputGroupTextProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('InputGroup');
    const {
      className = '',
      children,
      tone,
      size,
      radius,
      ...additionalProps
    } = {
      ...useInputGroupContext(),
      ...props,
    };
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(theme.text({ className, tone, radius, size }));
    }, [className, radius, size, theme, tone]);

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

InputGroupText.displayName = 'InputGroupText';

export { InputGroupText };
