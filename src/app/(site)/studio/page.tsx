import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";
import { studioBlocks } from "@/content/studio";

export const metadata: Metadata = {
  title: "Studio",
  description: "O MJ Web Studio — příběh, hodnoty a přístup.",
};

export default function StudioPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-28 sm:px-8">
      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-filament">Studio</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">
            Od žárovky k webu, který svítí
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            {site.edison}
          </p>
        </Reveal>
        <Reveal className="lg:col-span-5 lg:col-start-8" delay={80}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <Image
              src="/art-desk-illustrated.png"
              alt="Pracovní stůl studia"
              width={1200}
              height={900}
              className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-6 sm:grid-cols-2">
        {studioBlocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 60}>
            <article className="h-full rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition hover:border-white/15 sm:p-8">
              <div className="mb-5 h-px w-12 bg-filament/60" aria-hidden />
              <h2 className="font-display text-2xl">{b.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {b.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 rounded-3xl border border-filament/20 px-8 py-12 text-center">
          <p className="text-muted">Pracujeme vzdáleně po celé ČR.</p>
          <Link
            href="/kontakt"
            className="shine mt-6 inline-flex rounded-full bg-filament px-7 py-3 text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot"
          >
            Napsat studiu
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
