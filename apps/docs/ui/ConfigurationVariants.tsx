'use client';
import { CustomSandpack } from '@/ui/configurators/CustomSandpack';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { Alert, AlertVariant } from '@idb-dab/ui-core';

export const ConfigurationVariants = () => {
  const [alertCode, setAlertCode] = React.useState(
    '<Alert>The color of the default Alert is purple.</Alert>'
  );
  const steps: {
    id: number;
    title: string;
    description: string;
    variant: AlertVariant;
  }[] = [
    {
      id: 1,
      title: 'This is a danger Alert',
      description: 'The variant prop is now set to "danger".',
      variant: 'danger',
    },
    {
      id: 2,
      title: 'This is a success Alert',
      description: 'The variant prop is now set to "success".',
      variant: 'success',
    },
    {
      id: 3,
      title: 'This is a warning Alert',
      description: 'The variant prop is now set to "warning".',
      variant: 'warning',
    },
    {
      id: 4,
      title: 'This is an info Alert',
      description: 'The variant prop is now set to "info".',
      variant: 'info',
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
      `<Alert variant="${activeStep.variant}" title="${activeStep.title}">
  ${activeStep.description}
</Alert>`
    );
  }, [activeStep]);

  return (
    <div className="flex flex-col">
      <div className="flex ml-auto items-center text-purple-600 text-2xl font-black justify-center border-4 border-purple-50 shadow shadow-purple-200 rounded-full bg-gradient-to-bl from-purple-100 to-purple-200 p-2 w-16 h-16 mb-4">
        2.
      </div>

      <div className="flex gap-6">
        <div className="w-1/3">
          <div className="flex flex-col gap-6">
            <Alert
              className="transition-colors"
              variant={activeStep.variant}
              title={activeStep.title}
              size="md"
            >
              {activeStep.description}
            </Alert>

            <CustomSandpack showLineNumbers={false}>{alertCode}</CustomSandpack>
          </div>
        </div>

        <div className="w-2/3">
          <h4 className="font-semibold text-xl text-slate-700 mb-2">Customize through Variants</h4>

          <p className="text-lg text-slate-600">
            All components are highly customizable through parameters. The end styles of each
            component are a result of the given parameters or their combinations.
          </p>
        </div>
      </div>
    </div>
  );
};
