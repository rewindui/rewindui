import { FaderProps } from '@components/Fader/Fader.types';
import { forwardRef, Ref, useEffect, useRef, useState } from 'react';
import { useMergeRefs } from '@floating-ui/react';

const Fader = forwardRef((props: FaderProps, ref?: Ref<HTMLDivElement>) => {
  const localRef = useRef<HTMLDivElement>(null);
  const {
    children,
    fadeInDuration = 250,
    fadeOutDuration = 250,
    isActive = false,
    isShown = false,
    method = 'hide',
  } = props;
  const mounted = useRef(true);
  const [mountChildren, setMountChildren] = useState(true);
  const mergedRef = useMergeRefs([ref || null, localRef]);

  useEffect(() => {
    const element = localRef.current;

    if (!element) {
      return;
    }

    if (!isActive) {
      element.style.opacity = isShown ? '1' : '0';
      element.style.display = isShown ? 'block' : 'none';
      return;
    }

    setMountChildren(true);

    if (mounted.current) {
      element.style.opacity = isShown ? '1' : '0';
      element.style.display = isShown ? 'block' : 'none';
      mounted.current = false;
      return;
    }

    element.style.display = 'block';

    const options: KeyframeAnimationOptions = isShown
      ? {
          duration: fadeInDuration,
          easing: 'linear',
          fill: 'forwards',
        }
      : {
          duration: fadeOutDuration,
          easing: 'linear',
          fill: 'forwards',
        };

    const keyframes = isShown ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 1 }, { opacity: 0 }];

    const animation: Animation = element.animate(keyframes, options);

    animation.onfinish = () => {
      element.style.display = isShown ? 'block' : 'none';

      if (method === 'unmount' && !isShown) {
        setMountChildren(false);
      }
    };
  }, [isActive, isShown, fadeInDuration, fadeOutDuration, method]);

  return (
    <div ref={mergedRef} className="w-full">
      {mountChildren && children}
    </div>
  );
});

Fader.displayName = 'Fader';

export default Fader;
