import { AlertProps, Alert } from '@rewind-ui/core';
import * as React from 'react';

export const AlertCode = (props: any) => {
  const {
    accent,
    color,
    dismissable,
    dismissableAnimation,
    radius,
    shadow,
    shadowColor,
    size,
    title,
    tone,
  } = props;

  const defaultProps = {
    accent: 'none',
    color: 'dark',
    dismissable: false,
    dismissableAnimation: true,
    radius: 'md',
    shadow: 'none',
    shadowColor: 'none',
    size: 'sm',
    title: '',
    tone: 'light',
  };

  const attributes = [
    accent !== defaultProps.accent ? `accent="${accent}"` : null,
    color !== defaultProps.color ? `color="${color}"` : null,
    dismissable !== defaultProps.dismissable ? `dismissable={${dismissable}}` : null,
    dismissableAnimation !== defaultProps.dismissableAnimation
      ? `dismissableAnimation={${dismissableAnimation}}`
      : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    shadowColor !== defaultProps.shadowColor ? `shadowColor="${shadowColor}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    title !== defaultProps.title ? `title="${title}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Alert } from '@rewind-ui/core';

function App() {
  return (
    <Alert${attributes.join(' ')}>
      Our website uses cookies to improve your experience. By continuing to use our website, you agree to our use of cookies.
    </Alert>
  );
}
`.trim();
};

export const AlertExample = (props: AlertProps) => {
  return (
    <Alert {...props}>
      Our website uses cookies to improve your experience. By continuing to use our website, you
      agree to our use of cookies.
    </Alert>
  );
};
