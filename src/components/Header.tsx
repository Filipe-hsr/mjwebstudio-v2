"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#balicky", label: "Balíčky" },
  { href: "#proces", label: "Proces" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070708]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#top" className="group flex min-w-0 items-center gap-3" onClick={close}>
          <Image
            src="/logo-mj-bulb-hires.png"
            alt="MJ Web Studio"
            width={36}
            height={48}
            className="h-10 w-auto transition group-hover:brightness-110"
            priority
          />
          <span className="hidden text-sm font-semibold tracking-[0.18em] text-fg sm:inline">
            MJ WEB STUDIO
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Hlavní">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#kontakt"
            className="hidden rounded-full bg-gradient-to-r from-amber to-amber-deep px-4 py-2 text-sm font-semibold text-[#1a1208] shadow-[0_0_24px_rgba(245,165,36,0.25)] transition hover:brightness-110 sm:inline-flex"
          >
            Nezávazně poptat
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-fg transition hover:border-amber/40 hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Zavřít" : "Menu"}</span>
            <span className="relative block h-3.5 w-4" aria-hidden>
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded-full bg-current transition ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-0.5 w-4 rounded-full bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-0.5 w-4 rounded-full bg-current transition ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 top-16 z-40 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobilní navigace"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Zavřít pozadí"
            onClick={close}
          />
          <nav
            id="mobile-nav"
            className="absolute inset-x-0 bottom-0 top-auto max-h-[70vh] overflow-y-auto rounded-t-3xl border border-white/10 border-b-0 bg-[#0c0c0e]/95 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-[0_-20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
            aria-label="Mobilní"
          >
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/20" aria-hidden />
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block rounded-xl px-4 py-3.5 text-base font-medium text-fg transition hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#kontakt"
              onClick={close}
              className="mt-4 flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-amber to-amber-deep text-sm font-semibold text-[#1a1208] glow-amber"
            >
              Nezávazně poptat
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
