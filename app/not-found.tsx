// app/not-found.tsx — Custom 404 page with cricket theme

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🏏</div>
        <h1 className="text-6xl font-bold font-rajdhani gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-rajdhani text-white mb-4">Bowled Out!</h2>
        <p className="text-[#a0a0b8] mb-8 max-w-md">
          Looks like this page got caught behind. It doesn&apos;t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="neon-button px-6 py-3 rounded-lg font-medium inline-block"
        >
          Back to Home 🏠
        </Link>
      </div>
    </div>
  );
}
