import { TooltipComponent, TooltipProps } from '@components/Tooltip/Tooltip.types';
import { useTooltip } from '@components/Tooltip/use-tooltip.hook';
import { FloatingArrow, FloatingPortal } from '@floating-ui/react';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import {
  Children,
  cloneElement,
  forwardRef,
  ReactElement,
  Ref,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useMergeRefs } from '@floating-ui/react';
import { twMerge } from 'tailwind-merge';

const defaultProps: Partial<TooltipProps> = {
  color: 'dark',
  initiallyOpen: false,
  offset: 6,
  placement: 'top',
  radius: 'md',
  shadow: 'none',
  size: 'sm',
  tone: 'solid',
  withinPortal: true,
};

const Tooltip: TooltipComponent = forwardRef<HTMLDivElement, TooltipProps>(
  (props: TooltipProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Tooltip');
    const {
      tone,
      children,
      className = '',
      color,
      initiallyOpen,
      label,
      offset,
      placement,
      radius,
      shadow,
      size,
      withinPortal,
    } = {
      ...defaultProps,
      // ...useInputGroupContext(),
      ...props,
    };
    const id = usePropId(props.id);
    const [hidden, setHidden] = useState(!initiallyOpen);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const {
      arrowRef,
      arrowSide,
      context,
      floating,
      getFloatingProps,
      getReferenceProps,
      open,
      reference,
      strategy,
      x,
      y,
    } = useTooltip({
      initiallyOpen,
      offset,
      placement,
    });

    useEffect(() => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      setTimeoutId(setTimeout(() => setHidden(!open), open ? 0 : 75));
    }, [open]);

    const child = Children.only(children) as ReactElement;
    const childRef = useMergeRefs([reference, ref || null]);

    const classes = useMemo(() => {
      return twMerge(
        theme.base({
          tone,
          arrowSide,
          className,
          color,
          open,
          radius,
          shadow,
          size,
        })
      );
    }, [tone, arrowSide, className, color, open, radius, shadow, size, theme]);

    const tooltipElement = !hidden && (
      <div
        id={id}
        ref={floating}
        className={classes}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        style={{
          position: strategy,
          top: y ?? 0,
          left: x ?? 0,
          visibility: x == null ? 'hidden' : 'visible',
        }}
        {...getFloatingProps}
      >
        <FloatingArrow
          className={theme.arrow({ tone, color })}
          ref={arrowRef}
          width={8}
          height={4}
          context={context}
        />
        {label}
      </div>
    );
    const triggerElement = cloneElement(child, {
      ref: childRef,
      ...child.props,
      ...getReferenceProps,
    });

    return (
      <>
        {withinPortal ? <FloatingPortal>{tooltipElement}</FloatingPortal> : tooltipElement}
        {triggerElement}
      </>
    );
  }
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;
