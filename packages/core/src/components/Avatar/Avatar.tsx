'use client';
import { AvatarComponent, AvatarProps } from '@components/Avatar/Avatar.types';
import AvatarGroup from '@components/Avatar/AvatarGroup/AvatarGroup';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<AvatarProps> = {
  color: 'gray',
  outlined: true,
  radius: 'full',
  shadow: 'none',
  shadowColor: 'none',
  size: 'lg',
  status: 'none',
  statusPosition: 'bottom-right',
  tone: 'solid',
};

const _Avatar: AvatarComponent = forwardRef((props: AvatarProps, ref?: Ref<HTMLDivElement>) => {
  const theme = useComponentTheme('Avatar');
  const {
    alt,
    children,
    className = '',
    color,
    initials = '',
    outlined,
    radius,
    shadow,
    shadowColor,
    size,
    src,
    status,
    statusPosition,
    tone,
    ...additionalProps
  } = {
    ...defaultProps,
    ...props,
  };
  const [errored, setErrored] = useState(false);

  const classes = useMemo(() => {
    return twMerge(
      theme.base({
        className,
        color,
        radius,
        shadow,
        shadowColor,
        size,
        tone,
        outlined,
      })
    );
  }, [theme, className, color, radius, shadow, shadowColor, size, tone, outlined]);

  const id = usePropId(props.id);

  return (
    <div id={id} ref={ref} className={classes} {...additionalProps}>
      {src && !errored && (
        <img
          onError={() => setErrored(true)}
          className={theme.image({ radius })}
          src={src}
          alt={alt || initials}
        />
      )}
      {(!src || (src && errored)) && initials}
      {status !== 'none' && (
        <span className={theme.status({ radius, status, size, position: statusPosition })}></span>
      )}
    </div>
  );
});

_Avatar.displayName = 'Avatar';

const Avatar = Object.assign(_Avatar, {
  Group: AvatarGroup,
});

export default Avatar;
