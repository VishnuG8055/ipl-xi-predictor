// app/team/[teamId]/page.tsx — Individual team page (Phase 2)

import EmptyState from '@/components/shared/EmptyState';
import PageTransition from '@/components/shared/PageTransition';
import { IPL_TEAMS } from '@/lib/utils/constants';

export default function TeamPage({ params }: { params: { teamId: string } }) {
  const team = IPL_TEAMS.find(t => t.id === params.teamId);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {team && (
          <h1
            className="text-5xl font-bold font-rajdhani mb-8 text-center"
            style={{ color: team.primaryColor }}
          >
            {team.name}
          </h1>
        )}
        <EmptyState
          title="Team XI Picker"
          description="Build your dream XI for this team. Coming in Phase 2!"
          phase="Phase 2"
          icon="🏏"
        />
      </div>
    </PageTransition>
  );
}
