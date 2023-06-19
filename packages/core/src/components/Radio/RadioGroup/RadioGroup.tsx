'use client';
import { RadioGroupContextProvider } from '@components/Radio/RadioGroup.context';
import {
  RadioGroupComponent,
  RadioGroupContext,
  RadioGroupProps,
} from '@components/Radio/RadioGroup/RadioGroup.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef, useEffect, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<RadioGroupProps> = {
  orientation: 'horizontal',
};

const RadioGroup: RadioGroupComponent = forwardRef(
  (props: RadioGroupProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const theme = useComponentTheme('Radio');
    const { children, className, initialValue, name, onChange, orientation, ...additionalProps } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const [value, setValue] = useState<string | undefined>(initialValue);
    const contextValue: RadioGroupContext = {
      initialValue,
      name,
      setValue,
      value,
    };

    const classes = useMemo(() => {
      return twMerge(
        theme.group({
          className,
          orientation,
        })
      );
    }, [theme, orientation, className]);

    useEffect(() => {
      if (onChange) {
        onChange(value);
      }
    }, [value, onChange]);

    return (
      <RadioGroupContextProvider value={contextValue}>
        <div id={id} ref={ref} role="radiogroup" className={classes} {...additionalProps}>
          {children}
        </div>
      </RadioGroupContextProvider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
