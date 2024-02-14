"use client";

import Link from "next/link";

import {useMenuStore} from "@/stores/menuStore";

interface Iprops {
  dictionary: {
    menu: {
      hero: string;
      experience: string;
      projects: string;
      studies: string;
      contact: string;
    };
  };
}

import Button from "./Button";
function Index({dictionary}: Iprops) {
  const {isOpen, toggle} = useMenuStore();

  return (
    <>
      <div
        className={`fixed flex h-screen w-screen flex-col justify-center gap-8 bg-[--bg] px-4 align-middle transition-all duration-500 md:px-16 ${
          isOpen ? "z-50 opacity-100" : "-z-10 opacity-0"
        }`}
      >
        <Link
          className="text-white-stroke text-center text-3xl uppercase hover:text-primary-text md:text-left md:text-6xl"
          href="/#hero"
          onClick={() => toggle()}
        >
          {dictionary.menu.hero}
        </Link>
        <Link
          className="text-white-stroke text-center text-3xl uppercase hover:text-primary-text md:text-left md:text-6xl"
          href="/#experience"
          onClick={() => toggle()}
        >
          {dictionary.menu.experience}
        </Link>
        <Link
          className="text-white-stroke text-center text-3xl uppercase hover:text-primary-text md:text-left md:text-6xl"
          href="/#projects"
          onClick={() => toggle()}
        >
          {dictionary.menu.projects}
        </Link>
        <Link
          className="text-white-stroke text-center text-3xl uppercase hover:text-primary-text md:text-left md:text-6xl"
          href="/#studies"
          onClick={() => toggle()}
        >
          {dictionary.menu.studies}
        </Link>
        <Link
          className="text-white-stroke text-center text-3xl uppercase hover:text-primary-text md:text-left md:text-6xl"
          href="/#contact"
          onClick={() => toggle()}
        >
          {dictionary.menu.contact}
        </Link>
      </div>
      <div className="fixed right-0 z-50 mr-4 mt-10 md:mr-16">
        <Button />
      </div>
    </>
  );
}

export default Index;
