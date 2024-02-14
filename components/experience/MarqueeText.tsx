import Link from "next/link";

interface Iprops {
  text: string[];
}

function MarqueeText({text}: Iprops) {
  return (
    <Link
      className="marquee mt-32"
      data-aos="fade-in"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay={900}
      href="#contact"
    >
      <div className="marquee__content">
        {text.map((t) => (
          <p key={t} className="text-white-stroke text-nowrap text-6xl">
            {t}
          </p>
        ))}
      </div>
      <div aria-hidden="true" className="marquee__content">
        {text.map((t) => (
          <p key={t} className="text-white-stroke text-nowrap text-6xl">
            {t}
          </p>
        ))}
      </div>
    </Link>
  );
}

export default MarqueeText;
