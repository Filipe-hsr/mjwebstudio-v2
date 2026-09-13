import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

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
  title: "MJ Web Studio — Weby, které prodávají",
  description:
    "Od nápadu po výsledek. Moderní weby od 4 990 Kč. Odpověď do 24 h, realizace 1–2 týdny. Celá ČR, vzdáleně.",
  metadataBase: new URL("https://mjwebstudio.cz"),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "MJ Web Studio — Weby, které prodávají",
    description: "Nápady, které fungují. Od nápadu po výsledek.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${outfit.variable} ${syne.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
