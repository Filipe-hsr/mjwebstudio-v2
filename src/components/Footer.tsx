import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-fg/90">{site.name}</p>
            <p className="mt-2 max-w-xs text-sm text-muted">{site.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Patička">
            <Link href="/sluzby" className="text-muted transition hover:text-fg">
              Služby
            </Link>
            <Link href="/cenik" className="text-muted transition hover:text-fg">
              Ceník
            </Link>
            <Link href="/kontakt" className="text-muted transition hover:text-fg">
              Kontakt
            </Link>
          </nav>
          <div className="flex flex-col gap-2 text-sm">
            <a href={site.emailHref} className="text-muted transition hover:text-fg">
              {site.email}
            </a>
            <a href={site.phoneHref} className="text-muted transition hover:text-fg">
              {site.phone}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}</p>
          <p>Ozveme se vám do 24 hodin.</p>
        </div>
      </div>
    </footer>
  );
}
