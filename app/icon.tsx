import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #0a1628 0%, #0d1f3c 50%, #081420 100%)',
          borderRadius: '96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle glow behind text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Outer ring */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            right: '24px',
            bottom: '24px',
            borderRadius: '80px',
            border: '3px solid rgba(6,182,212,0.25)',
            display: 'flex',
          }}
        />

        {/* CC monogram */}
        <div
          style={{
            display: 'flex',
            fontSize: '220px',
            fontWeight: 900,
            letterSpacing: '-12px',
            color: '#06B6D4',
            textShadow: '0 0 40px rgba(6,182,212,0.5), 0 0 80px rgba(6,182,212,0.2)',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            lineHeight: 1,
          }}
        >
          CC
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '4px',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, transparent, #06B6D4, #38bdf8, #06B6D4, transparent)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
