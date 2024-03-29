import "@/assets/styles/animations.css";
import "@/assets/styles/typeface.css";
import "@/assets/styles/globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import {i18n} from "@/i18n-config";
import {AOSInit} from "@/components/common/Aos";
import Menu from "@/components/common/menu/Index";
import {getDictionary} from "@/utils/i18n";
import Footer from "@/components/common/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({lang: locale}));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {lang: "en" | "es"};
}) {
  const dictionary = getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <AOSInit />
      <body>
        <Menu dictionary={dictionary} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
