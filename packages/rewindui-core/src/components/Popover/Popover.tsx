import { useInputGroupContext } from '@components/InputGroup/InputGroup.context';
import { PopoverComponent, PopoverContext, PopoverProps } from '@components/Popover/Popover.types';
import { PopoverContent } from '@components/Popover/PopoverContent/PopoverContent';
import { PopoverTrigger } from '@components/Popover/PopoverTrigger/PopoverTrigger';
import { usePopover } from '@components/Popover/use-popover.hook';
import { usePropId } from '@utils/usePropId';
import { ForwardedRef, forwardRef } from 'react';
import { PopoverContextProvider } from './Popover.context';

const defaultProps: Partial<PopoverProps> = {
  color: 'white',
  initiallyOpen: false,
  offset: 8,
  placement: 'top',
  radius: 'md',
  shadow: 'base',
  size: 'md',
  withinPortal: true,
};

const _Popover: PopoverComponent = forwardRef<HTMLDivElement, PopoverProps>(
  (props: PopoverProps, ref?: ForwardedRef<HTMLDivElement>) => {
    const {
      className = '',
      color,
      children,
      size,
      radius,
      placement,
      shadow,
      initiallyOpen,
      withinPortal,
      offset,
      ...additionalProps
    } = {
      ...defaultProps,
      ...useInputGroupContext(),
      ...props,
    };
    const id = usePropId(props.id);
    const {
      x,
      y,
      reference,
      floating,
      strategy,
      context,
      open,
      arrowRef,
      getFloatingProps,
      getReferenceProps,
    } = usePopover({
      placement,
      initiallyOpen,
      offset,
    });

    const contextValue: PopoverContext = {
      x,
      y,
      reference,
      floating,
      strategy,
      context,
      getFloatingProps,
      getReferenceProps,
      open,
      color,
      size,
      radius,
      shadow,
      withinPortal,
      arrowRef,
    };

    return (
      <PopoverContextProvider value={contextValue}>
        <div id={id} ref={ref} className={className} {...additionalProps}>
          {children}
        </div>
      </PopoverContextProvider>
    );
  }
);

_Popover.displayName = 'Popover';

export const Popover = Object.assign(_Popover, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
});
