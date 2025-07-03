import React, { useRef, useState, useEffect } from "react";
import styles from "../style";
import { motion } from "framer-motion";
import Loading from "./Loading";
import { arrowUp, webDevelopment, appDevelopment, seo, uiux, digital, tech, maintance, agents, chatbot, automation, computer, predictive, generative, education, voice, hiring,work,process,alert,earn} from "../assets";
import HiringFAQ from "./hiringFAQ";

const services = [
  {
    id: 1,
    icon: webDevelopment,
    title: "Web Developer",
    description: [
      "High-performance & scalable",
      "Responsive UI",
      "Business-focused designs"
    ],
  },
  {
    id: 2,
    icon: appDevelopment,
    title: "App Developer",
    description: [
      "Cross-platform apps",
      "Native Android/iOS",
      "Seamless UX"
    ],
  },
  {
    id: 3,
    icon: uiux,
    title: "UI/UX Designer",
    description: [
      "Engaging interfaces",
      "Figma & Adobe XD",
      "Brand identity design"
    ],
  },
  {
    id: 4,
    icon: seo,
    title: "SEO Specialist",
    description:
      "Enhancing your website's visibility, traffic, and ranking through strategic keyword optimization and technical SEO.",
  },
  {
    id: 5,
    icon: digital,
    title: "Digital Marketing Specialist",
    description:
      "Driving growth with targeted digital marketing campaigns, content strategies, and performance analytics.",
  },
  {
    id: 7,
    icon: tech,
    title: "Tech Consultant",
    description:
      "Empowering businesses with strategic technology insights and solutions for digital transformation.",
  },
  {
    id: 8,
    icon: maintance,
    title: "Maintenance & Support Engineer",
    description:
      "Providing reliable, ongoing technical support and maintenance to ensure business continuity.",
  },
  {
    id: 9,
    icon: agents,
    title: "AI Agent Developer",
    description:
      "Deploying intelligent AI agents to automate tasks, conduct research, and enhance operational efficiency.",
  },
  {
    id: 10,
    icon: chatbot,
    title: "AI Chatbot Developer",
    description:
      "Building conversational AI bots for customer service, lead generation, and business automation.",
  },
  {
    id: 11,
    icon: automation,
    title: "AI Automation Engineer",
    description:
      "Streamlining workflows with AI-driven automation for email processing, HR, CRM, and more.",
  },
  {
    id: 12,
    icon: computer,
    title: "Computer Vision Engineer",
    description:
      "Creating smart visual recognition systems for object detection, facial recognition, and document scanning.",
  },
  {
    id: 14,
    icon: predictive,
    title: "Predictive Analytics Specialist",
    description:
      "Building intelligent models to forecast trends, customer behavior, and business outcomes.",
  },
  {
    id: 15,
    icon: generative,
    title: "Generative AI Specialist",
    description:
      "Delivering cutting-edge AI tools for text generation, image synthesis, and content automation.",
  },
  {
    id: 16,
    icon: education,
    title: "AI Education Specialist",
    description:
      "Developing AI-based educational tools including tutors, quiz generators, and automatic graders for smarter learning.",
  },
  {
    id: 17,
    icon: voice,
    title: "Speech & Voice AI Specialist",
    description:
      "Enabling voice-based applications through speech recognition, transcription, and voice command technologies.",
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

const Job = () => {
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className="pt-40 bg-primary text-white">
        <div className={`${styles.boxWidth} mx-auto flex flex-col md:flex-row items-center justify-between`}>
          <div className="md:w-1/2 mb-8 md:mb-0 px-4 max-w-[90%]">
            <h1 className="text-4xl font-bold mb-4">
              🟢 Join TechieHelp — Shape the Future with Us
            </h1>
            <p className="text-lg mb-6 leading-relaxed">
              Welcome to TechieHelp, where innovation meets opportunity. We’re on a mission to empower students and professionals through real-world experience, expert mentorship, and career-defining projects. If you’re passionate about tech, creativity, and growth — this is the place for you.
            </p>
            <p className="text-lg font-semibold">
              👉 Explore roles. Apply now. Let’s build something great together.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Added hiring image as requested */}
            <img src={hiring} alt="We are Hiring" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      <section className={`${styles.paddingY} text-white`}>
        <div className={`${styles.boxWidth} mx-auto flex flex-col md:flex-row items-center justify-between`}>
          <div className="md:w-1/2 flex justify-center order-2 md:order-1 mx-auto max-w-7xl mt-8 md:mt-0">
            {/* Increased size of work image as requested */}
            <img src={work} alt="Why Work With TechieHelp" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 px-4 max-w-[90%]">
            <h2 className={`${styles.heading2} text-blue-400 mb-4 text-center md:text-left`}>
              🌟 Why Work With TechieHelp?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg mb-6">
              <li>🏆 MSME & National Internship Portal Verified</li>
              <li>💼 Real-World Projects & Challenges</li>
              <li>🧑‍🏫 Industry Mentorship & Training</li>
              <li>📜 Internship Certificates & LOR</li>
              <li>🚀 Performance-Based PPOs</li>
              <li>🔥 Flexible Work Culture</li>
              <li>🌐 Global Exposure via YouTube & LinkedIn</li>
            </ul>
            <p className="text-lg font-semibold">
              “We don’t just give internships, we build careers.”
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.paddingY} text-white`}>
        <div className={`${styles.boxWidth} mx-auto relative`}>
          <h2 className={`${styles.heading2} text-center text-blue-400 mb-4`}>
            We Are Hiring!
          </h2>
          <p className="text-center text-gray-300 mb-8 text-lg font-light">
            Join our team and work on exciting projects. Apply now for part-time and project-based roles.
          </p>
          <div className="flex items-center">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll Left"
              className="text-white p-2 focus:outline-none"
            >
              &#8249;
            </button>
            <div
              ref={scrollRef}
              className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth no-scrollbar"
              style={{ scrollBehavior: "smooth" }}
            >
              {services.map(({ id, icon, title, description }, index) => (
                <motion.div
                  key={id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="min-w-[320px] max-w-[320px] flex-shrink-0 rounded-2xl p-6 text-left cursor-pointer bg-white shadow-lg"
                >
                  <img
                    src={icon}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-2xl mb-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = arrowUp;
                    }}
                  />
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
                  {Array.isArray(description) ? (
                    <ul className="text-gray-700 text-sm list-disc list-inside space-y-1">
                      {description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 text-sm">{description}</p>
                  )}
<a
  href="https://wa.me/917673825079?text=Hello%20TechieHelp%20Team%2C%20I%20am%20interested%20in%20applying%20for%20a%20hiring%20opportunity.%20Please%20guide%20me%20through%20the%20process."
  className="mt-3 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium text-center"
  target="_blank"
  rel="noopener noreferrer"
>
  Apply Now
</a>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll Right"
              className="text-white p-2 focus:outline-none"
            >
              &#8250;
            </button>
          </div>
        </div>
      </section>
      <section className={`${styles.paddingY} text-white`}>
        <div className={`${styles.boxWidth} mx-auto flex flex-col md:flex-row items-center justify-between`}>
          <div className="md:w-1/2 flex justify-center order-2 md:order-1 mx-auto max-w-lg mt-8 md:mt-0">
            {/* Added process image as requested */}
            <img src={process} alt="Our Hiring Process" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 px-4 max-w-[90%]">
            <h2 className={`${styles.heading2} text-blue-400 mb-4 text-center md:text-left`}>
              📌 Our Hiring Process
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg mb-6">
              <li>Apply Online<br />Fill in the form with your resume and role interest.</li>
              <li>Assignment / Task<br />Get a small project to show your skills.</li>
              <li>Short Interview (if applicable)<br />Talk with our team about your goals and experience.</li>
              <li>Selection & Onboarding<br />Receive a selection mail, join our Slack/WhatsApp team, and begin.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`${styles.paddingY} text-white`}>
        <div className={`${styles.boxWidth} mx-auto flex flex-col md:flex-row items-center justify-between`}>
          <div className="md:w-1/2 flex justify-center order-2 md:order-2 mx-auto max-w-3xl mt-8 md:mt-0">
            {/* Further increased alert image size on right side */}
            <img src={alert} alt="Our Hiring Alert" className="max-w-full h-auto rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2 order-1 md:order-1 px-4 max-w-[90%]">
            <h2 className={`${styles.heading2} text-blue-400 mb-4 text-center md:text-left`}>
              🌟 Please Note Before You Apply
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg mb-6">
              <li>At TechieHelp, we currently do not offer full-time roles.</li>
              <li>We are hiring only for part-time, project-based roles designed specifically for students and early-stage professionals.</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">✅ What This Means:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>💼 You will be officially part of the TechieHelp Team</li>
              <li>🧩 Work on real projects with deadlines and proper task allocation</li>
              <li>💰 Receive payment based on project delivery and performance</li>
              <li>⏳ Flexible working hours — ideal for students</li>
              <li>🎓 All team members receive:</li>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li>Internship Certificate</li>
                <li>Letter of Recommendation (LOR)</li>
                <li>Recognition on Website/LinkedIn</li>
                <li>Chance to work with multiple departments (Tech, Marketing, Design, etc.)</li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
      <section className={`${styles.paddingY} text-white`}>
        <div className={`${styles.boxWidth} mx-auto flex flex-col md:flex-row items-center justify-between`}>
          <div className="md:w-1/2 flex justify-center order-1 md:order-1 mx-auto max-w-3xl mt-8 md:mt-0">
            <img src={earn} alt="Why Project-Based Roles" className="max-w-full h-auto rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2 order-2 md:order-2 px-4 max-w-[90%]">
            <h2 className={`${styles.heading2} text-blue-400 mb-4 text-center md:text-left`}>
              💡 Why Project-Based Roles?
            </h2>
            <p className="text-lg mb-4">
              We believe in skill-first, hands-on learning. Our project-based model helps you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg mb-4">
              <li>Build a strong portfolio</li>
              <li>Work in a professional environment</li>
              <li>Get paid for meaningful contributions</li>
              <li>Stay committed without disturbing your academics</li>
            </ul>
            <p className="text-lg font-semibold">
              💬 “At TechieHelp, we don’t just hire interns — we build a team of innovators, creators, and future leaders.”
            </p>
          </div>
        </div>
      </section>
      <HiringFAQ />
    </>
  );
};

export default Job;
