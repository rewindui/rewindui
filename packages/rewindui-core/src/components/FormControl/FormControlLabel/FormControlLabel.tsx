import { FormControlLabelProps } from '@components/FormControl';
import { useFormControlContext } from '@components/FormControl/FormControl.context';
import { FormControlLabelComponent } from '@components/FormControl/FormControlLabel/FormControlLabel.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<FormControlLabelProps> = {
  required: false,
};

const FormControlLabel: FormControlLabelComponent = forwardRef(
  (props: FormControlLabelProps, ref?: Ref<HTMLLabelElement>) => {
    const theme = useComponentTheme('FormControl');
    const {
      className = '',
      children,
      formControlId,
      required,
      size,
      ...additionalProps
    } = {
      ...defaultProps,
      ...useFormControlContext(),
      ...props,
    };
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(theme.label({ className, required, size }));
    }, [className, required, size, theme]);

    return (
      <label id={id} ref={ref} htmlFor={formControlId} className={classes} {...additionalProps}>
        {children}
      </label>
    );
  }
);

FormControlLabel.displayName = 'FormControlLabel';

export { FormControlLabel };
