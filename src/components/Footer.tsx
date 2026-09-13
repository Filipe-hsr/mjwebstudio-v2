import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050506] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-mj-bulb-hires.png"
            alt=""
            width={28}
            height={36}
            className="h-8 w-auto opacity-90"
          />
          <div>
            <p className="text-sm font-semibold tracking-wide">MJ Web Studio</p>
            <p className="text-xs text-muted">Od nápadu po výsledek.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
          <a href="mailto:info@mjwebstudio.cz" className="hover:text-fg">
            info@mjwebstudio.cz
          </a>
          <span className="hidden text-white/20 sm:inline">·</span>
          <a href="tel:+420727942839" className="hover:text-fg">
            +420 727 942 839
          </a>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} MJ Web Studio
        </p>
      </div>
    </footer>
  );
}
