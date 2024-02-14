"use client";
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi";

import {useMenuStore} from "@/stores/menuStore";

function Button() {
  const {isOpen, toggle} = useMenuStore();

  return (
    <button
      className="text-primary-text transition-all duration-300 hover:text-[#E649F5]"
      type="button"
      onClick={() => toggle()}
    >
      {isOpen ? (
        <HiOutlineX className="h-8 w-8 md:h-12 md:w-12" />
      ) : (
        <HiOutlineMenu className="h-8 w-8 md:h-12 md:w-12" />
      )}
    </button>
  );
}

export default Button;
