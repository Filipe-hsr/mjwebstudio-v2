# Report Fáze 1 — CF100 → Connor

## Co je hotové
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 landing v `/workspace/mjwebstudio`
- Sekce: Header, Hero (žárovka MJ), Trust strip, Balíčky (Mini/Starter/Business), Proces, Proč my, Edison kreativní moment, Kontakt (+ mailto form UI), Footer
- Design: dark `#070708`, amber glow `#F5A524`→`#FF8A1F`, glass karty, grain, rays, micro-motion + `prefers-reduced-motion`
- Assety: `logo-mj-bulb-hires.png` (logo), `thomas-edison-funny.png`
- README se spuštěním
- Jazyk: `cs`

## Test
- `npm run build` — **prošlo** (static `/`)
- Origin / GitHub: **nepushováno** (dle briefu)

## Problémy / poznámky
- Cloud agent `new_repo` selhal (chybí Origin namespace) → implementace lokálně na boxu
- `logo-mj-bulb.png` je brand sheet, ne čisté logo — v UI používám `logo-mj-bulb-hires.png`
- Ke kontrole vizuálu: `npm run dev` → localhost:3000

## Další (až po tvém review)
- Případné doladění copy / cen / feature listů
- Push na GitHub / deploy na Vercel

## Review fix (po Connor feedback)
1. Mobilní menu: hamburger + bottom sheet (md:hidden), Escape / overlay zavře
2. Badge „Nejoblíbenější“: `overflow-visible`, `pt-5` na gridu, `whitespace-nowrap`, vyšší z-index
3. Favicon: `src/app/icon.png` + `apple-icon.png` ze žárovky MJ (tmavé pozadí)
- `npm run build` znovu OK
- GitHub stále nepushováno
