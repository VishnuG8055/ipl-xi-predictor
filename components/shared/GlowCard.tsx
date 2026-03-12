// components/shared/GlowCard.tsx — Reusable glassmorphism card with optional glow effect

'use client';

import { cn } from '@/lib/utils/cn';
import { ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function GlowCard({ children, className, glowColor, onClick }: GlowCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'glass-card p-6 transition-all duration-300',
        onClick && 'cursor-pointer hover:scale-[1.02]',
        className
      )}
      style={
        glowColor
          ? {
              boxShadow: `0 0 20px ${glowColor}, 0 4px 24px rgba(0, 0, 0, 0.4)`,
            }
          : { boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)' }
      }
    >
      {children}
    </div>
  );
}
