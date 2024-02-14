import Link from "next/link";

function LinkText({text, to, external}: {text: string; to: string; external?: boolean}) {
  return (
    <Link
      className="link-text-border-bottom relative text-base font-light text-primary-text transition-all hover:tracking-[0.15em] md:text-xl"
      href={to}
      target={external ? "_blank" : ""}
    >
      {text}
    </Link>
  );
}

export default LinkText;
