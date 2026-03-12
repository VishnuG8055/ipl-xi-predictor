// components/shared/EmptyState.tsx — "Coming Soon" placeholder with phase information

interface EmptyStateProps {
  title?: string;
  description?: string;
  phase?: string;
  icon?: string;
}

export default function EmptyState({
  title = 'Coming Soon',
  description = 'This feature is being built. Check back during the next phase!',
  phase = 'Phase 2',
  icon = '🏏',
}: EmptyStateProps) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center glass-card p-12 max-w-md">
        <div className="text-6xl mb-4">{icon}</div>
        <div className="inline-block px-3 py-1 rounded-full border border-[#00f5d4]/30 text-[#00f5d4] text-sm mb-4">
          {phase}
        </div>
        <h2 className="text-3xl font-bold font-rajdhani text-white mb-3">{title}</h2>
        <p className="text-[#a0a0b8]">{description}</p>
      </div>
    </div>
  );
}
