import { Accordion, AccordionProps } from '@rewind-ui/core';
import * as React from 'react';
import { HandWaving, Sparkle, Info, Lifebuoy } from '@phosphor-icons/react';

const accordionItems = [
  {
    anchor: 'item-1',
    header: 'What is rewind-ui?',
    icon: <HandWaving weight="duotone" />,
    body: "Rewind-ui is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project. We've designed our components to be flexible and easy to use, so you can focus on what matters most: building great user experiences.",
  },
  {
    anchor: 'item-2',
    header: 'How do I get started?',
    icon: <Sparkle weight="duotone" />,
    body: "Getting started with rewind-ui is easy! Simply install the package using your package manager of choice, and you're ready to go. We've also included a set of Storybook stories to help you get familiar with our components and how to use them.",
  },
  {
    anchor: 'item-3',
    header: 'How do I contribute?',
    icon: <Lifebuoy weight="duotone" />,
    body: "We're always looking for new contributors to help us improve rewind-ui! If you'd like to contribute, please check out our contribution guidelines to get started. We're looking forward to working with you!",
  },
  {
    anchor: 'item-4',
    header: 'Where can I see a demo?',
    icon: <Info weight="duotone" />,
    body: "If you'd like to learn more about rewind-ui, please visit our website. You can also follow us on Twitter to stay up to date with the latest news and updates.",
  },
];

export const AccordionCode = (props: any) => {
  const { size, color, tone, shadow, shadowColor, radius, activeColor, bordered, withRing } = props;

  const defaultProps: Partial<AccordionProps> = {
    activeColor: 'purple',
    bordered: true,
    color: 'white',
    radius: 'md',
    shadow: 'none',
    shadowColor: 'none',
    size: 'md',
    tone: 'solid',
    withRing: true,
  };

  const attributes = [
    activeColor !== defaultProps.activeColor ? `activeColor="${activeColor}"` : null,
    bordered !== defaultProps.bordered ? `bordered={${bordered}}` : null,
    color !== defaultProps.color ? `color="${color}"` : null,
    radius !== defaultProps.radius ? `radius="${radius}"` : null,
    shadow !== defaultProps.shadow ? `shadow="${shadow}"` : null,
    shadowColor !== defaultProps.shadowColor ? `shadowColor="${shadowColor}"` : null,
    size !== defaultProps.size ? `size="${size}"` : null,
    tone !== defaultProps.tone ? `tone="${tone}"` : null,
    withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
  ];

  return `import { Accordion } from '@rewind-ui/core';

function App() {
  return (
    <Accordion defaultItem="item-1" ${attributes.filter(Boolean).join(' ')}>
      <Accordion.Item anchor="item-1">
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Body>Body</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item anchor="item-2">
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Body>Body</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item anchor="item-3">
        <Accordion.Header>Header</Accordion.Header>
        <Accordion.Body>Body</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
`.trim();
};

export const AccordionExample = (props: AccordionProps) => {
  return (
    <Accordion {...props} defaultItem={'item-1'}>
      {accordionItems.map((item) => (
        <Accordion.Item key={item.anchor} anchor={item.anchor}>
          <Accordion.Header>
            <div className="flex items-center space-x-2">
              {item.icon}
              <span>{item.header}</span>
            </div>
          </Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
