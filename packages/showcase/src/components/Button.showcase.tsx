import { Showcase } from '@components/Showcase';
import { buttonVariants } from '@config/Button.config';
import { FC } from 'react';
import { Button } from '@rewind-ui/core';

type ButtonShowcaseProps = {
  showcase:
    | 'variants'
    | 'click-me'
    | 'click-me-properties'
    | 'click-me-classname'
    | 'click-me-variants';
};

export const ButtonShowcase: FC<ButtonShowcaseProps> = (props: ButtonShowcaseProps) => {
  const { showcase, ...showcaseProps } = props;

  const components = {
    'click-me': <ClickMe />,
    'click-me-properties': <ClickMeProperties />,
    'click-me-classname': <ClickMeClassname />,
    'click-me-variants': <ClickMeVariants />,
    variants: <Variants />,
  };

  return (
    <Showcase {...showcaseProps}>{components[showcase]}</Showcase> || (
      <div>Error: Invalid showcase type</div>
    )
  );
};

const ClickMe: FC = () => {
  return <Button>Click me!</Button>;
};

const ClickMeProperties: FC = () => {
  return (
    <Button color="black" size="sm">
      Click me!
    </Button>
  );
};

const ClickMeClassname: FC = () => {
  return (
    <Button color="black" size="sm" className="font-semibold">
      Click me!
    </Button>
  );
};

const ClickMeVariants: FC = () => {
  return <Button variant="success">Click me!</Button>;
};

const Variants: FC = () => {
  return (
    <>
      {buttonVariants.map((variant, index) => (
        <Button variant={variant} key={index} className="capitalize">
          {variant}
        </Button>
      ))}
    </>
  );
};
