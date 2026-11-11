# ss//shadowspark-express — DHL-style courier website

A **ShadowSpark Technologies** courier/logistics website in the style of DHL:
parcel **tracking**, instant **NGN rates**, **drop-off points**, **services**,
a **business portal** and a mock **AI assistant**.

> ⚠ Demonstration clone — **not affiliated with DHL.** DHL-inspired look and
> structure only; all branding, copy and ₹/₦ pricing are original and fictional.

## Stack
- Next.js 15 (App Router) · TypeScript strict · Tailwind · React 19
- DHL-style palette (red `#D40511`, yellow `#FFCC00`) on a clean light theme
- **Mock-first**: no backend, no API keys — everything renders from typed
  fixtures (`lib/data.ts`), the quote engine (`lib/quote.ts`) and a keyword-rule
  assistant (`lib/agent.ts`). Real tracking/quote AI is a documented swap.

## Pages
`/` landing · `/track` tracking (SSX-…, sample refs) · `/rates` NGN calculator
· `/drop-off` points + map placeholder · `/services` · `/business` portal ·
`/support` FAQ. Floating `Shade` chat assistant on every page.

## Run
```bash
pnpm install
pnpm dev        # :3000
# gates
pnpm typecheck && pnpm lint && pnpm build
```

## Layout
```
app/            pages (App Router)
components/     nav, footer, tracking-widget, quote-form, chat-widget, map-placeholder
lib/            data.ts (fixtures), quote.ts (NGN rates), agent.ts (mock AI), ui.ts (brand + helpers)
styles/         tailwind theme (DHL palette)
```

Created for ShadowSpark Technologies. © 2026.
