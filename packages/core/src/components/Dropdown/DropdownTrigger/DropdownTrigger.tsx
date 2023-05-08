import { useDropdownContext } from '@components/Dropdown/Dropdown.context';
import {
  DropdownTriggerComponent,
  DropdownTriggerProps,
} from '@components/Dropdown/DropdownTrigger/DropdownTrigger.types';
import { Children, cloneElement, ForwardedRef, forwardRef, ReactElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';

const DropdownTrigger: DropdownTriggerComponent = forwardRef<HTMLDivElement, DropdownTriggerProps>(
  (props: DropdownTriggerProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const { children } = props;
    const { open, reference, getReferenceProps } = useDropdownContext();
    const child = Children.only(children) as ReactElement;
    const childRef = useMergeRefs([reference, ref || null]);

    const triggerElement = cloneElement(child, {
      ref: childRef,
      ...{ 'aria-expanded': open, 'aria-pressed': true, 'aria-haspopup': true },
      ...child.props,
      ...getReferenceProps,
    });

    return <>{triggerElement}</>;
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

export { DropdownTrigger };
