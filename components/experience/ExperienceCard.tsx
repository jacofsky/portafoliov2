import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io";

interface Iprops {
  job: {
    company: string;
    position: string;
    date: string;
    page: string;
  };
  i: number;
}

function ExperienceCard({job, i}: Iprops) {
  return (
    <Link
      className="group relative flex flex-row items-center justify-between pb-5 text-primary-text"
      data-aos="fade-right"
      data-aos-delay={i * 300}
      href={job.page}
    >
      <div className="flex flex-col items-baseline gap-2 md:flex-row">
        <div className="flex flex-col gap-2 text-4xl md:flex-row">
          <h3 className="font-thin">{job.company}</h3>
          <span className="hidden font-light md:block">-</span>
          <h4 className="font-light">{job.position}</h4>
        </div>
        <p className="font-thin">{job.date}</p>
      </div>
      <IoIosArrowForward size={30} />
      <div className="absolute bottom-0 right-0 h-[3px] w-full rounded bg-primary-text" />
      <div className="primary-gradient absolute bottom-0 left-0 z-10 h-[3px] w-0 rounded transition-all duration-500 group-hover:w-full " />
    </Link>
  );
}

export default ExperienceCard;
