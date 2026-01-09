import styles, { layout } from "./style";
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
import Employee from "./components/Employee";
import InternProfile from "./components/InternProfile";
import EmployeeProfile from "./components/EmployeeProfile";
import AmitKumar from "./components/employees/AmitKumar";
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
import PlacementBoosterLanding from "./components/placement";

import { useState, useEffect } from "react";
import KaviyaranP from "./components/students/KaviyaranP"; // Importing KaviyaranP
import AnkitKumarKeshari from "./components/students/AnkitKumarKeshari";
import KhiasuthongT from "./components/students/KhiasuthongT";
import SenchumbeniCErui from "./components/students/SenchumbeniCErui";
import KajolSunar from "./components/students/KajolSunar";
import SushetoZhimo from "./components/students/SushetoZhimo";
import NehaBegum from "./components/students/NehaBegum";
import EmanuelThangthazo from "./components/students/EmanuelThangthazo";
import AnutaluRhakho from "./components/students/AnutaluRhakho";
import BeloKapfo from "./components/students/BeloKapfo";
import Bsdenephom from "./components/students/Bsdenephom";
import ThujozoRhakho from "./components/students/ThujozoRhakho";
import DotsuTYimchunger from "./components/students/DotsuTYimchunger";
import BendangakumHoki from "./components/students/BendangakumHoki";
import PuloviKChishi from "./components/students/PuloviKChishi";
import KengimheingNampeung from "./components/students/KengimheingNampeung";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { placement } from "./assets";
import { useAuth } from "./contexts/AuthContext";
import GalaxyBackground from "./components/GalaxyBackground";
import LMSLogin from "./components/lms/LMSLogin";
import BatchSelection from "./components/lms/BatchSelection";
import StudentDashboard from "./components/lms/StudentDashboard";
import AdminDashboard from "./components/lms/AdminDashboard";
import AdminCourseManagement from "./components/lms/AdminCourseManagement";
import CourseView from "./components/lms/CourseView";
import InitializeProfiles from "./components/lms/InitializeProfiles";
import ProtectedRoute from "./components/ProtectedRoute";



// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const { user, userProfile } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Only animate if elements exist (on home page)
    if (document.querySelector(".navbar")) {
      gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "bounce" });
    }
    if (document.querySelector(".hero")) {
      gsap.from(".hero", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    }
    if (document.querySelector(".stats")) {
      gsap.from(".stats", { duration: 1, x: 100, opacity: 0, delay: 1 });
    }
    if (document.querySelector(".business")) {
      gsap.from(".business", { duration: 1, y: 100, opacity: 0, delay: 1.5 });
    }
    if (document.querySelector(".billing")) {
      gsap.from(".billing", { duration: 1, x: -100, opacity: 0, delay: 2 });
    }
    if (document.querySelector(".cardDeal")) {
      gsap.from(".cardDeal", { duration: 1, x: 100, opacity: 0, delay: 2.5 });
    }
    if (document.querySelector(".testimonials")) {
      gsap.from(".testimonials", { duration: 1, y: 100, opacity: 0, delay: 3 });
    }
    if (document.querySelector(".clients")) {
      gsap.from(".clients", { duration: 1, x: -100, opacity: 0, delay: 3.5 });
    }
    if (document.querySelector(".cta")) {
      gsap.from(".cta", { duration: 1, y: 100, opacity: 0, delay: 4 });
    }
    if (document.querySelector(".footer")) {
      gsap.from(".footer", { duration: 1, y: 100, opacity: 0, delay: 4.5 });
    }

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
          {/* LMS Routes */}
          <Route path="/lms" element={<LMSLogin />} />
          <Route path="/lms/login" element={<LMSLogin />} />
          <Route path="/lms/batch-selection" element={
            <ProtectedRoute>
              <BatchSelection />
            </ProtectedRoute>
          } />
          <Route path="/lms/student/dashboard" element={
            <ProtectedRoute requiredRole="student">
              <StudentDashboard />
            </ProtectedRoute>
          } />
          <Route path="/lms/student/courses/:courseId" element={
            <ProtectedRoute requiredRole="student">
              <CourseView />
            </ProtectedRoute>
          } />
          <Route path="/lms/admin/dashboard" element={
            <ProtectedRoute requiredRole="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/lms/admin/courses" element={
            <ProtectedRoute requiredRole="admin">
              <AdminCourseManagement />
            </ProtectedRoute>
          } />
          <Route path="/admin/courses" element={
            <ProtectedRoute requiredRole="admin">
              <AdminCourseManagement />
            </ProtectedRoute>
          } />
          <Route path="/lms/init-profiles" element={<InitializeProfiles />} />

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
                  {/* Placement Booster Section */}
                  <section className={`${layout.section} gap-10`}>
                    <div className={layout.sectionImg}>
                      <img src={placement} alt="Placement Booster" className="w-[100%] h-[90%]" />
                    </div>
                    <div className={layout.sectionInfo}>
                      <h2 className={styles.heading2}>Placement Booster Program</h2>
                      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        Crack your dream job with our A→Z Interview Program at ₹999. Includes LinkedIn enhancement, resume makeover, DSA training, mock interviews, and paid internship opportunities.
                      </p>
                      <Link to="/placement-booster" className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10">
                        Learn More
                      </Link>
                    </div>
                  </section>
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
          <Route path="/employees" element={<Employee />} />
          <Route path="/interns" element={<Intern />} />
          <Route path="/employees/:employeeId" element={<EmployeeProfile />} />
          <Route path="/employee/amit-kumar" element={<AmitKumar />} />
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
          <Route path="/placement-booster" element={<PlacementBoosterLanding />} />
          
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
          <Route path="/students/ankit-kumar-keshari" element={<AnkitKumarKeshari />} />
          <Route path="/intern/ankit-kumar-keshari" element={<AnkitKumarKeshari />} />
          <Route path="/students/khiasuthong-t" element={<KhiasuthongT />} />
          <Route path="/intern/khiasuthong-t" element={<KhiasuthongT />} />
          <Route path="/students/senchumbeni-c-erui" element={<SenchumbeniCErui />} />
          <Route path="/intern/senchumbeni-c-erui" element={<SenchumbeniCErui />} />
          <Route path="/students/kajol-sunar" element={<KajolSunar />} />
          <Route path="/intern/kajol-sunar" element={<KajolSunar />} />
          <Route path="/students/susheto-zhimo" element={<SushetoZhimo />} />
          <Route path="/intern/susheto-zhimo" element={<SushetoZhimo />} />
          <Route path="/students/neha-begum" element={<NehaBegum />} />
          <Route path="/intern/neha-begum" element={<NehaBegum />} />
          <Route path="/students/emanuel-thangthazo" element={<EmanuelThangthazo />} />
          <Route path="/intern/emanuel-thangthazo" element={<EmanuelThangthazo />} />
          <Route path="/students/anutalu-rhakho" element={<AnutaluRhakho />} />
          <Route path="/intern/anutalu-rhakho" element={<AnutaluRhakho />} />
          <Route path="/students/belo-kapfo" element={<BeloKapfo />} />
          <Route path="/intern/belo-kapfo" element={<BeloKapfo />} />
          <Route path="/students/bsden-ephom" element={<Bsdenephom />} />
          <Route path="/intern/bsden-ephom" element={<Bsdenephom />} />
          <Route path="/students/thujozo-rhakho" element={<ThujozoRhakho />} />
          <Route path="/intern/thujozo-rhakho" element={<ThujozoRhakho />} />
          <Route path="/students/dotsu-t-yimchunger" element={<DotsuTYimchunger />} />
          <Route path="/intern/dotsu-t-yimchunger" element={<DotsuTYimchunger />} />
          <Route path="/students/bendangakum-hoki" element={<BendangakumHoki />} />
          <Route path="/intern/bendangakum-hoki" element={<BendangakumHoki />} />
          <Route path="/students/pulovi-k-chishi" element={<PuloviKChishi />} />
          <Route path="/intern/pulovi-k-chishi" element={<PuloviKChishi />} />
          <Route path="/students/kengimheing-nampeung" element={<KengimheingNampeung />} />
          <Route path="/intern/kengimheing-nampeung" element={<KengimheingNampeung />} />

        {/* Authentication Routes */}

        <Route path="/login" element={!user ? <Login /> : <Navigate to="/profile" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/profile" />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />

        {/* Intern Profile Route */}
          <Route path="/interns/:internId" element={<InternProfile />} />
      </Routes>
        <Footer />

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/917073130165?text=Hello%20TechieHelp%20Team,%20I%20would%20like%20to%20connect%20regarding%20your%20services%20and%20opportunities.%20Please%20guide%20me%20further."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </Router>
  );
};

export default App;