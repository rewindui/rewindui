import { Combobox } from '@components/Combobox';
import {
  FormControlComponent,
  FormControlContext,
  FormControlProps,
} from '@components/FormControl/FormControl.types';
import { FormControlLabel } from '@components/FormControl/FormControlLabel/FormControlLabel';
import { FormControlText } from '@components/FormControl/FormControlText/FormControlText';
import { Input } from '@components/Input';
import { InputGroup } from '@components/InputGroup';
import { Select } from '@components/Select';
import { Textarea } from '@components/Textarea';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { FormControlContextProvider } from './FormControl.context';

const defaultProps: Partial<FormControlProps> = {
  size: 'md',
  validation: 'none',
};

const _FormControl: FormControlComponent = forwardRef(
  (props: FormControlProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('FormControl');
    const {
      className = '',
      children,
      size,
      validation,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const controlId = `control-${id}`;
    const contextValue: FormControlContext = { controlId, size, validation };
    const classes = useMemo(() => {
      return twMerge(theme.base({ className }));
    }, [className, theme]);

    return (
      <FormControlContextProvider value={contextValue}>
        <div id={id} ref={ref} className={classes} {...additionalProps}>
          {children}
        </div>
      </FormControlContextProvider>
    );
  }
);

_FormControl.displayName = 'FormControl';

const FormControl = Object.assign(_FormControl, {
  Label: FormControlLabel,
  Text: FormControlText,
  InputGroup: InputGroup,
  Input: Input,
  Textarea: Textarea,
  Select: Select,
  Combobox: Combobox,
});

export default FormControl;
