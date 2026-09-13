"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ctaNav, navLinks } from "@/content/nav";

function active(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-bg/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(232,160,58,0.14)]"
          : "border-b border-transparent bg-bg/45 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Domů">
          <Image
            src="/logo-mj-mark.png"
            alt=""
            width={56}
            height={56}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            priority
          />
          <span className="hidden text-[12px] font-medium tracking-[0.14em] text-fg/90 sm:inline">
            MJ Web Studio
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Hlavní">
          {navLinks.map((l) => {
            const isOn = active(pathname, l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative pb-1 text-[12px] tracking-wide transition hover:text-fg ${
                  isOn ? "text-fg" : "text-muted"
                }`}
                aria-current={isOn ? "page" : undefined}
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-filament transition duration-300 ${
                    isOn ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={ctaNav.href}
            className="hidden rounded-full border border-filament/35 px-4 py-1.5 text-[12px] text-filament transition hover:border-filament/70 hover:bg-filament/10 sm:inline"
          >
            {ctaNav.label}
          </Link>
          <button
            type="button"
            className="text-[12px] text-muted md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Zavřít" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 top-[4.25rem] z-40 bg-bg/98 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex h-full flex-col justify-center gap-5 px-8" aria-label="Mobilní">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-display text-3xl"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link href={ctaNav.href} className="mt-6 text-filament" onClick={() => setOpen(false)}>
              {ctaNav.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
