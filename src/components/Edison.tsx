import Image from "next/image";

export function Edison() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#121214] via-[#0c0c0e] to-[#1a1208] p-6 sm:grid-cols-2 sm:p-10 lg:p-14">
        <div className="order-2 sm:order-1">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-amber">
            Kreativní moment
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Od žárovky k webu, který{" "}
            <span className="text-gradient-amber">svítí</span>
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Edison měl jiskru. Vy máte byznys. My spojíme nápad s webem, který
            opravdu svítí — a přivádí klienty, ne jen „lajky“.
          </p>
          <a
            href="#kontakt"
            className="mt-8 inline-flex h-11 items-center justify-center rounded-full border border-amber/35 bg-amber/10 px-6 text-sm font-semibold text-amber transition hover:bg-amber/20"
          >
            Rozsviťte svůj web
          </a>
        </div>
        <div className="order-1 relative mx-auto w-full max-w-sm sm:order-2 sm:max-w-none">
          <div
            className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(245,165,36,0.35),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <Image
            src="/thomas-edison-funny.png"
            alt="Vtipná ilustrace Thomase Edisona s žárovkou"
            width={640}
            height={800}
            className="relative z-10 mx-auto h-auto w-full max-w-md rounded-2xl object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
          />
        </div>
      </div>
    </section>
  );
}
