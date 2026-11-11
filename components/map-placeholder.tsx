/** Static route-map placeholder (no Mapbox token needed). */
export default function MapPlaceholder({ from, to, routes }: { from?: string; to?: string; routes?: string[] }) {
  return (
    <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(#e4e2e0 1px, transparent 1px), linear-gradient(90deg, #e4e2e0 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="relative z-10 text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-dim">route preview</div>
        <div className="mt-1 text-sm text-ink">{from && to ? `${from} → ${to}` : 'City-to-city network'}</div>
        {routes && routes.length > 0 && (
          <div className="mt-2 flex flex-wrap justify-center gap-2 font-mono text-[11px] text-muted">
            {routes.map((r) => (<span key={r} className="rounded-full border border-line bg-white px-2 py-0.5">{r}</span>))}
          </div>
        )}
        <div className="mt-3 text-[11px] text-dim">Interactive map joins when a map token is configured.</div>
      </div>
    </div>
  );
}
