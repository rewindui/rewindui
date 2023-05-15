import { ModalGroupContext } from '@components/Modal/ModalGroup/ModalGroup.types';
import { FunctionComponent, PropsWithoutRef, useEffect, useState } from 'react';
import { ModalGroupContextProvider } from './ModalGroup.context';

const ModalGroup: FunctionComponent<PropsWithoutRef<any>> = (props: any) => {
  const { children } = props;
  const [registry, setRegistry] = useState<HTMLDivElement[]>([]);
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const contextValue: ModalGroupContext = {
    registry,
    setRegistry,
    activeModalId,
  };

  useEffect(() => {
    if (registry.length > 1) {
      const previousModal = registry[registry.length - 2];

      if (!previousModal) {
        return;
      }

      previousModal.animate(
        [
          { opacity: 1, transform: 'translateY(0%)', filter: 'blur(0)', visibility: 'visible' },
          {
            opacity: 0,
            transform: 'translateY(-50px)',
            filter: 'blur(15px)',
            visibility: 'hidden',
          },
        ],
        {
          duration: 100,
        }
      );
      previousModal.style.zIndex = '40';
    }

    const activeModal = registry[registry.length - 1];

    if (!activeModal) {
      setActiveModalId(null);
      return;
    }

    activeModal.style.zIndex = '60';
    setActiveModalId(activeModal.id);
  }, [registry]);

  return <ModalGroupContextProvider value={contextValue}>{children}</ModalGroupContextProvider>;
};

ModalGroup.displayName = 'ModalGroup';

export { ModalGroup };
