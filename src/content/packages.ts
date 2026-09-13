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
      "Hosting/doména: není v ceně (lze dokoupit)",
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
      "Prioritní doladění + návod",
      "Doména + hosting na 3 roky v ceně",
    ],
  },
  {
    name: "Business",
    price: "19 990 Kč",
    line: "Web + dlouhodobá péče — bez starostí.",
    bestFor: "Rostoucí byznys, vše v jednom",
    features: [
      "Vše ze Starteru",
      "Rozšířený obsah a CTA",
      "Prioritní podpora po spuštění",
      "Doména + hosting na 5 let v ceně",
    ],
  },
] as const;

export const glossary = [
  {
    title: "Doména (URL)",
    text: "Adresa webu (např. vasefirma.cz). Umíme zajistit nákup i správu.",
  },
  {
    title: "Hosting",
    text: "Kde web běží — rychlost, SSL, dostupnost. Bez toho stránka není online.",
  },
  {
    title: "Nový web",
    text: "Od nuly: struktura, design, texty, spuštění. Jasný cíl, čistý dojem.",
  },
  {
    title: "Redesign / servis",
    text: "Stávající web jako v autoservisu: diagnostika, facelift, výkon, údržba.",
  },
] as const;
