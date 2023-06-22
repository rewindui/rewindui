'use client';
import {
  SelectorComponent,
  SelectorContext,
  SelectorOrientation,
  SelectorProps,
  SelectorSize,
} from '@components/Selector/Selector.types';
import { SelectorTab } from '@components/Selector/SelectorTab/SelectorTab';
import { SelectorTabColor } from '@components/Selector/SelectorTab/SelectorTab.types';
import { useHorizontalArrows } from '@hooks/use-horizontal-arrows.hook';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
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
  color: 'purple',
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
    const id = usePropId(props.id);
    const [activeTabAnchor, setActiveTabAnchor] = useState(value);
    const mounted = useRef(true);
    const selectorRef = useRef<HTMLDivElement>(null);
    const observer = useRef<ResizeObserver | null>(null);
    const [selectorClasses, setSelectorClasses] = useState('');
    const colorsMap: Map<string, SelectorTabColor> = new Map();
    const wrapperClasses = useMemo(() => {
      return twMerge(
        theme.wrapper({
          className,
          fullWidth,
          orientation,
          radius,
          shadow,
          size,
        })
      );
    }, [className, fullWidth, orientation, radius, shadow, size, theme]);
    const refsMap: Map<string, HTMLButtonElement> = new Map();

    const positionSelector = (
      activeTab: HTMLButtonElement,
      selector: HTMLDivElement,
      value: string,
      size: SelectorSize | undefined = 'md',
      orientation: SelectorOrientation | undefined = 'horizontal',
      initialRun: boolean = true
    ) => {
      const boundingClientRect = activeTab.getBoundingClientRect();
      const width = boundingClientRect.width;
      const height = boundingClientRect.height;

      selector.style.setProperty('width', `${width}px`);
      selector.style.setProperty('height', `${height}px`);
      selector.style.setProperty('top', `${activeTab.offsetTop}px`);
      selector.style.setProperty('left', `${activeTab.offsetLeft}px`);

      setSelectorClasses(
        theme.base({
          color: colorsMap.get(value),
          size,
          radius,
          tone,
          initialRun,
          withAnimation,
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

      positionSelector(
        activeTab,
        selectorRef.current,
        activeTabAnchor,
        size,
        orientation,
        mounted.current
      );

      mounted.current = false;

      observer.current = new ResizeObserver((entries: ResizeObserverEntry[]) => {
        if (!selectorRef.current) {
          return;
        }

        positionSelector(
          activeTab,
          selectorRef.current,
          activeTabAnchor,
          size,
          orientation,
          mounted.current
        );
      });
      observer.current.observe(selectorRef.current);

      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    }, [
      activeTabAnchor,
      color,
      fullWidth,
      orientation,
      radius,
      size,
      tone,
      withAnimation,
      withSeparator,
    ]);

    useEffect(() => {
      if (onChange && !mounted.current) {
        onChange(activeTabAnchor);
      }
    }, [activeTabAnchor]);

    const contextValue: SelectorContext = {
      activeTabAnchor,
      color,
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
      colorsMap.set(child.props.anchor, child.props.color || color);

      return cloneElement(child, {
        ...child.props,
        ref: (ref: HTMLButtonElement) => refsMap.set(child.props.anchor, ref),
      });
    });

    useHorizontalArrows(refsMap);

    return (
      <SelectorContextProvider value={contextValue}>
        <div id={id} ref={ref} role="radiogroup" className={wrapperClasses} {...additionalProps}>
          {items}
          <div ref={selectorRef} className={selectorClasses} />
        </div>
      </SelectorContextProvider>
    );
  }
);

_Selector.displayName = 'Selector';

const Selector = Object.assign(_Selector, {
  Tab: SelectorTab,
});

export default Selector;
