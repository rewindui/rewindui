import { useDropdownContext } from '@components/Dropdown/Dropdown.context';
import {
  DropdownTriggerComponent,
  DropdownTriggerProps,
} from '@components/Dropdown/DropdownTrigger/DropdownTrigger.types';
import { Children, cloneElement, ForwardedRef, forwardRef, ReactElement } from 'react';
import { mergeRefs } from 'react-merge-refs';

const DropdownTrigger: DropdownTriggerComponent = forwardRef<HTMLDivElement, DropdownTriggerProps>(
  (props: DropdownTriggerProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const { children } = props;
    const { reference, getReferenceProps } = useDropdownContext();
    const child = Children.only(children) as ReactElement;
    const childRef = mergeRefs([reference, ref || null]);

    const triggerElement = cloneElement(child, {
      ref: childRef,
      ...child.props,
      ...getReferenceProps,
    });

    return <>{triggerElement}</>;
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

export { DropdownTrigger };
