
import { motion } from 'framer-motion';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
}

const EducationSection = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Bachelor of Science in Artificial Intelligence",
      institution: "National University of Technology (NUTECH)",
      period: "2023 - Present",
      location: "Islamabad, Pakistan",
      description: "Specializing in Machine Learning, Deep Learning, and AI Systems Development. Active member of the university's AI research group."
    },
    {
      degree: "HSSC Computer Science",
      institution: "Army Public School and College Saddar",
      period: "2021 - 2023",
      location: "Peshawar, Pakistan",
      description: "Studied computer science, programming, data structures, and networking along with mathematics and physics."
    },
    {
      degree: "Matriculation - Science",
      institution: "Frontier Corps Public School",
      period: "2019 - 2021",
      location: "Peshawar, Pakistan"
    }
  ];
  
  return (
    <section id="education" className="py-20 px-6 md:px-12 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Education</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>
          
          {educationItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`relative mb-20 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary z-10"></div>
                
                {/* Content box */}
                <div 
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                >
                  <div className="bg-[#ebebeb] shadow-lg rounded-xl p-6 border border-border/30">
                    <h3 className="text-2xl font-bold">{item.degree}</h3>
                    <div className="text-primary font-medium mb-2">{item.period}</div>
                    <h4 className="text-lg font-medium mb-1">{item.institution}</h4>
                    <div className="text-sm text-muted-foreground mb-3">{item.location}</div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="md:w-1/2"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
