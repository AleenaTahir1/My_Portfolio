import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GlitchText from "./GlitchText";
import HeroBackgroundAnimation from "./HeroBackgroundAnimation";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Building. Breaking. Learning. Repeating.";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brutalist-black overflow-hidden pt-16"
    >
      <HeroBackgroundAnimation />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-brutalist-black/90 via-brutalist-black/80 to-transparent" style={{ zIndex: 0 }}></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Profile Picture in Terminal Window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end order-1 lg:order-1"
          >
            <div 
              className="relative group perspective-1000"
            >
              {/* Terminal Window Frame - Added subtle interactive rotation on hover */}
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="border-4 border-white bg-brutalist-darkgray shadow-[12px_12px_0_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[20px_20px_0_rgba(255,255,255,0.2)]"
              >
                {/* Terminal Header Bar */}
                <div className="border-b-4 border-white bg-brutalist-black p-3 md:p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                      {/* Terminal Buttons */}
                      <div className="flex gap-2">
                        <div className="w-3 h-3 border-2 border-white bg-brutalist-black hover:bg-red-500 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 border-2 border-white bg-brutalist-black hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                        <div className="w-3 h-3 border-2 border-white bg-brutalist-black hover:bg-green-500 transition-colors cursor-pointer"></div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="font-mono text-xs md:text-sm text-white"
                      >
                        USER: saqlain_abbas
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="font-mono text-xs text-green-500 flex items-center gap-2"
                    >
                      <span className="animate-pulse">●</span>
                      [ACTIVE]
                    </motion.div>
                  </div>
                </div>

                {/* Image Container with Scan Lines Effect */}
                <div className="relative p-4 md:p-6 bg-brutalist-darkgray">
                  {/* Profile Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="relative"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}profile.webp`}
                      alt="Saqlain Abbas - AI Engineer and Full Stack Developer professional profile picture"
                      fetchPriority="high"
                      className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-white transition-all duration-300 group-hover:grayscale-0 grayscale hover:scale-[1.02]"
                    />

                    {/* Corner Markers */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-white transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-t-4 border-r-4 border-white transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-4 border-l-4 border-white transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-white transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                  </motion.div>

                  {/* Image Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-4 font-mono text-xs md:text-sm text-gray-500 text-center border-t-2 border-white pt-3"
                  >
                    <span className="text-white">{">"}</span> profile.jpg [
                    <span className="text-green-500">LOADED</span>]
                  </motion.div>
                </div>
              </motion.div>

              {/* Glitch Effect Lines */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 1, duration: 0.3 }}
                className="absolute inset-0 border-4 border-white pointer-events-none"
                style={{ transform: "translate(8px, -8px)" }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-2"
          >
            {/* Terminal prompt line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="font-mono text-xs md:text-sm text-gray-400"
            >
              <span className="text-white">saqlain@portfolio</span>
              <span className="text-gray-400">:</span>
              <span className="text-white">~</span>
              <span className="text-gray-400">$</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight tracking-tight break-words"
            >
              <GlitchText text="SAQLAIN" />
              <br />
              <GlitchText text="ABBAS" />
            </motion.h1>

            {/* Subtitle with border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="border-l-4 border-white pl-4 sm:pl-6 py-3 hover:border-l-8 transition-all duration-300 hover:bg-white/5"
            >
              <p className="font-mono text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed break-words">
                AI Engineer | Full Stack Engineer
              </p>
            </motion.div>

            {/* Typewriter text - cursor only shows during typing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="font-mono text-sm md:text-lg text-white h-8"
            >
              <span className="text-gray-400">{"> "}</span>
              {displayedText}
              {!isTypingComplete && (
                <span className="inline-block w-2 h-4 bg-white ml-1 animate-blink"></span>
              )}
            </motion.div>

            {/* Website link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <a
                href="https://saqlainabbas.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs md:text-sm text-gray-500 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
              >
                <span className="group-hover:translate-x-[-2px] transition-transform">
                  →
                </span>
                <span className="border-b border-gray-500 group-hover:border-white">
                  saqlainabbas.app
                </span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-3 pt-4 w-full"
            >
              <button
                onClick={scrollToProjects}
                className="btn-brutalist inline-flex items-center justify-center group w-full sm:w-auto text-xs sm:text-sm md:text-base"
              >
                <span className="text-gray-400 mr-2">{">"}</span>
                <span>View Projects</span>
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  _
                </span>
              </button>

              <a
                href={`${import.meta.env.BASE_URL}SaqlainAbbas_CV.pdf`}
                download="SaqlainAbbas_CV.pdf"
                className="btn-brutalist inline-flex items-center justify-center group w-full sm:w-auto text-xs sm:text-sm md:text-base bg-white text-black hover:bg-black hover:text-white hover:border-white"
              >
                <span className="text-gray-400 mr-2 group-hover:text-white">{">"}</span>
                <span>Resume.pdf</span>
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </motion.div>

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="pt-6 font-mono text-xs md:text-sm text-gray-500 flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 bg-green-500 animate-pulse"></span>
              <span>Available for opportunities</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={scrollToProjects}
      >
        <div className="flex flex-col items-center gap-2">
           <span className="font-mono text-xs text-gray-500">SCROLL</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </motion.div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white opacity-20 z-10"></div>
    </section>
  );
};

export default HeroSection;
