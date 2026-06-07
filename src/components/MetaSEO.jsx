import React from 'react';
import { Helmet } from 'react-helmet';

const MetaSEO = ({ title, description, keywords, ogTitle, ogDescription, ogImage, canonicalUrl }) => {
  const defaultTitle = "TechieHelp - AI Software Development Company";
  const defaultDescription = "TechieHelp offers top-notch internship programs, professional AI automation services, and digital marketing solutions. Boost your career and business with experts.";
  const defaultKeywords = "TechieHelp, TechieHelp Internship, TechieHelp Service, AI automation, SEO, digital marketing, web development, tech internships";
  const defaultOgImage = "https://techiehelp.in/src/assets/techiehelp.png";
  const defaultUrl = window.location.href;

  return (
    <Helmet>
      <title>{title ? `${title} | TechieHelp` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title || defaultTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:url" content={canonicalUrl || defaultUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title || defaultTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
    </Helmet>
  );
};

export default MetaSEO;
