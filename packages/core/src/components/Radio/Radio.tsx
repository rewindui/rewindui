import { RadioComponent, RadioProps } from '@components/Radio';
import { useRadioGroupContext } from '@components/Radio/RadioGroup.context';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { ChangeEvent, forwardRef, Ref, useMemo } from 'react';
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
      defaultChecked,
      description,
      descriptionClassName = '',
      disabled,
      error,
      errorClassName = '',
      label,
      labelClassName = '',
      name,
      setValue,
      initialValue,
      value,
      radius,
      size,
      tone,
      withRing,
      ...additionalProps
    } = {
      ...defaultProps,
      ...useRadioGroupContext(),
      ...props,
    };
    const id = usePropId(props.id);
    const validation = !!error ? 'invalid' : 'valid';

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (setValue) {
        setValue(event.target.value);
      }
    };

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
          aria-labelledby={`${id}-label`}
          className={classes}
          disabled={disabled}
          onChange={handleChange}
          name={name}
          defaultChecked={!!initialValue ? initialValue === value : defaultChecked}
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

Radio.displayName = 'Radio';

export default Radio;
