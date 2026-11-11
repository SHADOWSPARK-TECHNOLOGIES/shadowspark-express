/** Instant shipping quote (NGN) — DHL-style rate card. Mock-first, typed. */
import { ZONES, SERVICE_MULT, type CityZone } from './data';

export interface QuoteInput {
  fromCity: string;
  toCity: string;
  weightKg: number;
  service: string;
}

export interface Quote {
  from: string;
  to: string;
  weightKg: number;
  service: string;
  zone: number;
  serviceMult: number;
  totalNgn: number;
  eta: string;
}

const BASE_NGN = 4500;
const PER_KG_NGN = 950;
const ZONE_MULT = [0, 1.0, 1.25, 1.6, 1.95];

export const cityZone: Record<string, number> = Object.fromEntries(ZONES.map((z) => [z.name, z.zone]));

export function etaByZone(zone: number, service: string): string {
  const s = SERVICE_MULT[service] ?? 1.0;
  if (s >= 1.35) return zone <= 1 ? 'Tomorrow' : '2–3 business days';
  if (s >= 1.0) return zone <= 1 ? 'Today–Tomorrow' : '1–2 business days';
  return zone <= 2 ? 'Same day (metro)' : '1–2 business days';
}

export function computeQuote(input: QuoteInput): Quote {
  const fromZone = cityZone[input.fromCity] ?? 1;
  const toZone = cityZone[input.toCity] ?? 1;
  const zone = Math.min(4, Math.max(1, Math.abs(fromZone - toZone) + 1));
  const mult = SERVICE_MULT[input.service] ?? 1.0;
  const weight = Math.max(0.5, input.weightKg);
  const weightCost = Math.max(1, Math.ceil(weight)) * PER_KG_NGN;
  const total = Math.round((BASE_NGN + weightCost) * ZONE_MULT[zone - 1] * mult);
  return {
    from: input.fromCity,
    to: input.toCity,
    weightKg: input.weightKg,
    service: input.service,
    zone,
    serviceMult: mult,
    totalNgn: total,
    eta: etaByZone(zone, input.service),
  };
}

export const QUOTE_DEFAULTS: QuoteInput = { fromCity: 'Lagos', toCity: 'Abuja', weightKg: 2, service: 'Express' };
export type { CityZone };
