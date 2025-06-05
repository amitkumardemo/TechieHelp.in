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
  expertise,
  customSolutions,
  agile,
  quality,
  communication,
  support,
  inter,
  domain,
  badges,
  swag,
  frontend,
  backend,
  fullstack,
  node,
  python,
  java,
  javafull,
  javascript,
  mern,
  react,
  aiml,
  devops,
} from "../assets";
import InternshipFAQ from "./InternshipFAQ";

const internships = [
  { id: 1, title: "Web Development Internship", description: "Work on real-world websites using HTML, CSS, JavaScript & React. Get mentorship and project experience.", image: webDevelopment, link: "/webdevelopment" },
  { id: 2, title: "App Development Internship", description: "Build Android/iOS apps using Flutter or React Native. Hands-on learning with weekly challenges.", image: appDevelopment, link: "/androiddevelopment" },
  { id: 3, title: "UI/UX Design Internship", description: "Learn Figma, Adobe XD, and user research. Create real UI designs for clients & portfolio.", image: uiux, link: "/uiux" },
  { id: 4, title: "SEO & Digital Marketing Internship", description: "Explore keyword research, social media marketing, and Google Analytics tools.", image: seo, link: "/seo" },
  { id: 5, title: "Artificial Intelligence Internship", description: "Implement AI models in Python. Work on projects like image recognition, chatbots & data prediction.", image: chatbot, link: "/ai" },
  { id: 6, title: "Machine Learning Internship", description: "Learn regression, classification, clustering. Build ML models & deploy them.", image: predictive, link: "/machinelearning" },
  { id: 7, title: "Front-End Developer Internship", description: "Build responsive and modern UIs using HTML, CSS, and JavaScript frameworks.", image: frontend, link: "/frontend" },
  { id: 8, title: "Back-End Developer Internship", description: "Work with server-side logic, databases, and APIs using languages like Java, Python, or Node.js.", image: backend, link: "/backend" },
  { id: 9, title: "Full Stack Developer Internship", description: "Develop both front-end and back-end parts of web applications using modern tech stacks.", image: fullstack, link: "/fullstack" },
  { id: 10, title: "MERN Stack Developer Internship", description: "Work on full-stack applications using MongoDB, Express.js, React.js, and Node.js.", image: mern, link: "/mern" },
  { id: 11, title: "Python Developer Internship", description: "Develop scripts, automation, and backend logic using Python frameworks like Django or Flask.", image: python, link: "/python" },
  { id: 12, title: "Java Developer Internship", description: "Work on backend development using Java and frameworks like Spring Boot.", image: java, link: "/java" },
  { id: 13, title: "Java Full Stack Developer Internship", description: "Build full stack apps using Java (Spring) for backend and React/Angular for frontend.", image: javafull, link: "/javafull" },
  { id: 14, title: "React Developer Internship", description: "Create dynamic web interfaces using React.js and modern JavaScript libraries.", image: react, link: "/react" },
  { id: 15, title: "JavaScript Developer Internship", description: "Work on dynamic front-end projects using JavaScript, ES6+, and related libraries.", image: javascript, link: "/javascript" },
  { id: 16, title: "Node.js Developer Internship", description: "Build scalable server-side applications using Node.js and Express.", image: node, link: "/node" },
  { id: 17, title: "AI/ML Developer Internship", description: "Work on AI models, machine learning algorithms, and real-world datasets using Python and popular libraries.", image: aiml, link: "/aiml" },
  { id: 18, title: "DevOps Internship", description: "Implement CI/CD pipelines, containerization with Docker, and deploy scalable apps with cloud platforms.", image: devops, link: "/devops" }
];

const Internship = () => {
  return (
    <div className="bg-primary text-white min-h-screen pt-48 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src={inter}
              alt="Internship Program"
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
              Our <span className="text-blue-500">Internship & Training Program</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg mb-6"
            >
              Welcome to the TechieHelp Internship and Training Program, a premier platform designed to bridge the gap between academic learning and industry requirements by providing hands-on experience, expert mentorship, and professional development opportunities.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              Join Our Team
            </motion.button>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-white my-12 px-8 py-20">
          Our Internship Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white text-gray-900 rounded-2xl shadow-lg p-6"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 whitespace-pre-line">{item.description}</p>
              <Link to={item.link} className="text-blue-500 hover:underline font-medium">more details</Link>
            </motion.div>
          ))}
        </div>

        {/* Detailed Internship Domains & Flexible Duration Options Section */}
        <div className="text-white pt-20 px-4 mt-20">
          <div className="container mx-auto space-y-20">
            {/* Section 1 */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-6">
                  🎯 Internship Domains & Flexible Duration Options
                </h2>
                <p className="text-lg mb-6 whitespace-pre-line">
                  We offer comprehensive internship programs across diverse technical and professional domains. Participants may choose from 1-month, 2-months, or 3-months durations, enabling customized learning aligned with individual career goals. Each program comprises:
                </p>
                <ul className="list-disc list-inside space-y-3 text-lg">
                  <li>📚 Live Interactive Sessions: Delivered by industry experts to cover core concepts and practical skills.</li>
                  <li>🛠️ Project-Based Learning: Real-world projects designed to develop problem-solving and technical proficiency.</li>
                  <li>❓ Doubt Clearing Sessions: Regular interactive sessions to address queries and reinforce learning.</li>
                  <li>👨‍🏫 Dedicated Mentorship: Continuous guidance from seasoned professionals and founders.</li>
                  <li>🏆 Hackathons & Competitions: Access to curated hackathon resources and challenges to stimulate innovation.</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  src={domain}
                  alt="Internship Domains"
                  className="w-full rounded-xl shadow-xl object-cover"
                />
              </div>
            </div>

            {/* Section 2 */}
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl font-bold mb-6 text-center">
                🎁 Exclusive Internship Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-lg">
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🏅</span>
                  <p className="text-center">AICTE-Verified Internship Certificate: Official recognition ensuring your internship meets national educational standards.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">✅</span>
                  <p className="text-center">Verified Certificate and LinkedIn Digital Badge: Validate your internship experience to potential employers.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">💻</span>
                  <p className="text-center">Access to GitHub Student Developer Pack: Unlock powerful development tools and resources free of cost.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🎓</span>
                  <p className="text-center">Comprehensive Live Training: Sessions covering essential tools and technologies such as Git, GitHub, Docker, and Open Source contributions.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🌟</span>
                  <p className="text-center">Leadership Development: Opportunities to join renowned programs like Microsoft Learn Student Ambassadors (MLSA), Google Developer Student Clubs (GDSC), and GeeksforGeeks Campus Mantri.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🚀</span>
                  <p className="text-center">Hands-On Project Hosting: Showcase your projects with GitHub repositories integrated into your professional portfolio.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🤝</span>
                  <p className="text-center">Personalized Mentorship: One-on-one mentoring sessions directly from TechieHelp founders to foster professional growth.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">📄</span>
                  <p className="text-center">Industry-Standard Resume Review: Critical evaluation and feedback by experienced industry professionals to optimize your job prospects.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🆔</span>
                  <p className="text-center">Trackable Internship & Student IDs: Unique identification for each participant to maintain transparent and verifiable internship records.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🎉</span>
                  <p className="text-center">Final Hackathon & Awards: Participate in a grand hackathon with prizes including ₹2000 cash, branded merchandise, and featured exposure on TechieHelp’s official YouTube and LinkedIn channels.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🛠️</span>
                  <p className="text-center">Specialized Workshops: No-code Website Builder Workshop featuring 3D animations and an API Masterclass with deployment guidance.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🌐</span>
                  <p className="text-center">Open Source Contribution Guidance: Detailed roadmap and support for participation in prominent open-source programs like Google Summer of Code (GSoC), Google Season of Docs (GSSOC), Summer of Student Code (SSOC), and Winter of Student Code (WSOC).</p>
                </motion.div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-6">
                  🏆 Recognition & Rewards for Top Performers
                </h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                  <li>🎁 Exclusive TechieHelp Merchandise and Swag</li>
                  <li>⭐ Featured Portfolio Placement on the TechieHelp Platform and Partner Networks</li>
                  <li>📝 Permanent Letter of Recommendation highlighting achievements and skills</li>
                  <li>🏅 Certificate of Excellence recognizing outstanding performance</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  src={swag}
                  alt="Recognition & Rewards"
                  className="w-full rounded-xl shadow-xl object-cover"
                />
              </div>
            </div>

            {/* Section 4 */}
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl font-bold mb-6 text-center">
                🎓 Why Partner with TechieHelp?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-lg">
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">✅</span>
                  <p className="text-center">Official AICTE and MSME Recognition: Ensuring credibility and acceptance of your internship credentials across academia and industry.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">👨‍💼</span>
                  <p className="text-center">Mentorship from Founders & Industry Experts: Access to leadership and domain experts committed to your professional success.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🔍</span>
                  <p className="text-center">Transparent & Trackable Internship Records: Publicly verifiable internship documentation for academic and career use.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">📜</span>
                  <p className="text-center">Formal Offer Letters & Certificates: Empowering your job applications with official documentation.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🎓</span>
                  <p className="text-center">Access to Premium Career Resources: Including free and paid tools, learning materials, and exclusive networking opportunities.</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 border border-white rounded-lg bg-white text-black cursor-pointer transition-shadow shadow-md hover:shadow-xl">
                  <span className="text-4xl mb-2">🌐</span>
                  <p className="text-center">Vibrant Community Engagement: Active participation on LinkedIn, Discord, GitHub, and YouTube to foster continuous learning and professional networking.</p>
                </motion.div>
              </div>
            </div>
            {/* Section 5: Claim Your Internship Badge */}
            <div className="max-w-6xl w-full bg-blue-900 rounded-2xl p-10 mt-20 mx-auto text-white shadow-lg">
  <h2 className="text-4xl font-bold mb-6 text-center">
    🎖️ Claim Your Internship Badge
  </h2>
  <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
    Proudly showcase your achievement as a TechieHelp Intern on LinkedIn! The official badge unlocking process will be shared with you **via email**.
  </p>
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    <ol className="list-decimal list-inside space-y-4 text-lg max-w-xl">
      <li>Check your email inbox (the one you registered with TechieHelp).</li>
      <li>Follow the personalized steps mentioned in the email.</li>
      <li>Upload a professional photo (preferably formal attire).</li>
      <li>Apply the internship badge as instructed in the guide.</li>
      <li>Download your badge-enhanced image.</li>
      <li>Update your LinkedIn profile picture with your new badge image.</li>
      <li>Join our LinkedIn community of verified interns!</li>
    </ol>
    <div className="max-w-xs">
      <img
        src={badges}
        alt="TechieHelp Internship Badge"
        className="rounded-xl shadow-xl object-cover w-full"
      />
      <p className="text-center mt-2 text-sm italic">
        Your official TechieHelp Internship Badge
      </p>
    </div>
  </div>
  <p className="text-center mt-8 text-xl font-semibold">
    🎉 You’re all set to shine! Watch for your badge instructions in your inbox and proudly represent TechieHelp.
  </p>
</div>

          </div>
          <InternshipFAQ />
        </div>
      </div>
    </div>
    
  );
};
export default Internship;
