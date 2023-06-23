'use client';
import {
  AvatarGroupComponent,
  AvatarGroupProps,
} from '@components/Avatar/AvatarGroup/AvatarGroup.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref } from 'react';

const AvatarGroup: AvatarGroupComponent = forwardRef(
  (props: AvatarGroupProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Avatar');
    const {
      children,
      className = '',
      ...additionalProps
    } = {
      ...props,
    };
    const id = usePropId(props.id);

    return (
      <div id={id} ref={ref} className={theme.group({ className })} {...additionalProps}>
        {children}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
