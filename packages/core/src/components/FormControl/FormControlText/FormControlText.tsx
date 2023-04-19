import { FormControlTextProps } from '@components/FormControl';
import { useFormControlContext } from '@components/FormControl/FormControl.context';
import { FormControlTextComponent } from '@components/FormControl/FormControlText/FormControlText.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<FormControlTextProps> = {
  validation: 'none',
};

const FormControlText: FormControlTextComponent = forwardRef(
  (props: FormControlTextProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('FormControl');
    const {
      className = '',
      children,
      controlId,
      size,
      validation,
      ...additionalProps
    } = {
      ...defaultProps,
      ...useFormControlContext(),
      ...props,
    };
    const id = usePropId(props.id);
    const classes = useMemo(() => {
      return twMerge(theme.text({ className, size, validation }));
    }, [className, size, theme, validation]);

    return (
      <div id={id} ref={ref} className={classes} {...additionalProps}>
        {children}
      </div>
    );
  }
);

FormControlText.displayName = 'FormControlText';

export { FormControlText };
