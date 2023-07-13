import { ToastProps } from '@components/Toast';

export enum toastActionEnum {
  add = 'ADD',
  update = 'UPDATE',
  remove = 'REMOVE',
  clear = 'CLEAR',
}

export const toastReducer = (
  toasts: ToastProps[],
  action: { type: toastActionEnum; payload: ToastProps; max?: number }
) => {
  switch (action.type) {
    case toastActionEnum.add:
      if (toasts.length >= (action.max || 3)) {
        return [...toasts];
      }

      if (toasts.find((toast) => toast.id === action.payload.id)) {
        return [...toasts];
      }

      if (!action.payload.id) {
        const randomString = Math.random().toString(36);
        action.payload.id = `toast-${randomString}`;
      }

      return [action.payload, ...toasts];
    case toastActionEnum.update:
      return toasts.map((toast) => {
        if (toast.id === action.payload.id) {
          return { ...toast, ...action.payload };
        }

        return toast;
      });
    case toastActionEnum.remove:
      return toasts.filter((toast) => toast.id !== action.payload.id);
    case toastActionEnum.clear:
      return [];
    default:
      return toasts;
  }
};
