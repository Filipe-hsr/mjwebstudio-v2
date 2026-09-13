# MJ Web Studio — Fáze 2: vícestránkový profesionální web

## Verdikt současného stavu
- Jedna landing page (~785 LOC), 3 nav odkazy na kotvy, tenký obsah.
- Brand (dark + amber + žárovka) je dobrý základ, ale působí jako krátký template.
- Chybí: skutečné stránky, hloubka služeb, portfolio, FAQ, o nás, silná IA.

## Cíl
Profesionální multi-page web agentury. Prémiový, důvěryhodný, ne AI-template. Dark + amber + MJ žárovka / Edison motiv — sofistikovaněji.

## Informační architektura

| Route | Účel | Návštěvník si odnese |
|-------|------|----------------------|
| `/` | Home — story + důkaz + CTA | co děláme, proč my, důkaz, cena, kontakt |
| `/sluzby` | Katalog služeb do hloubky | co přesně umíme |
| `/cenik` | Balíčky + srovnání + FAQ ceny | kolik to stojí |
| `/reference` | Portfolio (označené jako ukázky / koncepty) | jak to vypadá |
| `/proces` | Timeline spolupráce + očekávání | jak to běží |
| `/o-nas` | Studio, hodnoty, Edison brand story | komu svěřuji web |
| `/kontakt` | Formulář + kontakty + CTA | jak začít |

### Home sekce (pořadí)
1. Hero — silná VP + žárovka MJ + 2 CTA (ceník / kontakt)
2. Trust strip — od 4 990 Kč · 24 h · 1–2 týd.
3. Služby preview (3–4 karty → `/sluzby`)
4. Proč MJ Web Studio (4 pilíře)
5. Reference preview (3 karty → `/reference`) — label „Ukázkové realizace“
6. Proces preview (4 kroky → `/proces`)
7. Ceník preview (3 balíčky → `/cenik`)
8. FAQ (5–7 otázek)
9. Edison / brand moment (kratší)
10. Finální CTA band → `/kontakt`

### Navigace
Domů · Služby · Ceník · Reference · Proces · O nás · Kontakt (+ CTA „Nezávazně poptat“)
Active state podle pathname. Mobile: plný sheet se všemi odkazy.

## Design systém (upgrade)
- Zachovat tokeny: bg `#070708`, amber `#F5A524`→`#FF8A1F`, muted, glass, grain, rays
- Typografie: Syne display + Outfit body; větší hierarchy (H1 3.5–4.5rem desktop)
- Komponenty: `PageHero`, `SectionHeader`, `GlassCard`, `Button` (primary/ghost), `CTABand`, `FaqAccordion`, `ProjectCard`, `PackageCard`, `ProcessStep`
- Motion: CSS transitions + `prefers-reduced-motion`; subtle hover lift/glow; žádný chaos
- Spacing: max-w-6xl/7xl, velkorysé section padding (py-20–28)

## Data vrstva (udržovatelnost)
`src/content/` (nebo `src/data/`):
- `nav.ts`, `services.ts`, `packages.ts`, `projects.ts`, `process.ts`, `faq.ts`, `studio.ts`, `site.ts`
Každá stránka bere data odtud — snadné přidávat reference/služby.

### Packages (zachovat ceny)
- Mini 4 990 · Starter 9 990 · Business 19 990 (+ hosting/doména u Business)

### Projects (placeholders — NE jako reální klienti)
Označení: „Ukázková realizace“ / „Koncept“. 4–6 položek, různé obory (restaurace, řemeslo, B2B, osobní značka, e‑shop lite, studio). Fake názvy zjevně konceptuální (např. „Ateliér Sever“, „Bistro Lumen“).

### Services (návrh)
Firemní weby · Landing pages · Redesign · SEO & výkon · Údržba · Konzultace

## Technika
- Next.js App Router, TS, Tailwind 4
- `src/app/(site)/layout.tsx` — shared Header/Footer
- Pages: `page.tsx` + metadata (title/description cs) per route
- Link z `next/link`, Image z `next/image`
- Kontakt: mailto/tel + form UI (bez backend API zatím); volitelně `action=mailto`
- `npm run build` musí projít
- **Ne pushovat na GitHub / Vercel**, dokud Connor neřekne

## Definition of done
- Všechny 7 routes fungují, unikátní obsah + design
- Nav konzistentní, active states, mobile OK
- Home pokrývá požadované sekce
- Portfolio jasně označené jako ukázky
- Build OK, žádný template vibe
- Report Connorovi: co, kde, co testováno

## Pořadí implementace (pro CF100)
1. Data vrstva + design tokens/komponenty shell
2. Layout + Header/Footer (route nav)
3. Home komplet
4. `/sluzby`, `/cenik`, `/reference`
5. `/proces`, `/o-nas`, `/kontakt`
6. Polish motion/mobile + build + report
