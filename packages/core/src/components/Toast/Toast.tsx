'use client';
import { ToastComponent, ToastIconType, ToastProps } from '@components/Toast/Toast.types';
import { useToast } from '@components/Toast/use-toast.hook';
import { ErrorIcon } from '@icons/Error';
import { InfoIcon } from '@icons/Info';
import { QuestionIcon } from '@icons/Question';
import { SuccessIcon } from '@icons/Success';
import { WarningIcon } from '@icons/Warning';
import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { usePropId } from '@utils/usePropId';
import * as React from 'react';
import { forwardRef, Ref, useEffect, useMemo, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<ToastProps> = {
  closeOnClick: true,
  color: 'blue',
  pauseOnHover: true,
  radius: 'lg',
  shadow: 'base',
  shadowColor: 'gray',
  showProgress: true,
  tone: 'solid',
};

const icons: Record<ToastIconType, JSX.Element> = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  question: <QuestionIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
};

const Toast: ToastComponent = forwardRef<HTMLDivElement, ToastProps>(
  (props: ToastProps, ref?: Ref<HTMLDivElement>) => {
    const variantProps = useComponentVariant('Toast', props.variant) as Partial<ToastProps>;
    const theme = useComponentTheme('Toast');
    const {
      actions = [],
      className = '',
      closeOnClick,
      color,
      description = '',
      duration = 3000,
      halted = false,
      iconType,
      pauseOnHover,
      radius,
      shadow,
      shadowColor,
      showProgress,
      title = '',
      tone,
      variant,
      ...additionalProps
    } = {
      ...defaultProps,
      ...variantProps,
      ...props,
    };
    const [paused, setPaused] = useState<boolean>(halted);
    const [counter, setCounter] = useState<number>(halted ? 1000 : 0);
    const toast = useToast();
    const id = usePropId(props.id);
    const animationRef = useRef<number | null>(null);
    const previousTimestampRef = useRef<number | null>(null);
    const hasTitle = !!title;

    const classes = useMemo(() => {
      return twMerge(theme.toast({ className, color, tone, radius, shadow, shadowColor }));
    }, [className, color, tone, radius, shadow, shadowColor, theme]);

    const handleOnClick = () => {
      if (closeOnClick) {
        toast.remove(id);
      }
    };

    const handleProgress = (timestamp: number) => {
      if (!previousTimestampRef.current) {
        previousTimestampRef.current = timestamp;
      }

      const deltaTime = timestamp - (previousTimestampRef.current || 0);

      if (deltaTime >= 50) {
        setCounter((prev) => prev + 50);
        previousTimestampRef.current = timestamp;
      }

      animationRef.current = requestAnimationFrame(handleProgress);
    };

    useEffect(() => {
      if (!paused) {
        animationRef.current = requestAnimationFrame(handleProgress);
      }

      if (!pauseOnHover) {
        return;
      }

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }

        if (previousTimestampRef.current) {
          cancelAnimationFrame(previousTimestampRef.current);
        }
      };
    }, [paused]);

    useEffect(() => {
      if (duration && counter >= duration) {
        toast.remove(id);
      }
    }, [counter]);

    return (
      <div
        id={id}
        ref={ref}
        role="alert"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className={classes}
        {...additionalProps}
      >
        {duration > 0 && showProgress && (
          <div className={theme.progress({ color, tone })}>
            <div
              className={theme.progressInner({ color, tone })}
              style={{
                width: (counter * 100) / duration + '%',
                transitionDuration: '50ms',
              }}
            />
          </div>
        )}

        <div className={theme.contentWrapper({ closeOnClick })} onClick={handleOnClick}>
          {iconType && icons[iconType]}
          <div className={theme.content()}>
            {title && <h4 className={theme.title()}>{title}</h4>}
            {description && <p className={theme.description({ hasTitle })}>{description}</p>}
          </div>
        </div>

        {actions.length > 0 && (
          <div className={theme.actionsWrapper({ tone, color })}>
            {actions.map((action, index) => (
              <button
                key={`action-${id}-${index}`}
                className={theme.action({ primary: action.primary, tone, color })}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

export default Toast;
