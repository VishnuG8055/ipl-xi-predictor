// app/community/page.tsx — Community page (Phase 2)

import EmptyState from '@/components/shared/EmptyState';
import PageTransition from '@/components/shared/PageTransition';

export default function CommunityPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold font-rajdhani text-white text-center mb-8">
          Community
        </h1>
        <EmptyState
          title="Community Hub"
          description="Polls, debates, and fan predictions. Coming in Phase 2!"
          phase="Phase 2"
          icon="💬"
        />
      </div>
    </PageTransition>
  );
}
