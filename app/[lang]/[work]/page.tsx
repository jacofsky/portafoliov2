import {redirect} from "next/navigation";

import {getDictionary} from "@/utils/i18n";
import TechBadge from "@/components/common/TechBadge";

// eslint-disable-next-line @typescript-eslint/naming-convention
interface IData {
  title: string;
  subtitle: string;
  date: string;
  text: string;
  technologies: string[];
}

export default async function WorkPage({params}: {params: {lang: "en" | "es"; work: string}}) {
  const dictionary = getDictionary(params.lang);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!dictionary.works[params.work as keyof typeof dictionary.works]) {
    return redirect(`/${params.lang}`);
  }

  return (
    <main className="min-h-screen px-4 pt-16 md:px-16">
      <div className="mb-6 flex flex-row flex-wrap items-baseline">
        <h1 className="text-gradient-stroke-no-spacing mr-4 text-[3.5rem]">
          {(dictionary.works[params.work as keyof typeof dictionary.works] as IData).title}
        </h1>
        <h2 className="text-[1.75rem] font-light text-primary-text md:text-[2.5rem] ">
          {(dictionary.works[params.work as keyof typeof dictionary.works] as IData).subtitle}
        </h2>
        <p className="ml-0 font-extralight text-primary-text md:ml-2">
          {(dictionary.works[params.work as keyof typeof dictionary.works] as IData).date}
        </p>
      </div>
      <p className="whitespace-pre-wrap text-sm text-white md:text-base">
        {(dictionary.works[params.work as keyof typeof dictionary.works] as IData).text}
      </p>
      <div className="mt-12 flex flex-col gap-4">
        <h3 className="text-3xl text-primary-text">Technological stack</h3>
        <div className=" flex flex-row flex-wrap gap-4">
          {(
            dictionary.works[params.work as keyof typeof dictionary.works] as IData
          ).technologies.map((technology) => (
            <TechBadge key={technology} text={technology} />
          ))}
        </div>
      </div>
    </main>
  );
}
