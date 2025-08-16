import React, { useState } from "react";
import styles from "../style";
import FAQSchema from "./FAQSchema";

const faqData = [
  {
    question: "What services does TechieHelp specialize in?",
    answer:
      "TechieHelp is an AI-first software development company, offering AI-powered solutions including intelligent automation, AI chatbots, predictive analytics, computer vision systems, custom web and mobile apps, cloud AI integration, and digital transformation strategies tailored to your business goals.",
  },
  {
    question: "How do I initiate a project with TechieHelp?",
    answer:
      "Simply reach out through our website’s contact form or directly via phone or email. Our AI experts will schedule a discovery session to understand your business challenges and design a custom AI roadmap for you.",
  },
  {
    question: "What is the typical turnaround time for AI projects?",
    answer:
      "Project timelines vary based on complexity and data availability. After analyzing your requirements, we provide a detailed timeline with milestones, ensuring rapid development without compromising quality.",
  },
  {
    question: "Does TechieHelp provide post-launch AI model support?",
    answer:
      "Yes, we offer 24/7 AI model monitoring, optimization, and retraining services to ensure accuracy, scalability, and consistent performance over time.",
  },
  {
    question: "Can TechieHelp help me integrate AI into my existing systems?",
    answer:
      "Absolutely. We specialize in embedding AI capabilities—such as natural language processing, image recognition, and intelligent data analytics—seamlessly into your current software and workflows.",
  },
  {
    question: "How does TechieHelp ensure the security of AI-driven solutions?",
    answer:
      "We follow strict security protocols including encrypted data pipelines, secure cloud environments, regular audits, and compliance with GDPR and other global data privacy regulations.",
  },
  {
    question: "What industries does TechieHelp serve?",
    answer:
      "We deliver AI solutions for industries including e-commerce, healthcare, finance, manufacturing, logistics, education, and startups, customizing each solution to specific industry needs.",
  },
  {
    question: "How does TechieHelp handle project confidentiality?",
    answer:
      "We sign Non-Disclosure Agreements (NDAs) for all AI projects to ensure your intellectual property, data, and algorithms remain fully secure and confidential.",
  },
  {
    question: "Can TechieHelp assist with AI-driven digital transformation?",
    answer:
      "Yes, we help organizations modernize by integrating AI, automating manual processes, enabling real-time decision-making, and optimizing workflows for maximum efficiency.",
  },
  {
    question: "What AI technologies and tools does TechieHelp use?",
    answer:
      "We work with cutting-edge AI frameworks and tools including TensorFlow, PyTorch, OpenAI APIs, LangChain, AWS AI/ML, Azure Cognitive Services, and custom ML pipelines to deliver scalable, high-performance solutions.",
  },
];


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} text-white`}>
      <div className={`${styles.boxWidth} w-full max-w-4xl`}>
        <h2 className={`${styles.heading2} text-center mb-8`}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
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

export default FAQ;
