import { BadgeProps, Badge, AvatarProps, Avatar } from '@rewind-ui/core';
import * as React from 'react';

export const AvatarCode = (props: any) => {
  const {
    color,
    initials,
    outlined,
    radius,
    shadow,
    shadowColor,
    size,
    status,
    statusPosition,
    tone,
    withImage,
  } = props;

  const defaultProps = {
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

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    outlined !== defaultProps.outlined ? `outlined={${outlined}}` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    shadowColor !== defaultProps.shadowColor ? `shadowColor="${shadowColor}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    status !== defaultProps.status ? `status="${status}"` : null,
    statusPosition !== defaultProps.statusPosition ? `statusPosition="${statusPosition}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    withImage ? `src="..."` : null,
    `initials="${initials}"`,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Badge } from '@rewind-ui/core';

function App() {
  return (
    <Avatar${attributes.join(' ')} />
  );
}
`.trim();
};

export const AvatarExample = ({ withImage, ...props }: AvatarProps & { withImage?: boolean }) => {
  if (withImage) {
    return (
      <Avatar
        src="https://avatars.githubusercontent.com/u/810438?s=96&v=4"
        initials="DA"
        {...props}
      />
    );
  }

  return <Avatar initials="DA" {...props} />;
};
