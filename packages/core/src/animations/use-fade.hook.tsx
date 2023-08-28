import { RefObject, useEffect, useRef, useState } from 'react';

export function useFade(props: {
  enabled?: boolean;
  ref: RefObject<HTMLElement>;
  visible: boolean;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  easing?: string; // New prop for easing function
}) {
  const {
    enabled = true,
    ref,
    visible,
    fadeInDuration = 250,
    fadeOutDuration = 250,
    easing = 'linear', // Default easing function
  } = props;

  const mounted = useRef<boolean>(false);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.style.display = 'flex';

    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    const duration = visible ? fadeInDuration : fadeOutDuration;

    const options: KeyframeAnimationOptions = {
      duration: enabled ? duration : 0,
      easing,
      fill: 'forwards',
    };

    // Cancel previous animation
    if (animationRef.current) {
      animationRef.current.cancel();
    }

    const keyframes = [{ opacity: visible ? 0 : 1 }, { opacity: visible ? 1 : 0 }];

    animationRef.current = element.animate(keyframes, options);

    return () => {
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, [ref, visible, fadeInDuration, fadeOutDuration, enabled, easing]);

  useEffect(() => {
    if (!animationRef.current) {
      return;
    }

    animationRef.current.onfinish = () => {
      if (!ref?.current) {
        return;
      }

      ref.current.style.display = visible ? 'flex' : 'none';
    };
  }, [animationRef, ref, visible]);

  return [animationRef.current];
}
