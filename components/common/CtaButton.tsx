import Link from "next/link";

interface Iprops {
  disabled?: boolean;
  text: string;
}

function Button({text}: Iprops) {
  return (
    <Link className="group relative w-full text-center md:w-fit" href="#contact" type="button">
      <div className="button-gradient-border px-12 py-2 transition-all md:group-hover:translate-x-[-0.5rem] md:group-hover:translate-y-[0.5rem]">
        <span className="primary-text-gradient relative z-30 text-xl font-light tracking-wider md:text-3xl">
          {text}
        </span>
      </div>

      <div className="button-gradient-border absolute right-2 top-2 z-10 hidden px-12 py-2 md:inline-block">
        <span className="text-nowrap text-xl font-light tracking-wider text-transparent md:text-3xl">
          {text}
        </span>
      </div>
    </Link>
  );
}

export default Button;
