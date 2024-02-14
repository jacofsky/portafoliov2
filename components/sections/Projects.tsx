import type {Locale} from "@/i18n-config";

import Link from "next/link";
import {FaGithub} from "react-icons/fa";

import {getDictionary} from "@/utils/i18n";
import ProjectsList from "@/components/projects/ProjectsList";

async function Projects({lang}: {lang: Locale}) {
  const dictionary = getDictionary(lang);

  return (
    <>
      <section className="min-h-screen w-screen px-4 pt-12 md:px-16" id="projects">
        <h2 className="text-gradient-stroke text-3xl md:text-6xl">{dictionary.projects.title}</h2>
        <ProjectsList
          buttons={dictionary.projects.buttons}
          projects={dictionary.projects.projects}
        />
      </section>
      <section className="mt-4 bg-gradient-to-r from-[#4AC7FA] to-[#E649F5] py-8">
        <h3 className="mb-2 text-center text-xl text-white md:text-3xl">
          {dictionary.projects.cta.title}
        </h3>
        <p className="text-balance mx-auto text-center text-sm md:w-[28rem] md:text-base">
          {dictionary.projects.cta.text}
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <Link
            className="flex flex-row gap-2 border-2 border-primary-text p-2 text-sm text-primary-text transition-all hover:border-white hover:text-white md:text-base"
            href={dictionary.projects.cta.button.url}
          >
            <FaGithub size={20} />
            {dictionary.projects.cta.button.label}
          </Link>
        </div>
      </section>
    </>
  );
}

export default Projects;
