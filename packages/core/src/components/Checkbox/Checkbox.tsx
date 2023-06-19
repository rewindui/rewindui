'use client';
import { CheckboxComponent, CheckboxProps } from '@components/Checkbox';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<CheckboxProps> = {
  color: 'purple',
  disabled: false,
  radius: 'md',
  size: 'md',
  tone: 'solid',
  withRing: true,
};

const Checkbox: CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref?: Ref<HTMLInputElement>) => {
    const theme = useComponentTheme('Checkbox');
    const {
      children,
      className = '',
      color,
      disabled,
      radius,
      size,
      tone,
      withRing,
      label,
      labelClassName = '',
      description,
      descriptionClassName = '',
      error,
      errorClassName = '',
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const validation = !!error ? 'invalid' : 'valid';

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          className,
          color,
          radius,
          size,
          tone,
          validation,
          withRing,
        })
      );
    }, [theme, color, tone, size, radius, validation, withRing, className]);

    return (
      <div className="flex items-center">
        <input
          id={id}
          ref={ref}
          type="checkbox"
          aria-labelledby={`${id}-label`}
          className={classes}
          disabled={disabled}
          {...additionalProps}
        />
        <div className="grid grid-cols-1 justify-items-start">
          <label
            id={`${id}-label`}
            htmlFor={id}
            className={twMerge(theme.label({ disabled, size, className: labelClassName }))}
          >
            {label}
          </label>
          {description && (
            <span
              className={twMerge(
                theme.description({ disabled, size, className: descriptionClassName })
              )}
            >
              {description}
            </span>
          )}
          {error && (
            <span className={twMerge(theme.error({ disabled, size, className: errorClassName }))}>
              {error}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
