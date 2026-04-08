import React, { useEffect } from "react";
import Hero from "./solutions/Hero";
import ProblemSection from "./solutions/ProblemSection";
import WorkflowVisual from "./solutions/WorkflowVisual";
import ProductGrid from "./solutions/ProductGrid";
import LiveSystemDemo from "./solutions/LiveSystemDemo";
import StatsResults from "./solutions/StatsResults";
import UseCases from "./solutions/UseCases";
import HowItWorks from "./solutions/HowItWorks";
import Differentiator from "./solutions/Differentiator";
import PricingSaaS from "./solutions/PricingSaaS";
import FinalCTA from "./solutions/FinalCTA";
import Contact from "./Contact";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050510] min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Hero />
      <ProblemSection />
      
      {/* Visual Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <WorkflowVisual />
      <ProductGrid />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <LiveSystemDemo />
      <StatsResults />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <UseCases />
      <HowItWorks />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <Differentiator />
      <PricingSaaS />
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <FinalCTA />
      
      {/* Retaining Contact & Footer for brand consistency */}
      <Contact />
    </div>
  );
};

export default Services;