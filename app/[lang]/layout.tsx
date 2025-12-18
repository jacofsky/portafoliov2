import "@/assets/styles/animations.css";
import "@/assets/styles/typeface.css";
import "@/assets/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valentín Jacofsky - Desarrollador Fullstack",
  description:
    "Portafolio de Valentín Jacofsky, desarrollador fullstack con experiencia en tecnologías como React, Node.js, PostgreSQL y más. Explorando oportunidades para contribuir en roles de programación y producto.",
  keywords:
    "Valentín Jacofsky, desarrollador fullstack, portafolio, React, Node.js, PostgreSQL, programación, producto",
  authors: [{ name: "Valentín Jacofsky" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://valentin-jacofsky.vercel.app/es",
    title: "Valentín Jacofsky - Desarrollador Fullstack",
    description:
      "Portafolio de Valentín Jacofsky, desarrollador fullstack con experiencia en tecnologías como React, Node.js, PostgreSQL y más. Explorando oportunidades para contribuir en roles de programación y producto.",
    images: [
      {
        url: "https://valentin-jacofsky.vercel.app/en/portrait.jpeg",
        width: 800,
        height: 600,
        alt: "Valentín Jacofsky",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://valentin-jacofsky.vercel.app/es",
    title: "Valentín Jacofsky - Desarrollador Fullstack",
    description:
      "Portafolio de Valentín Jacofsky, desarrollador fullstack con experiencia en tecnologías como React, Node.js, PostgreSQL y más. Explorando oportunidades para contribuir en roles de programación y producto.",
    images: [
      {
        url: "https://valentin-jacofsky.vercel.app/en/portrait.jpeg",
        width: 800,
        height: 600,
        alt: "Valentín Jacofsky",
      },
    ],
  },
};

import { i18n } from "@/i18n-config";
import { AOSInit } from "@/components/common/Aos";
import Menu from "@/components/common/menu/Index";
import { getDictionary } from "@/utils/i18n";
import Footer from "@/components/common/Footer";
import { Analytics } from "@vercel/analytics/next"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "es" };
}) {
  const dictionary = getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <AOSInit />
      <body>
        <Menu dictionary={dictionary} />
        {children}
        <Footer lang={params.lang} />
        <Analytics />
      </body>
    </html>
  );
}
