import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
  author?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "Aleena Tahir | Full Stack AI Engineer & DevOps Specialist",
  description = "Aleena Tahir - Full Stack AI Engineer specializing in AI Agents, RAG pipelines, LangChain, and end-to-end web development. Building fast, smart, and scalable applications.",
  canonical = "https://aleenatahir1.github.io/My_Portfolio/",
  ogImage = "https://aleenatahir1.github.io/My_Portfolio/profile.webp",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = "Full Stack AI Engineer, AI Agents, RAG, LangChain, DevOps, React, Python, Aleena Tahir, Islamabad Pakistan, Software Engineer, Tech Portfolio",
  author = "Aleena Tahir",
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://aleenatahir1.github.io/My_Portfolio";
  const fullImageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={`${author} - Profile Picture`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Aleena Tahir Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:image:alt" content={`${author} - Profile Picture`} />
      <meta name="twitter:creator" content="@aleenaatahirr" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="msapplication-TileColor" content="#0a0a0a" />
      <meta name="application-name" content="Aleena Tahir Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Aleena Tahir" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="format-detection" content="telephone=no" />

      {/* Geographic Tags */}
      <meta name="geo.region" content="PK-IS" />
      <meta name="geo.placename" content="Islamabad" />

      {/* Language */}
      <meta httpEquiv="content-language" content="en" />

      {/* Verification Tags (Add your verification codes) */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
    </Helmet>
  );
};

export default SEO;
