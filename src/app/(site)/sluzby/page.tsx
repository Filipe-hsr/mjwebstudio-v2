import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Služby",
  description: "Firemní weby, landing pages, redesign, SEO, údržba a konzultace.",
};

export default function SluzbyPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-28 sm:px-8">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.22em] text-filament">Nabídka</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl">Služby</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Nové weby i autoservis pro ty stávající — redesign, domény, hosting,
          údržba. Vždy s jasným cílem a čistým dojmem.
        </p>
      </Reveal>

      <Reveal delay={40}>
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/art-filament-clean.png"
            alt="Teplé světlo filamentu"
            width={1400}
            height={700}
            className="h-auto max-h-[280px] w-full object-cover"
          />
        </div>
      </Reveal>

      <div className="mt-16 border-t border-white/8">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 45}>
            <article className="grid gap-4 border-b border-white/8 py-10 transition hover:bg-white/[0.02] sm:grid-cols-[4.5rem_1fr_1.2fr] sm:gap-8 sm:px-2">
              <span className="font-display text-2xl text-filament/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl">{s.title}</h2>
                <p className="mt-2 text-sm text-filament/90">{s.line}</p>
              </div>
              <p className="text-sm leading-relaxed text-muted sm:pt-1">{s.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 flex flex-wrap gap-4">
          <Link
            href="/cenik"
            className="shine inline-flex rounded-full bg-filament px-6 py-3 text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot"
          >
            Podívat se na ceník
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex rounded-full border border-white/15 px-6 py-3 text-sm transition hover:border-filament/40"
          >
            Napsat
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
