// app/auth/login/page.tsx — Login page with Google sign-in button

'use client';

import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 100%)' }}
    >
      <div className="glass-card p-8 w-full max-w-md text-center">
        <div className="text-5xl mb-4">🏏</div>
        <h1 className="text-4xl font-bold font-rajdhani gradient-text mb-2">IPL XI</h1>
        <p className="text-[#a0a0b8] mb-8">Sign in to start predicting your dream XI</p>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-medium py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200 disabled:opacity-60"
        >
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M46.145 24.5c0-1.548-.13-3.04-.375-4.475H24v8.47h12.44c-.537 2.89-2.167 5.336-4.616 6.977v5.797h7.476c4.372-4.026 6.845-9.96 6.845-16.769z"/>
            <path fill="#34A853" d="M24 47c6.27 0 11.53-2.08 15.374-5.63l-7.476-5.797c-2.074 1.39-4.726 2.21-7.898 2.21-6.076 0-11.22-4.102-13.065-9.616H3.18v5.989C7.01 42.86 14.99 47 24 47z"/>
            <path fill="#FBBC05" d="M10.935 28.167A13.867 13.867 0 0 1 10.163 24c0-1.448.248-2.854.772-4.167v-5.989H3.18A22.98 22.98 0 0 0 1 24c0 3.7.887 7.194 2.18 10.156l7.755-5.989z"/>
            <path fill="#EA4335" d="M24 10.217c3.42 0 6.494 1.175 8.914 3.483l6.683-6.683C35.524 3.315 30.266 1 24 1 14.99 1 7.01 5.14 3.18 13.844l7.755 5.989C12.78 14.319 17.924 10.217 24 10.217z"/>
          </svg>
          {loading ? 'Signing in...' : 'Continue with Google'}
        </button>

        <div className="mt-8 pt-6 border-t border-[#2a2a4a] space-y-2">
          <p className="text-xs text-[#a0a0b8]">By signing in, you can:</p>
          <div className="grid grid-cols-3 gap-2 text-xs text-[#a0a0b8]">
            <div className="glass-card p-2">🏏 Pick your XI</div>
            <div className="glass-card p-2">📊 Track stats</div>
            <div className="glass-card p-2">🏆 Win badges</div>
          </div>
        </div>
      </div>
    </div>
  );
}
