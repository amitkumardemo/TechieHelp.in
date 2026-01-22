import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  portfolio,
  portfoli,
  product,
  restaurant,
  food,
  web,
  custom,
  organic,
  doctor,
  home,
  zym,
  sports,
  er,
  junk,
  face,
  plant,
  store,
  health,
  ecom,
  producer,
  gamedevelopment,
  library,
  expertise,
  customSolutions,
  agile,
  quality,
  communication,
  support,
  webdev,
  fullstack2,
  mobileapp,
} from "../assets";
import Contact from "./Contact";
import Footer from "./Footer";
import CTA from "./CTA";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: `🎨 Modern developer portfolio with React & Tailwind CSS\n📊 Auto-updated GitHub & LeetCode achievements\n⚡ Responsive design with smooth animations\n🔗 Live project links and contact integration`,
    image: portfolio,
    category: "Web Development",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: `🛒 Full-featured online store with payment integration\n📦 Product catalog with advanced filtering\n🛡️ Secure checkout process with multiple payment options\n📊 Admin dashboard for inventory management`,
    image: ecom,
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "Food Delivery App",
    description: `🚚 Real-time food delivery tracking system\n📍 Location-based restaurant discovery\n💳 Secure payment processing\n⭐ Review and rating system`,
    image: food,
    category: "Mobile App",
    technologies: ["React Native", "Firebase"],
    link: "#",
  },
];

const whyChooseTechieHelp = [
  {
    id: 1,
    title: "Expert Development Team",
    description:
      "Our skilled developers bring cutting-edge technologies and best practices to every project, ensuring high-quality, scalable solutions that meet modern standards.",
    image: expertise,
  },
  {
    id: 2,
    title: "Customized Solutions",
    description:
      "Each project is uniquely crafted to match your specific requirements, business goals, and target audience, delivering solutions that truly work for you.",
    image: customSolutions,
  },
  {
    id: 3,
    title: "Agile Development Process",
    description:
      "We follow agile methodologies with regular updates, iterative development, and continuous feedback to ensure your project stays on track and meets expectations.",
    image: agile,
  },
  {
    id: 4,
    title: "Quality Assurance",
    description:
      "Rigorous testing, code reviews, and quality checks are integrated throughout the development process to deliver bug-free, reliable applications.",
    image: quality,
  },
  {
    id: 5,
    title: "Clear Communication",
    description:
      "Transparent communication, regular progress reports, and dedicated project managers ensure you're always informed about your project's status.",
    image: communication,
  },
  {
    id: 6,
    title: "Ongoing Support",
    description:
      "Post-launch support, maintenance, updates, and technical assistance keep your project running smoothly and evolving with your business needs.",
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
      ease: "easeOut",
    },
  }),
};

const ProjectPortfolio = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const heroRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slidingImages = [webdev, fullstack2, mobileapp, restaurant, web, custom, doctor];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slidingImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [slidingImages.length]);

  const categories = ["All", ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setShowArrow(window.scrollY < heroHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* --------------------- Top Intro Section --------------------- */}
      <section className="bg-primary text-white flex flex-col items-center relative overflow-hidden h-screen">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 opacity-20 animate-gradient-x"></div>

        {/* Sliding Image Container */}
        <div className="relative w-full h-full">
          {slidingImages.map((image, index) => (
            <motion.img
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 0.9
              }}
              transition={{ duration: 0.8 }}
              src={image}
              alt={`Project Portfolio ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slidingImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-blue-500' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Text Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/40 backdrop-blur-sm">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Our <span className="text-blue-500">Project Portfolio</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg mb-6 max-w-2xl"
          >
            Explore our diverse collection of successful projects spanning web development,
            mobile applications, and full-stack solutions. Each project showcases our
            commitment to innovation, quality, and client satisfaction.
          </motion.p>

          <motion.a
            href="https://wa.me/917673825079?text=Hello%20Team%20TechieHelp%2C%20I%20am%20interested%20in%20your%20project%20portfolio.%20Kindly%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Discuss Your Project
          </motion.a>
        </div>
      </section>

      {/* --------------------- Project Categories Filter --------------------- */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 bg-black text-white"
      >
        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Filter by <span className="text-blue-500">Category</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --------------------- Projects Showcase --------------------- */}
      <section id="project-showcase" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16 bg-black">
        {filteredProjects.map(({ id, title, description, image, category, technologies, link }, i) => (
          <motion.div
            key={id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="
              group relative
              bg-white
              text-gray-800
              rounded-2xl
              shadow-lg hover:shadow-xl
              border border-gray-200 hover:border-blue-400
              p-6
              transition-all duration-300
              flex flex-col
              overflow-hidden
            "
          >
            {/* Image */}
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                {category}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              {title}
            </h3>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-3">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-line">
              {description}
            </p>

            {/* View Project Button */}
            <Link
              to={link}
              className="self-start inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View Project</span>
              <motion.span
                className="text-lg"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
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
          <h2 className="text-4xl font-bold text-blue-500 mb-4">
            Why Choose TechieHelp?
          </h2>
          <p className="text-gray-300 text-lg">
            Innovation. Precision. Partnership. Discover why startups and enterprises trust us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 lg:px-20">
          {whyChooseTechieHelp.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-[#101827] shadow-lg rounded-2xl p-6 hover:shadow-blue-500 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-center text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm text-center mt-3">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* --------------------- Call to Action --------------------- */}
      <CTA />
      <Contact />
    </>
  );
};

export default ProjectPortfolio;
