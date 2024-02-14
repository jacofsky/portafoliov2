import Image from "next/image";

import TechBadge from "@/components/common/TechBadge";
import LinkText from "@/components/common/LinkText";

interface Iprops {
  project: {
    image: string;
    alt: string;
    title: string;
    technologies: string[];
    description: string;
    code: string | null;
    livepage: string | null;
    rightImage: boolean;
  };
  buttons: {
    code: string;
    livepage: string;
  };
}

function ProjectCard({project, buttons}: Iprops) {
  return (
    <div
      className="flex flex-col md:flex-row"
      data-aos={project.rightImage ? "fade-left" : "fade-right"}
      data-aos-anchor-placement="center-bottom"
    >
      {!project.rightImage ? (
        <div className="w-full md:w-3/6">
          <Image alt={project.alt} height={500} src={project.image} width={500} />
        </div>
      ) : null}
      <div className="w-full max-w-xl md:w-3/6">
        <h3 className="project-title text-2xl font-bold text-primary-text md:text-4xl">
          {project.title}
        </h3>
        <div className="mb-2 mt-4 flex flex-row flex-wrap gap-4">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} text={tech} />
          ))}
        </div>
        <p className="whitespace-pre-line text-justify text-xs font-light text-primary-text md:text-base">
          {project.description}
        </p>

        <div className="mt-6 flex flex-row flex-wrap gap-4 pb-4 md:mt-16">
          {project.code ? <LinkText external text={buttons.code} to={project.code} /> : null}
          {project.livepage ? (
            <LinkText external text={buttons.livepage} to={project.livepage} />
          ) : null}
        </div>
      </div>

      {project.rightImage ? (
        <div className="mt-8 w-full md:mt-0 md:w-3/6">
          <Image
            alt={project.alt}
            className="ml-auto"
            height={500}
            src={project.image}
            width={500}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ProjectCard;
