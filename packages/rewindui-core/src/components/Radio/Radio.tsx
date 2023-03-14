import { RadioComponent, RadioProps } from '@components/Radio';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<RadioProps> = {
  color: 'blue',
  disabled: false,
  radius: 'full',
  size: 'md',
  tone: 'solid',
  withRing: true,
};

export const Radio: RadioComponent = forwardRef<HTMLInputElement, RadioProps>(
  (props: RadioProps, ref?: Ref<HTMLInputElement>) => {
    const theme = useComponentTheme('Radio');
    const {
      children,
      className = '',
      color,
      disabled,
      radius,
      size,
      tone,
      wrapperProps,
      withRing,
      label,
      labelProps,
      labelClassName = '',
      description,
      descriptionProps,
      descriptionClassName = '',
      error,
      errorProps,
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
      <div className="flex items-center" {...wrapperProps}>
        <input
          id={id}
          ref={ref}
          type="radio"
          className={classes}
          disabled={disabled}
          {...additionalProps}
        />
        <div className="flex flex-col">
          <label
            htmlFor={id}
            className={twMerge(theme.label({ size, className: labelClassName }))}
            {...labelProps}
          >
            {label}
          </label>
          {description && (
            <span
              className={twMerge(theme.description({ size, className: descriptionClassName }))}
              {...descriptionProps}
            >
              {description}
            </span>
          )}
          {error && (
            <span
              className={twMerge(theme.error({ size, className: errorClassName }))}
              {...errorProps}
            >
              {error}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Radio.displayName = 'Radio';
