// app/profile/page.tsx — User profile page (Phase 2)

import EmptyState from '@/components/shared/EmptyState';
import PageTransition from '@/components/shared/PageTransition';

export default function ProfilePage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold font-rajdhani text-white text-center mb-8">
          My Profile
        </h1>
        <EmptyState
          title="Your Profile"
          description="Track your predictions, points, and badges. Coming in Phase 2!"
          phase="Phase 2"
          icon="👤"
        />
      </div>
    </PageTransition>
  );
}
