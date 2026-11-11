import { BRAND, COMPANY, SUPPORT } from '@/lib/ui';

export const metadata = { title: 'Support — ShadowSpark Express' };

const FAQ: Array<[string, string]> = [
  ['How long does delivery take?', 'Express is typically 1–2 business days between states; same-day in Lagos metro. Express Saver is 2–3 days.'],
  ['How do I track my parcel?', 'Use the tracking page with your SSX reference (e.g. SSX-10001), or ask the chat assistant.'],
  ['Where do I drop off?', 'Any of our pickup & drop-off points — see the Drop-off page for addresses and hours.'],
  ['Is this affiliated with DHL?', 'No. ShadowSpark Express is a demonstration clone built by ShadowSpark Technologies; it is not affiliated with DHL.'],
  ['Can I get a business account?', 'The business portal is a demo. Real volume accounts are a production road-map item.'],
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-ink">Support</h1>
      <p className="mt-1 text-muted">{BRAND}, by {COMPANY}. Reach us any time.</p>
      <div className="mt-4 rounded-xl bg-brand p-5 text-white">
        <div className="text-sm text-white/80">Customer care</div>
        <div className="font-mono text-2xl font-bold">{SUPPORT}</div>
        <div className="text-sm text-white/80">Mon–Sun · 24/7</div>
      </div>

      <h2 className="mt-8 text-xl font-bold text-ink">Frequently asked</h2>
      <div className="mt-3 space-y-2">
        {FAQ.map(([q, a]) => (
          <details key={q} className="rounded-xl border border-line bg-white px-4 py-3">
            <summary className="cursor-pointer font-medium text-ink">{q}</summary>
            <p className="mt-2 text-sm text-muted">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
