// components/shared/ParticleBackground.tsx — Animated floating particles background using CSS

'use client';

import { useMemo } from 'react';

interface Particle {
  id: number;
  size: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
}

export default function ParticleBackground() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      left: Math.random() * 100,
      animationDuration: Math.random() * 15 + 10,
      animationDelay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            bottom: '-10px',
            backgroundColor: '#00f5d4',
            opacity: particle.opacity,
            animation: `float-up ${particle.animationDuration}s ${particle.animationDelay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
