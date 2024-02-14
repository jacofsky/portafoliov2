import ExperienceCard from "@/components/experience/ExperienceCard";

interface Iprops {
  jobs: {
    company: string;
    position: string;
    date: string;
    page: string;
  }[];
}

function ExperienceList({jobs}: Iprops) {
  return (
    <div className="mt-8 flex flex-col gap-12">
      {jobs.map((job, i) => (
        <ExperienceCard key={job.company} i={i} job={job} />
      ))}
    </div>
  );
}

export default ExperienceList;
