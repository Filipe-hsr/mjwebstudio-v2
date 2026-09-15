import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { compareRows, packages, type CompareCell } from "@/content/packages";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Ceník",
  description: "Mini 4 990 · Starter 9 990 · Business 19 990 Kč. Srovnání balíčků a free demo.",
};

function Cell({ value }: { value: CompareCell }) {
  if (value === "yes") {
    return <span className="text-filament" aria-label="Ano">✓</span>;
  }
  if (value === "no") {
    return <span className="text-muted/45" aria-label="Ne">—</span>;
  }
  return <span className="text-sm text-fg/90">{value}</span>;
}

export default function CenikPage() {
  const mini = packages[0];
  const starter = packages[1];
  const business = packages[2];

  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-28 sm:px-8">
      <Reveal>
        <h1 className="font-display text-5xl sm:text-6xl">Ceník</h1>
        <p className="mt-4 max-w-xl text-muted">
          Tři úrovně. Transparentní čísla. Ke každému projektu patří{" "}
          <span className="text-fg">free menší demo</span>.
        </p>
      </Reveal>

      <div className="mt-16 grid items-stretch gap-5 lg:grid-cols-12 lg:gap-6">
        <Reveal className="lg:col-span-3 lg:mt-16" delay={40}>
          <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-7">
            <p className="text-sm text-muted">{mini.name}</p>
            <p className="mt-4 font-display text-3xl text-filament">{mini.price}</p>
            <p className="mt-3 text-sm text-muted">{mini.line}</p>
            <p className="mt-4 text-xs text-muted/80">Vhodné pro: {mini.bestFor}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-fg/80">
              {mini.features.map((f) => (
                <li key={f}>— {f}</li>
              ))}
            </ul>
            <a
              href={`${site.emailHref}?subject=${encodeURIComponent("Mini")}`}
              className="mt-8 text-sm text-fg transition hover:text-filament"
            >
              Chci Mini →
            </a>
          </article>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={80}>
          <article className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-filament/10 to-transparent p-8 rim-filament sm:p-10">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-filament/20 blur-3xl"
              aria-hidden
            />
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-muted">{starter.name}</p>
              <span className="rounded-full border border-filament/40 bg-filament/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-filament">
                Doporučeno
              </span>
            </div>
            <p className="mt-5 font-display text-5xl text-filament sm:text-6xl">
              {starter.price}
            </p>
            <p className="mt-4 text-base text-fg/85">{starter.line}</p>
            <p className="mt-3 text-xs text-muted">Vhodné pro: {starter.bestFor}</p>
            <ul className="mt-8 grid flex-1 gap-2.5 sm:grid-cols-2">
              {starter.features.map((f) => (
                <li key={f} className="text-sm text-fg/85">
                  — {f}
                </li>
              ))}
            </ul>
            <a
              href={`${site.emailHref}?subject=${encodeURIComponent("Starter")}`}
              className="shine mt-10 inline-flex h-12 items-center justify-center rounded-full bg-filament text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot"
            >
              Chci Starter
            </a>
          </article>
        </Reveal>

        <Reveal className="lg:col-span-3 lg:mt-10" delay={120}>
          <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-7">
            <p className="text-sm text-muted">{business.name}</p>
            <p className="mt-4 font-display text-3xl text-filament">{business.price}</p>
            <p className="mt-3 text-sm text-muted">{business.line}</p>
            <p className="mt-4 text-xs text-muted/80">Vhodné pro: {business.bestFor}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-fg/80">
              {business.features.map((f) => (
                <li key={f}>— {f}</li>
              ))}
            </ul>
            <a
              href={`${site.emailHref}?subject=${encodeURIComponent("Business")}`}
              className="mt-8 text-sm text-fg transition hover:text-filament"
            >
              Chci Business →
            </a>
          </article>
        </Reveal>
      </div>

      <Reveal delay={80}>
        <section className="mt-20">
          <h2 className="font-display text-3xl sm:text-4xl">Srovnání balíčků</h2>
          <p className="mt-3 text-sm text-muted">
            Co je v Mini, Starteru a Business — na první pohled.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10 [-webkit-overflow-scrolling:touch]">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="sticky left-0 z-10 bg-[#0a0a0b] px-4 py-3 font-medium text-muted shadow-[2px_0_8px_rgba(0,0,0,0.35)]">
                    Položka
                  </th>
                  <th className="px-4 py-3 font-medium text-fg">Mini</th>
                  <th className="px-4 py-3 font-medium text-filament">Starter</th>
                  <th className="px-4 py-3 font-medium text-fg">Business</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-b border-white/5 last:border-0">
                    <td className="sticky left-0 z-10 bg-[#0a0a0b] px-4 py-3 text-muted shadow-[2px_0_8px_rgba(0,0,0,0.35)]">
                      {row.label}
                    </td>
                    <td className="px-4 py-3">
                      <Cell value={row.mini} />
                    </td>
                    <td className="px-4 py-3">
                      <Cell value={row.starter} />
                    </td>
                    <td className="px-4 py-3">
                      <Cell value={row.business} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-muted md:hidden">
            Posuňte tabulku do strany →
          </p>
          <p className="mt-4 text-sm text-muted">Finální rozsah doladíme podle cíle.</p>
        </section>
      </Reveal>

      <Reveal delay={100}>
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-filament/25 px-6 py-10 text-center sm:px-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,160,58,0.12),transparent_70%)]"
            aria-hidden
          />
          <p className="relative text-sm leading-relaxed text-fg/90 sm:text-base">
            Potřebujete jen doménu, hosting, nebo servis stávajícího webu?
          </p>
          <Link
            href="/sluzby"
            className="shine relative mt-6 inline-flex rounded-full bg-filament px-6 py-3 text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot"
          >
            Samostatné služby →
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
