'use client';

import * as React from 'react';
import { lookupTracking } from '@/lib/agent';
import { TRACKING_EXAMPLES, type TrackingRecord } from '@/lib/data';

const DOT: Record<string, string> = {
  info: 'bg-dim',
  transit: 'bg-accent-dark',
  'out-for-delivery': 'bg-brand',
  delivered: 'bg-green',
};

export default function TrackingWidget({ compact }: { compact?: boolean }) {
  const [ref, setRef] = React.useState('');
  const [rec, setRec] = React.useState<TrackingRecord | null>(null);
  const [err, setErr] = React.useState('');

  const look = (value?: string) => {
    const target = (value ?? ref).trim();
    if (!target) return setErr('Enter a tracking number (e.g. SSX-10001).');
    const hit = lookupTracking(target);
    if (!hit) return setErr(`No shipment matching "${target}". Try ${TRACKING_EXAMPLES[0].ref}.`);
    setErr('');
    setRec(hit);
  };

  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-ink">Track a shipment</div>
      <div className="mt-2 flex gap-2">
        <input
          value={ref}
          onChange={(e) => setRef(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && look()}
          placeholder="e.g. SSX-10001"
          className="h-11 flex-1 rounded-md border border-line bg-surface px-3 font-mono text-ink outline-none focus:border-brand"
        />
        <button onClick={() => look()} className="h-11 rounded-md bg-brand px-5 font-semibold text-white hover:bg-brand-dark">Track</button>
      </div>
      {err && <p className="mt-2 text-xs text-brand">{err}</p>}
      <div className="mt-2 flex gap-2 font-mono text-[11px] text-dim">
        {TRACKING_EXAMPLES.map((t) => (<button key={t.ref} onClick={() => { setRef(t.ref); look(t.ref); }} className="hover:text-brand">{t.ref}</button>))}
      </div>

      {rec && (
        <div className="mt-4 border-t border-line pt-4">
          <div className="flex items-center justify-between">
            <div className="font-mono text-lg font-bold text-ink">{rec.ref}</div>
            <span className="rounded-full bg-accent/30 px-2 py-0.5 font-mono text-[11px] font-semibold text-ink">{rec.service}</span>
          </div>
          <p className="text-sm text-muted">{rec.from} → {rec.to} · {rec.weightKg}kg</p>
          <p className="mt-1 text-sm font-semibold text-brand">{rec.status}{rec.eta ? ` · ETA ${rec.eta}` : ''}</p>
          <ol className="mt-3 space-y-2">
            {rec.timeline.map((e, i) => (
              <li key={i} className="flex gap-3">
                <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${DOT[e.status] ?? 'bg-dim'}`} />
                <div className="text-xs">
                  <div className="text-ink">{e.text}</div>
                  <div className="text-dim">{e.time} · {e.location}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
      {!rec && !compact && (
        <p className="mt-4 text-xs text-dim">Sample references above are pre-loaded for the demo. Try one!</p>
      )}
    </div>
  );
}
