import { useComboboxContext } from '@components/Combobox/Combobox.context';
import {
  ComboboxGroupComponent,
  ComboboxGroupProps,
} from '@components/Combobox/ComboboxGroup/ComboboxGroup.types';
import { useMergeRefs } from '@floating-ui/react';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import React, {
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';

const defaultProps: Partial<ComboboxGroupProps> = {
  weight: 'normal',
};

const ComboboxGroup: ComboboxGroupComponent = forwardRef(
  (props: ComboboxGroupProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const theme = useComponentTheme('Combobox');
    const { children, className, heading, weight, ...additionalProps } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);
    const localRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs([localRef, ref || null]);
    const [hidden, setHidden] = useState<boolean>(false);
    const { size, state, mode } = useComboboxContext();
    const [items, setItems] = useState<any>(null);
    const [classes, setClasses] = useState<string>('');
    const [hiddenChildrenCount, setHiddenChildrenCount] = useState<number>(0);

    useEffect(() => {
      setHiddenChildrenCount(0);

      setItems(
        Children.map(children, (child: any) => {
          return cloneElement(child, {
            ...child.props,
            ref: (ref: HTMLButtonElement) => {
              if (ref && ref?.getAttribute('aria-hidden') === 'true') {
                setHiddenChildrenCount((prev) => prev + 1);
              }
            },
          });
        })
      );
    }, [state.search]);

    useEffect(() => {
      setHidden(hiddenChildrenCount === Children.count(children));
    }, [children, hiddenChildrenCount]);

    useEffect(() => {
      setClasses(theme.group({ className, hidden, size, mode, weight }));
    }, [className, hidden, mode, size, theme, weight]);

    return (
      <>
        <div id={id} ref={mergedRef} aria-hidden={hidden} className={classes} {...additionalProps}>
          {heading}
        </div>
        {items}
      </>
    );
  }
);

ComboboxGroup.displayName = 'ComboboxGroup';

export { ComboboxGroup };
