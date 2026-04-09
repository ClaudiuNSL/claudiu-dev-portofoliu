'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ target, suffix = '', duration = 2000 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [count, setCount] = useState(0);
  const [ready, setReady] = useState(false);

  // Wait for loading screen to finish (2s) before allowing animation
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isInView || !ready) return;

    let cancelled = false;
    const startTime = performance.now();

    function step(currentTime: number) {
      if (cancelled) return;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(step);
    return () => { cancelled = true; };
  }, [isInView, ready, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}
