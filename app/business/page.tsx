import { BRAND } from '@/lib/ui';

export const metadata = { title: 'Business — ShadowSpark Express' };

export default function BusinessPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-ink">Business portal</h1>
      <p className="mt-1 text-muted">Ship at scale, track everything, reconcile easily. (Demonstration UI.)</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-line bg-white p-5 lg:col-span-1">
          <div className="text-sm font-semibold text-ink">Sign in</div>
          <label className="mt-3 block text-xs text-muted">Business email
            <input type="email" placeholder="ops@company.ng" className="h-10 w-full rounded-md border border-line bg-surface px-3 text-ink outline-none focus:border-brand" />
          </label>
          <button className="mt-3 h-10 w-full rounded-md bg-brand font-semibold text-white hover:bg-brand-dark">Sign in</button>
          <p className="mt-2 text-[11px] text-dim">Demo only — no account creation or real auth wired.</p>
        </div>

        <div className="rounded-2xl border border-line bg-white p-5 lg:col-span-2">
          <div className="text-sm font-semibold text-ink">Recent manifests</div>
          <table className="mt-2 w-full text-sm">
            <thead className="text-left text-muted"><tr><th className="py-1 pr-3">Ref</th><th className="pr-3">Destination</th><th className="pr-3">Qty</th><th>Status</th></tr></thead>
            <tbody className="divide-y divide-line">
              {[
                ['SSX-10001', 'Abuja', '1', 'Out for delivery'],
                ['SSX-10002', 'Enugu', '1', 'In transit'],
                ['SSX-10099', 'Kano', '24', 'Booked'],
              ].map(([r, d, q, s]) => (
                <tr key={r}>
                  <td className="py-2 font-mono text-ink">{r}</td>
                  <td className="py-2 text-muted">{d}</td>
                  <td className="py-2 text-muted">{q}</td>
                  <td className="py-2 text-brand">{s}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 rounded-lg bg-accent/20 px-3 py-2 text-xs text-ink">Volume pricing, quotes API and CSV export are the production road-map for the {BRAND} business tier.</div>
        </div>
      </div>
    </div>
  );
}
