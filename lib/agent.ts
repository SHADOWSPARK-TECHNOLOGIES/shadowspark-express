/** Mock AI assistant for ShadowSpark Express — keyword rules → friendly replies.
 * Real conversation AI is a documented env swap; this keeps the demo self-contained. */

import { computeQuote } from './quote';
import { DROPOFFS, ZONES, TRACKING_EXAMPLES, type TrackingRecord } from './data';
import { ngn } from './ui';

export function lookupTracking(ref: string): TrackingRecord | null {
  const r = TRACKING_EXAMPLES.find((t) => t.ref.toLowerCase() === ref.trim().toLowerCase());
  return r ?? null;
}

export function agentReply(text: string): string {
  const t = text.toLowerCase();
  if (/track|where is|status|shipment/.test(t)) {
    const m = t.match(/(ssx[-\s]?\d{4,5})/);
    if (m) {
      const hit = lookupTracking(m[1]);
      return hit
        ? `${hit.ref} (${hit.service}) — ${hit.status}. Last: "${hit.timeline[0]?.text ?? '—'}". ETA: ${hit.eta ?? '—'}.`
        : `I couldn't find "${m[1]}". Delivery references start with SSX- (e.g. SSX-10001).`;
    }
    return 'Sure! Send me your tracking number (SSX-XXXXX) and I’ll pull the latest update. You can also try SSX-10001.';
  }
  if (/quote|price|cost|how much|rate|estimate/.test(t)) {
    const m = t.match(/from\s+([a-z ]+?)\s+to\s+([a-z ]+)/);
    if (m) {
      const from = ZONES.map((z) => z.name).find((c) => c.toLowerCase().startsWith(m[1]!.replace(/\s*$/, '').slice(0, 5)));
      const to = ZONES.map((z) => z.name).find((c) => c.toLowerCase().startsWith(m[2]!.trim().slice(0, 5)));
      if (from && to) {
        const q = computeQuote({ fromCity: from, toCity: to, weightKg: 2, service: 'Express' });
        return `${from} → ${to}, ~2kg: ${ngn(q.totalNgn)} via ${q.service}. ETA ${q.eta}. Use the calculator for exact weight.`;
      }
    }
    return 'I can estimate a quote — e.g. "quote from Lagos to Abuja". Or use the rates calculator above.';
  }
  if (/drop[-\s]?off|location|pickup point|where can i/.test(t)) {
    const cities = DROPOFFS.map((d) => d.city).filter((v, i, a) => a.indexOf(v) === i);
    return `Pickup & drop-off points open across ${cities.join(', ')} and more. Tell me your city and I’ll list the nearest one.`;
  }
  if (/human|agent|person|talk to|help me (now|pls|please)|complaint/.test(t)) {
    return 'No wahala — connecting you to a human. Our team replies shortly; call us on +234 1 700 0000 if it’s urgent. 🙏';
  }
  if (/hi|hello|hey|how far|good (morning|afternoon|evening)/.test(t)) {
    return 'How far! 👋 Welcome to ShadowSpark Express. I can track a parcel (SSX-…), get a quote, or find a drop-off point. What do you need?';
  }
  if (/thank|thanks|merci|much appreciated/.test(t)) {
    return 'You’re welcome! Anything else I can help with?';
  }
  return 'I’m happy to help with tracking, quotes and drop-off points. Try "track SSX-10001" or "quote from Lagos to Abuja".';
}
