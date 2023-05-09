import { TabComponent, TabProps, TabStateType } from '@components/Tabs/Tab/Tab.types';
import { useTabsContext } from '@components/Tabs/Tabs.context';
import { useComponentTheme } from '@theme/theme.context';
import { forwardRef, Ref, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const Tab: TabComponent = forwardRef<HTMLButtonElement, TabProps>(
  (props: TabProps, ref?: Ref<HTMLButtonElement>) => {
    const theme = useComponentTheme('Tabs');
    const { anchor, children, className, ...additionalProps } = props;

    const { activeTabAnchor, baseId, color, fullWidth, radius, setActiveTabAnchor, size, tone } = {
      ...useTabsContext(),
    };
    const id = `tab-${baseId}-${anchor}`;
    const panelId = `tabpanel-${baseId}-${anchor}`;
    const handleClick = () => {
      setActiveTabAnchor(anchor);
    };
    const selected = anchor === activeTabAnchor;
    const state: TabStateType = selected ? 'active' : 'inactive';

    const classes = useMemo(() => {
      return twMerge(
        theme.tab({
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
        tabIndex={selected ? 0 : -1}
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

export { Tab };
