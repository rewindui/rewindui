'use client';
import { useFade } from '@animations/use-fade.hook';
import { AlertComponent, AlertIconType, AlertProps } from '@components/Alert/Alert.types';
import { ErrorIcon } from '@icons/Error';
import { InfoIcon } from '@icons/Info';
import { QuestionIcon } from '@icons/Question';
import { SuccessIcon } from '@icons/Success';
import { WarningIcon } from '@icons/Warning';
import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { usePropId } from '@utils/usePropId';
import * as React from 'react';
import { Ref, forwardRef, useMemo, useState, useRef } from 'react';
import { XMarkIcon } from '@icons/XMark';
import { twMerge } from 'tailwind-merge';
import { useMergeRefs } from '@floating-ui/react';

const defaultProps: Partial<AlertProps> = {
  accent: 'none',
  color: 'dark',
  dismissable: false,
  dismissableAnimation: true,
  radius: 'lg',
  shadow: 'none',
  shadowColor: 'none',
  size: 'sm',
  tone: 'light',
};

const icons: Record<AlertIconType, JSX.Element> = {
  error: <ErrorIcon />,
  info: <InfoIcon />,
  question: <QuestionIcon />,
  success: <SuccessIcon />,
  warning: <WarningIcon />,
};

const Alert: AlertComponent = forwardRef((props: AlertProps, ref?: Ref<HTMLDivElement>) => {
  const variantProps = useComponentVariant('Alert', props.variant) as Partial<AlertProps>;
  const theme = useComponentTheme('Alert');
  const {
    accent,
    children,
    className = '',
    color,
    dismissable,
    dismissableAnimation = false,
    icon,
    iconType,
    radius,
    shadow,
    shadowColor,
    size,
    title,
    tone,
    variant,
    ...additionalProps
  } = {
    ...defaultProps,
    ...variantProps,
    ...props,
  };
  const [visible, setVisible] = useState(true);
  const localRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs([ref || null, localRef]);

  useFade({ ref: localRef, visible, enabled: dismissableAnimation });

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        accent,
        className,
        color,
        radius,
        shadow,
        shadowColor,
        size,
        tone,
      })
    );
  }, [theme, accent, className, color, radius, shadow, shadowColor, size, tone]);

  const id = usePropId(props.id);

  return (
    <div id={id} role="alert" ref={mergedRef} className={classes} {...additionalProps}>
      {(icon || iconType) && (
        <span className={theme.iconWrapper()}>{!iconType ? icon : icons[iconType]}</span>
      )}
      <div className={theme.infoWrapper({ size })}>
        {title && <span className={theme.title({ size, color, tone })}>{title}</span>}
        {children && <span className={theme.text()}>{children}</span>}
      </div>
      {dismissable && (
        <button
          type="button"
          aria-label="Close alert"
          role="button"
          title="Close alert"
          className={theme.iconWrapper()}
          onClick={() => setVisible(false)}
        >
          <XMarkIcon className={theme.dismissIcon({ size })} />
        </button>
      )}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
