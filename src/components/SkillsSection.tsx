
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Code, Database, Wrench, Users } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="w-5 h-5 text-primary" />,
      skills: ["Python", "JavaScript", "SQL", "Java", "R", "Lisp"]
    },
    {
      title: "Web & AI Tools",
      icon: <Database className="w-5 h-5 text-primary" />,
      skills: ["React", "PostgreSQL", "LLM Fine-tuning (Llama, Unsloth)", "CustomTkinter", "Gradio"]
    },
    {
      title: "Software",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebooks"]
    },
    {
      title: "Other Skills",
      icon: <Users className="w-5 h-5 text-primary" />,
      skills: ["Problem-Solving", "Teamwork", "Communication", "Time Management", "Analytical Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-[#ebebeb]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical Skills</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title} 
              className="rounded-xl bg-[#f0f0f0] shadow-lg border border-border/50 p-6 hover:shadow-xl transition-all hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Badge variant="secondary" className="text-sm py-2 px-3 bg-primary/10 hover:bg-primary/20">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
