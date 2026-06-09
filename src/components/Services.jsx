import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Hero from "./solutions/Hero";
import ProblemSection from "./solutions/ProblemSection";
import WorkflowVisual from "./solutions/WorkflowVisual";
import BeforeAfter from "./solutions/BeforeAfter";
import ProductGrid from "./solutions/ProductGrid";
import HumanVsAI from "./solutions/HumanVsAI";
import ROISection from "./solutions/ROISection";
import UseCases from "./solutions/UseCases";
import GlobalFootprint from "./solutions/GlobalFootprint";
import PricingSaaS from "./solutions/PricingSaaS";
import AIAssessmentForm from "./solutions/AIAssessmentForm";
import FinalCTA from "./solutions/FinalCTA";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050510] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Helmet>
        <title>AI Services & Software Development Jodhpur & Jaipur | TechieHelp</title>
        <meta name="description" content="TechieHelp is the #1 AI Services & Software Development agency in Jodhpur & Jaipur. Specializing in AI Calling Agents, workflow automation, and custom dashboards. Backed by global trust, scale, and startup milestones." />
        <meta name="keywords" content="AI Automation Services Jodhpur, AI Calling Agents Jaipur, TechieHelp Services, software development Jodhpur, website development Jodhpur, website development Jaipur, AI agency Jaipur, TechieHelp startup, Global Trust Scale Startup Milestones, TechieHelp Jodhpur, TechieHelp Jaipur" />
        <meta name="author" content="TechieHelp" />
        <meta property="og:title" content="AI Automation & Software Development Services Jodhpur & Jaipur | TechieHelp" />
        <meta property="og:description" content="Deploy advanced AI Calling Agents, workflows, and dashboards with TechieHelp. Built with global trust, scale, and startup milestones." />
        <meta property="og:url" content="https://techiehelp.in/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Automation & Software Development Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "TechieHelp",
              "image": "https://techiehelp.in/src/assets/logo.png",
              "telephone": "+91-7673825079",
              "priceRange": "$$",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Jodhpur",
                  "addressRegion": "Rajasthan",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Jaipur",
                  "addressRegion": "Rajasthan",
                  "addressCountry": "IN"
                }
              ]
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Jodhpur",
                "sameAs": "https://en.wikipedia.org/wiki/Jodhpur"
              },
              {
                "@type": "City",
                "name": "Jaipur",
                "sameAs": "https://en.wikipedia.org/wiki/Jaipur"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Services Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Calling Agents",
                    "description": "Custom voice assistants that dial leads, qualify interest, and book calendar meetings."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Workflow Automation",
                    "description": "Unified workflow connectors linking email, WhatsApp, CRMs, and sheets."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Business Dashboard",
                    "description": "Real-time consolidated growth analytics and lead control dashboard."
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      
      {/* 1. Hero Section */}
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* 2. Problem Section */}
      <ProblemSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* 3. Solution Section (Workflow Visual) */}
      <WorkflowVisual />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 4. Before vs After Section */}
      <BeforeAfter />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 5. Features Section (Product Grid) */}
      <ProductGrid />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 6. Human vs AI Comparison Section */}
      <HumanVsAI />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 7. ROI Section */}
      <ROISection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 8. Industry Use Cases */}
      <UseCases />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 9. Results & Impact Section */}
      <GlobalFootprint />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 10. Pricing Section */}
      <PricingSaaS />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 11. Final CTA Section */}
      <FinalCTA />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 12. AI Automation Assessment Form */}
      <AIAssessmentForm />
    </div>
  );
};

export default Services;