import { TabsContext } from '@components/Tabs/Tabs.types';
import { createElementContext } from '@hooks/use-element-context.hook';

export const [TabsContextProvider, useTabsContext] = createElementContext<TabsContext>(
  'Tabs compound components cannot be rendered outside the Tabs component'
);
