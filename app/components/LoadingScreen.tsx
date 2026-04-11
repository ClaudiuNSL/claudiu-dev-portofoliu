'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  startX: number;
  startY: number;
  size: number;
  alpha: number;
  color: string;
  delay: number;
  speed: number;
  trail: { x: number; y: number; alpha: number }[];
}

interface AmbientParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  maxAlpha: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

const MAX_PARTICLES = 2500;
const MAX_AMBIENT = 60;
const CONVERGE_DURATION = 1400;
const FLASH_START = CONVERGE_DURATION;
const FLASH_DURATION = 500;
const REVEAL_START = FLASH_START + FLASH_DURATION;
const REVEAL_DURATION = 900;
const HOLD_START = REVEAL_START + REVEAL_DURATION;
const HOLD_DURATION = 2000;
const EXIT_START = HOLD_START + HOLD_DURATION;
const EXIT_DURATION = 700;
const TOTAL = EXIT_START + EXIT_DURATION;

const COLORS = ['#06B6D4', '#38bdf8', '#0ea5e9', '#67e8f9', '#a5f3fc', '#e0f2fe', '#ffffff'];

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const sampleTextPositions = useCallback((canvas: HTMLCanvasElement): { x: number; y: number }[] => {
    const offscreen = document.createElement('canvas');
    const scale = window.devicePixelRatio || 1;
    offscreen.width = canvas.width;
    offscreen.height = canvas.height;
    const ctx = offscreen.getContext('2d')!;

    const fontSize = Math.min(canvas.width / (3.5 * scale), 220);
    ctx.font = `800 ${fontSize}px "Segoe UI", system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fff';
    ctx.fillText('CC', offscreen.width / 2, offscreen.height / 2 - 10 * scale);

    const imageData = ctx.getImageData(0, 0, offscreen.width, offscreen.height);
    const positions: { x: number; y: number }[] = [];
    // Adaptive gap: increase sampling gap on high-DPI to keep particle count reasonable
    const gap = Math.max(4, Math.floor(5 * scale));

    for (let y = 0; y < offscreen.height; y += gap) {
      for (let x = 0; x < offscreen.width; x += gap) {
        const i = (y * offscreen.width + x) * 4;
        if (imageData.data[i + 3] > 128) {
          positions.push({ x: x / scale, y: y / scale });
        }
      }
    }

    // Cap particle count — randomly subsample if too many
    if (positions.length > MAX_PARTICLES) {
      for (let i = positions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [positions[i], positions[j]] = [positions[j], positions[i]];
      }
      positions.length = MAX_PARTICLES;
    }

    return positions;
  }, []);

  useEffect(() => {
    if (!visible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const scale = window.devicePixelRatio || 1;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * scale;
      canvas.height = h * scale;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
    };
    resize();

    const positions = sampleTextPositions(canvas);
    const cx = w / 2;
    const cy = h / 2;
    const maxDist = Math.max(w, h) * 0.9 + 300;

    const particles: Particle[] = positions.map((pos) => {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * maxDist;
      const sx = cx + Math.cos(angle) * dist;
      const sy = cy + Math.sin(angle) * dist;
      return {
        x: sx, y: sy,
        targetX: pos.x, targetY: pos.y,
        startX: sx, startY: sy,
        size: Math.random() * 2.2 + 0.8,
        alpha: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: Math.random() * 0.35,
        speed: 0.7 + Math.random() * 0.6,
        trail: [],
      };
    });

    const ambientCount = Math.min(MAX_AMBIENT, Math.floor(w * 0.035));
    const ambientParticles: AmbientParticle[] = Array.from({ length: ambientCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.8 + 0.3,
      maxAlpha: Math.random() * 0.4 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
    }));

    // Pre-cache static background gradient
    const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.6);
    bgGrad.addColorStop(0, 'rgba(6, 30, 50, 0.4)');
    bgGrad.addColorStop(0.5, 'rgba(4, 15, 30, 0.2)');
    bgGrad.addColorStop(1, 'transparent');

    const vigGrad = ctx.createRadialGradient(cx, cy, w * 0.12, cx, cy, w * 0.85);
    vigGrad.addColorStop(0, 'transparent');
    vigGrad.addColorStop(1, 'rgba(0,0,0,0.7)');

    startTimeRef.current = performance.now();

    const drawBackground = () => {
      ctx.fillStyle = '#040609';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, w, h);
    };

    const drawAmbientParticles = (globalAlpha: number) => {
      if (globalAlpha < 0.01) return;
      for (const ap of ambientParticles) {
        ap.x += ap.vx;
        ap.y += ap.vy;
        ap.pulse += ap.pulseSpeed;

        if (ap.x < -10) ap.x = w + 10;
        else if (ap.x > w + 10) ap.x = -10;
        if (ap.y < -10) ap.y = h + 10;
        else if (ap.y > h + 10) ap.y = -10;

        const finalAlpha = ap.maxAlpha * (0.5 + 0.5 * Math.sin(ap.pulse)) * globalAlpha;
        if (finalAlpha < 0.01) continue;

        ctx.beginPath();
        ctx.arc(ap.x, ap.y, ap.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${finalAlpha * 0.15})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(ap.x, ap.y, ap.size, 0, Math.PI * 2);
        ctx.fillStyle = ap.color;
        ctx.globalAlpha = finalAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    };

    const drawLogo = (alpha: number, subtitleAlpha: number, time: number) => {
      if (alpha < 0.01) return;

      const breathe = 0.5 + 0.5 * Math.sin(time * 0.002);
      const glowSize = 160 + breathe * 40;

      const outerGlow = ctx.createRadialGradient(cx, cy - 10, 0, cx, cy - 10, glowSize * 1.8);
      outerGlow.addColorStop(0, `rgba(6, 182, 212, ${alpha * 0.08})`);
      outerGlow.addColorStop(0.3, `rgba(6, 182, 212, ${alpha * 0.04})`);
      outerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = outerGlow;
      ctx.fillRect(0, 0, w, h);

      const innerGlow = ctx.createRadialGradient(cx, cy - 10, 0, cx, cy - 10, glowSize);
      innerGlow.addColorStop(0, `rgba(6, 182, 212, ${alpha * (0.2 + breathe * 0.1)})`);
      innerGlow.addColorStop(0.4, `rgba(6, 182, 212, ${alpha * 0.06})`);
      innerGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = innerGlow;
      ctx.fillRect(0, 0, w, h);

      const fontSize = Math.min(w / 3.5, 220);
      ctx.font = `800 ${fontSize}px "Segoe UI", system-ui, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const cWidth = ctx.measureText('C').width;
      const totalWidth = ctx.measureText('CC').width;
      const sx = cx - totalWidth / 2;

      // Shadow
      ctx.globalAlpha = alpha * 0.3;
      ctx.fillStyle = '#000';
      ctx.fillText('CC', cx + 2, cy - 8);

      // First C — cyan
      ctx.globalAlpha = alpha;
      const grad1 = ctx.createLinearGradient(sx, cy - fontSize / 2, sx + cWidth, cy + fontSize / 2);
      grad1.addColorStop(0, '#67e8f9');
      grad1.addColorStop(0.3, '#22d3ee');
      grad1.addColorStop(0.6, '#06B6D4');
      grad1.addColorStop(1, '#0891b2');
      ctx.fillStyle = grad1;
      ctx.fillText('C', cx - cWidth / 2 + cWidth * 0.02, cy - 10);

      // Second C — silver
      const grad2 = ctx.createLinearGradient(sx + cWidth, cy - fontSize / 2, sx + totalWidth, cy + fontSize / 2);
      grad2.addColorStop(0, '#cbd5e1');
      grad2.addColorStop(0.3, '#f1f5f9');
      grad2.addColorStop(0.6, '#e2e8f0');
      grad2.addColorStop(1, '#94a3b8');
      ctx.fillStyle = grad2;
      ctx.fillText('C', cx + cWidth / 2 - cWidth * 0.02, cy - 10);

      // Specular highlight
      ctx.globalAlpha = alpha * (0.06 + breathe * 0.04);
      const specGrad = ctx.createLinearGradient(cx, cy - fontSize / 2, cx, cy + fontSize / 4);
      specGrad.addColorStop(0, '#ffffff');
      specGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = specGrad;
      ctx.fillText('CC', cx, cy - 10);
      ctx.globalAlpha = 1;

      // Subtitle
      if (subtitleAlpha > 0.01) {
        ctx.globalAlpha = subtitleAlpha;

        // Separator line
        const sepW = Math.min(200, w * 0.25);
        const sepY = cy + fontSize / 2 + 12;
        const sepGrad = ctx.createLinearGradient(cx - sepW / 2, 0, cx + sepW / 2, 0);
        sepGrad.addColorStop(0, 'transparent');
        sepGrad.addColorStop(0.15, `rgba(6, 182, 212, ${subtitleAlpha * 0.3})`);
        sepGrad.addColorStop(0.5, `rgba(6, 182, 212, ${subtitleAlpha * 0.7})`);
        sepGrad.addColorStop(0.85, `rgba(6, 182, 212, ${subtitleAlpha * 0.3})`);
        sepGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = sepGrad;
        ctx.fillRect(cx - sepW / 2, sepY, sepW, 1);

        // Name — use manual letter spacing for cross-browser support
        const subSize = Math.min(w / 20, 24);
        ctx.font = `300 ${subSize}px "Segoe UI", system-ui, sans-serif`;
        ctx.fillStyle = '#94a3b8';
        drawSpacedText(ctx, 'COMSA CLAUDIU', cx, cy + fontSize / 2 + 38, subSize * 0.25);

        // Tagline
        if (subtitleAlpha > 0.3) {
          const tagAlpha = Math.min(1, (subtitleAlpha - 0.3) / 0.7);
          ctx.globalAlpha = tagAlpha * subtitleAlpha * 0.6;
          const tagSize = Math.min(w / 32, 14);
          ctx.font = `400 ${tagSize}px "Segoe UI", system-ui, sans-serif`;
          ctx.fillStyle = '#64748b';
          drawSpacedText(ctx, 'WEB DEVELOPER', cx, cy + fontSize / 2 + 62, tagSize * 0.15);
        }

        ctx.globalAlpha = 1;
      }
    };

    const drawLensFlare = (intensity: number) => {
      if (intensity < 0.01) return;

      // Central bright spot
      const coreGrad = ctx.createRadialGradient(cx, cy - 10, 0, cx, cy - 10, 30);
      coreGrad.addColorStop(0, `rgba(255, 255, 255, ${intensity * 0.9})`);
      coreGrad.addColorStop(0.3, `rgba(200, 240, 255, ${intensity * 0.4})`);
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.fillRect(cx - 30, cy - 40, 60, 60);

      // Horizontal anamorphic streak
      ctx.globalAlpha = intensity * 0.6;
      const streakGrad = ctx.createLinearGradient(cx - w * 0.4, cy - 10, cx + w * 0.4, cy - 10);
      streakGrad.addColorStop(0, 'transparent');
      streakGrad.addColorStop(0.3, `rgba(6, 182, 212, ${intensity * 0.15})`);
      streakGrad.addColorStop(0.5, `rgba(255, 255, 255, ${intensity * 0.4})`);
      streakGrad.addColorStop(0.7, `rgba(6, 182, 212, ${intensity * 0.15})`);
      streakGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = streakGrad;
      ctx.fillRect(cx - w * 0.4, cy - 12, w * 0.8, 4);
      ctx.globalAlpha = 1;

      // Secondary flare spots
      const spots = [
        { offset: 0.15, size: 20, a: 0.15 },
        { offset: -0.2, size: 35, a: 0.08 },
        { offset: 0.35, size: 15, a: 0.12 },
        { offset: -0.4, size: 50, a: 0.05 },
      ];
      for (const spot of spots) {
        const spotGrad = ctx.createRadialGradient(cx + w * spot.offset, cy - 10, 0, cx + w * spot.offset, cy - 10, spot.size);
        spotGrad.addColorStop(0, `rgba(6, 182, 212, ${intensity * spot.a})`);
        spotGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(cx + w * spot.offset, cy - 10, spot.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      drawBackground();

      // Ambient particles
      const ambientAlpha = elapsed < 600
        ? elapsed / 600
        : elapsed > EXIT_START
          ? Math.max(0, 1 - (elapsed - EXIT_START) / EXIT_DURATION)
          : 1;
      drawAmbientParticles(ambientAlpha * 0.8);

      // === CONVERGE ===
      if (elapsed < CONVERGE_DURATION + 300) {
        for (const p of particles) {
          const pElapsed = Math.max(0, elapsed - p.delay * 1000);
          const progress = Math.min(1, pElapsed / (CONVERGE_DURATION * p.speed));
          const eased = easeOutExpo(progress);

          p.x = p.startX + (p.targetX - p.startX) * eased;
          p.y = p.startY + (p.targetY - p.startY) * eased;
          p.alpha = Math.min(1, progress * 3);

          if (p.alpha < 0.01) continue;

          // Trail
          if (progress < 0.85) {
            p.trail.push({ x: p.x, y: p.y, alpha: p.alpha * 0.5 });
            if (p.trail.length > 8) p.trail.shift();
          } else if (p.trail.length > 0) {
            p.trail.shift();
          }

          // Draw trail segments
          for (let ti = 0; ti < p.trail.length; ti++) {
            const t = p.trail[ti];
            const trailFade = (ti + 1) / p.trail.length;
            ctx.beginPath();
            ctx.arc(t.x, t.y, p.size * 0.4 * trailFade, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(6, 182, 212, ${t.alpha * 0.25 * trailFade})`;
            ctx.fill();
          }

          // Trail connecting line
          if (p.trail.length > 1 && progress < 0.85) {
            ctx.beginPath();
            ctx.moveTo(p.trail[0].x, p.trail[0].y);
            for (let ti = 1; ti < p.trail.length; ti++) {
              ctx.lineTo(p.trail[ti].x, p.trail[ti].y);
            }
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${p.alpha * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }

          // Particle core
          const coreSize = p.size * (progress > 0.8 ? 1 + (1 - progress) * 8 : 1);
          ctx.beginPath();
          ctx.arc(p.x, p.y, coreSize, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
          ctx.globalAlpha = 1;

          // Arrival glow
          if (progress > 0.6) {
            const glowIntensity = (progress - 0.6) / 0.4;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * (4 + glowIntensity * 3), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(6, 182, 212, ${glowIntensity * 0.12})`;
            ctx.fill();
          }
        }
      }

      // === FLASH + SHOCKWAVE ===
      if (elapsed >= FLASH_START && elapsed < FLASH_START + FLASH_DURATION + 400) {
        const flashProgress = Math.min(1, (elapsed - FLASH_START) / FLASH_DURATION);

        let flashIntensity: number;
        if (flashProgress < 0.15) {
          flashIntensity = easeOutQuart(flashProgress / 0.15);
        } else {
          flashIntensity = Math.max(0, 1 - easeOutExpo((flashProgress - 0.15) / 0.85));
        }

        if (flashIntensity > 0.01) {
          const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.15);
          coreGrad.addColorStop(0, `rgba(255, 255, 255, ${flashIntensity * 0.95})`);
          coreGrad.addColorStop(0.5, `rgba(200, 240, 255, ${flashIntensity * 0.4})`);
          coreGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = coreGrad;
          ctx.fillRect(0, 0, w, h);

          const bloomGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.45);
          bloomGrad.addColorStop(0, `rgba(6, 182, 212, ${flashIntensity * 0.5})`);
          bloomGrad.addColorStop(0.3, `rgba(6, 182, 212, ${flashIntensity * 0.2})`);
          bloomGrad.addColorStop(0.6, `rgba(6, 182, 212, ${flashIntensity * 0.05})`);
          bloomGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = bloomGrad;
          ctx.fillRect(0, 0, w, h);
        }

        // Triple shockwave
        const rings = [
          { delay: 0, speed: 1, alpha: 0.5, width: 2.5 },
          { delay: 0.08, speed: 0.85, alpha: 0.3, width: 1.5 },
          { delay: 0.16, speed: 0.7, alpha: 0.15, width: 4 },
        ];
        for (const ring of rings) {
          const ringProgress = Math.max(0, Math.min(1, (flashProgress - ring.delay) / (1 - ring.delay)));
          if (ringProgress <= 0) continue;
          const radius = easeOutExpo(ringProgress * ring.speed) * w * 0.75;
          const ringAlpha = (1 - ringProgress) * ring.alpha;
          if (ringAlpha > 0.005) {
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(6, 182, 212, ${ringAlpha})`;
            ctx.lineWidth = ring.width + (1 - ringProgress) * 3;
            ctx.stroke();
          }
        }

        drawLensFlare(flashIntensity * 0.8);
      }

      // === REVEAL + HOLD + EXIT ===
      if (elapsed >= REVEAL_START) {
        const revealProgress = Math.min(1, (elapsed - REVEAL_START) / REVEAL_DURATION);
        const logoAlpha = easeInOutCubic(Math.min(1, revealProgress * 1.8));

        let subtitleAlpha = 0;
        if (revealProgress > 0.35) {
          subtitleAlpha = easeInOutCubic(Math.min(1, (revealProgress - 0.35) / 0.5)) * logoAlpha;
        }

        let exitFade = 1;
        if (elapsed >= EXIT_START) {
          exitFade = 1 - easeInOutCubic(Math.min(1, (elapsed - EXIT_START) / EXIT_DURATION));
        }

        drawLogo(logoAlpha * exitFade, subtitleAlpha * exitFade, now);

        // Subtle lens flare during hold
        if (elapsed >= HOLD_START && elapsed < EXIT_START) {
          const holdBreath = 0.5 + 0.5 * Math.sin((elapsed - HOLD_START) * 0.0015);
          drawLensFlare(holdBreath * 0.08);
        }
      }

      // === EXIT overlay ===
      if (elapsed >= EXIT_START) {
        const exitProgress = Math.min(1, (elapsed - EXIT_START) / EXIT_DURATION);
        ctx.globalAlpha = easeInOutCubic(exitProgress);
        ctx.fillStyle = '#040609';
        ctx.fillRect(0, 0, w, h);
        ctx.globalAlpha = 1;
      }

      if (elapsed >= TOTAL) {
        cancelAnimationFrame(animFrameRef.current);
        setVisible(false);
        return;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [visible, sampleTextPositions]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: '#040609',
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

/** Draw text with manual letter-spacing (cross-browser safe) */
function drawSpacedText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, spacing: number) {
  const chars = text.split('');
  let totalWidth = 0;
  for (const c of chars) totalWidth += ctx.measureText(c).width + spacing;
  totalWidth -= spacing; // no trailing space

  let curX = x - totalWidth / 2;
  for (const c of chars) {
    const charW = ctx.measureText(c).width;
    ctx.fillText(c, curX + charW / 2, y);
    curX += charW + spacing;
  }
}
