import { useHorizontalArrows } from '@hooks/use-horizontal-arrows.hook';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { Children, cloneElement, FunctionComponent, PropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

const TabList: FunctionComponent<PropsWithoutRef<any>> = (props: any) => {
  const { children, className = '', ...additionalProps } = props;
  const theme = useComponentTheme('Tabs');
  const id = usePropId(props.id);
  const refsMap: Map<string, HTMLButtonElement> = new Map();

  const items = Children.map(children, (child: any) => {
    return cloneElement(child, {
      ...child.props,
      ref: (ref: HTMLButtonElement) => refsMap.set(child.props.anchor, ref),
    });
  });

  useHorizontalArrows(refsMap);

  return (
    <div
      id={id}
      role="tablist"
      aria-orientation="horizontal"
      className={twMerge(theme.list({ className }))}
      {...additionalProps}
    >
      {items}
    </div>
  );
};

TabList.displayName = 'TabList';

export { TabList };
