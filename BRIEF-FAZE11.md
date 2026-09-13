# MJ Web Studio — Fáze 11

Filipe: není to špatný, ale ještě o level výš.
- Hero: nová fotka — **MJ ve žárovce (filament)**, dobře oříznout
- Ceník: víc info pod balíčky (co je co), hezky
- Starter: **doména + hosting na 3 roky** (nebo smysluplná doba)
- Business: doména + hosting **na dlouho** (5 let)
- Doplnit: přes nás koupit URL, nebo řešit jen hosting
- Positioning: nejen tvorba webů — **„autoservis pro weby“** (redesign, údržba, hosting, domény)
- Efekty / craft ještě o stupeň výš

## Assety (Connor připraví / už v public)
- Hero: `/public/hero-edison-1x1.png` — nahradit F11 verzí s MJ ve filamentu + dobrý 1:1 crop (ušima, celá žárovka)
- Stará verze bez MJ: nechat jako backup `hero-edison-1x1-f10.png` pokud existuje; hlavní hero = nový
- Header mark beze změny (`logo-mj-mark.png`)
- Žádná fotka 2× na webu

## Ceník — obsah (povinné)

Ceny beze změny: Mini **4 990** / Starter **9 990** / Business **19 990** Kč.

### Balíčky — features update
**Mini**
- Jednostránkový web, responziv, základní SEO, dodání 1–2 týdny
- Hosting/doména: *není v ceně* (lze dokoupit)

**Starter** (doporučeno)
- Více sekcí/podstránek, vizuál, SEO, formulář, doladění, návod
- **Doména + hosting na 3 roky v ceně**

**Business**
- Vše ze Starteru + rozšířený obsah/CTA, prioritní podpora
- **Doména + hosting na 5 let v ceně**
- Preferovaná podpora / péče po spuštění

### Pod kartami — nová sekce „Co je co“ (hezky, ne wall of text)
Krátké vysvětlení 3–4 položek v gridu/cards:
1. **Doména (URL)** — adresa webu (např. vasefirma.cz); umíme zajistit nákup a správu
2. **Hosting** — kde web běží; rychlost, SSL, dostupnost
3. **Nový web** — od nuly: struktura, design, texty, spuštění
4. **Redesign / servis** — stávající web jako v autoservisu: oprava, facelift, výkon, údržba

Tone: premium, stručný, česky. Bez přetížení textem.

### Extra CTA strip pod tím (volitelné ale preferované)
Jedna řádka: „Potřebujete jen doménu, hosting, nebo servis stávajícího webu? Napište — vyřešíme i bez nového projektu.“ → /kontakt

## Služby — positioning „autoservis pro weby“
Upravit `/sluzby` (a případně home value line / studio pokud sedí):
- Redesign posílit metaforou: web jako auto — pravidelný servis, facelift, diagnostika výkonu
- Přidat nebo upravit služby:
  - **Domény & hosting** — nákup URL, hosting, SSL, správa
  - **Webový servis / redesign** — údržba, opravy, redesign (autoservis framing)
- Stávající Firemní weby / Landing / SEO / Údržba / Konzultace zůstat, doladit wording aby celek nepůsobil jen „děláme nové weby“

## Design level-up (CSS, rychlé)
- Hero: silnější glow kolem žárovky (MJ filament má zářit)
- Cenik cards: lepší hierarchy, „Co je co“ sekce s jemným rim/glow
- Drobný polish spacing/typography na cenik + sluzby
- Neměnit globálně celý design systém — targeted craft

## Neměnit
- Ceny číselně
- Kontaktní údaje
- Stack / routing struktura
- Žádný Vercel deploy

## DoD
1. `npm run build` OK
2. Hero používá nový asset s MJ ve filamentu
3. Ceník: balíčky + „Co je co“ + hosting období
4. Služby: autoservis / hosting / domény positioning
5. `REPORT-FAZE11.md` v rootu projektu
6. Ne pushovat na GitHub (Connor syncne)

Projekt: `/workspace/mjwebstudio`
