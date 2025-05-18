
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Terminal, Library } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  date: string;
  github?: string;
  demo?: string;
  image?: string;
}

// Project card container animation variants
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProjectsSection = () => {
  // Icon mapping for projects without images
  const getIconForTechnologies = (technologies: string[]) => {
    if (technologies.includes("Python") && technologies.includes("LLM")) {
      return <Terminal className="w-8 h-8 text-primary" />;
    } else if (technologies.includes("React")) {
      return <Code2 className="w-8 h-8 text-primary" />;
    } else {
      return <Library className="w-8 h-8 text-primary" />;
    }
  };

  const projects: Project[] = [
    {
      title: "NUTECH Virtual Tour",
      description: "Contributed to an interactive 360° campus tour using React and JavaScript, enhancing user experience and accessibility for exploring university facilities.",
      technologies: ["React", "JavaScript"],
      date: "Feb 2025",
      demo: "https://razee4315.github.io/nutech-tour",
      github: "https://github.com/Razee4315/nutech-tour"
    },
    {
      title: "SmartBites Cafeteria System",
      description: "Developing a desktop meal ordering application with distinct CustomTkinter UIs tailored for different user roles (e.g., students, staff), featuring secure user authentication and order tracking.",
      technologies: ["Python", "PostgreSQL", "CustomTkinter"],
      date: "Nov 2024",
      github: "https://github.com/AleenaTahir1/SmartBites"
    },
    {
      title: "Constella",
      description: "An elegant and interactive web application that brings the mystical world of astrology to your fingertips. With its beautiful cosmic design and intuitive interface, Constella helps you explore your zodiac profile, check compatibility, and discover daily horoscopes.",
      technologies: ["React", "JavaScript", "CSS"],
      date: "Jan 2025",
      github: "https://github.com/AleenaTahir1/Constella",
      demo: "https://aleenatahir1.github.io/Constella/"
    },
    {
      title: "TaskMaster",
      description: "A professional and engaging task management app with a modern interface, built with React and advanced web technologies.",
      technologies: ["React", "JavaScript", "CSS"],
      date: "Jan 2025",
      github: "https://github.com/AleenaTahir1/CutieTask"
    },
    {
      title: "University Knowledge Assistant",
      description: "Fine-tuned a Llama language model on university-specific data using Unsloth and Python; deployed an AI chatbot with an interactive Gradio interface.",
      technologies: ["Python", "LLM (Llama)", "Unsloth", "Gradio"],
      date: "Dec 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-[#ebebeb]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Here are some of my recent projects that showcase my skills in AI development,
            web development, and software engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden shadow-lg bg-[#f0f0f0] border border-border/30 flex flex-col h-full"
            >
              {/* Project Header */}
              <div className="px-6 pt-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Badge variant="outline" className="text-xs font-medium">
                    {project.date}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="px-6 pt-2 flex-grow">
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 mt-auto">
                <div className="flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </Button>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1"
                    >
                      <Button 
                        variant="outline"
                        className="w-full gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>View Project</span>
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
