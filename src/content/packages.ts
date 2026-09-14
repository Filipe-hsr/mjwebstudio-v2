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
      "Free demo webu",
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
      "Free demo webu",
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
      "Free demo webu",
    ],
  },
] as const;

export type CompareCell = "yes" | "no" | string;

export const compareRows: { label: string; mini: CompareCell; starter: CompareCell; business: CompareCell }[] = [
  { label: "Jednostránkový web", mini: "yes", starter: "no", business: "no" },
  { label: "Více sekcí / podstránek", mini: "no", starter: "yes", business: "yes" },
  { label: "Responzivní design", mini: "yes", starter: "yes", business: "yes" },
  { label: "Základní SEO", mini: "yes", starter: "yes", business: "yes" },
  { label: "SEO + analytika", mini: "no", starter: "yes", business: "yes" },
  { label: "Kontaktní formulář", mini: "no", starter: "yes", business: "yes" },
  { label: "Doména v ceně", mini: "no", starter: "yes", business: "yes" },
  { label: "Hosting v ceně", mini: "no", starter: "3 roky", business: "5 let" },
  { label: "Prioritní podpora", mini: "no", starter: "no", business: "yes" },
  { label: "Free demo webu", mini: "yes", starter: "yes", business: "yes" },
];
