# MJ Web Studio — Fáze 1 (implementace)

## Cíl
Nový marketingový web jako náhrada za https://mjwebstudio.cz/
Dark theme se žárovkou MJ, výjimečný, přitažlivý, příjemný na oči.

## Stack (rozhodnutí Connora)
- Next.js (App Router) + TypeScript + Tailwind CSS 4
- Jednojazyčně **cs**
- Static-friendly (připravené na Vercel později)
- Žádný backend v Fázi 1 — kontakt jako `mailto:` / `tel:` (+ volitelný jednoduchý form UI bez API)

## Design systém
- Pozadí: `#070708` / charcoal
- Accent glow: amber/gold `#F5A524` → `#FF8A1F` (měkké, ne neon-agresivní)
- Text: `#F5F5F4` / muted `#A8A29E`
- Typografie: moderní sans (např. Outfit / Geist / Inter) + volitelně display pro nadpisy
- Motivy: soft glow, subtle grain/noise, light rays, glass cards, micro-motion (respekt `prefers-reduced-motion`)
- Logo: `assets/logo-mj-bulb.png` (+ hires pokud je)
- Edison: `assets/thomas-edison-funny.png` — vtipná sekce (např. „Od žárovky k webu, který svítí“)

## Obsah (z aktuálního webu)
- Hero: „Weby, které prodávají“ / „Nápady, které fungují“ / „Od nápadu po výsledek.“
- Ceník:
  - Mini — 4 990 Kč
  - Starter — 9 990 Kč
  - Business — 19 990 Kč (hosting i doména v ceně, responzivní SEO…)
- Důvěra: od 4 990 Kč · odpověď od 24 h · realizace 1–2 týd.
- Proč my: přehledná struktura, srozumitelné texty, design budící důvěru
- Kontakt: info@mjwebstudio.cz · +420 727 942 839 · Celá ČR · vzdáleně

## Sekce stránky (jedna landing)
1. Header (logo + nav + CTA)
2. Hero (žárovka MJ + headline + CTA)
3. Trust strip (cena / odpověď / realizace)
4. Balíčky (3 karty)
5. Proces (nápad → návrh → vývoj → spuštění)
6. Edison / „kreativní moment“ (vtipná ilustrace)
7. Kontakt + CTA
8. Footer

## Definition of done (Fáze 1)
- `npm run build` projde
- Responzivní mobile/desktop
- Logo a Edison ostré, správně použité
- Tmavý amber look, ne generická šablona
- README s jak spustit
- **Zatím NE** push na GitHub (to až po review Connora)

## Reportuj Connorovi
Co jsi změnil, jak jsi testoval, problémy.
