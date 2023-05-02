import { useFormControlContext } from '@components/FormControl/FormControl.context';
import { useInputGroupContext } from '@components/InputGroup/InputGroup.context';
import { TextareaComponent, TextareaProps } from '@components/Textarea/Textarea.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<TextareaProps> = {
  tone: 'light',
  radius: 'md',
  size: 'md',
  validation: 'none',
  shadow: 'none',
  withRing: true,
  disabled: false,
};

const Textarea: TextareaComponent = forwardRef(
  (props: TextareaProps, ref?: Ref<HTMLTextAreaElement>) => {
    const theme = useComponentTheme('Textarea');
    const {
      className = '',
      controlId,
      disabled,
      tone,
      size,
      radius,
      validation,
      shadow,
      withRing,
      type = 'text',
      ...additionalProps
    } = {
      ...defaultProps,
      ...useFormControlContext(),
      ...useInputGroupContext(),
      ...props,
    };
    const propId = usePropId(props.id);
    const id = controlId || propId;

    const classes = useMemo(() => {
      return twMerge(
        theme({
          className,
          disabled,
          radius,
          shadow,
          size,
          tone,
          validation,
          withRing,
        })
      );
    }, [className, disabled, radius, shadow, size, theme, tone, validation, withRing]);

    return (
      <textarea id={id} ref={ref} className={classes} {...additionalProps} disabled={disabled} />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
