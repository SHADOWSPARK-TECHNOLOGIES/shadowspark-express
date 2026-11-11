import Link from 'next/link';
import { BRAND, COMPANY } from '@/lib/ui';

export function Logo({ inverse }: { inverse?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="logo-block h-8 w-8 items-center justify-center rounded-sm text-lg font-bold text-brand">SS</span>
      <span className={`font-extrabold tracking-tight ${inverse ? 'text-white' : 'text-ink'}`}>{BRAND}</span>
    </span>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        <Link href="/" aria-label="Home"><Logo /></Link>
        <nav className="ml-auto hidden items-center gap-1 md:flex">
          <Link href="/track" className="rounded-md px-3 py-1.5 text-sm font-medium text-ink hover:text-brand">Tracking</Link>
          <Link href="/rates" className="rounded-md px-3 py-1.5 text-sm font-medium text-ink hover:text-brand">Rates</Link>
          <Link href="/drop-off" className="rounded-md px-3 py-1.5 text-sm font-medium text-ink hover:text-brand">Drop-off points</Link>
          <Link href="/services" className="rounded-md px-3 py-1.5 text-sm font-medium text-ink hover:text-brand">Services</Link>
          <Link href="/business" className="rounded-md px-3 py-1.5 text-sm font-medium text-ink hover:text-brand">Business</Link>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a href="/track" className="rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark">Track a shipment</a>
        </div>
        <span className="text-[11px] uppercase tracking-wider text-dim md:hidden">by {COMPANY}</span>
      </div>
    </header>
  );
}
