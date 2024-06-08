import type {Locale} from "@/i18n-config";

import {getDictionary} from "@/utils/i18n";

async function Studies({lang}: {lang: Locale}) {
  const dictionary = getDictionary(lang);

  return (
    <section className="w-screen px-4 pt-12 md:px-16" id="studies">
      <h2 className="text-gradient-stroke text-3xl md:text-6xl">{dictionary.studies.title}</h2>
      <div className="mt-8 flex flex-col gap-14">
        {dictionary.studies.studies.map((study, i) => (
          <div
            key={study.date}
            className="flex flex-col items-baseline gap-2 md:flex-row"
            data-aos="fade-right"
            data-aos-anchor-placement="center-bottom"
            data-aos-delay={i * 300}
          >
            <h4 className="text-4xl font-light text-primary-text">
              <span className="hidden md:inline-block">-</span> {study.title}
            </h4>
            <p className="text-xl font-light text-primary-text">({study.description})</p>
            <span className="text-xl font-extralight text-primary-text">{study.date}</span>
          </div>
        ))}
      </div>
      <div className="mt-[20vh] flex w-full justify-end">
        <span
          className="text-gradient-stroke-motivational relative right-0 w-[45rem] text-right text-4xl"
          data-aos="fade-in"
          data-aos-anchor-placement="center-bottom"
        >
          {dictionary.studies.motivationalPhrase}
        </span>
      </div>
    </section>
  );
}

export default Studies;
