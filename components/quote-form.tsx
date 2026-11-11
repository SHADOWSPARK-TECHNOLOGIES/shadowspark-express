'use client';

import * as React from 'react';
import { computeQuote, type Quote } from '@/lib/quote';
import { ZONES, SERVICE_MULT } from '@/lib/data';
import { ngn } from '@/lib/ui';

export default function QuoteForm() {
  const [from, setFrom] = React.useState('Lagos');
  const [to, setTo] = React.useState('Abuja');
  const [weight, setWeight] = React.useState('2');
  const [service, setService] = React.useState('Express');
  const [quote, setQuote] = React.useState<Quote | null>(null);

  const run = () => {
    setQuote(computeQuote({ fromCity: from, toCity: to, weightKg: Number(weight) || 0.5, service }));
  };

  React.useEffect(() => { run(); }, [from, to, weight, service]); // eslint-disable-line react-hooks/exhaustive-deps

  const city = (v: string, set: (s: string) => void) => (
    <select value={v} onChange={(e) => set(e.target.value)} className="h-11 w-full rounded-md border border-line bg-surface px-3 text-ink outline-none focus:border-brand">
      {ZONES.map((z) => (<option key={z.name} value={z.name}>{z.name}</option>))}
    </select>
  );

  const input = 'h-11 w-full rounded-md border border-line bg-surface px-3 text-ink outline-none focus:border-brand';

  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-ink">Get an instant quote</div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="text-xs text-muted">From {city(from, setFrom)}</label>
        <label className="text-xs text-muted">To {city(to, setTo)}</label>
        <label className="text-xs text-muted">Weight (kg)
          <input type="number" min="0.5" step="0.5" value={weight} onChange={(e) => setWeight(e.target.value)} className={input} />
        </label>
        <label className="text-xs text-muted">Service
          <select value={service} onChange={(e) => setService(e.target.value)} className={input}>
            {Object.keys(SERVICE_MULT).map((s) => (<option key={s}>{s}</option>))}
          </select>
        </label>
      </div>

      {quote && (
        <div className="mt-4 flex items-center justify-between rounded-md bg-accent/25 px-4 py-3">
          <div className="text-sm text-ink">{quote.from} → {quote.to} · {quote.weightKg}kg · <span className="font-medium">{quote.service}</span></div>
          <div className="text-right">
            <div className="font-mono text-2xl font-bold text-ink">{ngn(quote.totalNgn)}</div>
            <div className="text-xs text-muted">ETA: {quote.eta}</div>
          </div>
        </div>
      )}
      <p className="mt-3 text-[11px] text-dim">Demonstration rates only — not financial advice.</p>
    </div>
  );
}
