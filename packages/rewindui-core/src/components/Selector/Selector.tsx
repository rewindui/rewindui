import {
  SelectorColor,
  SelectorComponent,
  SelectorContext,
  SelectorProps,
} from '@components/Selector/Selector.types';
import { SelectorTab } from '@components/Selector/SelectorTab/SelectorTab';
import { useComponentTheme } from '@theme/theme.context';
import React, {
  Children,
  cloneElement,
  forwardRef,
  Ref,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { SelectorContextProvider } from './Selector.context';

const defaultProps: Partial<SelectorProps> = {
  fullWidth: false,
  orientation: 'horizontal',
  radius: 'md',
  shadow: 'base',
  size: 'md',
  tone: 'solid',
  withAnimation: true,
  withSeparator: true,
};

const _Selector: SelectorComponent = forwardRef(
  (props: SelectorProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Selector');
    const {
      children,
      className = '',
      color,
      fullWidth,
      onChange,
      orientation,
      radius,
      separator,
      shadow,
      size,
      tone,
      value,
      withAnimation,
      withSeparator,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const [activeTabAnchor, setActiveTabAnchor] = useState(value);
    const mounted = useRef(true);
    const selectorRef = useRef<HTMLDivElement>(null);
    const [selectorClasses, setSelectorClasses] = useState('');
    const colorsMap: Map<string, SelectorColor> = new Map();
    const wrapperClasses = useMemo(() => {
      return twMerge(
        theme.wrapper({
          className,
          fullWidth,
          orientation,
          radius,
          shadow,
        })
      );
    }, [className, fullWidth, orientation, radius, shadow, theme]);
    const refsMap: Map<string, HTMLButtonElement> = new Map();

    const positionSelector = (
      activeTab: HTMLButtonElement,
      selector: HTMLDivElement,
      value: string,
      initialRun: boolean = true
    ) => {
      const boundingClientRect = activeTab.getBoundingClientRect();
      const width = boundingClientRect.width;
      const x = activeTab.offsetLeft - 4;
      const y = activeTab.offsetTop - 4;

      selector.style.setProperty('width', `${width}px`);
      selector.style.setProperty('transform', `translate(${x}px, ${y}px)`);
      selector.style.setProperty(
        'transition-duration',
        withAnimation && !initialRun ? '150ms' : '0ms'
      );

      setSelectorClasses(
        theme.base({
          color: colorsMap.get(value),
          size,
          radius,
          tone,
        })
      );
    };

    useEffect(() => {
      if (!activeTabAnchor) {
        return;
      }

      const activeTab = refsMap.get(activeTabAnchor);

      if (!activeTab) {
        return;
      }

      if (!selectorRef.current) {
        return;
      }

      positionSelector(activeTab, selectorRef.current, activeTabAnchor, mounted.current);

      mounted.current = false;
    }, [activeTabAnchor, fullWidth, orientation, size, tone, withAnimation, withSeparator]);

    useEffect(() => {
      if (onChange && !mounted.current) {
        onChange(activeTabAnchor);
      }
    }, [activeTabAnchor]);

    const contextValue: SelectorContext = {
      activeTabAnchor,
      orientation,
      radius,
      separator,
      setActiveTabAnchor,
      shadow,
      size,
      tone,
      withSeparator,
    };

    const items = Children.map(children, (child: any) => {
      colorsMap.set(child.props.anchor, child.props.color);

      return cloneElement(child, {
        ...child.props,
        ref: (ref: HTMLButtonElement) => refsMap.set(child.props.anchor, ref),
      });
    });

    return (
      <SelectorContextProvider value={contextValue}>
        <div ref={ref} className={wrapperClasses} {...additionalProps}>
          {items}
          <div ref={selectorRef} className={selectorClasses}></div>
        </div>
      </SelectorContextProvider>
    );
  }
);

_Selector.displayName = 'Selector';

export const Selector = Object.assign(_Selector, {
  Tab: SelectorTab,
});
