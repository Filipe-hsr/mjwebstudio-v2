# MJ Web Studio — Fáze 13: FINAL SHIP

Filipe: zapnout web + **dotáhnout na final verzi**. Směr už schválený (Lumen Dark, Logo F, Edison hero s MJ, ceník tabulka, à la carte, 24h, free demo). Teď **production polish**, ne nový koncept.

Projekt: `/workspace/mjwebstudio`

## Cíl
Stránka, kterou by premium studio odevzdalo klientovi: konzistentní, čistá, mobil OK, SEO základ, žádný WIP odpad.

## Povinné

### 1) Meta / SEO (final)
- `openGraph` + `twitter` v root `layout.tsx` (title, description, url, locale cs_CZ, type website)
- OG image: použít existující hero nebo logo (např. `/hero-edison-1x1.png` nebo `/logo-mj-mark.png`) — nastavit `images`
- Per-page metadata zkontrolovat (žádné prázdné / generické)
- `robots` indexovat OK (default)

### 2) Footer final
- Rok copyright `© 2026 MJ Web Studio`
- Krátká linková řada: Služby · Ceník · Kontakt (plus email/tel jak teď)
- Tagline jednou větou pod názvem (volitelně)

### 3) Ceník tabulka — mobile
- Horizontální scroll nebo stacked cards na úzkém viewportu — **žádný rozbitý layout**
- Zachovat ✓ / — / text (3 roky / 5 let)
- Sticky první sloupec pokud zůstane table (preferováno)

### 4) Header / Logo F
- Ověřit Logo F (`/logo-mj-mark.png`) — bez černého boxu, dobrý kontrast na dark
- Favicon/icon = stejný mark (už by měl být)
- Mobile menu: plný, focusable, zavírá na Escape (už je — jen QA)

### 5) Copy konzistence
- Nikde „obvykle“ — všude **„Ozveme se vám do 24 hodin.“**
- Free demo zmínka zůstává (home, ceník, služby, kontakt)
- Práce: nechat explicitní „koncepty / ukázky stylu“ (ne falešní case studies) — OK, jen dolaď intro pokud flat

### 6) Craft polish (targeted, ne redesign)
- Home hero: jemnější glow kolem žárovky, bez přetížení
- Jednotný spacing rhythm na všech stránkách (pt/pb konzistence)
- Focus rings na linky/buttony (accessible, filament tint)
- Hover stavy karet konzistentní

### 7) Úklid (bezpečný)
- Smazat z `public/` nepoužívané WIP: `logo-mj-drawn-a..e`, `logo-mj-mark-old`, `hero-edison-*-f10/f11*` duplicity které **nejsou** importované v kódu
- **NECHAT** aktivní: `hero-edison-1x1.png`, `logo-mj-mark.png`, art-* používané na stránkách, icon/apple-icon
- Před smazáním `rg` / grep že soubor není referencovaný
- Briefy/REPORT mohou zůstat v rootu

### 8) Tech
- `npm run build` OK
- Pokud Next varuje `turbopack.root` / package-lock mimo repo — nastav v `next.config` rozumný `turbopack.root` na projekt (jen pokud warning existuje)
- Žádný Vercel deploy (Filipe zatím ne)
- Žádný GitHub push (Connor syncne)

## Neměnit
- Ceny Mini 4990 / Starter 9990 / Business 19990
- Hosting období 3 / 5 let
- IA / routes
- Brand směr (dark + filament + Edison)

## DoD
1. Build OK
2. Mobile ceník tabulka OK
3. OG/meta + footer final
4. Unused WIP assets pryč (ověřené)
5. `REPORT-FAZE13.md`
6. Krátký report Connora
