import React, { useState } from "react";
import styles from "../style";

const internshipFaqData = [
  {
    question: "What programs does TechieHelp offer to interns?",
    answer:
      "We offer structured internships and training in Web & App Development, UI/UX Design, Marketing, Python, Java, AI/ML, and more. These are designed to help you gain practical, hands-on experience and become job-ready.",
  },
  {
    question: "Are these internships paid or unpaid?",
    answer:
      "Most internships are unpaid or performance-based. However, top-performing interns may receive cash prizes, goodies, referral bonuses, LORs, and even pre-placement offers depending on their contribution.",
  },
  {
    question: "Do you organize any events or hackathons?",
    answer:
      "Yes! We regularly conduct internal and public hackathons. Winners receive prizes, TechieHelp goodies, and special recognition on our platforms. It’s a great way to showcase your skills and earn rewards.",
  },
  {
    question: "Who is eligible to apply for these internships?",
    answer:
      "We welcome applications from students, freshers, and early-career professionals. You don’t need prior experience — just passion, dedication, and a willingness to learn.",
  },
  {
    question: "What is the duration of the internship?",
    answer:
      "The usual duration is 1 to 2 months. However, based on performance, you may get a chance to extend or work on live projects.",
  },
  {
    question: "Will I get a certificate after completing the internship?",
    answer:
      "Yes! Every intern receives a Certificate of Internship and Certificate of Training upon completion. Top performers also receive a Letter of Recommendation (LOR).",
  },
  {
    question: "Will my work or profile be featured anywhere?",
    answer:
      "Yes. All selected interns will be featured on the official TechieHelp website. Additionally, top interns will have their journey and interview shared on our YouTube channel.",
  },
  {
    question: "What is the work mode and communication process?",
    answer:
      "Internships are 100% remote and flexible. We use WhatsApp, Google Meet, Notion, and Trello for assigning tasks and regular communication.",
  },
  {
    question: "What is the selection process like?",
    answer:
      "You need to fill out the application form with your basic info, resume, and domain preference. Shortlisted candidates will be contacted via email or WhatsApp, followed by a short task or interview.",
  },
{
  question: "Is there any fee to apply for the internship/training?",
  answer:
    "Yes, TechieHelp charges a minimal registration or training fee to cover resource materials, mentor guidance, and certification processing. The fee ensures quality and commitment throughout the program. The exact fee and payment instructions will be shared with shortlisted candidates via official mail or WhatsApp.",
},

];

const InternshipFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} bg-primary text-white`}>
      <div className={`${styles.boxWidth} w-full max-w-4xl`}>
        <h2 className={`${styles.heading2} text-center mb-8`}>
          Internship & Training – FAQs (TechieHelp)
        </h2>
        <div className="space-y-4">
          {internshipFaqData.map((item, index) => (
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

export default InternshipFAQ;
