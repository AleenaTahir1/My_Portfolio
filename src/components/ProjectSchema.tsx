import { Helmet } from "react-helmet-async";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  year: string;
}

interface ProjectSchemaProps {
  projects: Project[];
}

const ProjectSchema = ({ projects }: ProjectSchemaProps) => {
  const projectSchemas = projects.map((project, index) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `https://aleenatahir1.github.io/My_Portfolio/#project-${index + 1}`,
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Person",
      "@id": "https://aleenatahir1.github.io/My_Portfolio/#person",
      name: "Aleena Tahir",
    },
    dateCreated: `${project.year}-01-01`,
    keywords: project.technologies.join(", "),
    programmingLanguage: project.technologies.filter(tech => 
      ["Python", "JavaScript", "TypeScript", "SQL", "R", "Java", "C++"].includes(tech)
    ),
    ...(project.github && {
      url: project.github,
      codeRepository: project.github,
    }),
    inLanguage: "en",
    isAccessibleForFree: true,
    license: "https://opensource.org/licenses/MIT",
  }));

  return (
    <Helmet>
      {projectSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default ProjectSchema;
