import { ToastProps } from '@components/Toast';

export const useToast = () => {
  return {
    add: (payload: ToastProps) => {
      const event = new CustomEvent('toasts:add', {
        detail: payload,
      });
      document.dispatchEvent(event);
    },
    update: (payload: ToastProps) => {
      const event = new CustomEvent('toasts:update', {
        detail: payload,
      });
      document.dispatchEvent(event);
    },
    remove: (id: string) => {
      const event = new CustomEvent('toasts:remove', {
        detail: { id },
      });
      document.dispatchEvent(event);
    },
    clear: () => {
      const event = new CustomEvent('toasts:clear', {});
      document.dispatchEvent(event);
    },
  };
};
