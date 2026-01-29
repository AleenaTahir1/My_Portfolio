import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  // Person Schema - Main profile
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://aleenatahir1.github.io/My_Portfolio/#person",
    name: "Aleena Tahir",
    alternateName: "AleenaTahir1",
    url: "https://aleenatahir1.github.io/My_Portfolio",
    image: {
      "@type": "ImageObject",
      url: "https://aleenatahir1.github.io/My_Portfolio/profile.webp",
      width: 400,
      height: 400,
    },
    description:
      "Full Stack AI Engineer — 2nd-year AI student at NUTECH, building web apps and AI-powered tools.",
    jobTitle: "Full Stack AI Engineer",
    worksFor: [
      { "@type": "Organization", name: "Neura" },
      { "@type": "Organization", name: "Cript" },
      { "@type": "Organization", name: "Ocryz" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Westridge-3, Rawalpindi",
      addressRegion: "Islamabad",
      addressCountry: "Pakistan",
    },
    email: "aleenatahirf23@nutech.edu.pk",
    sameAs: [
      "https://github.com/AleenaTahir1",
      "https://linkedin.com/in/aleenatahir",
      "https://aleenatahir1.github.io/My_Portfolio",
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
    "@id": "https://aleenatahir1.github.io/My_Portfolio/#website",
    url: "https://aleenatahir1.github.io/My_Portfolio",
    name: "Aleena Tahir Portfolio",
    description:
      "Professional portfolio of Aleena Tahir — Full Stack AI Engineer",
    publisher: {
      "@id": "https://aleenatahir1.github.io/My_Portfolio/#person",
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://aleenatahir1.github.io/My_Portfolio/?s={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://aleenatahir1.github.io/My_Portfolio/#webpage",
    url: "https://aleenatahir1.github.io/My_Portfolio",
    name: "Aleena Tahir | Full Stack AI Engineer",
    description:
      "Portfolio of Aleena Tahir — Full Stack AI Engineer",
    isPartOf: {
      "@id": "https://aleenatahir1.github.io/My_Portfolio/#website",
    },
    about: {
      "@id": "https://aleenatahir1.github.io/My_Portfolio/#person",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://aleenatahir1.github.io/My_Portfolio/profile.webp",
    },
    datePublished: "2024-01-01T00:00:00+00:00",
    dateModified: new Date().toISOString(),
    inLanguage: "en-US",
  };

  // ProfilePage Schema
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://aleenatahir1.github.io/My_Portfolio/#profilepage",
    url: "https://aleenatahir1.github.io/My_Portfolio",
    name: "Aleena Tahir - Professional Profile",
    mainEntity: {
      "@id": "https://aleenatahir1.github.io/My_Portfolio/#person",
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
        item: "https://aleenatahir1.github.io/My_Portfolio/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://aleenatahir1.github.io/My_Portfolio/#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: "https://aleenatahir1.github.io/My_Portfolio/#experience",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://aleenatahir1.github.io/My_Portfolio/#projects",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://aleenatahir1.github.io/My_Portfolio/#contact",
      },
    ],
  };

  // Organization Schema (for companies worked with)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://aleenatahir1.github.io/My_Portfolio/#organization",
    name: "Aleena Tahir Portfolio",
    url: "https://aleenatahir1.github.io/My_Portfolio",
    logo: {
      "@type": "ImageObject",
      url: "https://aleenatahir1.github.io/My_Portfolio/profile.webp",
    },
    sameAs: [
      "https://github.com/AleenaTahir1",
      "https://linkedin.com/in/aleenatahir",
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
