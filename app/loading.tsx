// app/loading.tsx — Global loading skeleton shown during page transitions

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="animate-pulse space-y-8">
        <div className="h-96 rounded-2xl bg-[#111128]" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-32 rounded-xl bg-[#111128]" />
          ))}
        </div>
      </div>
    </div>
  );
}
