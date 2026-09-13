import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Práce",
  description: "Ukázky a koncepty MJ Web Studio — jasně označené.",
};

export default function PracePage() {
  const [featured, ...rest] = projects;

  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-28 sm:px-8">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.22em] text-filament">Portfolio</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl">Práce</h1>
        <p className="mt-4 max-w-xl text-muted">
          Ukázky a koncepty stylu — jasně označené. Ne falešní case studies klientů.
        </p>
      </Reveal>

      <Reveal delay={60}>
        <article
          className="frame-grain card-lift relative mt-14 overflow-hidden rounded-3xl border border-white/10 p-8 sm:min-h-[380px] sm:p-12"
          style={{
            background: `radial-gradient(circle at 30% 20%, rgba(232,160,58,0.28), transparent 50%), ${featured.tone}`,
          }}
        >
          <p className="text-[11px] uppercase tracking-wider text-muted">
            {featured.label} · {featured.industry}
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">{featured.title}</h2>
          <p className="mt-4 max-w-lg text-muted">{featured.summary}</p>
        </article>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 70}>
            <article
              className="frame-grain card-lift group aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 p-6 transition duration-500 hover:-translate-y-1 hover:border-filament/30"
              style={{
                background: `radial-gradient(circle at 35% 25%, rgba(232,160,58,0.18), transparent 55%), ${p.tone}`,
              }}
            >
              <p className="text-[11px] uppercase tracking-wider text-muted">
                {p.label} · {p.industry}
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl">{p.title}</h3>
              <p className="mt-3 max-w-sm text-sm text-muted">{p.summary}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 flex flex-wrap items-center gap-6">
          <Link
            href="/kontakt"
            className="shine inline-flex rounded-full bg-filament px-6 py-3 text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot"
          >
            Chci podobný web
          </Link>
          <Link href="/sluzby" className="text-sm text-muted hover:text-fg">
            Co nabízíme →
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
