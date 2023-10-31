import { BreadcrumbsProps, Breadcrumbs } from '@rewind-ui/core';
import * as React from 'react';

export type BreadcrumbsShowcaseProps = {
  showcase: 'colors' | 'sizes' | 'separators';
};

export const BreadcrumbsShowcase = (props: BreadcrumbsShowcaseProps) => {
  const { showcase } = props;

  const components = {
    colors: <Colors />,
    sizes: <Sizes />,
    separators: <Separators />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const BreadcrumbsTemplate = (props: BreadcrumbsProps) => {
  return (
    <Breadcrumbs {...props}>
      <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Settings</Breadcrumbs.Item>
      <Breadcrumbs.Item href="#">Users</Breadcrumbs.Item>
      <Breadcrumbs.Item>Update</Breadcrumbs.Item>
    </Breadcrumbs>
  );
};

const Colors = () => {
  return (
    <>
      <BreadcrumbsTemplate color="gray" />
      <BreadcrumbsTemplate color="zinc" />
      <BreadcrumbsTemplate color="slate" />
    </>
  );
};

const Sizes = () => {
  return (
    <>
      <BreadcrumbsTemplate size="sm" />
      <BreadcrumbsTemplate size="base" />
      <BreadcrumbsTemplate size="md" />
      <BreadcrumbsTemplate size="lg" />
    </>
  );
};

const Separators = () => {
  return (
    <>
      <BreadcrumbsTemplate separator="-" />
      <BreadcrumbsTemplate
        separator={<span className="block w-1 h-1 rounded-full bg-gray-400" />}
      />
    </>
  );
};
