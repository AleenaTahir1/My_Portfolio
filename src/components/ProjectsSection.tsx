import { motion } from "framer-motion";
import ProjectSchema from "./ProjectSchema";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cloudon.me",
      description:
        "Website and main app for an AI-first cloud storage platform — manage files, generate AI summaries, use Telegram-first workflows, and access cloud storage through a clean web experience.",
      technologies: ["Next.js", "AI Summaries", "Telegram Bot", "Cloud Storage", "Web App"],
      link: "https://cloudon.me",
      year: "2026",
    },
    {
      title: "Luxure.io Website & AI Integrations",
      description:
        "AI-powered integrations for a luxury real estate website — lead automation, voice/call workflows, CRM updates, meeting booking flows, and website-connected agent actions.",
      technologies: ["Zapier", "ElevenLabs", "Monday CRM", "AI Agents", "Email Automation"],
      link: "https://luxure.io",
      year: "2026",
    },
    {
      title: "DisasterConnect",
      description:
        "Real-time desktop app for disaster management and emergency response — incident tracking, resources, task boards, team messaging, alerts, SOS, reports, admin roles, and offline sync.",
      technologies: ["Tauri", "React", "TypeScript", "Supabase", "Leaflet"],
      year: "2026",
    },
    {
      title: "PinNotes",
      description:
        "Lightweight Windows desktop sticky-notes app — floating always-on-top notes, color selection, local-first usage, and no accounts or cloud dependency.",
      technologies: ["Tauri", "React", "TypeScript", "Windows"],
      github: "https://github.com/AleenaTahir1/Pin-Notes",
      link: "https://github.com/AleenaTahir1/Pin-Notes",
      year: "2026",
    },
    {
      title: "Nami",
      description:
        "Secure, lightweight real-time chat app built in Rust with media sharing and presence/status features.",
      technologies: ["Rust", "WebSocket", "Real-time", "Tauri"],
      github: "https://github.com/AleenaTahir1/nami",
      link: "https://github.com/AleenaTahir1/nami",
      year: "2026",
    },
    {
      title: "Gig Synappix",
      description:
        "Full gig marketplace for hiring and getting hired — FastAPI backend, React frontend, and an AI chatbot experience.",
      technologies: ["FastAPI", "React", "AI Chatbot", "Python"],
      year: "2025",
    },
    {
      title: "Hill Icon (Skardu Hotel)",
      description:
        "Full hotel website with custom branding, performance-focused UI, SEO, deployment, and a WhatsApp booking flow.",
      technologies: ["Next.js", "SEO", "WhatsApp", "Tailwind CSS"],
      link: "https://hilliconskardu.com/",
      year: "2025",
    },
    {
      title: "NUTECH 360° Virtual Tour",
      description:
        "Immersive campus virtual tour platform with guided navigation features for events and visitors.",
      technologies: ["React", "360° Media", "WebGL", "Deployment"],
      github: "https://github.com/AleenaTahir1/nutech-tour",
      link: "https://github.com/AleenaTahir1/nutech-tour",
      year: "2025",
    },
    {
      title: "Scoutly",
      description:
        "Automated job-search agent that analyzes a CV with AI, searches multiple job platforms, and emails curated summaries of relevant roles.",
      technologies: ["n8n", "LLMs", "Email Automation", "AI"],
      github: "https://github.com/AleenaTahir1/Scodly-Agent",
      link: "https://github.com/AleenaTahir1/Scodly-Agent",
      year: "2025",
    },
    {
      title: "OmniRecall",
      description:
        "Privacy-first desktop AI knowledge assistant with global hotkeys, a Spotlight-style UI, local RAG over PDFs/code, and multi-provider LLM support.",
      technologies: ["Rust", "RAG", "Multi-LLM", "Tauri"],
      github: "https://github.com/AleenaTahir1/omnirecall",
      link: "https://github.com/AleenaTahir1/omnirecall",
      year: "2025",
    },
    {
      title: "CropWise",
      description:
        "Crop disease classification web app that predicts diseases from leaf images using CNNs, including the training pipeline and a Flask UI.",
      technologies: ["Python", "CNN", "Flask", "TensorFlow"],
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
