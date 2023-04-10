import { Image, ImageFit, ImageProps, ImageRadius } from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { View } from '../components/View';

const imgSrc =
  'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80';
const altText = 'This is an image';
const radiuses: ImageRadius[] = ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', 'full'];
const fits: ImageFit[] = ['fill', 'contain', 'cover', 'none', 'scale-down'];

const meta: Meta = {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    radius: {
      options: radiuses,
      control: { type: 'select' },
    },
    fit: {
      options: fits,
      control: { type: 'select' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true, sort: 'alpha' },
  },
};

export default meta;

const DefaultTemplate: Story<ImageProps> = (args) => {
  return (
    <View prop="Default">
      <Image
        className={'h-48 w-full rounded-b-none'}
        wrapperClassName={'rounded-lg overflow-hidden w-56 sm:w-96 mx-auto bg-white shadow'}
        src={imgSrc}
        alt={altText}
        caption="This is a nice mountain"
        {...args}
      />
    </View>
  );
};

export const Default = DefaultTemplate.bind({});
