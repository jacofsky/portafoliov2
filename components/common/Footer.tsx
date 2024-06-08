import type {Locale} from "@/i18n-config";

import Link from "next/link";
import {FaGithub, FaLinkedin} from "react-icons/fa";

import {getDictionary} from "@/utils/i18n";

async function Footer({lang}: {lang: Locale}) {
  const dictionary = getDictionary(lang);

  return (
    <footer className="mt-16 bg-[#0d0d0d] px-4 pb-4 pt-8 md:px-32">
      <div className="mb-4 flex flex-col justify-between gap-8 sm:flex-row">
        <nav className="text-center md:text-left">
          <p className="mb-4 text-2xl text-[--end-primary-gradient]">Menu</p>
          <ul className="flex flex-col items-center gap-1 text-white md:items-start">
            {dictionary.footer.menu.map((item) => (
              <li key={item.title} className="w-fit transition-all hover:tracking-widest">
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-center text-white md:text-left">
          <p className="mb-4 text-2xl">{dictionary.footer.titleData}</p>
          <div className="flex flex-col gap-2">
            <p>📍 Argentina, CABA</p>
            <p style={{userSelect: "text"}}>📧 vjacofsky.dev@gmail.com</p>
            <p style={{userSelect: "text"}}>📞 +54 9 11 2881 6510</p>
            <Link
              className="w-full border-2 border-white px-12 py-2 text-center text-sm transition-all hover:border-[--end-primary-gradient] hover:text-[--end-primary-gradient]"
              href={dictionary.footer.cv.url}
              target="_blank"
            >
              {dictionary.footer.cv.text}
            </Link>
            <div className="flex flex-row justify-center gap-2 md:justify-start">
              <Link
                className="transition-all duration-200 hover:rotate-6 hover:scale-110"
                href={dictionary.footer.socials.linkedin}
                target="_blank"
              >
                <FaLinkedin size={25} />
              </Link>
              <Link
                className="transition-all duration-200 hover:rotate-6 hover:scale-110"
                href={dictionary.footer.socials.github}
                target="_blank"
              >
                <FaGithub size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mt-8 text-center text-primary-text md:mt-0">{dictionary.footer.madeBy}</p>
      </div>
    </footer>
  );
}

export default Footer;
