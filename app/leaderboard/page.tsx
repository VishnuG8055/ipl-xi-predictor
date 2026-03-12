// app/leaderboard/page.tsx — Leaderboard page (Phase 2)

import EmptyState from '@/components/shared/EmptyState';
import PageTransition from '@/components/shared/PageTransition';

export default function LeaderboardPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold font-rajdhani text-white text-center mb-8">
          Leaderboard
        </h1>
        <EmptyState
          title="Top Predictors"
          description="See who has the best prediction record. Coming in Phase 2!"
          phase="Phase 2"
          icon="🏆"
        />
      </div>
    </PageTransition>
  );
}
