// app/predict/page.tsx — Prediction page (Phase 2)

import EmptyState from '@/components/shared/EmptyState';
import PageTransition from '@/components/shared/PageTransition';

export default function PredictPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold font-rajdhani text-white text-center mb-8">
          Predict XI
        </h1>
        <EmptyState
          title="Match Predictions"
          description="Predict match winners and earn points. Coming in Phase 2!"
          phase="Phase 2"
          icon="🎯"
        />
      </div>
    </PageTransition>
  );
}
