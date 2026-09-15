import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.vp}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Moderní weby od 4 990 Kč. Ozveme se vám do 24 hodin. Free demo. Celá ČR.",
  metadataBase: new URL(site.url),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: `${site.name} — ${site.vp}`,
    description:
      "Stavíme weby, které prodávají. Domény, hosting, redesign. Ozveme se vám do 24 hodin.",
    url: site.url,
    siteName: site.name,
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/hero-edison-1x1.png",
        width: 1200,
        height: 1200,
        alt: "MJ Web Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.vp}`,
    description:
      "Moderní weby od 4 990 Kč. Ozveme se vám do 24 hodin. Free demo.",
    images: ["/hero-edison-1x1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${outfit.variable} ${syne.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
