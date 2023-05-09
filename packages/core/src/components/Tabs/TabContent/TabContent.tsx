import { useTabsContext } from '@components/Tabs/Tabs.context';
import { FunctionComponent, PropsWithoutRef } from 'react';

const TabContent: FunctionComponent<PropsWithoutRef<any>> = (props: any) => {
  const { activeTabAnchor, baseId, method } = useTabsContext();
  const { anchor, children, ...additionalProps } = props;
  const id = `tabpanel-${baseId}-${anchor}`;
  const tabId = `tab-${baseId}-${anchor}`;
  const isVisible = anchor === activeTabAnchor;
  const content = (
    <div
      id={id}
      style={{ display: isVisible ? 'block' : 'none' }}
      role="tabpanel"
      aria-labelledby={tabId}
      aria-hidden={!isVisible}
      {...additionalProps}
    >
      {children}
    </div>
  );

  if (method === 'unmount') {
    return isVisible ? content : <></>;
  }

  return content;
};

TabContent.displayName = 'TabContent';

export { TabContent };
