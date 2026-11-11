import Link from 'next/link';
import TrackingWidget from '@/components/tracking-widget';
import QuoteForm from '@/components/quote-form';
import MapPlaceholder from '@/components/map-placeholder';
import ChatWidget from '@/components/chat-widget';
import { BRAND, COMPANY } from '@/lib/ui';
import { SERVICES, DROPOFFS } from '@/lib/data';

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-accent">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand">A {COMPANY} courier</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Move <span className="text-brand">{BRAND.split(' ')[0]}</span> fast. Deliver 🇳🇬 wide.
            </h1>
            <p className="mt-3 max-w-md text-ink/80">
              Door-to-door express, freight and e-commerce fulfilment across every Nigerian state — every parcel trackable in real time.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/rates" className="rounded-md bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark">Get a quote</Link>
              <Link href="/track" className="rounded-md border border-ink/20 px-5 py-3 font-semibold text-ink hover:border-ink">Track a shipment</Link>
            </div>
          </div>
          <div><TrackingWidget /></div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['36', 'states served'],
          ['1–2 days', 'typical express ETA'],
          ['24/7', 'tracking & support'],
          ['₦', 'transparent paper rates'],
        ].map(([n, l]) => (
          <div key={l} className="rounded-2xl border border-line p-5 text-center">
            <div className="font-mono text-3xl font-bold text-brand">{n}</div>
            <div className="mt-1 text-sm text-muted">{l}</div>
          </div>
        ))}
      </section>

      {/* QUOTE + MAP */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-2">
        <QuoteForm />
        <MapPlaceholder routes={['Lagos–Abuja', 'Ibadan–PHC', 'Kano–Enugu']} />
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-ink">Everything you send</h2>
          <Link href="/services" className="text-sm font-semibold text-brand">All services →</Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.id} className={`rounded-2xl border p-5 ${s.highlight ? 'border-brand bg-brand text-white' : 'border-line bg-white'}`}>
              <div className={`font-semibold ${s.highlight ? 'text-white' : 'text-ink'}`}>{s.title}</div>
              <div className={`text-xs ${s.highlight ? 'text-white/80' : 'text-dim'}`}>{s.by}</div>
              <p className={`mt-2 text-sm ${s.highlight ? 'text-white/90' : 'text-muted'}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DROP-OFF TEASER */}
      <section className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-2xl bg-surface p-6">
          <h2 className="text-xl font-bold text-ink">Find a drop-off point</h2>
          <p className="mt-1 text-sm text-muted">Pickup & drop-off hubs across {DROPOFFS.length}+ locations in major cities.</p>
          <Link href="/drop-off" className="mt-3 inline-block text-sm font-semibold text-brand">Locations & hours →</Link>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
}
