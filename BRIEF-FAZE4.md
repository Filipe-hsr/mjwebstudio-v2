# MJ Web Studio — Fáze 4 (PIVOT)
## „Lumen Dark“ — clean luxury around the MJ bulb

Filipe odmítl Ink & Filament ivory editorial: moc informací, přeplácané, nečitelné, neklikací.
**Zahodit** ivory/ink paper look a textové zdi. Stavět kolem brand assetu žárovky MJ (dark + warm filament).

## Art direction (povinné)
- **Bg:** deep charcoal / near-black `#0A0A0B` (ne ivory)
- **Text:** soft white `#F5F2EB` + muted `#9A9590`
- **Accent:** warm filament amber `#E8A03A` → `#FF8A1F` — **střídmě**, jako světlo žárovky, ne neon SaaS glow všude
- **Hero visual:** `logo-mj-bulb-hires.png` (nebo hires) — **animovaná** (jemný pulse glow, float 4–6s, filament shimmer). Rychlé, 60fps-friendly CSS, žádný těžký JS.
- **Edison:** animovaný / živý moment (CSS nebo lehká ilustrace) — na Home nebo /studio, ne jako textová esej
- **Luxus = prázdno.** Obrovský whitespace. 1 idea na viewport. Krátké věty. Žádné odstavce románů.
- **NE:** editorial wall of text, 12 odkazů v hero, statement essays, „Atelier“ meta-copy, ivory paper, Fraunces-heavy long reading pages

## Typografie
- 1 display font (Syne / similar bold geometric) + 1 clean sans
- H1 max ~8–12 slov
- Body max 1–2 krátké věty na blok

## IA (multi-page, ale lehké)
`/` Home — bulb hero + 1 VP + 2 CTA · 3 čísla max · 3 práce jako velké tiché frames · 1 CTA
`/prace` — portfolio, málo textu
`/sluzby` — krátké řádky, ne eseje
`/cenik` — 3 ceny, čistě
`/proces` — 4 kroky, 1 řádek každý
`/studio` — Edison + 1 odstavec brand
`/kontakt` — form + kontakty, čistě

Nav: max 5–6 položek, drobná. CTA jedna.

## Motion (clean + fast)
- Bulb: pulse-glow + float (CSS only)
- Page: fade/rise 200–300ms
- Hover: opacity / translate 2px
- `prefers-reduced-motion`
- Žádný parallax chaos, žádné scroll essays

## Technika
- `/workspace/mjwebstudio` Next.js App Router + TS + Tailwind
- Přepsat globals, layout, pages, komponenty — **ne** patchovat ivory verzi
- Content layer zkrátit copy na minimum
- Assety: `/public/logo-mj-bulb-hires.png`, Edison pokud dává smysl
- `npm run build` OK
- **Ne** GitHub/Vercel

## Success
Otevře Home → „ty vole, žárovka + klid + drahé“. Ne „kde mám začít číst“.

## Report
REPORT-FAZE4.md Connorovi po buildu.
