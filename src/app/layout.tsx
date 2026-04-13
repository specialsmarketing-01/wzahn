import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: "Zahnarzt Wien 1200 – Dr. Sablania | Implantat | Krone & Brücke",
  description:
    "Zahnarzt Wien 1200 & 1210, 1220, 1190, 1020 Wien (Dr. Manish Sablania), Klosterneuburg: Mundhygiene, Füllungen, Implantat, Bleaching, Krone & Brücke, Kieferorthopädie.",
  keywords: [
    "Zahnarzt Wien",
    "Zahnärzte Wien",
    "Zahnarzt Wien Termin",
    "Zahnarzt in meiner Nähe Wien",
  ],
  openGraph: {
    title: "Zahnarzt Wien 1200 – Dr. Sablania | Implantat | Krone & Brücke",
    description:
      "Zahnarzt Wien 1200: Allgemeine und ästhetische Zahnheilkunde, Kieferorthopädie, Implantologie – Dr. Manish Sablania.",
    locale: "de_AT",
    type: "website",
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Zahnarzt Wien 1200 – Dr. Sablania | Implantat | Krone & Brücke",
    description:
      "Zahnarzt Wien 1200: Kieferorthopädie, Implantat, Krone & Brücke – Dr. Manish Sablania.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://${SITE.domain}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${plusJakarta.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
