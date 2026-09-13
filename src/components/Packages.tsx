const packages = [
  {
    name: "Mini",
    price: "4 990 Kč",
    blurb: "Rychlý start pro malý projekt nebo prezentaci.",
    features: [
      "Jednostránkový web",
      "Responzivní design",
      "Základní SEO",
      "Dodání 1–2 týdny",
    ],
    highlight: false,
  },
  {
    name: "Starter",
    price: "9 990 Kč",
    blurb: "Kompletní web, který už vypadá a prodává jako studio.",
    features: [
      "Více sekcí / podstránek",
      "Propracovaný vizuál",
      "SEO a analytika",
      "Kontaktní formulář",
    ],
    highlight: true,
  },
  {
    name: "Business",
    price: "19 990 Kč",
    blurb: "Plný balíček včetně hostingu a domény — bez starostí.",
    features: [
      "Hosting i doména v ceně",
      "Responzivní SEO",
      "Prioritní podpora",
      "Rozšířený obsah a CTA",
    ],
    highlight: false,
  },
];

export function Packages() {
  return (
    <section id="balicky" className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-amber">
            Ceník
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Balíčky bez překvapení
          </h2>
          <p className="mt-3 text-muted">
            Jasná cena, srozumitelný rozsah. Vyberte tempo — my dodáme web,
            který svítí.
          </p>
        </div>

        <div className="grid gap-5 overflow-visible pt-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className={`relative flex flex-col overflow-visible rounded-3xl p-6 sm:p-7 ${
                pkg.highlight
                  ? "mt-1 glass glow-amber ring-1 ring-amber/40"
                  : "glass"
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-amber to-amber-deep px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1a1208] shadow-[0_4px_20px_rgba(245,165,36,0.35)]">
                  Nejoblíbenější
                </span>
              )}
              <h3 className="text-lg font-semibold">{pkg.name}</h3>
              <p className="mt-3 text-3xl font-bold tracking-tight text-gradient-amber">
                {pkg.price}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pkg.blurb}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-sm text-fg/90">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber"
                      aria-hidden
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:info@mjwebstudio.cz?subject=Poptávka%20balíčku%20${encodeURIComponent(pkg.name)}`}
                className={`mt-8 inline-flex h-11 items-center justify-center rounded-full text-sm font-semibold transition ${
                  pkg.highlight
                    ? "bg-gradient-to-r from-amber to-amber-deep text-[#1a1208] hover:brightness-110"
                    : "border border-white/15 bg-white/5 hover:border-amber/40 hover:bg-white/10"
                }`}
              >
                Chci {pkg.name}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
