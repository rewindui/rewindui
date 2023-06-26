import { useHorizontalArrows } from '@hooks/use-horizontal-arrows.hook';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { FunctionComponent, PropsWithoutRef, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const TabList: FunctionComponent<PropsWithoutRef<any>> = (props: any) => {
  const { children, className = '', ...additionalProps } = props;
  const ref = useRef<HTMLDivElement>(null);
  const theme = useComponentTheme('Tabs');
  const id = usePropId(props.id);

  useHorizontalArrows(ref);

  return (
    <div
      id={id}
      ref={ref}
      role="tablist"
      aria-orientation="horizontal"
      className={twMerge(theme.list({ className }))}
      {...additionalProps}
    >
      {children}
    </div>
  );
};

TabList.displayName = 'TabList';

export { TabList };
