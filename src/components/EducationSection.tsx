import { motion } from "framer-motion";


const EducationSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Artificial Intelligence",
      shortName: "BSAI",
      institution: "National University of Technology (NUTECH)",
      location: "Islamabad, Pakistan",
      duration: "Aug 2023 – Present",
      status: "Currently in 5th semester",
      description: "Specializing in Machine Learning, Deep Learning, and AI Systems Development."
    },
    {
      degree: "HSSC Computer Science",
      shortName: "HSSC_CS",
      institution: "Public School and College Skardu",
      location: "Skardu, Pakistan",
      duration: "Jun 2020 – May 2022",
      status: "Completed",
      description: "Studied computer science fundamentals, programming, and mathematics."
    }
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-brutalist-black py-20 md:py-32 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="font-mono text-sm text-gray-500 mb-2">
            <span className="text-white">$</span> cat education.txt
          </div>
          <h2 className="font-mono font-bold text-4xl md:text-5xl lg:text-6xl text-white border-l-4 border-white pl-4 md:pl-6">
            EDUCATION
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8 md:space-y-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border-4 border-white bg-brutalist-darkgray p-6 md:p-8 hover:translate-x-[-4px] hover:translate-y-[-4px] transition-transform duration-200 card-brutalist"
            >
              {/* Terminal Header */}
              <div className="border-b-2 border-white pb-4 mb-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="font-mono text-xs md:text-sm text-gray-500">
                    <span className="text-white">[{index + 1}]</span> /education/{edu.shortName}
                  </div>
                  <div className="font-mono text-xs md:text-sm">
                    <span className={edu.status === "Currently in 4th semester" ? "text-green-500" : "text-gray-500"}>
                      [{edu.status.toUpperCase()}]
                    </span>
                  </div>
                </div>
              </div>

              {/* Degree */}
              <h3 className="font-mono font-bold text-2xl md:text-3xl text-white mb-4">
                {edu.degree}
              </h3>

              {/* Institution & Location */}
              <div className="space-y-2 mb-4">
                <div className="font-mono text-sm md:text-base text-gray-300">
                  <span className="text-gray-500">{">"}  </span>
                  <span className="text-white">Institution:</span> {edu.institution}
                </div>
                <div className="font-mono text-sm md:text-base text-gray-300">
                  <span className="text-gray-500">{">"}  </span>
                  <span className="text-white">Location:</span> {edu.location}
                </div>
                <div className="font-mono text-sm md:text-base text-gray-300">
                  <span className="text-gray-500">{">"}  </span>
                  <span className="text-white">Duration:</span> {edu.duration}
                </div>
              </div>

              {/* Description */}
              <div className="border-t-2 border-white pt-4">
                <p className="font-mono text-sm md:text-base text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
