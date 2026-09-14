import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Napište ${site.name}. Ozveme se vám do 24 hodin. Free demo.`,
};

export default function KontaktPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-28 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-filament">Kontakt</p>
          <h1 className="mt-3 font-display text-5xl sm:text-6xl">Napište nám</h1>
          <p className="mt-4 max-w-md text-lg text-fg/90">
            Ozveme se vám do 24 hodin.
          </p>
          <p className="mt-3 max-w-md text-muted">
            Ke každému projektu patří free menší demo. Stačí krátká zpráva —
            doporučíme další krok.
          </p>
          <div className="mt-12 space-y-6">
            <a
              href={site.emailHref}
              className="block rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 transition hover:border-filament/30"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">E-mail</p>
              <p className="mt-1 font-display text-xl">{site.email}</p>
            </a>
            <a
              href={site.phoneHref}
              className="block rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 transition hover:border-filament/30"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted">Telefon</p>
              <p className="mt-1 font-display text-xl">{site.phone}</p>
            </a>
            <p className="px-1 text-sm text-muted">{site.region}</p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={70}>
          <form
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-7 sm:p-10"
            action={site.emailHref}
            method="get"
            encType="text/plain"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-filament/10 blur-3xl"
              aria-hidden
            />
            <label className="relative block text-sm">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted">
                Jméno / firma
              </span>
              <input
                name="subject"
                required
                placeholder="Jak vám máme říkat?"
                className="h-12 w-full rounded-xl border border-white/10 bg-bg/60 px-4 outline-none transition focus:border-filament/50"
              />
            </label>
            <label className="relative mt-5 block text-sm">
              <span className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted">
                Zpráva
              </span>
              <textarea
                name="body"
                required
                rows={6}
                placeholder="Stručně o projektu…"
                className="w-full resize-y rounded-xl border border-white/10 bg-bg/60 px-4 py-3 outline-none transition focus:border-filament/50"
              />
            </label>
            <button
              type="submit"
              className="shine relative mt-6 h-12 w-full rounded-full bg-filament text-sm font-semibold text-[#1a1208] transition hover:bg-filament-hot sm:w-auto sm:px-10"
            >
              Odeslat e-mailem
            </button>
            <p className="relative mt-4 text-xs text-muted">
              Otevře váš e-mailový klient — bez backendu, bez spamů.
            </p>
          </form>
        </Reveal>
      </div>
    </div>
  );
}
