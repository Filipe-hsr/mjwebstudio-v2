export function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 px-4 pb-24 pt-8 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] glass p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-amber">
              Kontakt
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Pojďme to rozsvítit
            </h2>
            <p className="mt-4 max-w-md text-muted leading-relaxed">
              Napište nebo zavolejte. Odpovídáme obvykle do 24 hodin. Pracujeme
              vzdáleně po celé ČR.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <a
                href="mailto:info@mjwebstudio.cz"
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-4 py-3 transition hover:border-amber/30"
              >
                <span className="text-amber">✉</span>
                <span>info@mjwebstudio.cz</span>
              </a>
              <a
                href="tel:+420727942839"
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-4 py-3 transition hover:border-amber/30"
              >
                <span className="text-amber">☎</span>
                <span>+420 727 942 839</span>
              </a>
              <p className="px-1 text-muted">Celá ČR · vzdáleně</p>
            </div>
          </div>

          <form
            className="flex flex-col gap-4"
            action="mailto:info@mjwebstudio.cz"
            method="get"
            encType="text/plain"
          >
            <label className="block text-sm">
              <span className="mb-1.5 block text-muted">Jméno</span>
              <input
                name="subject"
                type="text"
                required
                placeholder="Jak vám máme říkat?"
                className="h-11 w-full rounded-xl border border-white/10 bg-[#0a0a0b] px-3 text-fg outline-none ring-amber/0 transition placeholder:text-muted/50 focus:border-amber/40 focus:ring-2 focus:ring-amber/20"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-muted">Zpráva</span>
              <textarea
                name="body"
                required
                rows={4}
                placeholder="Stručně o projektu…"
                className="w-full resize-y rounded-xl border border-white/10 bg-[#0a0a0b] px-3 py-2.5 text-fg outline-none transition placeholder:text-muted/50 focus:border-amber/40 focus:ring-2 focus:ring-amber/20"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber to-amber-deep text-sm font-semibold text-[#1a1208] glow-amber transition hover:brightness-110"
            >
              Odeslat e-mailem
            </button>
            <p className="text-xs text-muted">
              Formulář otevře váš e-mailový klient — bez backendu, bez spamů.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
