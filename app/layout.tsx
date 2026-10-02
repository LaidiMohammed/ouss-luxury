import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const luxe = Cormorant_Garamond({
  variable: "--font-luxe",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geo = Jost({
  variable: "--font-geo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "OUSS LUXURY — Vêtement homme de luxe à Batna",
  description:
    "Ouss Luxury, boutique vêtement homme de luxe à Batna. Polos, chemises, ensembles. Suivez @oussluxury sur TikTok. Tél 0696435870.",
  openGraph: {
    title: "OUSS LUXURY — Batna",
    description: "L'élégance n'a pas de frontières. Paris • London • Batna.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${luxe.variable} ${geo.variable}`}>
      <body className="min-h-screen bg-noir text-cream antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
