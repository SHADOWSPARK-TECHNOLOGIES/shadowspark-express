import TrackingWidget from '@/components/tracking-widget';
import { TRACKING_EXAMPLES } from '@/lib/data';

export const metadata = { title: 'Track — ShadowSpark Express' };

export default function TrackPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-ink">Track your shipment</h1>
      <p className="mt-1 text-muted">Enter a delivery reference (SSX-XXXXX) to see the latest status and full timeline.</p>
      <div className="mt-6"><TrackingWidget /></div>

      <div className="mt-8">
        <h2 className="text-xl font-bold text-ink">Recent examples</h2>
        <div className="mt-3 space-y-2">
          {TRACKING_EXAMPLES.map((t) => (
            <div key={t.ref} className="flex items-center justify-between rounded-xl border border-line px-4 py-3">
              <div>
                <div className="font-mono font-bold text-ink">{t.ref}</div>
                <div className="text-xs text-muted">{t.from} → {t.to} · {t.service}</div>
              </div>
              <span className="rounded-full bg-accent/30 px-2 py-0.5 text-xs font-semibold text-ink">{t.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
