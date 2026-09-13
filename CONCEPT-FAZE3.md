# MJ Web Studio — Fáze 3 Concept
## Creative Direction: „Atelier MJ — Ink & Filament“

### Teze
Web jako řemeslný objekt, ne produktová landing. Světlo je materiál (filament), ne neonový glow. Luxus vzniká typografií, prostorem a precizí — ne efekty.

### Proč tohle (a ne dark amber SaaS)
Současná verze = dark + amber glow + glass cards = AI/agency template. High-end studia (editorial / brand ateliers) často stojí na papírové bílé, inkové typografii a jednom drahém akcentu. Odlišíme se od současného webu i od generických dark SaaS.

### Art direction
**Paleta**
- Bone / ivory plátno `#F3EEE6`
- Ink black `#0C0C0D`
- Soft soot `#6E6A64`
- Brass (akcent, střídmě) `#A8844A`
- Hairline border `ink @ 12%`

**Typografie**
- Display: vysoce charakteristický serif (např. Fraunces / Newsreader / podobný editorial serif) — velké, klidné titulky
- UI/body: precizní grotesk (např. Neue Montreal / Satoshi / Geist) — úzký tracking v nav
- Hierarchy: 1 idea per viewport na desktopu, obří H1, dlouhý leading v body

**Imagery / assets**
- Fotografický / 3D feel: měkké světlo, textury papíru, jemný grain
- Portfolio: full-bleed frames, ne malé kartičky ve 3 sloupcích
- Edison/MJ: **ne** dominantní žárovka. Monogram „MJ“ jako pečeť + jemná filament linie (1px brass curve) v detailu, footer, loader. Edison story jen na /studio jako krátký brand myth — ilustrace volitelně, ne hero.

**Layout**
- Asymetrický editorial grid (12 col): text offset, velké prázdno
- Sekce střídají full-bleed a úzký reading measure (≈65ch)
- Žádné opakující se „3 stejné karty s ikonkou“

**Motion (málo, ale drahé)**
- Page enter: soft fade + 8–12px rise
- Scroll: reveal mask na imagery, stagger 40–80ms
- Hover: underline grow, image subtle scale 1.02, magnetic na CTA (desktop)
- Prefers-reduced-motion: vypnout vše kromě opacity
- Žádný parallax chaos, žádné floating orbs

### Co záměrně zahazujeme
Dark charcoal bg, amber neon glow, glassmorphism karty, gradient text „prodávají“, template trust strip, generické 3-column package cards jako hlavní vizuál.

---

## Sitemap (návrh)

| Route | Název | Role |
|-------|-------|------|
| `/` | Domů | Brand moment + VP + vybraná práce + vstup do služeb/ceny + CTA |
| `/prace` | Práce | Portfolio (ukázky/koncepty, jasně označené) |
| `/sluzby` | Služby | Hloubka nabídky, ne ikonky |
| `/proces` | Proces | Jak spolupráce probíhá |
| `/cenik` | Ceník | Investice / balíčky + srovnání |
| `/studio` | Studio | O nás, hodnoty, filament myth |
| `/kontakt` | Kontakt | Konverzní stránka |

Nav: Domů nemusí být v listu (logo). CTA v nav = text „Napsat“ ne velké oranžové tlačítko.

### Home (ne long-scroll landing)
1. Full-viewport hero — 1 věta VP + monogram, CTA „Prohlédnout práci“ / „Napsat“
2. Selected work — 2–3 velké case frames → /prace
3. Statement strip — proč MJ (1 odstavec + 3 precizní body)
4. Services index — horizontální / editorial list → /sluzby
5. Closing CTA — klidný, typografický

Detail cen, FAQ, proces, studio = vlastní stránky (ne vše na home).

### Konverzní flow
Práce (důkaz) → Služby (fit) → Ceník (očekávání) → Kontakt (akce).
Každá stránka má jedno primární CTA dolů / v nav.

### UX principy
- 5s test: „dělají prémiové weby pro firmy v ČR“
- Ceny transparentní na /cenik (zachovat Mini/Starter/Business čísla, přeformulovat jazyk)
- Portfolio vždy label Koncept / Ukázka
- Mobile: full-screen menu, stacked editorial, velké tap targets, žádné hover-only

### Technika (až po schválení)
Nový App Router skeleton (klidně greenfield ve stejné repo větvi), content layer, Framer Motion nebo CSS scroll-timeline střídmě, Next.js + TS. Bez Vercel do odvolání.

### Success look
První dojem: tiché, drahé, sebevědomé. Ne „wow efekty“, ale „tohle někdo opravdu navrhl“.
