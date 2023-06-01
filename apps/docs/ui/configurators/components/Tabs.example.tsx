import { Tabs, TabsProps } from '@rewind-ui/core';
import * as React from 'react';
import { HandWaving, Lifebuoy } from '@phosphor-icons/react';

const tabs = [
  {
    anchor: 'tab-1',
    label: 'Introduction',
    icon: <HandWaving weight="duotone" className="text-blue-500" />,
    content:
      'Rewind UI is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project.',
  },
  {
    anchor: 'tab-2',
    label: 'Contribute',
    icon: <Lifebuoy weight="duotone" className="text-blue-500" />,
    content:
      "We're always looking for new contributors to help us improve Rewind UI! If you'd like to contribute, please check out our contribution guidelines to get started.",
  },
];

export const TabsCode = (props: any) => {
  const { size, color, fullWidth, tone, method, radius } = props;

  const defaultProps: Partial<TabsProps> = {
    color: 'purple',
    fullWidth: false,
    method: 'hide',
    radius: 'none',
    size: 'md',
    tone: 'line',
  };

  const attributes = [
    color !== defaultProps.color ? `color="${color}"` : null,
    method !== defaultProps.method ? `method="${method}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    fullWidth !== defaultProps.fullWidth ? `fullWidth={${fullWidth}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { Tabs } from '@rewind-ui/core';

function App() {
  return (
    <Tabs defaultTab="item-1"${attributes.join(' ')}>
      <Tabs.List>
        <Tabs.Tab anchor="tab-1">
          Tab A
        </Tabs.Tab>
        <Tabs.Tab anchor="tab-2">
          Tab B
        </Tabs.Tab>
        <Tabs.Tab anchor="tab-3">
          Tab C
        </Tabs.Tab>
      </Tabs.List>
      
      <Tabs.Content anchor="tab-1">
        Content A
      </Tabs.Content>
      <Tabs.Content anchor="tab-2">
        Content B
      </Tabs.Content>
      <Tabs.Content anchor="tab-3">
        Content C
      </Tabs.Content>
    </Tabs>
  );
}
`.trim();
};

export const TabsExample = (props: TabsProps) => {
  return (
    <Tabs {...props} defaultTab={'tab-1'}>
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
  );
};
