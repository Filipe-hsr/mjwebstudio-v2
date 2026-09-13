const items = [
  { label: "Od", value: "4 990 Kč" },
  { label: "Odpověď", value: "do 24 h" },
  { label: "Realizace", value: "1–2 týdny" },
];

export function TrustStrip() {
  return (
    <section className="relative z-10 px-4 sm:px-6" aria-label="Proč nám věřit">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-2xl glass p-2 sm:grid-cols-3 sm:gap-0 sm:p-1">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col items-center justify-center gap-1 rounded-xl px-4 py-5 text-center ${
              i < items.length - 1 ? "sm:border-r sm:border-white/8" : ""
            }`}
          >
            <span className="text-xs uppercase tracking-[0.18em] text-muted">
              {item.label}
            </span>
            <span className="text-xl font-semibold text-fg sm:text-2xl">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
