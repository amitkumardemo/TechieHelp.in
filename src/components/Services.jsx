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
} from "../assets";
import OurProcess from "./OurProcess";
import Platform from "./Platform";
import { basic, classic, premium } from "../assets";
import Contact from "./Contact";
import Footer from "./Footer";
import CTA from "./CTA";


const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: `- High-performance & scalable\n- Responsive UI\n- Business-focused designs`,
    image: webDevelopment,
    link: "/web-development-services",
  },
  {
    id: 2,
    title: "App Development",
    description: `- Cross-platform apps\n- Native Android/iOS\n- Seamless UX`,
    image: appDevelopment,
    link: "/app-development-services",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: `- Engaging interfaces\n- Figma & Adobe XD\n- Brand identity design`,
    image: uiux,
    link: "/uiuxservices",
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: `- Organic traffic boost\n- Keyword strategy\n- Technical SEO`,
    image: seo,
    link: "/seooptimizationservices",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: `- Campaign strategy\n- Social media & email\n- Analytics reporting`,
    image: digital,
    link: "/digitalmarketingservices",
  },
  {
    id: 6,
    title: "Tech Consulting",
    description: `- Digital transformation\n- Scalable tech stack\n- Strategic planning`,
    image: tech,
    link: "/techconsultingservices",
  },
  {
    id: 7,
    title: "Maintenance & Support",
    description: `- Ongoing technical help\n- Site uptime monitoring\n- Bug fixes`,
    image: maintance,
    link: "/maintenancesupportservices",
  },
  {
    id: 8,
    title: "AI Agents",
    description: `- Research bots\n- Data automation\n- Custom task agents`,
    image: agents,
    link: "/aiagentsservices",
  },
  {
    id: 9,
    title: "AI Chatbots & Virtual Assistants",
    description: `- Smart Q&A bots\n- Lead gen bots\n- Multichannel integration`,
    image: chatbot,
    link: "/aichatbotsservices",
  },
  {
    id: 10,
    title: "AI Automation Solutions",
    description: `- Workflow automation\n- CRM, HR tools\n- Email & task bots`,
    image: automation,
    link: "/aiautomationservices",
  },
  {
    id: 11,
    title: "Computer Vision",
    description: `- Object detection\n- Face recognition\n- Smart scanning tools`,
    image: computer,
    link: "/computervisionservices",
  },
  {
    id: 12,
    title: "Predictive Analytics",
    description: `- Data modeling\n- Forecasting trends\n- Behavior insights`,
    image: predictive,
    link: "/predictiveanalyticsservices",
  },
  {
    id: 13,
    title: "Generative AI Solutions",
    description: `- Text & image generation\n- Content automation\n- AI creativity tools`,
    image: generative,
    link: "/generativeaiservices",
  },
  {
    id: 14,
    title: "AI for Education",
    description: `- AI tutors & quiz bots\n- Smart grading tools\n- Personalized learning`,
    image: education,
    link: "/aieducationservices",
  },
  {
    id: 15,
    title: "Speech & Voice AI",
    description: `- Voice commands\n- Speech-to-text\n- Smart transcription`,
    image: voice,
    link: "/speechvoiceaiservices",
  },
];


const whyTechieHelp = [
  {
    id: 1,
    title: "Expert Team, Proven Expertise",
    description:
      "Our skilled professionals bring years of experience across web, app, AI, and cloud technologies. At TechieHelp, we don’t just deliver code—we build future-proof solutions with confidence and creativity.",
    image: expertise,
  },
  {
    id: 2,
    title: "Tailored to Your Business",
    description:
      "We understand that no two businesses are alike. That’s why we create custom solutions that align perfectly with your vision, operations, and long-term goals—ensuring you stand out from competitors.",
    image: customSolutions,
  },
  {
    id: 3,
    title: "Agile & Transparent Process",
    description:
      "We follow Agile methodology, ensuring fast iteration, continuous feedback, and full visibility. You stay in control, we keep you updated, and together we build a product that exceeds expectations.",
    image: agile,
  },
  {
    id: 4,
    title: "Uncompromised Quality",
    description:
      "Quality is not optional—it’s built into everything we do. Our QA experts rigorously test each feature for functionality, performance, and security so you launch with confidence.",
    image: quality,
  },
  {
    id: 5,
    title: "Communication You Can Trust",
    description:
      "Expect regular updates, transparent timelines, and real conversations. We're your partner, not just a service provider. Your ideas are heard, and your success is our priority.",
    image: communication,
  },
  {
    id: 6,
    title: "Reliable Post-Launch Support",
    description:
      "Your journey doesn’t end at deployment. We offer ongoing support, updates, and system monitoring to keep your product running smoothly and securely 24/7.",
    image: support,
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

const Services = () => {
  return (
    <>
      {/* --------------------- Top Intro Section --------------------- */}
      <section className="pt-24 px-6 bg-black text-white flex flex-col items-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src={servicePage}
              alt="TechieHelp Services"
              className="w-full rounded-xl shadow-xl object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold mb-4"
  >
    Our <span className="text-blue-500">Services</span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-lg mb-6"
  >
    At TechieHelp, we provide a comprehensive suite of services including web development, app development, AI-powered solutions, and digital strategy. Our team combines innovation with technical expertise to build scalable, user-centric products that align with your business goals and deliver measurable results.


  </motion.p>

  <motion.a
    href="https://wa.me/917673825079?text=Hello%20Team%20TechieHelp%2C%20I%20am%20interested%20in%20your%20services.%20Kindly%20share%20more%20details."
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
  >
    Connect with Our Team
  </motion.a>
</div>

        </div>
      </section>

      {/* --------------------- Offer Section --------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center items-center text-center px-4 py-14 bg-black"
      >
        <div className="border border-blue-500 rounded-2xl p-8 max-w-3xl hover:shadow-blue-500/30 hover:shadow-lg transition duration-300">
          <h2 className="text-4xl font-bold text-white mb-4 hover:text-blue-400 transition">
            What we <span className="text-blue-500">offer</span>
          </h2>
          <p className="text-xl font-light italic text-gray-300 hover:text-white transition">
            Startup Brilliance: Crafting Trendsetting SaaS, Online, and Mobile Solutions with Expertise.
          </p>
        </div>
      </motion.div>

      {/* --------------------- Services Grid --------------------- */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16 bg-black">
        {servicesData.map(({ id, title, description, image, link }, i) => (
          <motion.div
            key={id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[#101827] rounded-xl p-6 shadow-xl hover:shadow-blue-500/40 transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={image}
              alt={title}
              className="w-20 h-20 mb-4 object-cover rounded-full border border-gray-500"
            />
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm whitespace-pre-line mb-3 line-clamp-5">
              {description}
            </p>
            <Link
              to={link}
              className="text-blue-500 hover:underline mt-auto"
              aria-label={`More details about ${title}`}
            >
              More details
            </Link>
          </motion.div>
        ))}
      </section>

      {/* --------------------- Why Choose TechieHelp --------------------- */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-16 bg-black text-white"
>
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-500 mb-4">Why Choose TechieHelp?</h2> {/* Adjusted blue for better contrast */}
    <p className="text-gray-300 text-lg"> {/* Lighter gray for readability */}
      Innovation. Precision. Partnership. Discover why startups and enterprises trust us.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20">
    {whyTechieHelp.map((item, i) => (
      <motion.div
        key={item.id}
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}
        className="bg-[#101827] shadow-lg rounded-2xl p-6 hover:shadow-blue-500 transition-all duration-300" // Dark bg to match services cards
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-16 mb-4 mx-auto"
        />
        <h3 className="text-xl font-semibold text-center text-white">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm text-center mt-3">{item.description}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

{/* Our Process Section */}
      <OurProcess/>

      {/* Platforms Section */}
      <Platform/>

      {/* Pricing Plans Section */}
            <section className="py-20 px-6">
              <div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-bold mb-12 text-center text-white">
  Pricing Plans
</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Basic Plans",
                      price: "₹5999",
                      features: [
                        "Domain name registration",
                        "10 Pages (dynamic Website)",
                        "10 Creations",
                        "Business Email id (Webmail)",
                        "Limitless Images & Videos",
                        "Live Chat Integration",
                        "Payment Gateway Integration",
                        "Social Media Integration",
                        "Web Hosting",
                        "100% Responsive Website",
                        "Design and Development",
                        "Content Creation",
                        "Security and Maintenance",
                        "Annual Renewal Rs. 3000",
                      ],
                      imgSrc: basic,
                      alt: "Basic Plan",
                    },
                    {
                      title: "Classic Plans",
                      price: "₹8999",
                      features: [
                        "Domain name registration",
                        "15 Pages (dynamic Website)",
                        "15 Creations",
                        "Business Email id (Webmail)",
                        "Limitless Images & Videos",
                        "Live Chat Integration",
                        "Payment Gateway Integration",
                        "Social Media Integration",
                        "WhatsApp Integration",
                        "Web Hosting",
                        "100% Responsive Website",
                        "Design and Development",
                        "Content Creation",
                        "eCommerce Website",
                        "Annual Renewal Rs. 4000",
                        "Security and maintenance",
                      ],
                      imgSrc: classic,
                      alt: "Classic Plan",
                    },
                    {
                      title: "Premium Plans",
                      price: "₹11999",
                      features: [
                        "Domain name registration",
                        "20 Pages (dynamic Website)",
                        "20 Creations",
                        "Unlimited Email id (Webmail)",
                        "Limitless Images & Videos",
                        "Live Chat Integration",
                        "Payment Gateway Integration",
                        "Social Media Integration",
                        "WhatsApp Integration",
                        "Web Hosting",
                        "100% Responsive Website",
                        "Design and Development",
                        "Content Creation",
                        "eCommerce Website",
                        "cPanel* Access",
                        "Annual Renewal Rs. 5000",
                        "Security and maintenance",
                      ],
                      imgSrc: premium,
                      alt: "Premium Plan",
                    },
                  ].map(({ title, price, features, imgSrc, alt }, index) => (
                    <motion.div
                      key={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={cardVariants}
                      custom={index}
                      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
                    >
                      <img src={imgSrc} alt={alt} className="w-24 h-24 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{title}</h3>
                      <div className="font-bold text-green-600 mb-4">{price}</div>
                      <ul className="text-left list-disc list-inside space-y-1 mb-4">
                        {features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      <a
                        href={
                          index === 0
                            ? "https://wa.me/917673825079?text=Hello%2C%20I%20am%20interested%20in%20TechieHelp%27s%20Basic%20Plan.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20get%20started."
                            : index === 1
                            ? "https://wa.me/917673825079?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20TechieHelp%27s%20Classic%20Plan.%20Please%20provide%20the%20complete%20information%20and%20benefits."
                            : "https://wa.me/917673825079?text=Hi%2C%20I%27m%20interested%20in%20TechieHelp%27s%20Premium%20Plan.%20Could%20you%20please%20guide%20me%20through%20the%20features%2C%20pricing%2C%20and%20enrollment%20process%3F"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300 inline-block text-center"
                      >
                        Choose Plan
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
      {/* --------------------- Call to Action --------------------- */}
      <CTA />
      <Contact />
      

    </>
  );
};

export default Services;

