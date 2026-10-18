import { useEffect, useState, type MouseEvent } from "react";
import {
  AnimatePresence,
  type MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import ProjectSchema from "./ProjectSchema";

const shot = (file: string) => `${import.meta.env.BASE_URL}projects/${file}`;

interface Shot {
  src: string;
  alt: string;
  scroll?: boolean; // tall page capture that pans top to bottom
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  year: string;
  link?: string;
  github?: string;
  credit?: string;
  shots: Shot[];
  log?: string[]; // shown instead of screenshots for automation work
}

const projects: Project[] = [
  {
    title: "PinNotes",
    description:
      "Lightweight Windows desktop sticky-notes app — floating always-on-top notes, color selection, local-first usage, and no accounts or cloud dependency.",
    technologies: ["Tauri", "React", "TypeScript", "Windows"],
    github: "https://github.com/AleenaTahir1/Pin-Notes",
    year: "2026",
    shots: [
      { src: shot("pin-note.webp"), alt: "PinNotes note window" },
      { src: shot("pin-list.webp"), alt: "PinNotes notes list" },
    ],
  },
  {
    title: "DisasterConnect",
    description:
      "Real-time desktop app for disaster management and emergency response — incident tracking, resources, task boards, team messaging, alerts, SOS, reports, admin roles, and offline sync.",
    technologies: ["Tauri", "React", "TypeScript", "Supabase", "Leaflet"],
    github: "https://github.com/Razee4315/DisasterConnect_APP",
    credit: "Built with Saqlain Abbas",
    year: "2026",
    shots: [
      { src: shot("disaster-dashboard.webp"), alt: "DisasterConnect dashboard" },
      { src: shot("disaster-map.webp"), alt: "DisasterConnect incident map" },
      { src: shot("disaster-incidents.webp"), alt: "DisasterConnect incident management" },
      { src: shot("disaster-tasks.webp"), alt: "DisasterConnect task board" },
    ],
  },
  {
    title: "AI Task Manager",
    description:
      "A faster, smarter replacement for the Windows Task Manager — live processes with CPU, memory and disk I/O, trust labels for every process, services and startup control, and AI insights that explain why a process is running.",
    technologies: ["Rust", "Tauri", "React", "TypeScript", "Ollama"],
    github: "https://github.com/AleenaTahir1/AI_Manager",
    year: "2026",
    shots: [{ src: shot("ai-task-manager.webp"), alt: "AI Task Manager process list" }],
  },
  {
    title: "Pixnib (ColorSnap)",
    description:
      "Windows color picker — press Win+Shift+C to pick any pixel on screen with a magnifier loupe, then copy it as HEX, RGB, HSL, a CSS variable or a Tailwind class, with history, palettes and a contrast checker.",
    technologies: ["Rust", "Tauri", "React", "TypeScript"],
    link: "https://aleenatahir1.github.io/Pixnib/",
    github: "https://github.com/AleenaTahir1/Pixnib",
    year: "2026",
    shots: [{ src: shot("colorsnap.webp"), alt: "Pixnib color picker window" }],
  },
  {
    title: "OmniRecall",
    description:
      "Privacy-first desktop AI knowledge assistant with global hotkeys, a Spotlight-style UI, local RAG over PDFs/code, and multi-provider LLM support.",
    technologies: ["Rust", "RAG", "Multi-LLM", "Tauri"],
    github: "https://github.com/AleenaTahir1/omnirecall",
    year: "2025",
    shots: [
      { src: shot("omni-dark.webp"), alt: "OmniRecall chat, dark theme" },
      { src: shot("omni-rose.webp"), alt: "OmniRecall chat, rose theme" },
    ],
  },
  {
    title: "Talos",
    description:
      "Privacy-first AI chat app that runs entirely on your own machine through Ollama — fast, offline, and fully themeable, from neon terminal to soft and bubbly.",
    technologies: ["Tauri", "Rust", "React", "Ollama"],
    github: "https://github.com/AleenaTahir1/Talos",
    year: "2026",
    shots: [
      { src: shot("talos-neon.webp"), alt: "Talos neon theme" },
      { src: shot("talos-bubbly.webp"), alt: "Talos bubbly theme" },
    ],
  },
  {
    title: "AutoSort",
    description:
      "Watches any folder and sorts files into subfolders using your rules — with a grace period, undo for every move, and a live activity feed that keeps Downloads organized.",
    technologies: ["Tauri", "Rust", "React", "TypeScript"],
    github: "https://github.com/AleenaTahir1/AutoSort",
    year: "2026",
    shots: [
      { src: shot("autosort-dashboard.webp"), alt: "AutoSort dashboard" },
      { src: shot("autosort-rules.webp"), alt: "AutoSort sorting rules" },
    ],
  },
  {
    title: "Jupytify",
    description:
      "Desktop app that converts Jupyter notebooks (.ipynb) into high-quality PDFs, with side-by-side notebook and PDF previews and a conversion history.",
    technologies: ["Rust", "Tauri", "React", "TypeScript"],
    github: "https://github.com/AleenaTahir1/Jupytify",
    year: "2026",
    shots: [
      { src: shot("jupytify-pdf.webp"), alt: "Jupytify PDF preview" },
      { src: shot("jupytify-notebook.webp"), alt: "Jupytify notebook preview" },
    ],
  },
  {
    title: "Dammer",
    description:
      "A private, lightweight auto-refresher for any browser tab — a Manifest V3 Chrome extension with analog and digital timers, and no tracking or network requests.",
    technologies: ["Chrome Extension", "JavaScript", "Manifest V3"],
    link: "https://aleenatahir1.github.io/dammer/",
    github: "https://github.com/AleenaTahir1/dammer",
    year: "2026",
    shots: [
      { src: shot("dammer-glass.webp"), alt: "Dammer glass analog timer" },
      { src: shot("dammer-dark.webp"), alt: "Dammer dark digital timer" },
    ],
  },
  {
    title: "Hill Icon (Skardu Hotel)",
    description:
      "Full hotel website with custom branding, performance-focused UI, SEO, deployment, and a WhatsApp booking flow.",
    technologies: ["Next.js", "SEO", "WhatsApp", "Tailwind CSS"],
    link: "https://hilliconskardu.com/",
    year: "2025",
    shots: [{ src: shot("hillicon.webp"), alt: "Hill Icon website", scroll: true }],
  },
  {
    title: "Luxure.io AI Integrations",
    description:
      "AI-powered integrations for a luxury real estate website — lead automation, voice/call workflows, CRM updates, meeting booking flows, and website-connected agent actions.",
    technologies: ["Zapier", "ElevenLabs", "Monday CRM", "AI Agents", "Email Automation"],
    link: "https://luxure.io",
    year: "2026",
    shots: [],
    log: [
      "new lead from website form",
      "ElevenLabs voice call placed",
      "Monday CRM item updated",
      "meeting booked on calendar",
      "follow-up email sent",
    ],
  },
  {
    title: "Scoutly",
    description:
      "Automated job-search agent that analyzes a CV with AI, searches multiple job platforms, and emails curated summaries of relevant roles.",
    technologies: ["n8n", "LLMs", "Email Automation", "AI"],
    github: "https://github.com/AleenaTahir1/Scodly-Agent",
    year: "2025",
    shots: [],
    log: [
      "reading CV",
      "Gemini: skills and preferences extracted",
      "searching Reed, Adzuna, JSearch",
      "ranking roles against the CV",
      "summary emailed via Gmail",
    ],
  },
  {
    title: "Gig Synappix",
    description:
      "Full gig marketplace for hiring and getting hired — FastAPI backend, React frontend, and an AI chatbot experience.",
    technologies: ["FastAPI", "React", "AI Chatbot", "Python"],
    link: "https://gig.synappix.com",
    year: "2025",
    shots: [],
    log: [
      "client posts a gig",
      "FastAPI stores and indexes it",
      "AI chatbot answers questions",
      "freelancer applies",
      "hired",
    ],
  },
];

const number = (n: number) => String(n + 1).padStart(2, "0");

// Terminal-style run log for projects that are automations rather than screens
const RunLog = ({ lines, animate }: { lines: string[]; animate: boolean }) => (
  <div className="font-mono text-xs sm:text-sm bg-brutalist-black text-white p-5 w-full">
    {lines.map((line, i) => (
      <motion.div
        key={line}
        initial={animate ? { opacity: 0, x: -8 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: animate ? i * 0.25 : 0 }}
        className="py-1"
      >
        <span className={i === lines.length - 1 ? "text-green-500" : "text-gray-500"}>
          {i === lines.length - 1 ? "✓" : ">"}
        </span>{" "}
        {line}
      </motion.div>
    ))}
  </div>
);

// Screenshot that follows the cursor and cycles through a project's shots
const CursorPreview = ({
  project,
  frame,
  x,
  y,
  reduceMotion,
}: {
  project: Project | null;
  frame: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
  reduceMotion: boolean;
}) => {
  const springX = useSpring(x, { stiffness: 160, damping: 22 });
  const springY = useSpring(y, { stiffness: 160, damping: 22 });
  const velocity = useVelocity(x);
  const tilt = useSpring(useTransform(velocity, [-1500, 1500], [-7, 7]), {
    stiffness: 200,
    damping: 25,
  });
  const current = project?.shots[frame % Math.max(project.shots.length, 1)];

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-0 pointer-events-none w-[440px] h-[300px]"
      style={{ x: springX, y: springY, rotate: reduceMotion ? 0 : tilt }}
    >
      <AnimatePresence>
        {project && (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {current ? (
              <AnimatePresence>
                <motion.img
                  key={current.src}
                  src={current.src}
                  alt=""
                  initial={{ clipPath: "inset(0 0 100% 0)" }}
                  animate={
                    current.scroll && !reduceMotion
                      ? { clipPath: "inset(0 0 0% 0)", objectPosition: ["50% 0%", "50% 100%"] }
                      : { clipPath: "inset(0 0 0% 0)" }
                  }
                  exit={{ opacity: 0 }}
                  transition={{
                    clipPath: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
                    objectPosition: { duration: 7, ease: "linear" },
                    opacity: { duration: 0.3 },
                  }}
                  className={
                    current.scroll
                      ? "absolute inset-0 w-full h-full object-cover shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
                      : "absolute inset-0 m-auto max-w-full max-h-full w-auto h-auto shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
                  }
                />
              </AnimatePresence>
            ) : (
              project.log && <RunLog lines={project.log} animate={!reduceMotion} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [frame, setFrame] = useState(0);
  const [canHover, setCanHover] = useState(false);
  const reduceMotion = useReducedMotion() ?? false;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(query.matches);
    const onChange = (e: MediaQueryListEvent) => setCanHover(e.matches);
    query.addEventListener("change", onChange);
    // Warm the cache so hover previews appear instantly
    projects.forEach((p) => p.shots.forEach((s) => (new Image().src = s.src)));
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Cycle through the hovered project's screenshots
  useEffect(() => {
    setFrame(0);
    if (active === null || reduceMotion || projects[active].shots.length < 2) return;
    const timer = setInterval(() => setFrame((f) => f + 1), 1400);
    return () => clearInterval(timer);
  }, [active, reduceMotion]);

  const handleMouseMove = (e: MouseEvent) => {
    // Keep the preview on the roomier side of the cursor
    const left = e.clientX > window.innerWidth * 0.55;
    mouseX.set(left ? e.clientX - 480 : e.clientX + 40);
    mouseY.set(e.clientY - 150);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-brutalist-black border-t-2 border-white py-20 md:py-32"
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
          className="mb-12 md:mb-16"
        >
          <div className="font-mono text-sm md:text-base text-gray-400 mb-4">
            <span className="text-white">05.</span> WORK
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 break-words">
            SELECTED PROJECTS
          </h2>
          <p className="font-mono text-xs sm:text-sm text-gray-500">
            {canHover ? "> hover a project to preview it, click for details" : "> tap a project to see it"}
          </p>
        </motion.div>

        {/* Floating preview, painted under the list */}
        {canHover && (
          <CursorPreview
            project={active !== null && expanded !== active ? projects[active] : null}
            frame={frame}
            x={mouseX}
            y={mouseY}
            reduceMotion={reduceMotion}
          />
        )}

        {/* Index list */}
        <ul
          className="relative border-t border-white/30"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActive(null)}
        >
          {projects.map((project, index) => {
            const isOpen = expanded === index;
            const dimmed = canHover && active !== null && active !== index;
            return (
              <li key={project.title} className="border-b border-white/30">
                <button
                  type="button"
                  onClick={() => setExpanded(isOpen ? null : index)}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onBlur={() => setActive(null)}
                  aria-expanded={isOpen}
                  aria-controls={`project-${index}`}
                  className="group w-full text-left py-5 md:py-7 grid grid-cols-[auto_1fr_auto] items-baseline gap-4 md:gap-8 transition-opacity duration-300"
                  style={{ opacity: dimmed ? 0.3 : 1 }}
                >
                  <span className="font-mono text-xs md:text-sm text-gray-500">{number(index)}</span>
                  <span
                    className={`font-mono font-bold uppercase text-2xl sm:text-4xl lg:text-6xl text-white leading-none tracking-tight break-words transition-transform duration-300 group-hover:translate-x-3 ${
                      active === index ? "mix-blend-difference" : ""
                    }`}
                  >
                    {project.title}
                  </span>
                  <span className="flex items-baseline gap-4 font-mono text-xs text-gray-400">
                    <span className="hidden xl:inline">
                      {project.technologies.slice(0, 2).join(" · ")}
                    </span>
                    <span>{project.year}</span>
                    <span className="text-white text-base md:text-lg w-4 text-center">
                      {isOpen ? "−" : "+"}
                    </span>
                  </span>
                </button>

                {/* Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`project-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.7, 0, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 md:pl-14 space-y-6">
                        {/* Screenshots at their own proportions */}
                        {project.shots.length > 0 ? (
                          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
                            {project.shots.map((s) => (
                              <img
                                key={s.src}
                                src={s.src}
                                alt={s.alt}
                                loading="lazy"
                                className={`snap-start shrink-0 h-48 sm:h-64 md:h-80 w-auto ${
                                  s.scroll ? "max-w-[85vw] object-cover object-top" : ""
                                }`}
                              />
                            ))}
                          </div>
                        ) : (
                          project.log && (
                            <div className="max-w-md">
                              <RunLog lines={project.log} animate={!reduceMotion} />
                            </div>
                          )
                        )}

                        <p className="font-mono text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl">
                          {project.description}
                        </p>
                        {project.credit && (
                          <p className="font-mono text-xs text-gray-500">{project.credit}</p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-xs border border-white px-2 sm:px-3 py-1 text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-6 font-mono text-sm">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white underline underline-offset-4 hover:no-underline"
                            >
                              visit site →
                            </a>
                          )}
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white underline underline-offset-4 hover:no-underline"
                            >
                              source code →
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 md:mt-24 text-center"
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
