export const packages = [
  {
    name: "Mini",
    price: "4 990 Kč",
    line: "Jedna stránka. Rychlý start.",
    bestFor: "Osobní značka, jednoduchá nabídka",
    features: [
      "Jednostránkový web",
      "Responzivní design",
      "Základní SEO",
      "Dodání 1–2 týdny",
    ],
  },
  {
    name: "Starter",
    price: "9 990 Kč",
    line: "Kompletní web, který už prodává.",
    bestFor: "Firmy a služby se silnější prezentací",
    highlight: true as const,
    features: [
      "Více sekcí / podstránek",
      "Propracovaný vizuál",
      "SEO a analytika",
      "Kontaktní formulář",
      "Prioritní doladění",
      "Předání s návodem",
    ],
  },
  {
    name: "Business",
    price: "19 990 Kč",
    line: "Web + hosting + doména — bez starostí.",
    bestFor: "Rostoucí byznys, vše v jednom",
    features: [
      "Hosting i doména v ceně",
      "Responzivní SEO",
      "Prioritní podpora",
      "Rozšířený obsah a CTA",
    ],
  },
] as const;
