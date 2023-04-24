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

const Radio: RadioComponent = forwardRef<HTMLInputElement, RadioProps>(
  (props: RadioProps, ref?: Ref<HTMLInputElement>) => {
    const theme = useComponentTheme('Radio');
    const {
      children,
      className = '',
      color,
      description,
      descriptionClassName = '',
      disabled,
      error,
      errorClassName = '',
      label,
      labelClassName = '',
      radius,
      size,
      tone,
      withRing,
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
          type="radio"
          className={classes}
          disabled={disabled}
          {...additionalProps}
        />
        <div className="grid grid-cols-1 justify-items-start">
          <label
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

Radio.displayName = 'Radio';

export { Radio };
