'use client';
import { default as Toast } from '@components/Toast/Toast';
import { ToastProps } from '@components/Toast';
import { toastActionEnum, toastReducer } from '@components/Toast/ToastContainer/toast.reducer';
import {
  ToastContainerComponent,
  ToastContainerProps,
} from '@components/Toast/ToastContainer/ToastContainer.types';
import { FloatingPortal } from '@floating-ui/react';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref, useEffect, useMemo, useReducer } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

const defaultProps: Partial<ToastContainerProps> = {
  max: 5,
  position: 'top-right',
};

const ToastContainer: ToastContainerComponent = forwardRef<HTMLDivElement, ToastContainerProps>(
  (props: ToastContainerProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Toast');

    const [toasts, dispatch] = useReducer(toastReducer, []);
    const {
      className = '',
      max,
      position,
      ...additionalProps
    } = {
      ...defaultProps,
      ...props,
    };
    const id = usePropId(props.id);

    const addEvent = (e: CustomEvent<ToastProps>) => {
      dispatch({ type: toastActionEnum.add, payload: e.detail, max });
    };

    const updateEvent = (e: CustomEvent<ToastProps>) => {
      dispatch({ type: toastActionEnum.update, payload: e.detail });
    };

    const removeEvent = (e: CustomEvent<ToastProps>) => {
      dispatch({ type: toastActionEnum.remove, payload: e.detail });
    };

    const clearEvent = () => {
      dispatch({ type: toastActionEnum.clear, payload: {} });
    };

    useEffect(() => {
      document.addEventListener('toasts:add', addEvent as EventListener);
      document.addEventListener('toasts:update', updateEvent as EventListener);
      document.addEventListener('toasts:remove', removeEvent as EventListener);
      document.addEventListener('toasts:clear', clearEvent as EventListener);

      return () => {
        document.removeEventListener('toasts:add', addEvent as EventListener);
        document.removeEventListener('toasts:update', updateEvent as EventListener);
        document.removeEventListener('toasts:remove', removeEvent as EventListener);
        document.removeEventListener('toasts:clear', clearEvent as EventListener);
      };
    });

    const containerClasses = useMemo(() => {
      return twMerge(theme.container({ className, position }));
    }, [className, position, theme]);

    return (
      <FloatingPortal>
        <div ref={ref} id={id} className={containerClasses} {...additionalProps}>
          <AnimatePresence initial={false}>
            {toasts.map((toast: ToastProps) => (
              <motion.div
                key={toast.id}
                layout
                initial={{
                  opacity: 0,
                  x: position === 'top-right' || position === 'bottom-right' ? '100%' : '-100%',
                  scale: 0.85,
                }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{
                  opacity: 0,
                  x: position === 'top-right' || position === 'bottom-right' ? '100%' : '-100%',
                  scale: 0.85,
                  transition: { duration: 0.2 },
                }}
              >
                <Toast {...toast} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </FloatingPortal>
    );
  }
);

ToastContainer.displayName = 'ToastContainer';

export default ToastContainer;
