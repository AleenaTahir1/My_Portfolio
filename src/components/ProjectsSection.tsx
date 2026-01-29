import { motion } from "framer-motion";
import ProjectSchema from "./ProjectSchema";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Gig Synappix",
      description:
        "Hire & Get Hired! A full platform for smarter connections with backend in FastAPI and frontend in React with AI chatbot. Post your task or find your next side hustle.",
      technologies: ["FastAPI", "React", "AI Chatbot", "Python", "PostgreSQL"],
      github: "https://github.com/AleenaTahir1/GigSynappix",
      link: "https://github.com/AleenaTahir1/GigSynappix",
      year: "2025",
    },
    {
      title: "Hill Icon Skardu",
      description:
        "Built a complete website for Hill Icon Skardu Hotel from scratch. Designed logo and custom icons. Developed in Next.js with fast performance, WhatsApp integration for booking, and SEO optimization.",
      technologies: ["Next.js", "WhatsApp API", "SEO", "Vercel", "Tailwind CSS"],
      github: "https://hilliconskardu.com/",
      link: "https://hilliconskardu.com/",
      year: "2025",
    },
    {
      title: "OmniRecall",
      description:
        "AI-Powered Knowledge Assistant built in Rust. Privacy-first desktop AI with Spotlight-style interface, multi-provider support (Gemini, OpenAI, Anthropic, Ollama), and RAG for local PDFs and code files.",
      technologies: ["Rust", "RAG", "OpenAI", "Ollama", "Tauri"],
      github: "https://github.com/Razee4315/omnirecall",
      link: "https://github.com/Razee4315/omnirecall",
      year: "2025",
    },
    {
      title: "Scoutly",
      description:
        "Automated Job Search Agent. An n8n workflow that takes a CV, analyzes it using AI, searches multiple job platforms, and sends a summary email with relevant job details.",
      technologies: ["n8n", "AI", "Automation", "Email API", "LangChain"],
      github: "https://github.com/AleenaTahir1/Scodly-Agent",
      link: "https://github.com/AleenaTahir1/Scodly-Agent",
      year: "2025",
    },
    {
      title: "NUTECH Virtual Tour",
      description:
        "Comprehensive 360° virtual tour platform for the university. Engineered an immersive digital experience with event-specific navigation features for prospective students and families.",
      technologies: ["React", "Three.js", "360° Photography", "WebGL"],
      github: "https://razee4315.github.io/nutech-tour-threejs/",
      link: "https://razee4315.github.io/nutech-tour-threejs/",
      year: "2025",
    },
    {
      title: "UNBROKEN",
      description:
        "Brutalist E-Commerce Experience. High-impact fullscreen landing page for performance equipment with raw industrial aesthetic, video-first interface, and tactical HUD data visualizations.",
      technologies: ["React", "Tailwind CSS", "Video", "Clip-path", "Framer Motion"],
      github: "https://github.com/AleenaTahir1/UNBROKEN",
      year: "2025",
    },
    {
      title: "Nami",
      description:
        "Real-time chat application like WhatsApp built in Rust. Share images, videos, chat with online status - more secure and lightweight than traditional solutions.",
      technologies: ["Rust", "WebSocket", "Real-time", "Encryption", "Tauri"],
      github: "https://github.com/AleenaTahir1/nami",
      link: "https://github.com/AleenaTahir1/nami",
      year: "2025",
    },
    {
      title: "CropWise",
      description:
        "Crop Disease Classification Web Application using CNN to classify diseases in crop leaves from uploaded images. Features AI-powered prediction, model training pipeline, and Flask web interface.",
      technologies: ["Python", "TensorFlow", "Flask", "CNN", "Tailwind CSS"],
      github: "https://github.com/AleenaTahir1/CropWise",
      link: "https://github.com/AleenaTahir1/CropWise",
      year: "2025",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-brutalist-black border-t-2 border-white py-20 md:py-32 overflow-hidden"
    >
      {/* Static noise background container - absolute and contained */}
      <div className="absolute inset-0 noise-bg opacity-30 pointer-events-none"></div>

      <ProjectSchema projects={projects} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="font-mono text-sm md:text-base text-gray-400 mb-4">
            <span className="text-white">02.</span> WORK
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 break-words">
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index % 2 * 0.1 }}
              className="group h-full"
            >
              {/* Project Card - removed expensive heavy scale hover, used translate instead */}
              <div className="h-full border-2 border-white bg-brutalist-darkgray transition-transform duration-300 group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] flex flex-col shadow-[4px_4px_0_rgba(255,255,255,0.1)] group-hover:shadow-[8px_8px_0_rgba(255,255,255,0.15)]">
                {/* Project Header */}
                <div className="border-b-2 border-white p-4 md:p-6 bg-brutalist-black overflow-hidden shrink-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="font-mono text-xs text-gray-500 mb-2">
                        [{String(index + 1).padStart(2, "0")}] / {project.year}
                      </div>
                      <h3 className="font-mono font-bold text-base sm:text-lg md:text-xl text-white leading-tight transition-transform duration-300 group-hover:translate-x-2 break-words">
                        {project.title}
                      </h3>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs border-2 border-white px-3 py-2 text-white hover:bg-white hover:text-black transition-all duration-200 shrink-0 transform group-hover:rotate-6"
                        aria-label="View Source Code"
                      >
                        [→]
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-4 md:p-6 space-y-4 flex-grow flex flex-col">
                  {/* Description - Static rendering for performance */}
                  <p className="font-mono text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed break-words flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="border-t-2 border-white pt-4 mt-auto">
                    <div className="font-mono text-xs text-gray-400 mb-3 break-words">
                      {">"}  Tech Stack:
                    </div>
                    <div className="flex flex-wrap gap-2 overflow-hidden">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="font-mono text-xs border border-white px-2 sm:px-3 py-1 text-white bg-brutalist-black transition-colors duration-200 hover:bg-white hover:text-black cursor-default break-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Link - only show if project has a link */}
                  {project.link && (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-white hover:underline inline-flex items-center gap-2 group/link"
                      >
                        <span className="text-gray-400 group-hover/link:text-white transition-colors">
                          $
                        </span>
                        <span>view_project</span>
                        <span className="group-hover/link:translate-x-1 transition-transform">
                          →
                        </span>
                      </a>
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
          transition={{ delay: 0.2 }}
          className="mt-16 border-2 border-white p-8 md:p-12 text-center"
        >
          <div className="font-mono text-sm text-gray-400 mb-4">
            {">"} More projects on GitHub
          </div>
          <a
            href="https://github.com/AleenaTahir1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutalist inline-flex items-center gap-2 group hover:scale-105 active:scale-95 transition-transform"
          >
            <span>View All Work</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
