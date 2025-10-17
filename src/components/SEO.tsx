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
  title = "Saqlain Abbas | AI Engineer & Full Stack Developer",
  description = "Saqlain Abbas - AI Engineer and Full Stack Developer from Skardu, Pakistan. Specializing in Machine Learning, Deep Learning, NLP, and end-to-end web development. Building intelligent solutions that make a difference.",
  canonical = "https://saqlainabbas.app/",
  ogImage = "https://saqlainabbas.app/profile.webp",
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = "AI Engineer, Machine Learning Engineer, Full Stack Developer, Deep Learning, NLP, Natural Language Processing, React Developer, Python Developer, Web Development, Saqlain Abbas, AI Solutions, Skardu Pakistan, Software Engineer, Tech Portfolio",
  author = "Saqlain Abbas",
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://saqlainabbas.app";
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
      <meta property="og:site_name" content="Saqlain Abbas Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:image:alt" content={`${author} - Profile Picture`} />
      <meta name="twitter:creator" content="@saqlainabbas" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0a0a0a" />
      <meta name="msapplication-TileColor" content="#0a0a0a" />
      <meta name="application-name" content="Saqlain Abbas Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Saqlain Abbas" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="format-detection" content="telephone=no" />

      {/* Geographic Tags */}
      <meta name="geo.region" content="PK-GB" />
      <meta name="geo.placename" content="Skardu" />
      <meta name="geo.position" content="35.2971;75.6333" />
      <meta name="ICBM" content="35.2971, 75.6333" />

      {/* Language */}
      <meta httpEquiv="content-language" content="en" />

      {/* Verification Tags (Add your verification codes) */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
    </Helmet>
  );
};

export default SEO;
