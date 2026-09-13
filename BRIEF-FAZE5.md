# MJ Web Studio — Fáze 5
## „Lumen Elevated“ — same dark+bulb DNA, 10× more craft

Filipe: F4 lepší než ivory, ale „web za 30 min / 1000 Kč“. Chce víc efektů, Edisona blíž k začátku, trochu víc textu (ne román), zajímavý ceník, fakt hezky / prémiově.

**Ne** vracet ivory editorial zdi. **Ne** nechat F4 empty template. Elevate F4.

## Must ship
### 1) Home — first impression
- Full-bleed bulb hero s **silnější** animací: soft rays, breathing glow, subtle light leak, filament shimmer (stále CSS, rychlé)
- Edison **na Home** (ne schovaný jen na /studio) — elegantní panel pod hero / vedle statement: ilustrace + 1–2 věty brand myth
- Krátký value block (3–4 řádky max) — co děláme + proč
- Selected work: větší, hezčí frames (grain, border light, hover parallax 1–2%)
- Closing CTA s ambient glow

### 2) Copy diet 2.0
- Víc než F4, míň než F3
- Každá stránka: krátký intro (2–3 věty) + scannable body
- Žádné eseje, žádné meta „luxus = typografie…“

### 3) Ceník — musí vypadat draze
- Ne 3 stejné nudné karty
- Editorial layout: featured Starter jako „doporučeno“ s filament rim light
- Mini / Business asymetricky
- Microcopy pod cenou (co je v balíčku) — 4–6 bullets, ne zeď
- Hover / focus states, jemný shine na CTA
- Volitelně porovnávací řádek „vhodné pro…“

### 4) Efekty (prémiové, ne gimmick)
- Scroll reveal (IntersectionObserver nebo CSS) — rise + fade, stagger
- Nav blur + border light on scroll
- Button magnetic-ish or shine sweep (lightweight)
- Page transitions soft
- `prefers-reduced-motion` musí fungovat

### 5) Detaily craft
- Konzistentní max-width, rytmus sekcí (ne náhodné py)
- Lepší typografická hierarchie (Syne display větší kontrast)
- Hairline separators s filament accent tečkou
- Favicon/OG OK

## Out of scope
- Vercel / GitHub push
- Změna cen čísel (4990 / 9990 / 19990)

## DoD
- `npm run build` OK
- Home: bulb + Edison early + richer motion
- `/cenik` visibly more premium than F4
- REPORT-FAZE5.md

Priorita: **wow craft**, ne víc stránek.

## Dodatek Filipe (logo + Edison MJ)
- Použij **clean logo**: `/public/logo-mj-bulb-clean.png` (nebo přepsané `logo-mj-bulb-hires.png`) — čistá žárovka, filament MJ, black bg, bez labelů.
- Edison na Home: `/public/edison-mj-bulb.png` — v žárovce **filament MJ** (ne obyčejná spirálka).
- Logo v headeru/favicon: clean bulb, malé, bez clutter.
- Celkově logo treatment: minimal, sharp, luxusní — ne brand sheet s textem kolem.
