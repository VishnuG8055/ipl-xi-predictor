// components/layout/MobileNav.tsx — Fixed bottom tab bar for mobile navigation

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Calendar, Target, Trophy, User } from 'lucide-react';

const mobileLinks = [
  { href: '/', label: 'Home', Icon: Home },
  { href: '/schedule', label: 'Schedule', Icon: Calendar },
  { href: '/predict', label: 'Predict', Icon: Target },
  { href: '/leaderboard', label: 'Leaderboard', Icon: Trophy },
  { href: '/profile', label: 'Profile', Icon: User },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t"
      style={{
        background: 'rgba(17, 17, 40, 0.95)',
        backdropFilter: 'blur(20px)',
        borderColor: '#2a2a4a',
      }}
    >
      <div className="flex items-center justify-around py-2">
        {mobileLinks.map(({ href, label, Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
                isActive ? 'text-[#00f5d4]' : 'text-[#a0a0b8]'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
