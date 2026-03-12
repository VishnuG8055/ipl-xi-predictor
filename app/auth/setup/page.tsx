// app/auth/setup/page.tsx — Profile setup page for new users (username + favorite team)

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { IPL_TEAMS } from '@/lib/utils/constants';

export default function SetupPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [favoriteTeam, setFavoriteTeam] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !favoriteTeam) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push('/auth/login');
      return;
    }

    const { error: upsertError } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        username: username.trim(),
        favorite_team_id: favoriteTeam,
        total_points: 0,
      });

    if (upsertError) {
      setError('Username might be taken. Try another!');
      setLoading(false);
      return;
    }

    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 100%)' }}>
      <div className="glass-card p-8 w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">👋</div>
          <h1 className="text-3xl font-bold font-rajdhani text-white mb-2">Setup Your Profile</h1>
          <p className="text-[#a0a0b8]">Just one last step before you start predicting!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#a0a0b8] mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., cricket_fanatic"
              className="w-full bg-[#1a1a3e] border border-[#2a2a4a] rounded-lg px-4 py-3 text-white placeholder-[#a0a0b8] focus:outline-none focus:border-[#00f5d4] transition-colors"
              maxLength={20}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#a0a0b8] mb-3">Favorite Team</label>
            <div className="grid grid-cols-2 gap-2">
              {IPL_TEAMS.map((team) => (
                <button
                  key={team.id}
                  type="button"
                  onClick={() => setFavoriteTeam(team.id)}
                  className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                    favoriteTeam === team.id
                      ? 'border-[#00f5d4] bg-[#00f5d4]/10'
                      : 'border-[#2a2a4a] hover:border-[#a0a0b8]'
                  }`}
                >
                  <span className="font-bold font-rajdhani" style={{ color: team.primaryColor }}>
                    {team.shortName}
                  </span>
                  <span className="text-xs text-[#a0a0b8] block">{team.city}</span>
                </button>
              ))}
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full neon-button py-3 rounded-lg font-medium font-rajdhani text-lg disabled:opacity-60"
          >
            {loading ? 'Setting up...' : "Let's Go! 🏏"}
          </button>
        </form>
      </div>
    </div>
  );
}
