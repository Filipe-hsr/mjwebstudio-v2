import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { glossary, packages } from "@/content/packages";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Ceník",
  description: "Mini 4 990 · Starter 9 990 · Business 19 990 Kč. Doména a hosting v balíčcích.",
};

export default function CenikPage() {
  const mini = packages[0];
  const starter = packages[1];
  const business = packages[2];

  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-28 sm:px-8">
      <Reveal>
        <h1 className="font-display text-5xl sm:text-6xl">Ceník</h1>
        <p className="mt-4 max-w-xl text-muted">
          Tři úrovně. Transparentní čísla. Starter a Business řeší i doménu
          s hostingem — Mini lze dokoupit zvlášť.
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
          <div className="hairline-dot mb-10">
            <span />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl">Co je co</h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Krátký slovník — ať je jasné, za co platíte a co umíme i samostatně.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {glossary.map((g) => (
              <article
                key={g.title}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 rim-filament/0 transition hover:border-filament/25"
                style={{
                  boxShadow: "0 0 0 1px rgba(232,160,58,0.06), 0 0 28px rgba(232,160,58,0.05)",
                }}
              >
                <h3 className="font-display text-xl text-fg">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.text}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={100}>
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-filament/25 px-6 py-10 text-center sm:px-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,160,58,0.12),transparent_70%)]"
            aria-hidden
          />
          <p className="relative text-sm leading-relaxed text-fg/90 sm:text-base">
            Potřebujete jen doménu, hosting, nebo servis stávajícího webu? Napište —
            vyřešíme i bez nového projektu.
          </p>
          <Link
            href="/kontakt"
            className="shine relative mt-6 inline-flex rounded-full bg-filament px-6 py-3 text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot"
          >
            Napsat
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
