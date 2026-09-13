# Report Fáze 2 — CF100 → Connor

## Co je hotové
Přestavba single-page → multi-page profesionální web v `/workspace/mjwebstudio`.

### Routes (všechny static, build OK)
- `/` Home — hero, trust, služby preview, proč my, reference preview, proces, ceník, FAQ, Edison, CTA
- `/sluzby` — 6 služeb do hloubky
- `/cenik` — 3 balíčky + poznámky + FAQ k cenám
- `/reference` — 6 projektů s labely Ukázková realizace / Koncept + transparency banner
- `/proces` — 4 kroky detailně + očekávání
- `/o-nas` — hodnoty + Edison brand story
- `/kontakt` — mailto/tel + form UI bez API

### Architektura
- `src/content/` — site, nav, services, packages, projects, process, faq, studio
- `src/components/ui/` — Button, PageHero, SectionHeader, GlassCard, CTABand, FaqAccordion, ProjectCard, PackageCard, ProcessStep
- `src/app/(site)/layout.tsx` — shared Header/Footer
- Header: route nav + active state + mobile bottom sheet (všechny odkazy)
- Design: dark `#070708`, amber glow, glass, grain, rays, Syne + Outfit, prefers-reduced-motion

### Test
- `npm run build` — **prošlo** (11 static routes včetně icon)
- GitHub / Vercel: **nepushováno** (dle zadání)

### Problémy / poznámky
- Staré Fáze-1 section komponenty (Hero, Packages…) odstraněny — nahrazeny content + UI
- Portfolio placeholder vizuály = CSS gradient karty (ne fake screenshoty klientů)
- Repo origin existuje, ale push nechávám na tebe
