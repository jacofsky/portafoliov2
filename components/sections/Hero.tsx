import type {Locale} from "@/i18n-config";

import {
  SiReact,
  SiNestjs,
  SiVuedotjs,
  SiTypescript,
  SiNuxtdotjs,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

import {getDictionary} from "@/utils/i18n";
import Pattern from "@/assets/patterns/hero-pattern.svg";
import Button from "@/components/common/CtaButton";

async function Hero({lang}: {lang: Locale}) {
  const dictionary = getDictionary(lang);

  return (
    <section className="h-screen w-screen px-4 md:px-16" id="hero">
      <Pattern className="absolute right-0 top-0 h-screen w-screen object-cover" />
      <div className="mb-[15vh] pt-[15vh]" data-aos="zoom-in">
        <div className="text-center md:text-left">
          <h2 className="text-white-stroke text-3xl md:text-5xl">{dictionary.hero.title.name}</h2>
          <h2 className="text-gradient-stroke text-[2rem] md:text-[4rem]">
            {dictionary.hero.title.job}
          </h2>
        </div>
        <p
          dangerouslySetInnerHTML={{__html: dictionary.hero.description}}
          className="hero-text mt-6 max-w-[50rem] text-center text-base text-primary-text md:text-justify md:text-[1.50rem]"
        />
        <div className="mb-[20vh] mt-4 flex flex-row flex-wrap justify-center gap-4 md:justify-start">
          <SiNextdotjs className="h-7 w-7 text-primary-text md:h-10 md:w-10 " />
          <SiNuxtdotjs className="h-7 w-7 text-primary-text md:h-10 md:w-10" />
          <SiTypescript className="h-7 w-7 text-primary-text md:h-10 md:w-10" />
          <SiReact className="h-7 w-7 text-primary-text md:h-10 md:w-10" />
          <SiVuedotjs className="h-7 w-7 text-primary-text md:h-10 md:w-10" />
          <SiNestjs className="h-7 w-7 text-primary-text md:h-10 md:w-10" />
          <SiMongodb className="h-7 w-7 text-primary-text md:h-10 md:w-10" />
          <SiPostgresql className="h-7 w-7 text-primary-text md:h-10 md:w-10" />
        </div>
        <Button text={dictionary.hero.button} />
      </div>
    </section>
  );
}

export default Hero;
