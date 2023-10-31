import { Breadcrumbs, BreadcrumbsProps } from '@rewind-ui/core';
import * as React from 'react';
import { Home } from '@/ui/icons/Home';

export const BreadcrumbsCode = (props: any) => {
  const { color, size } = props;

  const defaultProps = {
    color: 'gray',
    size: 'md',
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Breadcrumbs } from '@rewind-ui/core';

function App() {
  return (
    <Breadcrumbs${attributes.join(' ')}>
      <Breadcrumbs.Item href="#"><Home /></Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Settings</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Users</Breadcrumbs.Item>
      <Breadcrumbs.Item>Update</Breadcrumbs.Item>
    </Breadcrumbs>
  );
}
`.trim();
};

export const BreadcrumbsExample = (props: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...props}>
      <Breadcrumbs.Item href="#">
        <Home />
      </Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Settings</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Users</Breadcrumbs.Item>
      <Breadcrumbs.Item>Update</Breadcrumbs.Item>
    </Breadcrumbs>
  );
};
