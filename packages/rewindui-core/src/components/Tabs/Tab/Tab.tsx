import { TabComponent, TabProps, TabStateType } from '@components/Tabs/Tab/Tab.types';
import { useTabsContext } from '@components/Tabs/Tabs.context';
import { useComponentTheme } from '@theme/theme.context';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

export const Tab: TabComponent = forwardRef<HTMLButtonElement, TabProps>(
  (props: TabProps, ref?: Ref<HTMLButtonElement>) => {
    const theme = useComponentTheme('Tab');
    const { anchor, children, className, ...additionalProps } = props;
    const id = `tab-${anchor}`;
    const panelId = `tabpanel-${anchor}`;

    const { activeTabAnchor, color, fullWidth, radius, setActiveTabAnchor, size, tone } = {
      ...useTabsContext(),
    };
    const handleClick = () => {
      setActiveTabAnchor(anchor);
    };
    const selected = anchor === activeTabAnchor;
    const state: TabStateType = selected ? 'active' : 'inactive';

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          className,
          color,
          fullWidth,
          radius,
          size,
          state,
          tone,
        })
      );
    }, [className, color, fullWidth, radius, size, state, theme, tone]);

    return (
      <button
        id={id}
        ref={ref}
        type="button"
        role="tab"
        aria-selected={selected}
        aria-controls={panelId}
        onClick={handleClick}
        className={classes}
        {...additionalProps}
      >
        {children}
      </button>
    );
  }
);

Tab.displayName = 'Tab';
