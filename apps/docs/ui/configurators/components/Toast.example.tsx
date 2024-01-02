import { Button, ToastContainer, ToastProps, useToast } from '@rewind-ui/core';
import { ToastContainerProps } from '@rewind-ui/core/dist/components/Toast/ToastContainer/ToastContainer.types';
import * as React from 'react';

export const ToastCode = (props: any) => {
  const {
    closeOnClick,
    color,
    description,
    duration,
    iconType,
    max,
    pauseOnHover,
    position,
    radius,
    shadow,
    shadowColor,
    showProgress,
    title,
    tone,
  } = props;

  const defaultProps = {
    closeOnClick: false,
    duration: 3000,
    iconType: 'info',
    max: 5,
    pauseOnHover: true,
    position: 'top-right',
    radius: 'lg',
    shadow: 'none',
    shadowColor: 'none',
    showProgress: true,
    size: 'sm',
    title: '',
    tone: 'light',
  };

  const attributes = [
    position !== defaultProps.position ? `position="${position}"` : null,
    max !== defaultProps.max ? `max={${max}}` : null,
  ].filter(Boolean);

  if (attributes.length) {
    attributes.unshift(null);
  }

  return `import { ToastContainer, useToast } from '@rewind-ui/core';

function App() {
  const toast = useToast();
  
  return (
    <>
      <Button onClick={() => {
        toast.add({
          id: 'unique-id',
          closeOnClick: ${closeOnClick},
          color: '${color}',
          description: '${description}',
          duration: ${duration},
          iconType: '${iconType}',
          pauseOnHover: ${pauseOnHover},
          radius: '${radius}',
          shadow: '${shadow}',
          shadowColor: '${shadowColor}',
          showProgress: ${showProgress},
          title: '${title}',
          tone: '${tone}',
        });
      }}>Click me!</Button>
      <ToastContainer${attributes.join(' ')} />
    </>
  );
}
`.trim();
};

export const ToastExample = (
  props: ToastProps & ToastContainerProps & { withActions: boolean }
) => {
  const toast = useToast();

  return (
    <>
      <div className="flex space-x-2">
        <Button
          onClick={() => {
            const id = Number(new Date().getTime()).toString();
            toast.add({
              actions: props.withActions
                ? [
                    {
                      label: 'Cancel',
                      onClick: () => {
                        toast.remove(id);
                      },
                      primary: false,
                    },
                    {
                      label: 'Delete',
                      onClick: () => {
                        toast.remove(id);
                      },
                      primary: true,
                    },
                  ]
                : [],
              closeOnClick: props.closeOnClick,
              color: props.color,
              description: props.description,
              duration: props.duration,
              iconType: props.iconType,
              pauseOnHover: props.pauseOnHover,
              radius: props.radius,
              shadow: props.shadow,
              shadowColor: props.shadowColor,
              showProgress: props.showProgress,
              title: props.title,
              tone: props.tone,
            });
          }}
        >
          Click me!
        </Button>
        <Button variant="secondary" onClick={() => toast.clear()}>
          Clear
        </Button>
      </div>

      <ToastContainer position={props.position} max={props.max} />
    </>
  );
};
