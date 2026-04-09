'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Hide on mobile
    if (window.innerWidth <= 768) {
      glow.style.display = 'none';
      return;
    }

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      glow.style.display = 'none';
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 30,
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
      }}
    />
  );
}
