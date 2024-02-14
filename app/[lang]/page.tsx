import type {Locale} from "@/i18n-config";

import {SpeedInsights} from "@vercel/speed-insights/next";

import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Studies from "@/components/sections/Studies";
import Contact from "@/components/sections/Contact";

export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
  return (
    <main>
      <Hero lang={lang} />
      <div className="flex flex-col gap-20">
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Studies lang={lang} />
        <Contact lang={lang} />
      </div>
      <SpeedInsights />
    </main>
  );
}
