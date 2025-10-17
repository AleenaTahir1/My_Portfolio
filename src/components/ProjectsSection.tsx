import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      title: "DisasterConnect",
      description:
        "A web platform for disaster response, featuring real-time communication and interactive mapping.",
      technologies: ["Python", "Django", "React", "WebSocket", "PostgreSQL"],
      github: "https://github.com/Razee4315/DisasterConnect",
      year: "2024",
    },
    {
      title: "BinarySearchTreeVisualization",
      description:
        "An educational tool providing real-time visualization of BST operations through interactive animations.",
      technologies: ["C++", "Qt6", "OpenGL", "CMake"],
      github: "https://github.com/Razee4315/BinarySearchTreeVisualization",
      year: "2024",
    },
    {
      title: "Panda Chat",
      description:
        "A modern real-time chat application with instant messaging, file sharing, and an intuitive user interface.",
      technologies: [
        "TypeScript",
        "React",
        "Firebase",
        "WebSocket",
        "Material-UI",
      ],
      github: "https://github.com/Razee4315/panda_chat",
      year: "2024",
    },
    {
      title: "Nutech Chatbot Assistant",
      description:
        "Fine-tuned an LLM on university data to create a custom chatbot, deployed with Gradio for interactive use.",
      technologies: ["Python", "LLM Fine-tuning", "Gradio"],
      github: null,
      year: "2023",
    },
    {
      title: "NUTECH Virtual Tour",
      description:
        "An interactive campus tour using React and 360° media, focusing on optimized user experience.",
      technologies: ["React", "JavaScript", "360° Media"],
      github: "https://razee4315.github.io/nutech-tour",
      year: "2023",
    },
    {
      title: "Pitch and Yaw Coordinate Finder",
      description:
        "An HTML5/JavaScript tool to extract spherical coordinates from images, addressing a specific technical gap.",
      technologies: ["HTML5", "JavaScript", "Image Processing"],
      github: "https://razee4315.github.io/pitch-and-yaw-finder",
      year: "2023",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-brutalist-black border-t-2 border-white noise-bg py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="font-mono text-sm md:text-base text-gray-400 mb-4">
            <span className="text-white">02.</span> WORK
          </div>
          <h2 className="font-mono font-bold text-4xl md:text-6xl text-white mb-6">
            SELECTED PROJECTS
          </h2>
          <div className="h-px bg-white w-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
              className="group"
            >
              {/* Project Card */}
              <div className="border-2 border-white bg-brutalist-darkgray transition-all duration-300 hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[8px_8px_0_rgba(255,255,255,0.1)]">
                {/* Project Header */}
                <div className="border-b-2 border-white p-4 md:p-6 bg-brutalist-black">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-mono text-xs text-gray-500 mb-2"
                      >
                        [{String(index + 1).padStart(2, "0")}] / {project.year}
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-mono font-bold text-lg md:text-xl text-white leading-tight transition-transform duration-300 group-hover:translate-x-2"
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                    {project.github && (
                      <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs border-2 border-white px-3 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 shrink-0"
                      >
                        [→]
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-4 md:p-6 space-y-4">
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="font-mono text-sm md:text-base text-gray-300 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="border-t-2 border-white pt-4">
                    <div className="font-mono text-xs text-gray-500 mb-3">
                      {">"} Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.7 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="font-mono text-xs border border-white px-3 py-1 text-white bg-brutalist-black transition-all duration-200 hover:bg-white hover:text-black cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* View Link */}
                  {project.github && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="pt-2"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-white hover:underline inline-flex items-center gap-2 group"
                      >
                        <span className="text-gray-500 group-hover:text-white transition-colors">
                          $
                        </span>
                        <span>view_project</span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </a>
                    </motion.div>
                  )}

                  {!project.github && (
                    <div className="pt-2">
                      <div className="font-mono text-sm text-gray-600 inline-flex items-center gap-2">
                        <span className="text-gray-700">$</span>
                        <span>private_repository</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 border-2 border-white p-8 md:p-12 text-center"
        >
          <div className="font-mono text-sm text-gray-500 mb-4">
            {">"} More projects on GitHub
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Razee4315"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutalist inline-flex items-center gap-2 group"
          >
            <span>View All Work</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </motion.a>
        </motion.div>

        {/* Terminal hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 font-mono text-xs md:text-sm text-gray-600"
        >
          <span className="text-white">Tip:</span> Click [→] to view source code
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
