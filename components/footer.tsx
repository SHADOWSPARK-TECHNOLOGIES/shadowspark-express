import Link from 'next/link';
import { BRAND, COMPANY, SUPPORT } from '@/lib/ui';
import { TRACKING_EXAMPLES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-bold text-ink">{BRAND}</div>
          <p className="mt-2 text-sm text-muted">A {COMPANY} courier product. Swift, tracked deliveries across Nigeria.</p>
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">Ship</div>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            <li><Link href="/rates" className="hover:text-brand">Get a quote</Link></li>
            <li><Link href="/drop-off" className="hover:text-brand">Drop-off points</Link></li>
            <li><Link href="/services" className="hover:text-brand">Services</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">Support</div>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            <li><a href={`tel:${SUPPORT.replace(/\s/g, '')}`} className="hover:text-brand">{SUPPORT}</a></li>
            <li><Link href="/track" className="hover:text-brand">Track a shipment</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">Try a reference</div>
          <div className="mt-2 font-mono text-xs text-muted">
            {TRACKING_EXAMPLES.slice(0, 3).map((t) => (<div key={t.ref}>{t.ref} · {t.status}</div>))}
          </div>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-dim">
        <span className="font-semibold">{BRAND}</span> · a ShadowSpark demonstration clone of a DHL-style courier site —{' '}
        <span className="italic">not affiliated with DHL. All amounts in ₦ (NGN, paper demo).</span>
        <div className="mt-1">© {new Date().getFullYear()} {COMPANY}.</div>
      </div>
    </footer>
  );
}
