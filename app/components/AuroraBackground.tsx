'use client';

import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    let w = 0;
    let h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();

    // Aurora wave parameters
    const waves = [
      { y: 0.35, amplitude: 60, frequency: 0.003, speed: 0.0004, color1: 'rgba(6,182,212,0.07)', color2: 'rgba(6,182,212,0)' },
      { y: 0.45, amplitude: 80, frequency: 0.002, speed: -0.0003, color1: 'rgba(56,189,248,0.05)', color2: 'rgba(56,189,248,0)' },
      { y: 0.55, amplitude: 50, frequency: 0.004, speed: 0.0005, color1: 'rgba(14,165,233,0.06)', color2: 'rgba(14,165,233,0)' },
      { y: 0.4, amplitude: 70, frequency: 0.0025, speed: -0.00035, color1: 'rgba(103,232,249,0.04)', color2: 'rgba(103,232,249,0)' },
    ];

    const animate = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      for (const wave of waves) {
        const baseY = h * wave.y;
        const offset = time * wave.speed;

        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x += 3) {
          const y = baseY +
            Math.sin(x * wave.frequency + offset) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + offset * 1.3) * wave.amplitude * 0.5;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseY - wave.amplitude * 1.5, 0, baseY + wave.amplitude * 2);
        grad.addColorStop(0, wave.color2);
        grad.addColorStop(0.3, wave.color1);
        grad.addColorStop(0.7, wave.color1);
        grad.addColorStop(1, wave.color2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
}
