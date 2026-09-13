# MJ Web Studio — Fáze 3 Implementace
## Creative Direction: Atelier MJ — Ink & Filament (SCHVÁLENO)

Současný dark/amber web **zahodit vizuálně i layoutově**. Obsahové fakty (ceny, kontakt, služby) můžeš přenést do `src/content/`, ale UI/komponenty Fáze 1–2 nekopíruj. Greenfield look.

## Art direction (povinné)
- **Plátno:** bone/ivory `#F3EEE6` (ne dark)
- **Ink:** `#0C0C0D`
- **Soot (muted):** `#6E6A64`
- **Brass akcent (střídmě):** `#A8844A`
- **Borders:** ink @ ~12% opacity hairlines
- **Type:** editorial serif display (Fraunces / Newsreader přes `next/font`) + precizní grotesk body/UI (Geist / similar)
- **NE:** amber neon glow, glassmorphism, gradient text, floating orbs, generické 3-icon cards
- **MJ/Edison:** monogram pečeť + jemná 1px brass filament linie; Edison story jen na `/studio` (volitelná ilustrace, ne hero žárovka)

## Sitemap & pages
| Route | Obsah |
|-------|--------|
| `/` | Full-viewport hero (1 věta VP) → selected work (2–3 velké frames) → statement + 3 body → services index (editorial list) → closing typographic CTA |
| `/prace` | Portfolio grid/full-bleed; labely Koncept / Ukázková realizace; transparency note |
| `/sluzby` | Hloubka služeb (ne ikonky) |
| `/proces` | Kroky spolupráce, editorial timeline |
| `/cenik` | Mini 4990 / Starter 9990 / Business 19990 — luxury copy, ne SaaS cards; + krátké FAQ |
| `/studio` | O nás, hodnoty, filament myth |
| `/kontakt` | mailto/tel + form UI bez API; silné ale klidné CTA |

Nav: logo → Práce, Služby, Proces, Ceník, Studio, Kontakt + text CTA „Napsat“. Active state. Mobile full-screen editorial menu.

## Motion
Soft page/section enter (fade + 8–12px rise), image reveal, hover underline/scale 1.02. `prefers-reduced-motion` respektovat. Žádný parallax chaos.

## Technika
- Next.js App Router + TS + Tailwind 4 v `/workspace/mjwebstudio`
- `src/content/` data layer (přepsat/rozšířit)
- `src/components/` nové UI (SiteHeader, SiteFooter, PageIntro, WorkFrame, ServiceRow, PriceBlock, CTAQuiet, …)
- `src/app/(site)/…` routes
- Clean code, udržovatelné
- `npm run build` musí projít
- **Ne** GitHub push, **ne** Vercel — Connor syncne lokální preview

## Definition of done
1. Všechny routes, ivory/ink look, žádný zbytek dark-amber template vibe
2. Home není long SaaS landing
3. Portfolio jasně označené ukázky
4. Responzivní desktop/tablet/mobile
5. Build OK + REPORT-FAZE3.md Connorovi

## Pořadí
1. Tokens + fonts + reset globals (ivory world)
2. Content layer
3. Header/Footer + layout
4. Home
5. Ostatní pages
6. Motion polish + build + report
