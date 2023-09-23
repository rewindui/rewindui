export const useSidebar = () => {
  return {
    toggleMobile: () => {
      const event = new CustomEvent('sidebar:toggle-mobile', {});
      document.dispatchEvent(event);
    },
  };
};
