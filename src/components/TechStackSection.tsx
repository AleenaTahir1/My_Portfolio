import { motion } from "framer-motion";

const TechStackSection = () => {
  const techStack = [
    // AI & Agents
    "n8n", "LangChain", "RAG", "OpenAI", "Ollama", "Gemini", "Chatbot",
    // ML & Vision
    "Roboflow", "Machine Learning", "TensorFlow", "CNN", "Computer Vision",
    // Backend
    "FastAPI", "Supabase", "ChromaDB", "MongoDB", "Rust", "Python", "Go",
    // DevOps
    "AWS", "CI/CD", "GitHub Actions", "Docker", "Vercel",
    // Frontend
    "React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript",
    // Other
    "PostgreSQL", "WebSocket", "Tauri"
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center bg-brutalist-black border-t-2 border-[var(--accent-color)] noise-bg py-20 md:py-32"
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
            <span className="text-[var(--accent-color)]">02.</span> SKILLS
          </div>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 break-words">
            TECH STACK
          </h2>
          <div className="h-px bg-[var(--accent-color)] w-full"></div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 md:gap-4"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="font-mono text-sm md:text-base border-2 border-[var(--accent-color)] px-4 py-2 text-white bg-brutalist-black transition-all duration-200 hover:bg-[var(--accent-color)] hover:text-black cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Terminal Command Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 border-t-2 border-[var(--accent-color)] pt-8"
        >
          <div className="font-mono text-xs md:text-sm text-gray-600">
            <span className="text-[var(--accent-color)]">$</span> Always learning, always building
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
