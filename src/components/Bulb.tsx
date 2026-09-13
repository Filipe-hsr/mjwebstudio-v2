import Image from "next/image";

type Props = { className?: string; size?: number };

export function Bulb({ className = "", size = 440 }: Props) {
  return (
    <div className={`relative mx-auto flex items-center justify-center ${className}`}>
      {/* soft rays */}
      <div
        className="pointer-events-none absolute h-[120%] w-[120%] rays-spin opacity-40"
        aria-hidden
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(232,160,58,0.12) 12deg, transparent 28deg, transparent 90deg, rgba(255,138,31,0.1) 102deg, transparent 120deg, transparent 180deg, rgba(232,160,58,0.1) 192deg, transparent 210deg, transparent 270deg, rgba(255,138,31,0.08) 282deg, transparent 300deg)",
          maskImage: "radial-gradient(circle, black 20%, transparent 68%)",
          WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 68%)",
        }}
      />
      {/* breathing glow */}
      <div
        className="pointer-events-none absolute h-[75%] w-[75%] rounded-full bg-[radial-gradient(circle,rgba(232,160,58,0.45),transparent_68%)] blur-3xl bulb-glow"
        aria-hidden
      />
      {/* light leak */}
      <div
        className="pointer-events-none absolute -right-[8%] top-[18%] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,138,31,0.35),transparent_70%)] blur-2xl light-leak"
        aria-hidden
      />
      <Image
        src="/logo-mj-bulb-clean.png"
        alt="MJ Web Studio"
        width={size}
        height={Math.round(size * 1.3)}
        priority
        className="relative z-10 h-auto w-full max-w-[min(100%,400px)] drop-shadow-[0_0_60px_rgba(232,160,58,0.35)] bulb-float filament-shimmer"
      />
    </div>
  );
}
