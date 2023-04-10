import { useEffect, useLayoutEffect } from 'react';

export const useIsoMorphicEffect =
  typeof window === 'undefined' || typeof document === 'undefined'
    ? useLayoutEffect
    : useEffect;
