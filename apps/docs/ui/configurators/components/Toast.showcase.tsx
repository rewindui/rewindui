import {
  Button,
  Toast,
  ToastColor,
  ToastRadius,
  ToastShadow,
  ToastVariant,
  useToast,
} from '@rewind-ui/core';
import { useEffect } from 'react';
import * as React from 'react';

export type ToastShowcaseProps = {
  showcase:
    | 'tones-solid'
    | 'tones-light'
    | 'radiuses'
    | 'shadows'
    | 'variants'
    | 'title'
    | 'description'
    | 'actions'
    | 'duration'
    | 'clear'
    | 'remove'
    | 'update'
    | 'shadow-colors'
    | 'close-on-click'
    | 'pause-on-hover'
    | 'icon-types'
    | 'show-progress';
};

const colors: ToastColor[] = [
  'white',
  'blue',
  'red',
  'green',
  'yellow',
  'purple',
  'gray',
  'dark',
  'black',
];
const radiuses: ToastRadius[] = ['none', 'sm', 'base', 'md', 'lg'];
const shadows: ToastShadow[] = ['none', 'sm', 'base', 'md', 'lg', 'xl'];
const variants: ToastVariant[] = ['primary', 'secondary', 'danger', 'success', 'warning', 'info'];

export const ToastShowcase = (props: ToastShowcaseProps) => {
  const { showcase } = props;

  const components = {
    'tones-solid': <TonesSolid />,
    'tones-light': <TonesLight />,
    radiuses: <Radiuses />,
    shadows: <Shadows />,
    variants: <Variants />,
    title: <Title />,
    description: <Description />,
    actions: <Actions />,
    duration: <Duration />,
    clear: <Clear />,
    remove: <Remove />,
    update: <Update />,
    'shadow-colors': <ShadowsColors />,
    'icon-types': <IconTypes />,
    'close-on-click': <CloseOnClick />,
    'pause-on-hover': <PauseOnHover />,
    'show-progress': <ShowProgress />,
  };

  return components[showcase] || <div>Error: Invalid showcase type</div>;
};

const Variants = () => {
  return (
    <>
      {variants.map((variant) => (
        <Toast
          key={variant}
          title={variant.charAt(0).toUpperCase() + variant.slice(1)}
          variant={variant}
          description="This is just a description."
          halted={true}
        />
      ))}
    </>
  );
};

const TonesSolid = () => {
  return (
    <>
      {colors.map((color) => (
        <Toast
          key={`solid-${color}`}
          title={color.charAt(0).toUpperCase() + color.slice(1)}
          color={color}
          description={`This is a ${color} solid toast.`}
          halted={true}
        />
      ))}
    </>
  );
};

const TonesLight = () => {
  return (
    <>
      {colors.map((color) => (
        <Toast
          key={`light-${color}`}
          title={color.charAt(0).toUpperCase() + color.slice(1)}
          color={color}
          description={`This is a ${color} light toast.`}
          tone="light"
          halted={true}
        />
      ))}
    </>
  );
};

const Radiuses = () => {
  return (
    <>
      {radiuses.map((radius) => (
        <Toast
          key={`radius-${radius}`}
          radius={radius}
          title={`Radius: ${radius}`}
          description="This is just a description."
          halted={true}
        />
      ))}
    </>
  );
};

const Shadows = () => {
  return (
    <>
      {shadows.map((shadow) => (
        <Toast
          key={`shadow-${shadow}`}
          shadow={shadow}
          title={`Shadow: ${shadow}`}
          description="This is just a description."
          halted={true}
        />
      ))}
    </>
  );
};

const ShadowsColors = () => {
  return (
    <>
      {colors.map((color) => (
        <Toast
          key={`shadow-color-${color}`}
          shadow="xl"
          color={color}
          shadowColor={color}
          title={`Shadow color: ${color}`}
          description="This is just a description."
          halted={true}
        />
      ))}
    </>
  );
};

const IconTypes = () => {
  return (
    <>
      <Toast
        iconType="info"
        color="purple"
        title="Info"
        description="This is just a description."
        halted={true}
      />
      <Toast
        iconType="success"
        color="green"
        title="Success"
        description="This is just a description."
        halted={true}
      />
      <Toast
        iconType="warning"
        color="yellow"
        title="Warning"
        description="This is just a description."
        halted={true}
      />
      <Toast
        iconType="error"
        color="red"
        title="Error"
        description="This is just a description."
        halted={true}
      />
      <Toast
        iconType="question"
        color="blue"
        title="Question"
        description="This is just a description."
        halted={true}
      />
    </>
  );
};

const Title = () => {
  return (
    <>
      <Toast iconType="info" title="This is a fancy title" halted={true} />
    </>
  );
};

const Description = () => {
  return (
    <>
      <Toast iconType="info" description="This is a fancy description" halted={true} />
    </>
  );
};

const Actions = () => {
  return (
    <>
      <Toast
        actions={[
          {
            label: 'Cancel',
            onClick: () => {
              console.log('Clicked cancel');
            },
            primary: false,
          },
          {
            label: 'Delete',
            onClick: () => {
              console.log('Clicked delete');
            },
            primary: true,
          },
        ]}
        variant="info"
        title="Are you sure?"
        description="Do you really want to delete the selected item?"
        halted={true}
      />
    </>
  );
};

const CloseOnClick = () => {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() => {
          toast.add({
            id: 'close-on-click',
            closeOnClick: true,
            description: 'Close me by clicking on me!',
          });
        }}
      >
        Enabled
      </Button>

      <Button
        onClick={() => {
          toast.add({
            id: 'dont-close-on-click',
            closeOnClick: false,
            description: 'Close me if you can!',
          });
        }}
      >
        Disabled
      </Button>
    </>
  );
};

const Duration = () => {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() => {
          toast.add({
            id: 'duration-quick',
            duration: 1000,
            title: 'Read me quickly!',
            description: 'Duration is set to 1000ms',
          });
        }}
      >
        Quick
      </Button>

      <Button
        onClick={() => {
          toast.add({
            id: 'duration-slow',
            duration: 5000,
            title: 'Take your time!',
            description: 'Duration is set to 5000ms',
          });
        }}
      >
        Slow
      </Button>
    </>
  );
};

const PauseOnHover = () => {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() => {
          toast.add({
            id: 'pause-on-hover',
            pauseOnHover: true,
            description: 'Hover me to pause!',
          });
        }}
      >
        Enabled
      </Button>

      <Button
        onClick={() => {
          toast.add({
            id: 'dont-pause-on-hover',
            pauseOnHover: false,
            description: 'Sorry, you cannot pause me!',
          });
        }}
      >
        Disabled
      </Button>
    </>
  );
};

const ShowProgress = () => {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() => {
          toast.add({
            id: 'show-progress',
            showProgress: true,
            description: 'You can see my progress!',
          });
        }}
      >
        Enabled
      </Button>

      <Button
        onClick={() => {
          toast.add({
            id: 'dont-show-progress',
            showProgress: false,
            description: 'You cannot see my progress!',
          });
        }}
      >
        Disabled
      </Button>
    </>
  );
};

const Clear = () => {
  const [counter, setCounter] = React.useState(0);
  const toast = useToast();

  useEffect(() => {
    if (!counter) {
      return;
    }

    toast.add({
      description: 'I am a random toast!',
      id: counter.toString(),
    });
  }, [counter]);

  return (
    <>
      <Button onClick={() => setCounter((prev) => prev + 1)}>Add</Button>
      <Button onClick={() => toast.clear()}>Clear</Button>
    </>
  );
};

const Remove = () => {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() =>
          toast.add({
            description: 'I am a toast!',
            id: 'remove-toast-id',
          })
        }
      >
        Add
      </Button>
      <Button onClick={() => toast.remove('remove-toast-id')}>Remove</Button>
    </>
  );
};

const Update = () => {
  const toast = useToast();

  return (
    <>
      <Button
        onClick={() =>
          toast.add({
            description: 'I am a toast!',
            id: 'update-toast-id',
          })
        }
      >
        Add
      </Button>
      <Button
        onClick={() =>
          toast.update({
            description: 'I am am updated toast!',
            color: 'green',
            id: 'update-toast-id',
          })
        }
      >
        Update
      </Button>
    </>
  );
};
