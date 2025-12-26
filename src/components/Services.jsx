import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  webDevelopment,
  appDevelopment,
  seo,
  uiux,
  digital,
  tech,
  maintance,
  agents,
  chatbot,
  automation,
  computer,
  predictive,
  generative,
  education,
  voice,
  servicePage,
  expertise,
  customSolutions,
  agile,
  quality,
  communication,
  support,
  basic,
  classic,
  premium,
} from "../assets";
import OurProcess from "./OurProcess";
import Platform from "./Platform";
import Contact from "./Contact";
import CTA from "./CTA";

// ---------------------- Data ----------------------
const servicesData = [
  { id: 1, title: "Web Development", description: `🚀 High-performance & scalable web solutions\n✨ Modern responsive UI/UX design\n💼 Business-focused development approach\n⚡ Lightning-fast loading speeds\n🔒 Enterprise-grade security\n📱 Mobile-first responsive design`, image: webDevelopment, link: "/web-development-services" },
  { id: 2, title: "App Development", description: `📱 Cross-platform mobile applications\n🍎 Native iOS & Android development\n🎨 Seamless user experience design\n⚡ High-performance app optimization\n🔄 Real-time synchronization\n🛡️ Advanced security protocols`, image: appDevelopment, link: "/app-development-services" },
  { id: 3, title: "UI/UX Design", description: `🎯 Engaging & intuitive interfaces\n🛠️ Professional Figma & Adobe XD designs\n🎨 Complete brand identity solutions\n👥 User-centered design approach\n📊 Data-driven design decisions\n✨ Premium visual experiences`, image: uiux, link: "/uiuxservices" },
  { id: 4, title: "SEO Optimization", description: `📈 Organic traffic boost strategies\n🎯 Advanced keyword research & analysis\n⚡ Technical SEO optimization\n📊 Performance monitoring & analytics\n🔍 Local & global SEO campaigns\n🏆 First-page ranking guarantee`, image: seo, link: "/seooptimizationservices" },
  { id: 5, title: "Digital Marketing", description: `📢 Strategic campaign planning & execution\n📱 Social media marketing mastery\n📧 Email marketing automation\n📊 Advanced analytics & reporting\n🎯 Targeted audience engagement\n💰 ROI-driven marketing solutions`, image: digital, link: "/digitalmarketingservices" },
  { id: 6, title: "Tech Consulting", description: `🔄 Complete digital transformation\n🏗️ Scalable technology architecture\n📋 Strategic technology roadmaps\n💡 Innovation & modernization\n🔧 System optimization & integration\n📈 Business growth acceleration`, image: tech, link: "/techconsultingservices" },
  { id: 7, title: "Maintenance & Support", description: `🔧 24/7 technical support & monitoring\n🛡️ Proactive system maintenance\n🐛 Bug fixes & security updates\n⚡ Performance optimization\n📞 Dedicated support team\n🔄 Continuous system improvements`, image: maintance, link: "/maintenancesupportservices" },
  { id: 8, title: "AI Agents", description: `🤖 Intelligent research automation\n📊 Smart data processing & analysis\n🎯 Custom task automation\n⚡ AI-powered workflow optimization\n🔄 Autonomous system operations\n📈 Business intelligence enhancement`, image: agents, link: "/aiagentsservices" },
  { id: 9, title: "AI Chatbots & Virtual Assistants", description: `💬 Smart conversational AI interfaces\n🎯 Intelligent lead generation systems\n🔄 Multi-channel integration\n📞 24/7 customer support automation\n🧠 Natural language processing\n💼 Business process automation`, image: chatbot, link: "/aichatbotsservices" },
  { id: 10, title: "AI Automation Solutions", description: `⚙️ Intelligent workflow automation\n🔄 CRM & HR system optimization\n📧 Smart email & task management\n🤖 Robotic process automation\n⚡ Productivity enhancement\n💰 Cost reduction & efficiency gains`, image: automation, link: "/aiautomationservices" },
  { id: 11, title: "Computer Vision", description: `👁️ Advanced object detection systems\n📸 Facial recognition technology\n🔍 Smart image analysis & processing\n📊 Visual data interpretation\n🤖 Automated quality control\n🛡️ Security & surveillance solutions`, image: computer, link: "/computervisionservices" },
  { id: 12, title: "Predictive Analytics", description: `📊 Advanced data modeling & forecasting\n🔮 Future trend prediction\n📈 Business intelligence insights\n⚡ Real-time analytics dashboards\n🎯 Strategic decision support\n💡 Competitive advantage insights`, image: predictive, link: "/predictiveanalyticsservices" },
  { id: 13, title: "Generative AI Solutions", description: `🎨 AI-powered content creation\n📝 Smart text & image generation\n🎵 Creative content automation\n💡 Innovation acceleration\n⚡ Rapid prototyping\n🚀 Next-generation creative tools`, image: generative, link: "/generativeaiservices" },
  { id: 14, title: "AI for Education", description: `🎓 Personalized learning experiences\n📚 AI tutoring & quiz systems\n📊 Smart grading automation\n👨‍🏫 Adaptive learning platforms\n📈 Student performance analytics\n🔄 Continuous learning optimization`, image: education, link: "/aieducationservices" },
  { id: 15, title: "Speech & Voice AI", description: `🎤 Advanced voice command systems\n📝 Speech-to-text automation\n🎧 Smart audio processing\n📞 Voice-enabled applications\n🔊 Natural language interfaces\n🤖 Conversational AI technology`, image: voice, link: "/speechvoiceaiservices" },
];

const whyTechieHelp = [
  { id: 1, title: "Expert Team, Proven Expertise", description: "Our skilled professionals bring years of experience across web, app, AI, and cloud technologies. At TechieHelp, we don't just deliver code—we build future-proof solutions with confidence and creativity.", image: expertise },
  { id: 2, title: "Tailored to Your Business", description: "We understand that no two businesses are alike. That's why we create custom solutions that align perfectly with your vision, operations, and long-term goals—ensuring you stand out from competitors.", image: customSolutions },
  { id: 3, title: "Agile & Transparent Process", description: "We follow Agile methodology, ensuring fast iteration, continuous feedback, and full visibility. You stay in control, we keep you updated, and together we build a product that exceeds expectations.", image: agile },
  { id: 4, title: "Uncompromised Quality", description: "Quality is not optional—it's built into everything we do. Our QA experts rigorously test each feature for functionality, performance, and security so you launch with confidence.", image: quality },
  { id: 5, title: "Communication You Can Trust", description: "Expect regular updates, transparent timelines, and real conversations. We're your partner, not just a service provider. Your ideas are heard, and your success is our priority.", image: communication },
  { id: 6, title: "Reliable Post-Launch Support", description: "Your journey doesn't end at deployment. We offer ongoing support, updates, and system monitoring to keep your product running smoothly and securely 24/7.", image: support },
];

const pricingPlans = [
  { title: "Basic Plans", price: "₹5999", features: ["Domain name registration","10 Pages (dynamic Website)","10 Creations","Business Email id (Webmail)","Limitless Images & Videos","Live Chat Integration","Payment Gateway Integration","Social Media Integration","Web Hosting","100% Responsive Website","Design and Development","Content Creation","Security and Maintenance","Annual Renewal Rs. 3000"], imgSrc: basic, linkText: "Hello, I am interested in TechieHelp's Basic Plan. Kindly share the details and how I can get started." },
  { title: "Classic Plans", price: "₹8999", features: ["Domain name registration","15 Pages (dynamic Website)","15 Creations","Business Email id (Webmail)","Limitless Images & Videos","Live Chat Integration","Payment Gateway Integration","Social Media Integration","WhatsApp Integration","Web Hosting","100% Responsive Website","Design and Development","Content Creation","eCommerce Website","Annual Renewal Rs. 4000","Security and maintenance"], imgSrc: classic, linkText: "Hello, I would like to know more about TechieHelp's Classic Plan. Please provide the complete information and benefits." },
  { title: "Premium Plans", price: "₹11999", features: ["Domain name registration","20 Pages (dynamic Website)","20 Creations","Unlimited Email id (Webmail)","Limitless Images & Videos","Live Chat Integration","Payment Gateway Integration","Social Media Integration","WhatsApp Integration","Web Hosting","100% Responsive Website","Design and Development","Content Creation","eCommerce Website","cPanel* Access","Annual Renewal Rs. 5000","Security and maintenance"], imgSrc: premium, linkText: "Hi, I'm interested in TechieHelp's Premium Plan. Could you please guide me through the features, pricing, and enrollment process?" },
];

// ---------------------- Animation Variants ----------------------
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

// ---------------------- Services Component ----------------------
const Services = () => {
  return (
    <>
      {/* ----------------- Top Intro Section ----------------- */}
      <section className="pt-24 px-6 bg-black text-white flex flex-col items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-cyan-900 opacity-20 animate-gradient-x"></div>
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <div className="w-full md:w-1/2">
            <motion.img initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} src={servicePage} alt="TechieHelp Services" className="w-full rounded-xl shadow-xl object-cover" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-4">Our <span className="text-blue-500">Services</span></motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg mb-6">
              At TechieHelp, we provide a comprehensive suite of services including web development, app development, AI-powered solutions, and digital strategy...
            </motion.p>
            <motion.a href="https://wa.me/917673825079?text=Hello%20Team%20TechieHelp%2C%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">Connect with Our Team</motion.a>
          </div>
        </div>
      </section>

      {/* ----------------- Services Grid ----------------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16 bg-black">
        {servicesData.map(({ id, title, description, image, link }, i) => (
          <motion.div key={id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 flex flex-col items-center text-center hover:scale-105 hover:-translate-y-2 border border-gray-700/50 hover:border-blue-500/50 backdrop-blur-sm">
            <img src={image} alt={title} className="w-24 h-24 object-cover rounded-2xl border-2 border-blue-500/30 shadow-lg mb-6" />
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">{title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">{description}</p>
            <Link to={link} className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group">Learn More
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* ----------------- Why Choose TechieHelp ----------------- */}
      <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="py-16 bg-black text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-4">Why Choose TechieHelp?</h2>
          <p className="text-gray-300 text-lg">Innovation. Precision. Partnership. Discover why startups and enterprises trust us.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20">
          {whyTechieHelp.map((item, i) => (
            <motion.div key={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} className="bg-[#101827] shadow-lg rounded-2xl p-6 hover:shadow-blue-500 transition-all duration-300">
              <img src={item.image} alt={item.title} className="w-16 h-16 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-center text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm text-center mt-3">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ----------------- Call to Action & Contact ----------------- */}
      <CTA />
      <Contact />
    </>
  );
};

export default Services;
