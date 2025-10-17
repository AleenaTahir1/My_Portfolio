import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  // Person Schema - Main profile
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://saqlainabbas.app/#person",
    name: "Saqlain Abbas",
    alternateName: "Razee4315",
    url: "https://saqlainabbas.app",
    image: {
      "@type": "ImageObject",
      url: "https://saqlainabbas.app/profile.webp",
      width: 400,
      height: 400,
    },
    description:
      "AI Engineer and Full Stack Developer specializing in Machine Learning, Deep Learning, NLP, and end-to-end web development.",
    jobTitle: "AI Engineer | Full Stack Developer",
    worksFor: [
      {
        "@type": "Organization",
        name: "CCRIPT Agency",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Islamabad",
          addressCountry: "Pakistan",
        },
      },
      {
        "@type": "Organization",
        name: "Neuralogic",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Islamabad",
          addressCountry: "Pakistan",
        },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Skardu",
      addressRegion: "Gilgit-Baltistan",
      addressCountry: "Pakistan",
    },
    email: "saqlainabbas315@gmail.com",
    telephone: "+92-XXX-XXXXXXX",
    sameAs: [
      "https://github.com/Razee4315",
      "https://linkedin.com/in/saqlain-abbas",
      "https://saqlainabbas.app",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Python",
      "React",
      "TypeScript",
      "Full Stack Development",
      "Web Development",
      "Django",
      "Node.js",
      "Firebase",
      "PostgreSQL",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "National University of Technology",
      address: {
        "@type": "PostalAddress",
        addressCountry: "Pakistan",
      },
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://saqlainabbas.app/#website",
    url: "https://saqlainabbas.app",
    name: "Saqlain Abbas Portfolio",
    description:
      "Professional portfolio of Saqlain Abbas - AI Engineer and Full Stack Developer",
    publisher: {
      "@id": "https://saqlainabbas.app/#person",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://saqlainabbas.app/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://saqlainabbas.app/#webpage",
    url: "https://saqlainabbas.app",
    name: "Saqlain Abbas | AI Engineer & Full Stack Developer",
    description:
      "Portfolio showcasing AI and full-stack development projects by Saqlain Abbas",
    isPartOf: {
      "@id": "https://saqlainabbas.app/#website",
    },
    about: {
      "@id": "https://saqlainabbas.app/#person",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://saqlainabbas.app/profile.webp",
    },
    datePublished: "2024-01-01T00:00:00+00:00",
    dateModified: new Date().toISOString(),
    inLanguage: "en-US",
  };

  // ProfilePage Schema
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://saqlainabbas.app/#profilepage",
    url: "https://saqlainabbas.app",
    name: "Saqlain Abbas - Professional Profile",
    mainEntity: {
      "@id": "https://saqlainabbas.app/#person",
    },
    inLanguage: "en-US",
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://saqlainabbas.app/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://saqlainabbas.app/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: "https://saqlainabbas.app/#experience",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://saqlainabbas.app/#projects",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://saqlainabbas.app/#contact",
      },
    ],
  };

  // Organization Schema (for companies worked with)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://saqlainabbas.app/#organization",
    name: "Saqlain Abbas - Freelance Development",
    url: "https://saqlainabbas.app",
    logo: {
      "@type": "ImageObject",
      url: "https://saqlainabbas.app/profile.webp",
    },
    founder: {
      "@id": "https://saqlainabbas.app/#person",
    },
    sameAs: [
      "https://github.com/Razee4315",
      "https://linkedin.com/in/saqlain-abbas",
    ],
  };

  return (
    <Helmet>
      {/* Person Schema */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>

      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>

      {/* ProfilePage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(profilePageSchema)}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
