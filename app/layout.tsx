import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://riotact.pl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RIOT ACT",
    template: "%s | RIOT ACT",
  },
  description: "Minimalistyczna odzież miejska. Urban tactical gear — limitowane kolekcje, bezkompromisowy styl.",
  keywords: ["riot act", "odzież miejska", "urban streetwear", "taktyczna moda", "limitowana kolekcja", "polska marka odzieżowa"],
  authors: [{ name: "RIOT ACT" }],
  creator: "RIOT ACT",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "RIOT ACT",
    title: "RIOT ACT — Worldwide Movement 1312",
    description: "Minimalistyczna odzież miejska. Urban tactical gear — limitowane kolekcje, bezkompromisowy styl.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RIOT ACT — Worldwide Movement 1312",
    description: "Minimalistyczna odzież miejska. Urban tactical gear — limitowane kolekcje, bezkompromisowy styl.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RIOT ACT",
  url: SITE_URL,
  description: "Minimalistyczna odzież miejska. Urban tactical gear.",
  sameAs: ["https://www.instagram.com/riot.actt"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${spaceGrotesk.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
