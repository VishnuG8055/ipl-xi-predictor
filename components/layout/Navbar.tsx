// components/layout/Navbar.tsx — Sticky glassmorphism navigation bar with mobile support

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/utils/constants';
import { useUser } from '@/lib/hooks/useUser';
import { createClient } from '@/lib/supabase/client';

export default function Navbar() {
  const pathname = usePathname();
  const { user, loading } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  };

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(10, 10, 26, 0.8)',
        backdropFilter: 'blur(20px)',
        borderColor: 'rgba(42, 42, 74, 0.8)',
        boxShadow: '0 1px 0 0 rgba(0, 245, 212, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-rajdhani font-bold text-2xl">
            <span className="text-2xl">🏏</span>
            <span className="gradient-text">IPL XI</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-[#00f5d4]'
                    : 'text-[#a0a0b8] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {!loading && (
              <>
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="hidden md:block text-sm text-[#a0a0b8] hover:text-white transition-colors"
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link
                    href="/auth/login"
                    className="neon-button px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Login 🏏
                  </Link>
                )}
              </>
            )}

            <button
              className="md:hidden text-[#a0a0b8] hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#2a2a4a] py-4 px-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-sm font-medium ${
                pathname === link.href ? 'text-[#00f5d4]' : 'text-[#a0a0b8]'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
