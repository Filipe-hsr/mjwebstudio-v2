import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site, stats } from "@/content/site";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <section className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="pointer-events-none absolute inset-0 hero-vignette" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 opacity-50 rays-spin lg:left-auto lg:right-0 lg:translate-x-0"
          aria-hidden
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(232,160,58,0.14) 14deg, transparent 32deg, transparent 90deg, rgba(255,138,31,0.1) 104deg, transparent 125deg, transparent 180deg, rgba(232,160,58,0.1) 194deg, transparent 215deg, transparent 270deg, rgba(255,138,31,0.08) 284deg, transparent 305deg)",
            maskImage: "radial-gradient(circle, black 15%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle, black 15%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(232,160,58,0.16),transparent_70%)] blur-3xl light-leak"
          aria-hidden
        />
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <Reveal>
            <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-filament">
              MJ Web Studio
            </p>
            <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-[4.75rem] lg:leading-[1.02]">
              {site.vp}
            </h1>
            <p className="mt-5 text-lg text-muted">{site.tagline}</p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted/90 lg:mx-0">
              {site.edison}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/cenik"
                className="shine inline-flex rounded-full bg-filament px-7 py-3 text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot"
              >
                Ceník
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex rounded-full border border-white/15 px-7 py-3 text-sm transition hover:border-filament/40 hover:bg-white/5"
              >
                Napsat
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="order-1 lg:order-2">
          <Reveal delay={90}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                className="pointer-events-none absolute inset-[12%] rounded-full bg-[radial-gradient(circle,rgba(232,160,58,0.4),transparent_68%)] blur-3xl bulb-glow"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-[5%] top-[10%] h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,138,31,0.28),transparent_70%)] blur-2xl light-leak"
                aria-hidden
              />
              <Image
                src="/hero-edison-1x1.png"
                alt="Edison s žárovkou MJ"
                width={900}
                height={900}
                priority
                className="relative z-10 mx-auto aspect-square h-auto w-full max-w-[420px] rounded-3xl border border-white/10 object-cover drop-shadow-[0_24px_70px_rgba(0,0,0,0.5)] edison-bob sm:max-w-[460px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="hairline-dot mb-12">
              <span />
            </div>
            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-fg/90 sm:text-xl">
              {site.value}
            </p>
            <div className="mt-8 flex justify-center gap-6 text-sm">
              <Link href="/sluzby" className="text-muted transition hover:text-filament">
                Služby
              </Link>
              <Link href="/prace" className="text-muted transition hover:text-filament">
                Práce
              </Link>
              <Link href="/proces" className="text-muted transition hover:text-filament">
                Proces
              </Link>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-3">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-7 text-center sm:text-left">
                  <p className="font-display text-3xl sm:text-4xl">{s.value}</p>
                  <p className="mt-2 text-sm text-muted">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-filament">Portfolio</p>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl">Vybraná práce</h2>
              </div>
              <Link href="/prace" className="text-sm text-muted transition hover:text-fg">
                Vše →
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Link
                  href="/prace"
                  className="group frame-grain card-lift relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
                  style={{
                    background: `radial-gradient(circle at 40% 28%, rgba(232,160,58,0.22), transparent 52%), ${p.tone}`,
                  }}
                >
                  <div className="relative z-10 flex h-full flex-col justify-end p-6">
                    <p className="text-[11px] uppercase tracking-wider text-muted">
                      {p.label} · {p.industry}
                    </p>
                    <p className="mt-1 font-display text-2xl">{p.title}</p>
                    <p className="mt-2 text-sm text-muted opacity-0 transition group-hover:opacity-100">
                      {p.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y px-5 sm:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-filament/20 px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,160,58,0.16),transparent_65%)]"
              aria-hidden
            />
            <h2 className="relative font-display text-4xl sm:text-5xl">
              Pojďme to rozsvítit.
            </h2>
            <p className="relative mt-4 text-muted">Ozveme se obvykle do 24 hodin.</p>
            <Link
              href="/kontakt"
              className="shine relative mt-8 inline-flex rounded-full bg-filament px-7 py-3 text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot"
            >
              Napsat
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
