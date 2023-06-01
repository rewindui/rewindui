import { Tabs, Radio, Card } from '@rewind-ui/core';
import * as React from 'react';
import { HandWaving, Lifebuoy } from '@phosphor-icons/react';

export type TabsShowcaseProps = {
  showcase:
    | 'tones-line'
    | 'tones-pill'
    | 'sizes'
    | 'radiuses'
    | 'full-width'
    | 'methods-hide'
    | 'methods-unmount'
    | 'examples-content-in-cards'
    | 'examples-tabs-in-card';
};

const tabs = [
  {
    anchor: 'tab-1',
    label: 'Tab A',
    content: 'Content A',
  },
  {
    anchor: 'tab-2',
    label: 'Tab B',
    content: 'Content B',
  },
  {
    anchor: 'tab-3',
    label: 'Tab C',
    content: 'Content C',
  },
];

const extendedTabs = [
  {
    anchor: 'tab-1',
    label: 'Introduction',
    icon: <HandWaving weight="duotone" className="text-purple-500" />,
    content:
      'Rewind UI is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project.',
  },
  {
    anchor: 'tab-2',
    label: 'Contribute',
    icon: <Lifebuoy weight="duotone" className="text-purple-500" />,
    content:
      "We're always looking for new contributors to help us improve Rewind UI! If you'd like to contribute, please check out our contribution guidelines to get started.",
  },
];

export const TabsShowcase = (props: TabsShowcaseProps) => {
  const { showcase } = props;

  const components = {
    'tones-line': <TonesLine />,
    'tones-pill': <TonesPill />,
    sizes: <Sizes />,
    radiuses: <Radiuses />,
    'full-width': <FullWidth />,
    'methods-hide': <MethodsHide />,
    'methods-unmount': <MethodsUnmount />,
    'examples-content-in-cards': <ExamplesContentInCards />,
    'examples-tabs-in-card': <ExamplesTabsInCard />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const TonesLine = () => {
  return (
    <>
      <Tabs tone="line" color="purple" defaultTab="tab-1">
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

      <Tabs tone="line" color="red" defaultTab="tab-1">
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

      <Tabs tone="line" color="green" defaultTab="tab-1">
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

      <Tabs tone="line" color="yellow" defaultTab="tab-1">
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

      <Tabs tone="line" color="purple" defaultTab="tab-1">
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

      <Tabs tone="line" color="gray" defaultTab="tab-1">
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

      <Tabs tone="line" color="dark" defaultTab="tab-1">
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

      <Tabs tone="line" color="black" defaultTab="tab-1">
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
    </>
  );
};

const TonesPill = () => {
  return (
    <>
      <Tabs tone="pill" color="purple" defaultTab="tab-1">
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

      <Tabs tone="pill" color="red" defaultTab="tab-1">
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

      <Tabs tone="pill" color="green" defaultTab="tab-1">
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

      <Tabs tone="pill" color="yellow" defaultTab="tab-1">
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

      <Tabs tone="pill" color="purple" defaultTab="tab-1">
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

      <Tabs tone="pill" color="gray" defaultTab="tab-1">
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

      <Tabs tone="pill" color="dark" defaultTab="tab-1">
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

      <Tabs tone="pill" color="black" defaultTab="tab-1">
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
    </>
  );
};

const Sizes = () => {
  return (
    <>
      <Tabs size="sm" defaultTab="tab-1">
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
      <Tabs size="md" defaultTab="tab-1">
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
      <Tabs size="lg" defaultTab="tab-1">
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
    </>
  );
};

const Radiuses = () => {
  return (
    <>
      <Tabs tone="pill" radius="none" defaultTab="tab-1">
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
      <Tabs tone="pill" radius="sm" defaultTab="tab-1">
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
      <Tabs tone="pill" radius="base" defaultTab="tab-1">
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
      <Tabs tone="pill" radius="md" defaultTab="tab-1">
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
      <Tabs tone="pill" radius="lg" defaultTab="tab-1">
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
      <Tabs tone="pill" radius="full" defaultTab="tab-1">
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
    </>
  );
};

const FullWidth = () => {
  return (
    <>
      <Tabs fullWidth={true} defaultTab="tab-1">
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
    </>
  );
};

const MethodsHide = () => {
  return (
    <>
      <Tabs method="hide" defaultTab="tab-1">
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab key={`tab-${tab.anchor}`} anchor={tab.anchor}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {tabs.map((tab) => (
          <Tabs.Content
            key={`content-${tab.anchor}`}
            className="flex flex-col space-y-1"
            anchor={tab.anchor}
          >
            <span>Change the following values and switch tabs back and forth</span>
            <Radio name={`hide-${tab.anchor}`} label="Option A" defaultChecked />
            <Radio name={`hide-${tab.anchor}`} label="Option B" />
            <Radio name={`hide-${tab.anchor}`} label="Option C" />
          </Tabs.Content>
        ))}
      </Tabs>
    </>
  );
};

const MethodsUnmount = () => {
  return (
    <>
      <Tabs method="unmount" defaultTab="tab-1">
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Tab key={`tab-${tab.anchor}`} anchor={tab.anchor}>
              {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {tabs.map((tab) => (
          <Tabs.Content
            key={`content-${tab.anchor}`}
            className="flex flex-col space-y-1"
            anchor={tab.anchor}
          >
            <span>Change the following values and switch tabs back and forth</span>
            <Radio name={`unmount-${tab.anchor}`} label="Option A" defaultChecked />
            <Radio name={`unmount-${tab.anchor}`} label="Option B" />
            <Radio name={`unmount-${tab.anchor}`} label="Option C" />
          </Tabs.Content>
        ))}
      </Tabs>
    </>
  );
};

const ExamplesContentInCards = () => {
  return (
    <>
      <Tabs defaultTab="tab-1">
        <Tabs.List>
          {extendedTabs.map((tab) => (
            <Tabs.Tab
              key={`tab-${tab.anchor}`}
              anchor={tab.anchor}
              className="flex items-center gap-x-2"
            >
              {tab.icon} {tab.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {extendedTabs.map((tab) => (
          <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor}>
            <Card>
              <Card.Body>{tab.content}</Card.Body>
            </Card>
          </Tabs.Content>
        ))}
      </Tabs>
    </>
  );
};

const ExamplesTabsInCard = () => {
  return (
    <>
      <Card shadow="base">
        <Card.Body className="p-0">
          <Tabs tone="line" fullWidth={true} defaultTab="tab-1">
            <Tabs.List className="m-0 p-0 bg-gray-100/50">
              {extendedTabs.map((tab) => (
                <Tabs.Tab
                  key={`tab-${tab.anchor}`}
                  anchor={tab.anchor}
                  className="py-3.5 flex items-center gap-x-2"
                >
                  {tab.icon} {tab.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {extendedTabs.map((tab) => (
              <Tabs.Content key={`content-${tab.anchor}`} anchor={tab.anchor} className="p-5">
                {tab.content}
              </Tabs.Content>
            ))}
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
};
