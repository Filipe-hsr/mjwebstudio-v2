const steps = [
  {
    n: "01",
    title: "Nápad",
    text: "Probereme cíl, publikum a to, co má web opravdu udělat.",
  },
  {
    n: "02",
    title: "Návrh",
    text: "Struktura, texty a vizuál, které budí důvěru na první pohled.",
  },
  {
    n: "03",
    title: "Vývoj",
    text: "Rychlý, responzivní web — ostrý na mobilu i desktopu.",
  },
  {
    n: "04",
    title: "Spuštění",
    text: "Nasazení, doladění a předání. Vy svítíte online.",
  },
];

export function Process() {
  return (
    <section id="proces" className="scroll-mt-24 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-amber">
            Jak to probíhá
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Od nápadu po výsledek
          </h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative overflow-hidden rounded-2xl glass p-5"
            >
              <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-amber/25">
                {step.n}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
