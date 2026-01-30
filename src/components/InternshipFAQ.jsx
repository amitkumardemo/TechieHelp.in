import React, { useState } from "react";
import styles from "../style";

const internshipFaqData = [
  {
    question: "What programs does TechieHelp offer to interns?",
    answer:
      "TechieHelp offers structured internship & training programs in Web Development, App Development, UI/UX Design, AI/ML, Python, Java, Digital Marketing, and more — all focused on real-world, industry-ready skills.",
  },
  {
    question: "Do I need prior experience to apply?",
    answer:
      "No prior experience is required. Our internships are beginner-friendly and designed for students, freshers, and early-career learners who are motivated to learn.",
  },
  {
    question: "What is the duration of the internship?",
    answer:
      "Internship duration ranges from 1 to 4 months depending on the program. It includes training, live projects, mentor guidance, and placement-focused activities.",
  },
  {
    question: "Will I receive certificates or recommendations?",
    answer:
      "Yes. Upon successful completion, interns receive a Training Certificate and Internship Completion Certificate. Top performers also receive a Letter of Recommendation (LOR).",
  },
  {
    question: "Is there any fee for the internship or training?",
    answer:
      "Yes, a minimal training or registration fee is charged to ensure structured learning, mentor support, certification, and quality outcomes. Full details are shared transparently before enrollment.",
  },
];

const InternshipFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} bg-white`}>
      <div className={`${styles.boxWidth} w-full max-w-4xl`}>
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Everything you need to know before starting your internship at TechieHelp
        </p>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {internshipFaqData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`rounded-xl border transition-all duration-300 cursor-pointer
                  ${isActive
                    ? "bg-blue-600 border-blue-600 shadow-lg"
                    : "bg-white border-gray-200 shadow-sm"
                  }`}
              >
                <div className="p-5">
                  <div className="flex justify-between items-center">
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300
                        ${isActive ? "text-white" : "text-gray-900"}`}
                    >
                      {item.question}
                    </h3>
                    <span
                      className={`text-2xl font-bold transition-colors duration-300
                        ${isActive ? "text-white" : "text-blue-600"}`}
                    >
                      {isActive ? "–" : "+"}
                    </span>
                  </div>

                  {isActive && (
                    <p className="mt-3 text-white text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternshipFAQ;
