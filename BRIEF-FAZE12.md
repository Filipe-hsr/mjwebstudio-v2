# MJ Web Studio — Fáze 12

Filipe: skoro hotovo. Feedback:
1. „Co je co“ slovník se míň líbí → **srovnávací tabulka** (co v čem je) se **fajfkami**
2. **Služby** rozšířit: všechno co poskytujeme (hosting, poradenství…) **za menší peníze** (à la carte s cenami)
3. Kontakt: ne „obvykle“ — **ozveme se do 24 hodin** (pevně)
4. Každý zákazník: **free menší demo** — dopsat viditelně (home + ceník + kontakt)
5. Header logo = katastrofa → nové kreslené (Connor dodá vybraný asset jako `/public/logo-mj-mark.png`)

## Logo
Connor nastaví finální `/public/logo-mj-mark.png` (+ favicon/icon pokud sedí). Header nechat velikost h-12/h-14. Transparentní, bez černého boxu.

## Ceník — tabulka místo slovníku
Odstranit sekci „Co je co“ (glossary cards).
Přidat **porovnávací tabulku** Mini | Starter | Business:

Řádky (✓ / — / text):
| Položka | Mini | Starter | Business |
| Jednostránkový web | ✓ | — | — |
| Více sekcí / podstránek | — | ✓ | ✓ |
| Responzivní design | ✓ | ✓ | ✓ |
| Základní SEO | ✓ | ✓ | ✓ |
| SEO + analytika | — | ✓ | ✓ |
| Kontaktní formulář | — | ✓ | ✓ |
| Doména v ceně | — | ✓ | ✓ |
| Hosting v ceně | — | 3 roky | 5 let |
| Prioritní podpora | — | — | ✓ |
| Free demo webu | ✓ | ✓ | ✓ |

Pod tabulkou krátká poznámka: „Finální rozsah doladíme podle cíle.“
Zachovat balíčkové karty nahoře + ceny 4 990 / 9 990 / 19 990.
CTA „jen doména/hosting/servis“ může zůstat, nebo přesměrovat na /sluzby.

## Služby — à la carte (povinné)
Na `/sluzby` přidat jasnou sekci **„Samostatné služby“** / „Za menší peníze“ s konkrétními cenami:

| Služba | Cena | Poznámka |
| Doména (nákup + nastavení) | od 390 Kč | + roční poplatek registrátora |
| Hosting (rok, SSL) | 1 490 Kč / rok | |
| Konzultace / poradenství | 990 Kč / 45 min | |
| Údržba webu | od 990 Kč / měsíc | drobné texty, aktualizace |
| Facelift / menší redesign | od 4 990 Kč | stávající web |
| Free demo | 0 Kč | malé demo pro každého klienta |

Wording: autoservis framing zachovat. Ne „obvykle“ — konkrétní.

## Free demo — visibility
- Home: krátká zmínka u value/CTA
- Ceník: v tabulce + jedna věta
- Kontakt: „Ke každému projektu patří free menší demo.“
- Služby: řádek v à la carte

## Kontakt
Změnit copy:
- „Ozveme se vám do 24 hodin.“ (bez „obvykle“)
- Zmínit free demo

## Neměnit
- Ceny balíčků Mini/Starter/Business
- Routing, stack
- Žádný Vercel

## DoD
1. npm run build OK
2. Tabulka na ceníku, glossary pryč
3. Služby s à la carte cenami
4. 24h + free demo
5. Nové logo v headeru
6. REPORT-FAZE12.md
7. Ne GitHub push (Connor)

Projekt: `/workspace/mjwebstudio`
