import React, { useState } from "react";
import styles from "../style";
import FAQSchema from "./FAQSchema";

const hiringfaqData = [
  {
    question: "What roles are currently open at TechieHelp?",
    answer:
      "We are currently hiring part-time and freelance team members in areas like web development, app development, marketing, graphic design, and AI/ML projects.",
  },
  {
    question: "Is this a paid opportunity or volunteering?",
    answer:
      "TechieHelp offers both paid and performance-based opportunities depending on the project. Selected candidates may receive incentives, certificates, LORs, and career growth benefits.",
  },
  {
    question: "How can I apply for a role at TechieHelp?",
    answer:
      "You can apply through our official website's 'Join Us' or 'Careers' section. Fill out the form with your resume, portfolio (if any), and preferred domain. We’ll reach out to shortlisted candidates via email.",
  },
  {
    question: "Are there any eligibility criteria to join?",
    answer:
      "We welcome applications from students, freshers, and early-stage professionals. Passion, dedication, and willingness to learn are more important than formal qualifications.",
  },
  {
    question: "What is the duration of the roles offered?",
    answer:
      "Durations vary by role and project type. Some opportunities are short-term (1-3 months), while others can extend based on performance and need.",
  },
  {
    question: "Will I receive a certificate or recommendation letter?",
    answer:
      "Yes! Everyone who successfully contributes receives a Certificate of Completion, and top performers are awarded Letters of Recommendation (LORs).",
  },
  {
    question: "Is there any registration fee to apply?",
    answer:
      "No. TechieHelp does not charge any fee for applying or participating. If anyone asks for money on behalf of us, please report it immediately.",
  },
  {
    question: "Can I work remotely?",
    answer:
      "Yes, most roles at TechieHelp are remote-friendly with flexible working hours designed to support students and multitasking professionals.",
  },
  {
    question: "What is the selection process like?",
    answer:
      "The process typically involves submitting a form with your details, followed by a task or short interview to evaluate your skills.",
  },
  {
    question: "How will I get tasks and communicate with the team?",
    answer:
      "We use WhatsApp, Slack, and Google Meet for communication. Tasks are assigned via tools like Trello or Notion for smooth collaboration.",
  },
];

const HiringFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} bg-primary text-white`}>
      <div className={`${styles.boxWidth} w-full max-w-4xl`}>
        <h2 className={`${styles.heading2} text-center mb-8`}>
          Hiring FAQs – Join TechieHelp
        </h2>
        <div className="space-y-4">
          {hiringfaqData.map((item, index) => (
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

export default HiringFAQ;
