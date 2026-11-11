import { SERVICES } from '@/lib/data';

export const metadata = { title: 'Services — ShadowSpark Express' };

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-ink">Our services</h1>
      <p className="mt-1 text-muted">From a single envelope to full pallets — moving Nigeria forward.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.id} className={`rounded-2xl border p-6 ${s.highlight ? 'border-brand bg-brand text-white' : 'border-line bg-white'}`}>
            <div className={`text-lg font-bold ${s.highlight ? 'text-white' : 'text-ink'}`}>{s.title}</div>
            <div className={`text-xs ${s.highlight ? 'text-white/80' : 'text-dim'}`}>{s.by}</div>
            <p className={`mt-3 text-sm ${s.highlight ? 'text-white/90' : 'text-muted'}`}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
