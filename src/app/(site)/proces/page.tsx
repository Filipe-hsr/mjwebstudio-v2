import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { steps } from "@/content/process";

export const metadata: Metadata = {
  title: "Proces",
  description: "Jak probíhá spolupráce s MJ Web Studio — čtyři jasné kroky.",
};

export default function ProcesPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-28 pt-28 sm:px-8">
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.22em] text-filament">Spolupráce</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl">Proces</h1>
        <p className="mt-4 max-w-xl text-muted">
          Čtyři kroky. Jasná očekávání. Realizace typicky 1–2 týdny podle rozsahu.
        </p>
      </Reveal>

      <Reveal delay={50}>
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/art-process-illustrated.png"
            alt="Skicování wireframu rukou"
            width={1400}
            height={800}
            className="h-auto max-h-[320px] w-full object-cover"
          />
        </div>
      </Reveal>

      <ol className="relative mt-16 space-y-0 pl-2">
        <div
          className="pointer-events-none absolute bottom-8 left-[1.65rem] top-8 w-px bg-gradient-to-b from-filament/50 via-white/10 to-transparent sm:left-[2.1rem]"
          aria-hidden
        />
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 70}>
            <li className="relative grid grid-cols-[3.5rem_1fr] gap-5 py-10 sm:grid-cols-[5rem_1fr] sm:gap-8">
              <div className="relative z-10">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-filament/40 bg-bg font-display text-sm text-filament shadow-[0_0_20px_rgba(232,160,58,0.2)] sm:h-12 sm:w-12 sm:text-base">
                  {s.n}
                </span>
              </div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl">{s.title}</h2>
                <p className="mt-1 text-filament/90">{s.line}</p>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                  {s.detail}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal>
        <Link
          href="/kontakt"
          className="shine mt-8 inline-flex rounded-full bg-filament px-6 py-3 text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot"
        >
          Začít spolupráci
        </Link>
      </Reveal>
    </div>
  );
}
