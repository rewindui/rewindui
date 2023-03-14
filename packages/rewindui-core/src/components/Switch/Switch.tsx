import { SwitchComponent, SwitchProps } from '@components/Switch/Switch.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: SwitchProps = {
  color: 'blue',
  radius: 'full',
  size: 'md',
  withRing: true,
};

export const Switch: SwitchComponent = forwardRef(
  (props: SwitchProps, ref?: Ref<HTMLButtonElement>) => {
    const theme = useComponentTheme('Switch');
    const {
      className = '',
      checked = false,
      color,
      disabled,
      radius,
      size,
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
    const [isOn, setIsOn] = useState(checked);
    const circleRef = useRef<HTMLSpanElement>(null);
    const mounted = useRef(true);

    const state = isOn ? 'active' : 'inactive';

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          className,
          color,
          radius,
          size,
          state,
          withRing,
        })
      );
    }, [theme, color, size, radius, state, withRing, className]);

    useLayoutEffect(() => {
      const element = circleRef.current;

      if (!element) {
        return;
      }

      if (mounted.current) {
        element.style.justifySelf = isOn ? 'end' : 'start';
        element.style.transform = '';
        mounted.current = false;
        return;
      }

      const activeAnimations = element.getAnimations();

      if (activeAnimations.length > 0) {
        activeAnimations.forEach((activeAnimation: Animation) => {
          activeAnimation.cancel();
        });
      }

      const parent = element.parentElement;

      if (!parent) {
        return;
      }

      const distance =
        parent.scrollWidth - element.offsetWidth - (parent.scrollHeight - element.offsetHeight);

      const startX = isOn ? `translateX(0)` : `translateX(${distance}px)`;
      const endX = isOn ? `translateX(${distance}px)` : `translateX(0)`;

      element.style.justifySelf = '';
      const animation: Animation = element.animate(
        {
          transform: [startX, endX],
        },
        {
          duration: 50,
        }
      );

      animation.onfinish = () => {
        element.style.transform = '';
        element.style.justifySelf = isOn ? 'end' : 'start';
      };
    }, [isOn]);

    return (
      <div
        onClick={() => {
          if (disabled) {
            return;
          }
          setIsOn(!isOn);
        }}
        className="flex items-center"
        {...wrapperProps}
      >
        <button
          ref={ref}
          className={classes}
          role="switch"
          aria-checked={isOn}
          disabled={disabled}
          {...additionalProps}
        >
          <span ref={circleRef} className={theme.inner({ radius, size, state })}></span>
        </button>
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

Switch.displayName = 'Switch';
