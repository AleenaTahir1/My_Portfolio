import { motion } from "framer-motion";
import ProjectSchema from "./ProjectSchema";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portkiller",
      description:
        "A fast Windows utility to visualize and kill processes blocking specific ports. Built with Tauri, Rust, and Preact.",
      technologies: ["Tauri", "Rust", "Preact"],
      github: "https://github.com/Razee4315/portkiller/releases/tag/main",
      year: "2025",
    },
    {
      title: "ClipStream",
      description:
        "A lightweight, context-aware clipboard manager for Windows that feels native to the OS.",
      technologies: ["Rust", "Windows API"],
      github: "https://github.com/Razee4315/clipstream/releases/tag/build",
      year: "2025",
    },
    {
      title: "Spartan",
      description:
        "Engineered a full-stack call agent application for real estate professionals to manage client interactions. Integrated Twilio for phone calls/SMS, Deepgram for transcription, and OpenAI for AI-driven suggestions and filtering. Utilized Supabase for real-time database management and authentication.",
      technologies: ["Next.js", "Supabase", "Twilio", "Deepgram", "OpenAI API"],
      github: null,
      year: "2024",
    },
    {
      title: "Jessy AI",
      description:
        "Developed a bespoke AI personal assistant and health monitor tailored to a specific user's needs. Built a FastAPI backend with PostgreSQL and integrated OpenAI for conversational logic. Implemented voice-to-text (Whisper) and text-to-speech (Piper) for a complete voice-interactive experience.",
      technologies: ["Next.js", "PostgreSQL", "FastAPI", "OpenAI API", "Piper", "Whisper"],
      github: null,
      year: "2024",
    },
    {
      title: "All Organics",
      description:
        "Created an e-commerce platform for influencers to curate and sell their favorite organic products. Implemented user authentication and product management using Firebase (Firestore and Auth). Integrated Stripe for secure payment processing, enabling followers to purchase products easily.",
      technologies: ["React", "Firebase", "Stripe"],
      github: null,
      year: "2024",
    },
    {
      title: "Raver AI",
      description:
        "Developed a digital marketplace for designers to sell AI-generated or custom images. Built with Next.js for a high-performance frontend and integrated Stripe for payment transactions.",
      technologies: ["Next.js", "Stripe"],
      github: null,
      year: "2024",
    },
    {
      title: "DisasterConnect",
      description:
        "A web platform for disaster response, featuring real-time communication and interactive mapping.",
      technologies: ["Python", "Django", "React", "WebSocket", "PostgreSQL"],
      github: "https://github.com/Razee4315/DisasterConnect",
      year: "2024",
    },
    {
      title: "Hill Icon Skardu Hotel",
      description:
        "A beautiful, fully-functional hotel booking website for Hill Icon Skardu. Features real-time room availability, online booking system, customer order management, and integrated Twilio notifications. Optimized for SEO with server-side rendering and responsive design.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Twilio API", "SEO Optimization"],
      github: "https://www.hilliconskardu.com",
      year: "2025",
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
      year: "2025",
    },
    {
      title: "NUTECH Virtual Tour",
      description:
        "An interactive campus tour using React and 360° media, focusing on optimized user experience.",
      technologies: ["React", "JavaScript", "360° Media"],
      github: "https://razee4315.github.io/nutech-tour",
      year: "2025",
    },
    {
      title: "Pitch and Yaw Coordinate Finder",
      description:
        "An HTML5/JavaScript tool to extract spherical coordinates from images, addressing a specific technical gap.",
      technologies: ["HTML5", "JavaScript", "Image Processing"],
      github: "https://razee4315.github.io/pitch-and-yaw-finder",
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

                  {/* View Link */}
                  <div className="pt-2">
                    {project.github ? (
                      <a
                        href={project.github}
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
                    ) : (
                      <div className="font-mono text-sm text-gray-600 inline-flex items-center gap-2 cursor-not-allowed">
                        <span className="text-gray-700">$</span>
                        <span>private_repository</span>
                      </div>
                    )}
                  </div>
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
            href="https://github.com/Razee4315"
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
