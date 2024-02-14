import ProjectCard from "./ProjectCard";

interface Iprops {
  projects: {
    image: string;
    alt: string;
    title: string;
    technologies: string[];
    description: string;
    code: string | null;
    livepage: string | null;
    rightImage: boolean;
  }[];
  buttons: {
    code: string;
    livepage: string;
  };
}

function ProjectsList({projects, buttons}: Iprops) {
  return (
    <div className="mt-8 flex flex-col gap-40 overflow-hidden">
      {projects.map((project) => (
        <ProjectCard key={project.title} buttons={buttons} project={project} />
      ))}
    </div>
  );
}

export default ProjectsList;
