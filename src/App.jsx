import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Hero, WhoWeAre } from "./components";
import OurServices from "./components/OurServices";
import Services from "./components/Services";
import WebDevelopmentServices from "./components/WebDevelopmentServices";
import Loading from "./components/Loading";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Contacts from "./components/contacts";
import Internship from "./components/Internship"; // Correcting casing for import
import SpecialBatch from "./components/SpecialBatch";
import Webdevelopment from "./components/Webdevelopment";
import Androiddevelopment from "./components/Androiddevelopment";
import UIUX from "./components/UIUX";
import SEO from "./components/SEO";
import AI from "./components/AI";
import MachineLearning from "./components/MachineLearning";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Fullstack from "./components/Fullstack";
import MERN from "./components/MERN";
import Python from "./components/Python";
import Java from "./components/Java";
import JavaFull from "./components/JavaFull";
import ReactComponent from "./components/React";
import JavaScript from "./components/JavaScript";
import Node from "./components/Node";
import AIML from "./components/AIML";
import DevOps from "./components/DevOps";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";
import AppDevelopmentServices from "./components/AppDevelopmentServices";
import UIUXServices from "./components/UIUXServices";
import SEOOptimizationServices from "./components/SEOOptimizationServices";
import DigitalMarketingServices from "./components/DigitalMarketingServices";
import TechConsultingServices from "./components/TechConsultingServices";
import MaintenanceSupportServices from "./components/MaintenanceSupportServices";
import AIAgentsServices from "./components/AIAgentsServices";
import AIChatbotsServices from "./components/AIChatbotsServices";
import AIAutomationServices from "./components/AIAutomationServices";
import ComputerVisionServices from "./components/ComputerVisionServices";
import PredictiveAnalyticsServices from "./components/PredictiveAnalyticsServices";
import GenerativeAIServices from "./components/GenerativeAIServices";
import AIEducationServices from "./components/AIEducationServices";
import SpeechVoiceAIServices from "./components/SpeechVoiceAIServices";
import Job from "./components/job";
import HiringFAQ from "./components/hiringFAQ";
import Intern from "./components/Intern";
import InternProfile from "./components/InternProfile";
import SasvanthuG from "./components/students/SasvanthuG";
import RitikaKasat from "./components/students/RitikaKasat";
import AbhayRajSingh from "./components/students/AbhayRajSingh";
import AarshdeepKaur from "./components/students/AarshdeepKaur";
import SagarKumar from "./components/students/SagarKumar";
import SimranKanwar from "./components/students/SimranKanwar";
import TanuSingh from "./components/students/TanuSingh";
import RohitSharma from "./components/students/RohitSharma";
import RohanT from "./components/students/RohanT";
import TejaBhuvaneswariDevi from "./components/students/TejaBhuvaneswariDevi";
import GangadharSharma from "./components/students/GangadharSharma"; // Importing GangadharSharma
import HackathonLandingPage from "./components/hackahton";

import { useState, useEffect } from "react";
import KaviyaranP from "./components/students/KaviyaranP"; // Importing KaviyaranP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import GalaxyBackground from "./components/GalaxyBackground";



// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
    gsap.from(".hero", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from(".stats", { duration: 1, x: 100, opacity: 0, delay: 1 });
    gsap.from(".business", { duration: 1, y: 100, opacity: 0, delay: 1.5 });
    gsap.from(".billing", { duration: 1, x: -100, opacity: 0, delay: 2 });
    gsap.from(".cardDeal", { duration: 1, x: 100, opacity: 0, delay: 2.5 });
    gsap.from(".testimonials", { duration: 1, y: 100, opacity: 0, delay: 3 });
    gsap.from(".clients", { duration: 1, x: -100, opacity: 0, delay: 3.5 });
    gsap.from(".cta", { duration: 1, y: 100, opacity: 0, delay: 4 });
    gsap.from(".footer", { duration: 1, y: 100, opacity: 0, delay: 4.5 });

    // Animate images and icons on scroll
    gsap.utils.toArray("img, svg").forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "power3.out",
      });
    });

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <div className={`bg-primary w-full overflow-hidden`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar className="navbar" />
          </div>
        </div>

        <Routes>
          <Route path="/" element={
            <>
              <div className={`${styles.flexStart} pt-0`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero className="hero" />
                </div>
              </div>

              <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                  <Stats className="stats" />
                  <WhoWeAre />
                  <Business className="business" />
                  <Billing className="billing" />
                  <CardDeal className="cardDeal" />
                  <OurServices />
                  
                  <Clients className="clients" />
                  <CTA className="cta" />
                  <Testimonials className="testimonials" />
                  <FAQ />
                  <Contact />
                </div>
              </div>
            </>
          } />
          
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/hackathon" element={<HackathonLandingPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/web-development-services" element={<WebDevelopmentServices />} />
          <Route path="/careers/training-internships" element={<Internship />} />
          <Route path="/special-batch" element={<SpecialBatch />} />
          <Route path="/careers/jobs" element={<Job />} />
          <Route path="/interns" element={<Intern />} />
          <Route path="/webdevelopment" element={<Webdevelopment />} />
          <Route path="/androiddevelopment" element={<Androiddevelopment />} />
          <Route path="/uiux" element={<UIUX />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/machinelearning" element={<MachineLearning />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/fullstack" element={<Fullstack />} />
          <Route path="/mern" element={<MERN />} />
          <Route path="/python" element={<Python />} />
          <Route path="/java" element={<Java />} />
          <Route path="/javafull" element={<JavaFull />} />
          <Route path="/react" element={<ReactComponent />} />
          <Route path="/javascript" element={<JavaScript />} />
          <Route path="/node" element={<Node />} />
          <Route path="/aiml" element={<AIML />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/app-development-services" element={<AppDevelopmentServices />} />
          <Route path="/uiuxservices" element={<UIUXServices />} />
          <Route path="/seooptimizationservices" element={<SEOOptimizationServices />} />
          <Route path="/digitalmarketingservices" element={<DigitalMarketingServices />} />
          <Route path="/techconsultingservices" element={<TechConsultingServices />} />
          <Route path="/maintenancesupportservices" element={<MaintenanceSupportServices />} />
          <Route path="/aiagentsservices" element={<AIAgentsServices />} />
          <Route path="/aichatbotsservices" element={<AIChatbotsServices />} />
          <Route path="/aiautomationservices" element={<AIAutomationServices />} />
          <Route path="/computervisionservices" element={<ComputerVisionServices />} />
          <Route path="/predictiveanalyticsservices" element={<PredictiveAnalyticsServices />} />
          <Route path="/generativeaiservices" element={<GenerativeAIServices />} />
          <Route path="/aieducationservices" element={<AIEducationServices />} />
          <Route path="/speechvoiceaiservices" element={<SpeechVoiceAIServices />} />
          <Route path="/hiring-faq" element={<HiringFAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          
          {/* Student Profile Routes */}
          <Route path="/students/sasvanthu-g" element={<SasvanthuG />} />
          <Route path="/intern/sasvanthu-g" element={<SasvanthuG />} />
          <Route path="/students/ritika-kasat" element={<RitikaKasat />} />
          <Route path="/intern/ritika-kasat" element={<RitikaKasat />} />
          <Route path="/students/abhay-raj-singh" element={<AbhayRajSingh />} />
          <Route path="/intern/abhay-raj-singh" element={<AbhayRajSingh />} />
          <Route path="/students/aarshdeep-kaur" element={<AarshdeepKaur />} />
          <Route path="/intern/aarshdeep-kaur" element={<AarshdeepKaur />} />
          <Route path="/students/sagar-kumar" element={<SagarKumar />} />
          <Route path="/intern/sagar-kumar" element={<SagarKumar />} />
          <Route path="/students/simran-kanwar" element={<SimranKanwar />} />
          <Route path="/intern/simran-kanwar" element={<SimranKanwar />} />
          <Route path="/students/tanu-singh" element={<TanuSingh />} />
          <Route path="/intern/tanu-singh" element={<TanuSingh />} />
          <Route path="/students/rohit-sharma" element={<RohitSharma />} />
          <Route path="/intern/rohit-sharma" element={<RohitSharma />} />
          <Route path="/students/rohan-t" element={<RohanT />} />
          <Route path="/intern/rohan-t" element={<RohanT />} />
          <Route path="/students/teja-bhuvaneswari-devi" element={<TejaBhuvaneswariDevi />} />
          <Route path="/intern/teja-bhuvaneswari-devi" element={<TejaBhuvaneswariDevi />} />
          <Route path="/students/kaviyaran-p" element={<KaviyaranP />} />
          <Route path="/intern/kaviyaran-p" element={<KaviyaranP />} />
          <Route path="/students/ganga-dhar-sharma" element={<GangadharSharma />} /> // Ensure this points to the correct component
          <Route path="/intern/ganga-dhar-sharma" element={<GangadharSharma />} /> // Ensure this points to the correct component

        {/* Authentication Routes */}

        <Route path="/login" element={!user ? <Login /> : <Navigate to="/profile" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/profile" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />

        {/* Intern Profile Route */}
          <Route path="/interns/:internId" element={<InternProfile />} />
      </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;