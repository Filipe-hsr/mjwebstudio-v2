import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-fg/80">{site.name}</p>
        <div className="flex flex-wrap gap-5">
          <a href={site.emailHref} className="transition hover:text-fg">
            {site.email}
          </a>
          <a href={site.phoneHref} className="transition hover:text-fg">
            {site.phone}
          </a>
          <Link href="/kontakt" className="text-filament transition hover:text-filament-hot">
            Napsat
          </Link>
        </div>
      </div>
    </footer>
  );
}
