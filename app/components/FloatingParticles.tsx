'use client';

import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  left: number;
  top: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  drift: number;
}

// Seeded pseudo-random number generator to produce deterministic values
function seededRandom(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateParticles(): Particle[] {
  const rand = seededRandom(42);
  const colors = [
    'rgba(6, 182, 212, 0.2)',
    'rgba(56, 189, 248, 0.15)',
  ];

  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.round(rand() * 100 * 100) / 100,
    top: Math.round(rand() * 100 * 100) / 100,
    size: 2 + Math.round(rand() * 4 * 100) / 100,
    color: colors[i % 2],
    duration: 12 + Math.round(rand() * 18 * 100) / 100,
    delay: Math.round(rand() * 10 * 100) / 100,
    drift: -30 + Math.round(rand() * 60 * 100) / 100,
  }));
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles());
  }, []);

  if (particles.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(var(--drift));
            opacity: 0;
          }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            backgroundColor: p.color,
            animation: `floatUp ${p.duration}s ${p.delay}s infinite linear`,
            ['--drift' as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
