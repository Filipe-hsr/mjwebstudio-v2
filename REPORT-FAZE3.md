# Report Fáze 3 — CF100 → Connor

## Creative direction
**Atelier MJ — Ink & Filament** (SCHVÁLENO). Greenfield look — dark/amber UI Fáze 1–2 zahozeno.

## Co je hotové
Projekt: `/workspace/mjwebstudio`

### Routes (static, build OK)
| Route | Obsah |
|-------|--------|
| `/` | Full-viewport hero (1 VP) → selected work (3 frames) → statement + 3 body → services editorial list → CTAQuiet |
| `/prace` | Full-bleed frames, labely Koncept/Ukázka, transparency note |
| `/sluzby` | Editorial hloubka (bez ikonek) |
| `/proces` | Timeline 01–04 + očekávání |
| `/cenik` | Mini/Starter/Business jako PriceBlock (ne SaaS cards) + FAQ |
| `/studio` | Hodnoty + filament myth + volitelná Edison ilustrace (ne hero) |
| `/kontakt` | mailto/tel + form UI, klidné CTA |

### Design systém
- Bone `#F3EEE6` · Ink `#0C0C0D` · Soot `#6E6A64` · Brass `#A8844A`
- Fraunces (display) + Geist (UI)
- Hairlines, paper grain, 1px brass filament, monogram pečeť
- **Bez** amber glow, glass, gradient text, floating orbs

### Architektura
- `src/content/` — přepsaná data vrstva
- `src/components/` — SiteHeader, SiteFooter, Monogram, PageIntro, WorkFrame, ServiceRow, PriceBlock, CTAQuiet, FaqList
- `src/app/(site)/` — shared layout
- Nav: Práce…Kontakt + text CTA „Napsat“; mobile full-screen editorial menu; active state
- Motion: rise-in reveal, underline grow, image scale 1.02 + `prefers-reduced-motion`

### Test
- `npm run build` — **prošlo** (všechny nové routes)
- GitHub / Vercel: **nepushováno**

### Poznámky
- Portfolio = CSS tone frames (ne fake client screenshots)
- Favicon zůstává MJ žárovka (brand asset); v UI hero žárovka není
- Staré dark-amber komponenty/routes odstraněny
