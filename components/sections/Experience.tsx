import type {Locale} from "@/i18n-config";

import {getDictionary} from "@/utils/i18n";
import ExperienceList from "@/components/experience/ExperienceList";
import MarqueeText from "@/components/experience/MarqueeText";

async function Experience({lang}: {lang: Locale}) {
  const dictionary = getDictionary(lang);

  return (
    <section className="min-h-screen w-screen px-4 pt-12 md:px-16" id="experience">
      <h2 className="text-gradient-stroke text-3xl md:text-6xl">{dictionary.experience.title}</h2>
      <ExperienceList jobs={dictionary.experience.jobs} />
      <MarqueeText text={dictionary.experience.wordcarrousel} />
    </section>
  );
}

export default Experience;
