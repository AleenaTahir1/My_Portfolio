import { motion } from "framer-motion";
import GlitchText from "./GlitchText";

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[80svh] flex items-center justify-center bg-transparent overflow-hidden pt-16"
    >
      {/* subtle radial glow layered over the global 3D starfield (dark mode only) */}
      <div
        className="cosmic-glow absolute inset-0 -z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(34,211,238,0.08), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_auto] lg:justify-center gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <img
                src={`${import.meta.env.BASE_URL}profile.webp`}
                alt="Aleena Tahir, Full Stack AI Engineer"
                fetchPriority="high"
                className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover border-4 border-white transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
              />
              {/* Offset block behind the photo */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 border-4 border-white bg-brutalist-darkgray" />

              {/* Corner markers */}
              <div className="absolute -top-4 -left-4 w-6 h-6 border-t-4 border-l-4 border-white" />
              <div className="absolute -bottom-7 -right-7 w-6 h-6 border-b-4 border-r-4 border-white" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 md:gap-8 w-full"
          >
            <p className="font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] text-gray-400">
              Full Stack AI Engineer
            </p>

            <h1 className="font-mono font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-white leading-[0.95] tracking-tight">
              <GlitchText text="ALEENA" />
              <br />
              <GlitchText text="TAHIR" />
            </h1>

            <p className="font-mono text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
              I build AI products end to end, from agents and automations to fast desktop apps in Rust and Tauri.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2 w-full justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="btn-brutalist inline-flex items-center justify-center group w-full sm:w-auto text-xs sm:text-sm md:text-base"
              >
                <span>View Projects</span>
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  ↓
                </span>
              </button>

              <a
                href={`${import.meta.env.BASE_URL}Aleena_Tahir_CV.pdf`}
                download="Aleena_Tahir_CV.pdf"
                className="btn-brutalist inline-flex items-center justify-center group w-full sm:w-auto text-xs sm:text-sm md:text-base bg-white text-black hover:bg-black hover:text-white hover:border-white"
              >
                <span>Resume.pdf</span>
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white opacity-20 z-10"></div>
    </section>
  );
};

export default HeroSection;
