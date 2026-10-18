import { useReducedMotion } from "framer-motion";

const logo = (file: string) => `${import.meta.env.BASE_URL}logos/${file}`;

// Heights balance the visual weight of wide wordmarks against squarer lockups
const companies = [
  { name: "SecureIntent.AI", role: "Co-founder & Lead Systems Engineer", file: "secureintent", height: 30, colour: true },
  { name: "VIYLSA", role: "Founder & CEO", file: "viylsa", height: 34, colour: true },
  { name: "Luxure.io", role: "AI Engineer", file: "luxure", height: 34, colour: false },
  { name: "Cloudon", role: "CTO", file: "cloudon", height: 32, colour: true },
  { name: "Ccript Agency", role: "Full Stack AI Engineer", file: "ccript", height: 26, colour: true },
  { name: "Neuralogic", role: "AI Engineer", file: "neuralogic", height: 32, colour: false },
  { name: "Ocryz", role: "AI Developer", file: "ocryz", height: 38, colour: true },
];

const Logo = ({
  company,
  decorative = false,
}: {
  company: (typeof companies)[number];
  decorative?: boolean; // the loop's second copy, hidden from screen readers
}) => (
  <li
    aria-hidden={decorative || undefined}
    className="group/logo relative flex shrink-0 justify-center px-8 md:px-14"
  >
    <div
      className="relative"
      style={{ height: `calc(${company.height}px * var(--logo-scale))` }}
    >
      {/* White silhouette by default; light mode inverts it to black */}
      <img
        src={logo(`${company.file}.webp`)}
        alt={decorative ? "" : company.name}
        loading="lazy"
        className={`logo-mono h-full w-auto opacity-50 transition-opacity duration-300 ${
          company.colour ? "group-hover/logo:opacity-0" : "group-hover/logo:opacity-100"
        }`}
      />
      {/* Brand colours fade in on hover (dark mode only) */}
      {company.colour && (
        <img
          src={logo(`${company.file}-color.webp`)}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="logo-colour absolute inset-0 h-full w-auto opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100"
        />
      )}
    </div>
    {/* Role types in underneath */}
    <span className="absolute top-full mt-3 font-mono text-[11px] text-gray-400 whitespace-nowrap [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-500 ease-[steps(20)] group-hover/logo:[clip-path:inset(0_0_0_0)]">
      {">"} {company.role}
    </span>
  </li>
);

const CompaniesStrip = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-label="Companies I have worked with" className="relative pt-6 pb-12 md:pt-8 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mb-6">
        <p className="font-mono text-xs sm:text-sm text-gray-500">
          <span className="text-white">$</span> worked with
        </p>
      </div>

      {reduceMotion ? (
        <ul className="flex flex-wrap justify-center gap-y-12 pb-8 [--logo-scale:0.8] md:[--logo-scale:1]">
          {companies.map((c) => (
            <Logo key={c.name} company={c} />
          ))}
        </ul>
      ) : (
        <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {/* Two copies of the list so the loop is seamless; hovering pauses it */}
          <ul className="flex w-max animate-marquee pb-8 hover:[animation-play-state:paused] [--logo-scale:0.75] md:[--logo-scale:1]">
            {companies.map((c) => (
              <Logo key={c.name} company={c} />
            ))}
            {companies.map((c) => (
              <Logo key={`${c.name}-copy`} company={c} decorative />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CompaniesStrip;
