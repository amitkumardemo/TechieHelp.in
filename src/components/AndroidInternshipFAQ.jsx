import React, { useState } from "react";
import styles from "../style";

const androidInternshipFaqData = [
  {
    question: "What is the Android Development Internship program at TechieHelp?",
    answer:
      "TechieHelp's Android Development Internship is a structured program focused on building real Android apps, APKs, and Play Store-ready skills using Java, Kotlin, Android Studio, and modern tools like Firebase and REST APIs.",
  },
  {
    question: "Do I need prior programming experience to join the Android Internship?",
    answer:
      "No prior experience is required. Our Android internship is beginner-friendly and designed for students and freshers motivated to learn Android development from scratch.",
  },
  {
    question: "What is the duration of the Android Development Internship?",
    answer:
      "The internship ranges from 1 to 4 months, including Android app development training, live projects, mentor guidance, and placement-focused activities.",
  },
  {
    question: "Will I receive certificates or recommendations for Android Development?",
    answer:
      "Yes. Upon completion, you receive a TechieHelp Android Development Internship Certificate and Training Certificate. Top performers get a Letter of Recommendation highlighting your Android projects.",
  },
  {
    question: "Is there any fee for the Android Development Internship?",
    answer:
      "Yes, a minimal registration fee covers structured Android training, mentor support, certification, and quality outcomes. Full details are provided transparently before enrollment.",
  },
];

const AndroidInternshipFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} bg-white`}>
      <div className={`${styles.boxWidth} w-full max-w-4xl`}>
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Everything you need to know before starting your Android Development Internship at TechieHelp
        </p>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {androidInternshipFaqData.map((item, index) => {
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

export default AndroidInternshipFAQ;
