import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "CCRIPT Agency",
      role: "Full Stack Engineer",
      year: "2025",
      location: "Islamabad, Pakistan",
      id: "01",
      description: [
        "Spearheaded the development of scalable web solutions, optimizing frontend performance and backend efficiency.",
        "Collaborated with cross-functional teams to deliver high-quality software products on time."
      ]
    },
    {
      company: "Neuralogic",
      role: "Full Stack Engineer",
      year: "2025",
      location: "Islamabad, Pakistan",
      id: "02",
      description: [
        "Contributed to the architecture and implementation of complex software systems, ensuring high code quality and maintainability.",
        "Implemented robust APIs and integrated third-party services to enhance application functionality."
      ]
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center bg-brutalist-black border-t-2 border-white noise-bg py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="font-mono text-sm md:text-base text-gray-400 mb-4">
            <span className="text-white">02.</span> EXPERIENCE
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 break-words">
            WORK HISTORY
          </h2>
          <div className="h-px bg-white w-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group"
            >
              {/* Experience Card */}
              <div className="border-2 border-white bg-brutalist-darkgray transition-all duration-300 hover:translate-x-[-6px] hover:translate-y-[-6px] overflow-hidden">
                {/* Card Header */}
                <div className="border-b-2 border-white p-4 sm:p-6 md:p-8 bg-brutalist-black transition-colors duration-300 group-hover:bg-brutalist-gray">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    {/* Left: Company & Role */}
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="font-mono text-xs text-gray-500 mb-2"
                      >
                        [{exp.id}]
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-mono font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2 leading-tight transition-transform duration-300 group-hover:translate-x-2 break-words"
                      >
                        {exp.company}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-mono text-base sm:text-lg md:text-xl text-gray-300 break-words"
                      >
                        {exp.role}
                      </motion.div>
                    </div>

                    {/* Right: Year & Location */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="border-l-0 md:border-l-2 border-t-2 md:border-t-0 border-white pt-4 md:pt-0 pl-0 md:pl-6 shrink-0"
                    >
                      <div className="font-mono text-sm text-gray-500 space-y-2">
                        <div className="transition-colors duration-300 group-hover:text-gray-400">
                          <span className="text-white">Year:</span>{" "}
                          <span className="text-gray-300">{exp.year}</span>
                        </div>
                        <div className="transition-colors duration-300 group-hover:text-gray-400">
                          <span className="text-white">Location:</span>{" "}
                          <span className="text-gray-300">{exp.location}</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Card Body - Terminal Style */}
                <div className="p-4 sm:p-6 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-mono text-xs sm:text-sm space-y-2"
                  >
                    <div className="text-gray-500 transition-all duration-300 group-hover:text-gray-400">
                      <span className="text-white">{">"}</span> cat role.txt
                    </div>
                    {exp.description.map((desc, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        className="pl-4 text-gray-300 leading-relaxed transition-all duration-300 group-hover:translate-x-2 break-words"
                      >
                        {desc}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tech Stack Indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 pt-6 border-t-2 border-white"
                  >
                    <div className="font-mono text-xs text-gray-500 mb-3">
                      {">"} Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "TypeScript", "Full Stack"].map(
                        (tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + techIndex * 0.1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="font-mono text-xs border border-white px-3 py-1 text-white bg-brutalist-black transition-all duration-200 hover:bg-white hover:text-black cursor-default"
                          >
                            {tech}
                          </motion.span>
                        )
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Command Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 border-t-2 border-white pt-8"
        >
          <div className="font-mono text-xs md:text-sm text-gray-600">
            <span className="text-white">$</span> Currently working on building
            innovative solutions
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
