'use client';

import { useRef, useState, useCallback } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightStyle, setSpotlightStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotlightStyle({
      background: `radial-gradient(300px circle at ${x}px ${y}px, rgba(6,182,212,0.12), transparent 60%)`,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setSpotlightStyle({});
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={spotlightStyle}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
