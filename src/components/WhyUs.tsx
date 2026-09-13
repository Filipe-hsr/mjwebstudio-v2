const points = [
  {
    title: "Přehledná struktura",
    text: "Návštěvník hned ví, kam kliknout a proč vám má napsat.",
  },
  {
    title: "Srozumitelné texty",
    text: "Bez buzzwordů. Mluvíme jazykem zákazníků, ne šablon.",
  },
  {
    title: "Design budící důvěru",
    text: "Čistý vizuál, měkké světlo, detaily, které působí prémiově.",
  },
];

export function WhyUs() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-amber">
            Proč my
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Web, který pracuje za vás
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/8 bg-bg-elevated p-6">
              <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-amber to-amber-deep" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
