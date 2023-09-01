'use client';
import { CollapseProps } from '@components/Collapse/Collapse.types';
import { useEffect, useRef } from 'react';

const Collapse = (props: CollapseProps) => {
  const collapseRef = useRef<HTMLDivElement>(null);
  const { duration = 250, isOpen = false, children } = props;
  const mounted = useRef(true);

  useEffect(() => {
    const element = collapseRef.current;

    if (!element) {
      return;
    }

    if (!element.animate) {
      element.style.height = isOpen ? 'auto' : '0';
      return;
    }

    if (mounted.current) {
      element.style.height = isOpen ? 'auto' : '0';
      mounted.current = false;
      return;
    }

    const activeAnimations = element.getAnimations();
    const currentHeight = getComputedStyle(element).height;
    const endHeight = isOpen ? `${element.scrollHeight}px` : '0';

    if (activeAnimations.length > 0) {
      activeAnimations.forEach((activeAnimation: Animation) => {
        activeAnimation.cancel();
      });
    }

    const heightAnimation = [currentHeight, endHeight];
    const keyframes = {
      height: heightAnimation,
    };

    const animation: Animation = element.animate(keyframes, {
      duration,
      easing: 'ease-in-out',
    });

    animation.onfinish = () => {
      element.style.overflow = endHeight;
      element.style.height = isOpen ? 'auto' : '0px';
    };
  }, [duration, isOpen]);

  return (
    <div
      ref={collapseRef}
      style={{
        height: '0px',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

Collapse.displayName = 'Collapse';

export default Collapse;
