import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 rays" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,165,36,0.22),transparent_68%)] blur-2xl animate-pulse-glow"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-amber">
            Nápady, které fungují
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Weby, které{" "}
            <span className="text-gradient-amber">prodávají</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
            Od nápadu po výsledek. Stavíme přehledné weby, které budí důvěru a
            přivádějí klienty — bez zbytečné složitosti.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#balicky"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber to-amber-deep px-7 text-sm font-semibold text-[#1a1208] glow-amber transition hover:brightness-110"
            >
              Prohlédnout balíčky
            </a>
            <a
              href="#kontakt"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-fg transition hover:border-amber/40 hover:bg-white/10"
            >
              Domluvit konzultaci
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none">
          <div
            className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(245,165,36,0.35),transparent_70%)] blur-3xl"
            aria-hidden
          />
          <Image
            src="/logo-mj-bulb-hires.png"
            alt="Žárovka MJ Web Studio — logo s filamentem MJ"
            width={520}
            height={680}
            priority
            className="relative z-10 h-auto w-[70%] max-w-[340px] drop-shadow-[0_0_60px_rgba(245,165,36,0.35)] animate-float sm:w-[75%]"
          />
        </div>
      </div>
    </section>
  );
}
