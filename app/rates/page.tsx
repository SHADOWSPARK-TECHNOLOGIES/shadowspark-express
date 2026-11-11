import QuoteForm from '@/components/quote-form';
import { SERVICE_MULT } from '@/lib/data';
import { ngn } from '@/lib/ui';

export const metadata = { title: 'Rates — ShadowSpark Express' };

const CARD: Array<[string, number, string]> = [
  ['Lagos → Lagos', 9000, 'Same day'],
  ['Lagos → Abuja', 14500, '1–2 days'],
  ['Abuja → Kano', 16500, '1–2 days'],
  ['Lagos → Port Harcourt', 15000, '1–2 days'],
];

export default function RatesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-ink">Rates & quotes</h1>
      <p className="mt-1 text-muted">Instant, transparent pricing in Nigerian Naira. Paper demo rates — not a price list.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <QuoteForm />
        <div className="rounded-2xl border border-line p-5">
          <div className="text-sm font-semibold text-ink">Indicative all-in pricing (2kg)</div>
          <table className="mt-2 w-full text-sm">
            <tbody className="divide-y divide-line">
              {CARD.map(([route, price, eta]) => (
                <tr key={route}>
                  <td className="py-2 text-ink">{route}</td>
                  <td className="py-2 text-right font-mono font-bold text-brand">{ngn(price)}</td>
                  <td className="py-2 text-right text-dim">{eta}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 text-xs text-muted">
            Service multipliers: {Object.entries(SERVICE_MULT).map(([k, v]) => `${k} ${v.toFixed(2)}×`).join(' · ')}
          </div>
        </div>
      </div>
    </div>
  );
}
