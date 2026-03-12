// components/layout/Footer.tsx — Dark footer with links and copyright

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="border-t py-8 mt-auto"
      style={{
        background: '#111128',
        borderColor: '#2a2a4a',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏏</span>
            <span className="font-rajdhani font-bold text-lg gradient-text">IPL XI Predictor</span>
          </div>

          <div className="flex gap-6 text-sm text-[#a0a0b8]">
            <Link href="/schedule" className="hover:text-white transition-colors">Schedule</Link>
            <Link href="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link>
            <Link href="/community" className="hover:text-white transition-colors">Community</Link>
          </div>

          <p className="text-xs text-[#a0a0b8]">
            © 2025 IPL XI Predictor. Made with ❤️ for cricket fans.
          </p>
        </div>
      </div>
    </footer>
  );
}
