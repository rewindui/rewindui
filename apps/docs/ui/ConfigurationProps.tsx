'use client';
import { CustomSandpack } from '@/ui/configurators/CustomSandpack';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { Alert, AlertColor } from '@rewind-ui/core';

export const ConfigurationProps = () => {
  const [alertCode, setAlertCode] = React.useState(
    '<Alert>The color of the default Alert is purple.</Alert>'
  );
  const steps: {
    id: number;
    title: string;
    description: string;
    color: AlertColor;
  }[] = [
    {
      id: 1,
      title: 'This is the default Alert',
      description: 'The color of the default Alert is purple.',
      color: 'purple',
    },
    {
      id: 2,
      title: 'This is a blue Alert',
      description: 'The color prop is now set to "blue".',
      color: 'blue',
    },
    {
      id: 3,
      title: 'This is a red Alert',
      description: 'The color prop is now set to "red".',
      color: 'red',
    },
    {
      id: 4,
      title: 'This is a green Alert',
      description: 'The color prop is now set to "green".',
      color: 'green',
    },
  ];
  const [activeStep, setActiveStep] = useState(steps[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStep((prevState) => {
        const nextIndex = prevState.id === steps.length ? 0 : prevState.id;
        return steps[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    setAlertCode(
      `<Alert color="${activeStep.color}" title="${activeStep.title}">
  ${activeStep.description}
</Alert>`
    );
  }, [activeStep]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center text-purple-600 text-2xl font-black justify-center border-4 border-purple-50 shadow shadow-purple-200 rounded-full bg-gradient-to-bl from-purple-100 to-purple-200 p-2 w-16 h-16 mb-4">
        1.
      </div>

      <div className="flex gap-6">
        <div className="w-2/3">
          <h4 className="font-semibold text-xl text-slate-700 mb-2">
            Customize through parameters
          </h4>

          <p className="text-lg text-slate-600">
            All components are highly customizable through parameters. The end styles of each
            component are a result of the given parameters or their combinations.
          </p>
        </div>
        <div className="w-1/3">
          <div className="flex flex-col gap-6">
            <Alert
              className="transition-colors"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`mt-2 fill-${activeStep.color}-500 transition-colors`}
                  height="1.5em"
                  viewBox="0 0 384 512"
                >
                  <path d="M80 320c8.8 0 16 7.2 16 16c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16z" />
                  <path
                    className="opacity-50"
                    d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"
                  />
                </svg>
              }
              color={activeStep.color}
              title={activeStep.title}
              size="md"
            >
              {activeStep.description}
            </Alert>

            <CustomSandpack showLineNumbers={false}>{alertCode}</CustomSandpack>
          </div>
        </div>
      </div>
    </div>
  );
};
