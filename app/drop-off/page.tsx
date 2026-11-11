import MapPlaceholder from '@/components/map-placeholder';
import { DROPOFFS } from '@/lib/data';

export const metadata = { title: 'Drop-off points — ShadowSpark Express' };

export default function DropOffPage() {
  const cities = DROPOFFS.map((d) => d.city).filter((v, i, a) => a.indexOf(v) === i);
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-ink">Drop-off points</h1>
      <p className="mt-1 text-muted">Dropping a parcel? Find a {cities.join(', ')} and more — check hours before you travel.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <MapPlaceholder routes={cities} />
        <div className="space-y-3">
          {DROPOFFS.map((d) => (
            <div key={d.id} className="rounded-xl border border-line bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-ink">{d.name}</div>
                <span className="rounded-full bg-accent/30 px-2 py-0.5 text-xs font-semibold text-ink">{d.city}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{d.address}</p>
              <div className="mt-1 text-xs text-dim">{d.hours}</div>
              <div className="mt-1 flex flex-wrap gap-1">
                {d.services.map((s) => (<span key={s} className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-muted">{s}</span>))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
