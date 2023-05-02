import { Tab } from '@components/Tabs/Tab';
import { TabContent } from '@components/Tabs/TabContent';
import { TabList } from '@components/Tabs/TabList';
import { TabsComponent, TabsContext, TabsProps } from '@components/Tabs/Tabs.types';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useState } from 'react';
import { TabsContextProvider } from './Tabs.context';

const defaultProps: Partial<TabsProps> = {
  color: 'blue',
  method: 'hide',
  radius: 'none',
  size: 'md',
  tone: 'line',
};

const TabsRoot: TabsComponent = forwardRef<HTMLDivElement, TabsProps>(
  (props: TabsProps, ref?: Ref<HTMLDivElement>) => {
    const {
      children,
      color,
      defaultTab,
      fullWidth,
      method,
      radius,
      size,
      tone,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const theme = useComponentTheme('Tabs');
    const id = usePropId(props.id);
    const [activeTabAnchor, setActiveTabAnchor] = useState(defaultTab);
    const contextValue: TabsContext = {
      activeTabAnchor,
      color,
      fullWidth,
      method,
      radius,
      setActiveTabAnchor,
      size,
      tone,
    };

    return (
      <TabsContextProvider value={contextValue}>
        <div id={id} ref={ref} className={theme.wrapper({ fullWidth })} {...additionalProps}>
          {children}
        </div>
      </TabsContextProvider>
    );
  }
);

TabsRoot.displayName = 'Tabs';

const Tabs = Object.assign(TabsRoot, {
  Tab: Tab,
  List: TabList,
  Content: TabContent,
});

export default Tabs;
