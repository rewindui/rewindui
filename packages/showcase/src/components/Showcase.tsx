import { FC, PropsWithChildren } from 'react';
import * as React from 'react';

export type ShowcaseProps = {
  direction?: 'row' | 'column';
  justify?: 'evenly' | 'start';
} & PropsWithChildren;

export const Showcase: FC<ShowcaseProps> = ({
  direction = 'row',
  justify = 'evenly',
  children,
}: ShowcaseProps) => {
  const flexDirection = direction === 'column' ? 'column' : 'row';
  const justifyContent = justify === 'start' ? 'flex-start' : 'space-evenly';

  return (
    <div className="grow mt-6 flex flex-col divide-y divide-neutral-200 rounded-md border border-r-2 border-b-2 border-neutral-200">
      <div
        style={{ flexDirection, justifyContent }}
        className="bg-grid bg-neutral-50 rounded flex flex-wrap justify-center items-center gap-x-2 gap-y-6 p-5 overflow-auto"
      >
        {children}
      </div>
    </div>
  );
};
