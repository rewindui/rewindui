import { AlertComponent, AlertProps } from '@components/Alert/Alert.types';
import { Fader } from '@components/Fader';
import { useComponentTheme } from '@theme/theme.context';
import { useComponentVariant } from '@theme/variant.context';
import { usePropId } from '@utils/usePropId';
import { Ref, forwardRef, useMemo, useState } from 'react';
import { XMarkIcon } from '@icons/XMark';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<AlertProps> = {
  color: 'blue',
  dismissable: false,
  radius: 'md',
  shadow: 'none',
  shadowColor: 'none',
  size: 'md',
  tone: 'solid',
};

const Alert: AlertComponent = forwardRef((props: AlertProps, ref?: Ref<HTMLDivElement>) => {
  const variant = useComponentVariant('Alert', props.variant) as Partial<AlertProps>;
  const theme = useComponentTheme('Alert');
  const {
    accent,
    children,
    className = '',
    color,
    dismissable,
    dismissableAnimation = false,
    icon,
    radius,
    shadow,
    shadowColor,
    size,
    title,
    tone,
    ...additionalProps
  } = {
    ...defaultProps,
    ...variant,
    ...props,
  };
  const [visible, setVisible] = useState(true);

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

  const items = (
    <div id={id} role="alert" ref={ref} className={classes} {...additionalProps}>
      {icon && <span className={theme.iconWrapper()}>{icon}</span>}
      <div className={theme.infoWrapper({ size })}>
        {title && <span className={theme.title({ size })}>{title}</span>}
        {children && <span className={theme.text()}>{children}</span>}
      </div>
      {dismissable && (
        <button className={theme.iconWrapper()} onClick={() => setVisible(false)}>
          <XMarkIcon className={theme.dismissIcon({ size })} />
        </button>
      )}
    </div>
  );

  return (
    <Fader ref={ref} isActive={dismissableAnimation} isShown={visible} method="unmount">
      {items}
    </Fader>
  );
});

Alert.displayName = 'Alert';

export { Alert };
