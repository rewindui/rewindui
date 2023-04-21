import { SelectorTabComponent, SelectorTabProps } from '@components/Selector';
import { useSelectorContext } from '@components/Selector/Selector.context';
import { useComponentTheme } from '@theme/theme.context';
import { ForwardedRef, forwardRef, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

const SelectorTab: SelectorTabComponent = forwardRef(
  (props: SelectorTabProps, ref?: ForwardedRef<HTMLButtonElement>) => {
    const theme = useComponentTheme('Selector');
    const {
      activeTabAnchor,
      anchor,
      children,
      className = '',
      color,
      disabled = false,
      label,
      orientation,
      radius,
      separator,
      setActiveTabAnchor,
      size,
      tone,
      withSeparator,
      ...additionalProps
    } = {
      ...useSelectorContext(),
      ...props,
    };
    const active = anchor === activeTabAnchor;

    const handleClick = () => {
      setActiveTabAnchor(anchor);
    };

    const classes = useMemo(() => {
      return twMerge(
        theme.tab({
          active,
          className,
          color,
          orientation,
          radius,
          size,
          tone,
        })
      );
    }, [active, className, color, orientation, radius, size, theme, tone]);

    return (
      <>
        <button
          ref={ref}
          onClick={handleClick}
          className={classes}
          disabled={disabled}
          {...additionalProps}
        >
          <span className="z-40 h-full flex items-center">{label}</span>
        </button>
        {withSeparator && (separator || <span className={theme.separator({ orientation })}></span>)}
      </>
    );
  }
);

SelectorTab.displayName = 'SelectorTab';

export { SelectorTab };
