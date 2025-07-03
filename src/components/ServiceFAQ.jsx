import React, { useState } from "react";
import styles from "../style";
import FAQSchema from "./FAQSchema";

const servicesFAQData = [
  {
    question: "What services does TechieHelp specialize in?",
    answer:
      "TechieHelp offers end-to-end technology solutions including web and mobile app development, UI/UX design, SEO optimization, AI integration, cloud services, and digital marketing tailored to your business goals.",
  },
  {
    question: "How do I initiate a project with TechieHelp?",
    answer:
      "Simply reach out through our website’s contact form or directly via phone or email. Our team will schedule a consultation to understand your needs and propose the best strategy for your project.",
  },
  {
    question: "What is the typical turnaround time for projects?",
    answer:
      "Project durations vary based on complexity and scope. After understanding your requirements, we provide a clear timeline with milestones to ensure transparency and timely delivery.",
  },
  {
    question: "Does TechieHelp provide post-launch support?",
    answer:
      "Yes, we provide 24/7 maintenance and technical support to ensure your solutions stay secure, updated, and scalable as your business grows.",
  },
  {
    question: "Can TechieHelp assist in integrating AI technologies?",
    answer:
      "Absolutely. We help businesses leverage AI-powered solutions like intelligent automation, AI agents, and data-driven analytics to enhance efficiency and decision-making.",
  },
  {
    question: "How does TechieHelp ensure the security of my data?",
    answer:
      "We implement industry-leading security protocols, including encryption, secure cloud infrastructure, and regular audits to safeguard your sensitive information.",
  },
  {
    question: "What industries does TechieHelp serve?",
    answer:
      "We serve a wide range of industries including e-commerce, healthcare, finance, education, startups, and enterprises, customizing solutions to meet unique sector requirements.",
  },
  {
    question: "How does TechieHelp handle project confidentiality?",
    answer:
      "We sign Non-Disclosure Agreements (NDAs) to ensure that all your project details and data remain confidential and secure throughout our collaboration.",
  },
  {
    question: "Can TechieHelp help with digital transformation strategies?",
    answer:
      "Yes, we assist organizations in embracing digital transformation by modernizing legacy systems, integrating cloud technologies, and optimizing workflows for enhanced productivity.",
  },
  {
    question: "What technologies and tools does TechieHelp use?",
    answer:
      "We use a wide range of modern technologies such as React, Node.js, Python, AWS, Azure, TensorFlow, and more, selecting the best tools to meet your project goals efficiently.",
  },
];

const ServiceFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} bg-primary text-white`}>
      <div className={`${styles.boxWidth} w-full max-w-4xl`}>
        <h2 className={`${styles.heading2} text-center mb-8`}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {servicesFAQData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 cursor-pointer transition-shadow duration-300 hover:shadow-lg"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <h3 className="text-lg font-semibold flex justify-between items-center">
                {item.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </h3>
              {activeIndex === index && (
                <p className="mt-2 text-gray-300">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
