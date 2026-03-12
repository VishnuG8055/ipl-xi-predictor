// app/points-table/page.tsx — IPL points table page (Phase 2)

import EmptyState from '@/components/shared/EmptyState';
import PageTransition from '@/components/shared/PageTransition';

export default function PointsTablePage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold font-rajdhani text-white text-center mb-8">
          Points Table
        </h1>
        <EmptyState
          title="IPL 2025 Points Table"
          description="Live standings for all 10 IPL teams. Coming in Phase 2!"
          phase="Phase 2"
          icon="📊"
        />
      </div>
    </PageTransition>
  );
}
