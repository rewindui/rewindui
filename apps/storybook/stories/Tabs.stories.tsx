import { Card, Tabs, TabsColor, TabsProps, TabsRadius, TabsSize, TabsTone } from '@rewind-ui/core';
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnhancedView, View, ViewGroup } from '../components/View';
import { HandWaving, Sparkle, Info, Lifebuoy } from '@phosphor-icons/react';

const colors: TabsColor[] = ['blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'];
const tones: TabsTone[] = ['line', 'pill'];
const sizes: TabsSize[] = ['sm', 'md', 'lg'];
const radiuses: TabsRadius[] = ['none', 'sm', 'base', 'md', 'lg', 'full'];

const tabs = [
  {
    anchor: 'tab-1',
    label: 'Introduction',
    icon: <HandWaving weight="duotone" className="text-blue-500" />,
    content:
      "Rewind UI is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project. We've designed our components to be flexible and easy to use, so you can focus on what matters most: building great user experiences.",
  },
  {
    anchor: 'tab-2',
    label: 'Getting started',
    icon: <Sparkle weight="duotone" className="text-blue-500" />,
    content:
      "Getting started with Rewind UI is easy! Simply install the package using your package manager of choice, and you're ready to go. We've also included a set of Storybook stories to help you get familiar with our components and how to use them.",
  },
  {
    anchor: 'tab-3',
    label: 'Contribute',
    icon: <Lifebuoy weight="duotone" className="text-blue-500" />,
    content:
      "We're always looking for new contributors to help us improve Rewind UI! If you'd like to contribute, please check out our contribution guidelines to get started. We're looking forward to working with you!",
  },
  {
    anchor: 'tab-4',
    label: 'Information',
    icon: <Info weight="duotone" className="text-blue-500" />,
    content:
      "If you'd like to learn more about Rewind UI, please visit our website. You can also follow us on Twitter to stay up to date with the latest news and updates.",
  },
];

const meta: Meta = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    color: {
      options: colors,
      control: { type: 'radio' },
    },
    tone: {
      options: tones,
      control: { type: 'radio' },
    },
    size: {
      options: sizes,
      control: { type: 'radio' },
    },
    radius: {
      options: radiuses,
      control: { type: 'select' },
    },
    fullWidth: {
      options: [true, false],
      control: { type: 'boolean' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#f8fafc' },
        { name: 'dark', value: '#334155' },
      ],
    },
    controls: { expanded: true, sort: 'alpha' },
  },
};

export default meta;

const DefaultTemplate: Story<TabsProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <Tabs {...args} defaultTab="tab-1">
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab key={`tab-${tab.anchor}`} anchor={tab.anchor}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {tabs.map((tab) => (
          <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor}>
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs>
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});

const ColorTemplate: Story<TabsProps> = (args) => {
  const items = colors.map((color) => (
    <React.Fragment key={color}>
      <View prop="color" value={color}>
        {tones.map((tone) => (
          <Tabs key={tone} {...args} tone={tone} color={color} defaultTab="tab-1">
            <Tabs.List>
              {tabs.map((tab) => (
                <Tabs.Tab key={`tab-${tab.anchor}`} anchor={tab.anchor}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {tabs.map((tab) => (
              <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor}>
                {tab.content}
              </Tabs.Content>
            ))}
          </Tabs>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Colors = ColorTemplate.bind({});

const ToneTemplate: Story<TabsProps> = (args) => {
  const items = tones.map((tone) => (
    <React.Fragment key={tone}>
      <View prop="tone" value={tone}>
        {colors.map((color) => (
          <Tabs key={color} {...args} tone={tone} color={color} defaultTab="tab-1">
            <Tabs.List>
              {tabs.map((tab) => (
                <Tabs.Tab key={`tab-${tab.anchor}`} anchor={tab.anchor}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {tabs.map((tab) => (
              <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor}>
                {tab.content}
              </Tabs.Content>
            ))}
          </Tabs>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Tones = ToneTemplate.bind({});

const SizeTemplate: Story<TabsProps> = (args) => {
  const items = sizes.map((size) => (
    <React.Fragment key={size}>
      <View prop="size" value={size}>
        {tones.map((tone) => (
          <Tabs key={tone} {...args} tone={tone} size={size} defaultTab="tab-1">
            <Tabs.List>
              {tabs.map((tab) => (
                <Tabs.Tab key={`tab-${tab.anchor}`} anchor={tab.anchor}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {tabs.map((tab) => (
              <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor}>
                {tab.content}
              </Tabs.Content>
            ))}
          </Tabs>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Sizes = SizeTemplate.bind({});

const RadiusTemplate: Story<TabsProps> = (args) => {
  const items = radiuses.map((radius) => (
    <React.Fragment key={radius}>
      <View prop="radius" value={radius}>
        <Tabs {...args} tone="pill" radius={radius} defaultTab="tab-1">
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab key={`tab-${tab.anchor}`} anchor={tab.anchor}>
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {tabs.map((tab) => (
            <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor}>
              {tab.content}
            </Tabs.Content>
          ))}
        </Tabs>
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const Radiuses = RadiusTemplate.bind({});

const FullWidthTemplate: Story<TabsProps> = (args) => {
  const items = [true, false].map((fullWidth) => (
    <React.Fragment key={fullWidth ? '1' : '2'}>
      <View prop="fullWidth" value={fullWidth ? 'true' : 'false'}>
        {tones.map((tone) => (
          <Tabs key={tone} {...args} tone={tone} fullWidth={fullWidth} defaultTab="tab-1">
            <Tabs.List>
              {tabs.map((tab) => (
                <Tabs.Tab key={`tab-${tab.anchor}`} anchor={tab.anchor}>
                  {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {tabs.map((tab) => (
              <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor}>
                {tab.content}
              </Tabs.Content>
            ))}
          </Tabs>
        ))}
      </View>
    </React.Fragment>
  ));

  return <ViewGroup>{items}</ViewGroup>;
};

export const FullWidth = FullWidthTemplate.bind({});

const ExampleTemplate: Story<TabsProps> = (args) => {
  return (
    <ViewGroup>
      <EnhancedView prop="Content in Cards">
        <Tabs {...args} defaultTab="tab-1">
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab
                key={`tab-${tab.anchor}`}
                anchor={tab.anchor}
                className="flex items-center gap-x-2"
              >
                {tab.icon} {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {tabs.map((tab) => (
            <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor}>
              <Card>
                <Card.Body>{tab.content}</Card.Body>
              </Card>
            </Tabs.Content>
          ))}
        </Tabs>
      </EnhancedView>

      <EnhancedView prop="Tabs in Card">
        <Card shadow="base">
          <Card.Body className="p-0">
            <Tabs tone="line" fullWidth={true} {...args} defaultTab="tab-1">
              <Tabs.List className="m-0 p-0 bg-gray-100/50">
                {tabs.map((tab) => (
                  <Tabs.Tab
                    key={`tab-${tab.anchor}`}
                    anchor={tab.anchor}
                    className="py-3.5 flex items-center gap-x-2"
                  >
                    {tab.icon} {tab.label}
                  </Tabs.Tab>
                ))}
              </Tabs.List>

              {tabs.map((tab) => (
                <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor} className="p-5">
                  {tab.content}
                </Tabs.Content>
              ))}
            </Tabs>
          </Card.Body>
        </Card>
      </EnhancedView>
    </ViewGroup>
  );
};

export const Examples = ExampleTemplate.bind({});
