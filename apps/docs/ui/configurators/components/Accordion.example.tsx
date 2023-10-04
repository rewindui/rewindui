import { Accordion, AccordionProps } from '@idb-dab/ui-core';
import * as React from 'react';

const accordionItems = [
  {
    anchor: 'item-1',
    header: 'What is Rewind-UI?',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
        <path d="M256 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM192 248c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h24V272H216c-13.3 0-24-10.7-24-24z" />
        <path
          className="opacity-25"
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        />
      </svg>
    ),
    body: "Rewind-UI is a React component library that provides a set of accessible, reusable, and customizable components to help you build your next project. We've designed our components to be flexible and easy to use, so you can focus on what matters most: building great user experiences.",
  },
  {
    anchor: 'item-2',
    header: 'How do I get started?',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
        <path d="M223.7 391.9c-4-56-49.1-100.6-105.3-103.8c21.4-47.9 58.4-126.6 88.8-171.5C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-44.7 30.3-123.1 66.2-171.6 87.2zM424 128a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
        <path
          className="opacity-25"
          d="M118.5 288H24c-8.7 0-16.7-4.7-20.9-12.2s-4.1-16.8 .4-24.2l52.8-86.9C69.3 143.2 92.6 130 117.8 130h80.8c-28.5 45.8-60.7 114.5-80.1 158zM382 313.4v80.8c0 25.2-13.1 48.5-34.6 61.5l-86.9 52.8c-7.4 4.5-16.7 4.7-24.2 .4s-12.2-12.2-12.2-20.9l0-96.2c43.9-19.1 112.4-50.3 158-78.4zM166.5 470C132.3 504.3 66 511 28.3 511.9c-16 .4-28.6-12.2-28.2-28.2C1 446 7.7 379.7 42 345.5c34.4-34.4 90.1-34.4 124.5 0s34.4 90.1 0 124.5zm-46.7-36.4c11.4-11.4 11.4-30 0-41.4s-30-11.4-41.4 0c-10.1 10.1-13 28.5-13.7 41.3c-.5 8 5.9 14.3 13.9 13.9c12.8-.7 31.2-3.7 41.3-13.7z"
        />
      </svg>
    ),
    body: "Getting started with Rewind-UI is easy! Simply install the package using your package manager of choice, and you're ready to go. We've also included a set of Storybook stories to help you get familiar with our components and how to use them.",
  },
  {
    anchor: 'item-3',
    header: 'How do I contribute?',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
        <path d="M57.4 57.4c-12.5 12.5-12.5 32.8 0 45.3l112 112c9.5-19.8 25.5-35.8 45.3-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm112 240l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c-19.8-9.5-35.8-25.5-45.3-45.3zm128 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-112-112c-9.5 19.8-25.5 35.8-45.3 45.3zm45.3-128l112-112c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-112 112c19.8 9.5 35.8 25.5 45.3 45.3z" />
        <path
          className="opacity-25"
          d="M214.7 169.5c12.5-6 26.5-9.5 41.3-9.5s28.8 3.5 41.3 9.5c-.1 .1 .1-.1 0 0L412.8 53.9C369.5 20.3 315.2 0 256 0S142.5 20.3 99.2 53.9L214.7 169.5c.1 .1-.1-.1 0 0zM169.5 297.3c-6-12.5-9.5-26.5-9.5-41.3s3.5-28.8 9.5-41.3c-.1-.1 .1 .1 0 0L53.9 99.2C20.3 142.5 0 196.8 0 256s20.3 113.5 53.9 156.8L169.5 297.3c.1-.1-.1 .1 0 0zM458.1 99.2L342.5 214.7c-.1 .1 .1-.1 0 0c6 12.5 9.5 26.5 9.5 41.3s-3.5 28.8-9.5 41.3c-.1-.1 .1 .1 0 0L458.1 412.8C491.7 369.5 512 315.2 512 256s-20.3-113.5-53.9-156.8zM297.3 342.5c-12.5 6-26.5 9.5-41.3 9.5s-28.8-3.5-41.3-9.5c-.1 .1 .1-.1 0 0L99.2 458.1C142.5 491.7 196.8 512 256 512s113.5-20.3 156.8-53.9L297.3 342.5c.1 .1-.1-.1 0 0z"
        />
      </svg>
    ),
    body: "We're always looking for new contributors to help us improve Rewind-UI! If you'd like to contribute, please check out our contribution guidelines to get started. We're looking forward to working with you!",
  },
  {
    anchor: 'item-4',
    header: 'Where can I see a demo?',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 512">
        <path d="M512 96H128V352H512V96zM281 193l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 159l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
        <path
          className="opacity-25"
          d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
        />
      </svg>
    ),
    body: "If you'd like to learn more about Rewind-UI, please visit our website. You can also follow us on Twitter to stay up to date with the latest news and updates.",
  },
];

export const AccordionCode = (props: any) => {
  const { size, color, tone, shadow, shadowColor, radius, activeColor, bordered, withRing } = props;

  const defaultProps: Partial<AccordionProps> = {
    activeColor: 'dark',
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

  return `import { Accordion } from '@idb-dab/ui-core';

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
              <div className="flex items-center w-4 h-4">{item.icon}</div>
              <span className="font-medium">{item.header}</span>
            </div>
          </Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
