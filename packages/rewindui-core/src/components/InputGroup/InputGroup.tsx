import { Button } from '@components/Button';
import { useFormControlContext } from '@components/FormControl/FormControl.context';
import { Input } from '@components/Input';
import {
  InputGroupComponent,
  InputGroupContext,
  InputGroupProps,
} from '@components/InputGroup/InputGroup.types';
import { InputGroupText } from '@components/InputGroup/InputGroupText/InputGroupText';
import { Select } from '@components/Select';
import { Textarea } from '@components/Textarea';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { Children, cloneElement, forwardRef, ReactNode, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { InputGroupContextProvider } from './InputGroup.context';

const defaultProps: Partial<InputGroupProps> = {
  tone: 'light',
  radius: 'md',
  size: 'md',
  shadow: 'none',
};

const _InputGroup: InputGroupComponent = forwardRef(
  (props: InputGroupProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('InputGroup');
    const {
      className = '',
      tone,
      size,
      radius,
      shadow,
      type = 'text',
      ...additionalProps
    } = {
      ...useFormControlContext(),
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(theme.base({ className, radius, shadow, size }));
    }, [className, radius, shadow, size, theme]);
    const contextValue: InputGroupContext = { tone, size, radius };
    const children: ReactNode[] = [];

    Children.toArray(props.children).forEach((child: any, index: number) => {
      children.push(
        cloneElement(child, {
          ...child.props,
          'data-has-right-element': index < Children.count(props.children) - 1,
          'data-has-left-element': index > 0,
        })
      );
    });

    return (
      <InputGroupContextProvider value={contextValue}>
        <div id={id} ref={ref} className={classes} {...additionalProps}>
          {children}
        </div>
      </InputGroupContextProvider>
    );
  }
);

_InputGroup.displayName = 'InputGroup';

export const InputGroup = Object.assign(_InputGroup, {
  Input: Input,
  Textarea: Textarea,
  Select: Select,
  // Combobox: Combobox,
  Text: InputGroupText,
  Button: Button,
});
