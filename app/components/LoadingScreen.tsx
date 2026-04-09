'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes ls-fadeScaleIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes ls-glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.3))
                    drop-shadow(0 0 20px rgba(148, 163, 184, 0.2));
          }
          50% {
            filter: drop-shadow(0 0 25px rgba(6, 182, 212, 0.7))
                    drop-shadow(0 0 50px rgba(56, 189, 248, 0.4))
                    drop-shadow(0 0 15px rgba(226, 232, 240, 0.5));
          }
        }

        @keyframes ls-fadeOutUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px);
          }
        }

        @keyframes ls-loadBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }

        .ls-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0a0e1a;
          animation: ls-fadeOutUp 0.5s ease-in forwards;
          animation-delay: 1.5s;
        }

        .ls-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          animation: ls-fadeScaleIn 0.5s ease-out forwards,
                     ls-glowPulse 1s ease-in-out 0.5s 1;
        }

        .ls-logo {
          display: inline-flex;
          font-size: 4.5rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }

        .ls-c1 {
          background: linear-gradient(135deg, #38bdf8 0%, #06B6D4 40%, #0284c7 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.5));
        }

        .ls-c2 {
          margin-left: -0.08em;
          background: linear-gradient(135deg, #94a3b8 0%, #e2e8f0 50%, #64748b 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 4px rgba(148, 163, 184, 0.3));
        }

        .ls-bar-track {
          width: 120px;
          height: 3px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
        }

        .ls-bar-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(90deg, #38bdf8, #06B6D4, #94a3b8);
          animation: ls-loadBar 2s ease-out forwards;
        }
      `}</style>

      <div className="ls-overlay" aria-hidden="true">
        <div className="ls-content">
          <span className="ls-logo">
            <span className="ls-c1">C</span>
            <span className="ls-c2">C</span>
          </span>
          <div className="ls-bar-track">
            <div className="ls-bar-fill" />
          </div>
        </div>
      </div>
    </>
  );
}
