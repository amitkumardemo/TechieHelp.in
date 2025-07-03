import React, { useState, useEffect } from "react";
import {
  uiux,
  intern,
  overview,
  swag,
} from "../assets";
import InternshipFAQ from "./InternshipFAQ";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-10">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-cyan-500"></div>
  </div>
);

const Section = ({ title, children, imgSrc, imgLeft = true }) => {
  return (
    <section className="flex flex-col md:flex-row items-center my-12 md:my-20 max-w-7xl mx-auto px-6 md:px-12">
      {imgSrc && imgLeft && (
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10">
          <img
            src={imgSrc}
            alt={title}
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
            loading="lazy"
          />
        </div>
      )}
      <div className="md:w-1/2 text-white">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="space-y-4 text-lg leading-relaxed">{children}</div>
      </div>
      {imgSrc && !imgLeft && (
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10">
          <img
            src={imgSrc}
            alt={title}
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
};

const PriceBox = ({ title, price, features, offer }) => (
  <div className="bg-cyan-900 bg-opacity-70 border border-cyan-500 rounded-lg p-6 shadow-lg max-w-sm mx-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="flex items-center mb-4">
      <p className="text-3xl font-bold text-cyan-400">{price}</p>
      {offer && (
        <p className="ml-4 text-sm text-red-500 line-through font-semibold">{offer}</p>
      )}
    </div>
    <ul className="list-disc list-inside space-y-2 text-white text-sm">
      {features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  </div>
);

const UIUX = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-black-gradient min-h-screen pt-36 pb-12 px-6">
      <Section imgSrc={uiux} imgLeft={true} title="TechieHelp UI/UX Design Internship Program">
        <p>
          Learn Figma, Adobe XD, and user research. Create real UI designs for clients and build a strong portfolio with hands-on projects and expert mentorship.
        </p>
<a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
<a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
  <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300">
    Apply Now
  </button>
</a>
        </a>
      </Section>

      <Section imgSrc={overview} imgLeft={false} title="🔥 Why Choose TechieHelp?">
        <p>
          Our UI/UX internship offers practical experience in designing user interfaces and experiences with real-world projects and dedicated mentor support.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>✔️ Recognized by MSME & Verified on AICTE Internship Portal</li>
          <li>✔️ Offer Letter + Completion Certificate + LinkedIn Badge</li>
          <li>✔️ Live Classes + Mentor Guidance + Hackathons + Projects</li>
          <li>✔️ Resume Review & Portfolio Hosting Support</li>
          <li>✔️ Intern ID with Public Records on TechieHelp Website</li>
          <li>✔️ Best Interns Get Goodies + Certificate of Excellence + LinkedIn/YouTube Feature</li>
        </ul>
      </Section>

      <Section imgSrc={uiux} imgLeft={true} title="🚀 Internship Overview">
        <p><strong>Internship Duration Options:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>1 Month (Beginner Level)</li>
          <li>2 Months (Intermediate Level)</li>
          <li>3 Months (Advanced Level)</li>
        </ul>
        <p className="mt-4">
          <strong>Mode:</strong> Online<br />
          <strong>Format:</strong> Live Sessions, Recordings, Doubt Solving, Hackathons<br />
          <strong>Tools Covered:</strong> Figma, Adobe XD, User Research, Prototyping, and More
        </p>
      </Section>

      <Section imgSrc={swag} imgLeft={false} title="🌟 What You Will Achieve">
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>📌 Real-World UI/UX Projects for Portfolio</li>
          <li>🛠 Portfolio Hosting & Showcase</li>
          <li>🎖 Certificate, Badge, and Offer Letter</li>
          <li>🤝 Networking with Like-Minded Interns</li>
          <li>🏁 Eligibility for Excellence Awards + Public Recognition</li>
        </ul>
      </Section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🔥 1-Month UI/UX Design Internship — ₹999</h2>
        <p className="text-center mb-6 font-semibold">
          Best for Beginners • Fast-Track Learning • Certificate + Badge
        </p>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full text-left text-white border border-cyan-500 rounded-lg">
            <thead>
              <tr className="bg-cyan-700">
                <th className="px-4 py-3 font-semibold border border-cyan-500">Week</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">Activity</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">What You’ll Do</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 1</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🚀 Introduction to UI/UX Design<br />
                  🛠️ Figma Basics
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn design principles and tools<br />
                  ✅ Create wireframes and prototypes
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 2</td>
                <td className="px-4 py-3 border border-cyan-500">
                  💡 User Research & Testing<br />
                  🎯 Mentorship & AMA with Industry Experts
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Conduct user interviews<br />
                  ✅ Analyze feedback and iterate designs
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 3</td>
                <td className="px-4 py-3 border border-cyan-500">
                  ⚙️ Advanced Prototyping<br />
                  🌐 Portfolio Building Workshop
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Create interactive prototypes<br />
                  ✅ Build and host your design portfolio
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 4</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🏁 Final Project Review<br />
                  🎓 Certificate & Badge Distribution
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Submit your final design project<br />
                  ✅ Get personal review by mentors<br />
                  ✅ Receive your verified certificate and badge
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🔥 2-Month UI/UX Design Internship — ₹1499</h2>
        <p className="text-center mb-6 font-semibold">
          Best for Intermediate Learners • In-Depth Projects • Certificate + Badge
        </p>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full text-left text-white border border-cyan-500 rounded-lg">
            <thead>
              <tr className="bg-cyan-700">
                <th className="px-4 py-3 font-semibold border border-cyan-500">Week</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">Activity</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">What You’ll Do</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 1</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🚀 Advanced Figma Techniques<br />
                  🛠️ Design Systems
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Create reusable components<br />
                  ✅ Build a design system for consistency
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 2</td>
                <td className="px-4 py-3 border border-cyan-500">
                  💡 User Experience Design<br />
                  🎯 Mentorship & AMA with Industry Experts
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Design user flows and journeys<br />
                  ✅ Conduct usability testing
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 3</td>
                <td className="px-4 py-3 border border-cyan-500">
                  ⚙️ High-Fidelity Prototyping<br />
                  📱 Mobile & Responsive Design
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Build interactive prototypes with advanced tools<br />
                  ✅ Optimize designs for mobile and different devices
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 4</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🏁 Final Project & Portfolio Completion<br />
                  🎓 Certificate & Badge Award Ceremony
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Submit comprehensive project<br />
                  ✅ Get mentor feedback<br />
                  ✅ Receive official certificate and digital badge
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 5 & 6</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🎯 Advanced Workshops & Live Q&A Sessions
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Participate in deeper learning workshops<br />
                  ✅ Solve real-world design challenges with mentors
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🔥 3-Month UI/UX Design Internship — ₹1999</h2>
        <p className="text-center mb-6 font-semibold">
          Best for Advanced Learners • Capstone Projects • Certificate + Badge
        </p>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full text-left text-white border border-cyan-500 rounded-lg">
            <thead>
              <tr className="bg-cyan-700">
                <th className="px-4 py-3 font-semibold border border-cyan-500">Week</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">Activity</th>
                <th className="px-4 py-3 font-semibold border border-cyan-500">What You’ll Do</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 1 & 2</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🚀 Mastering Design Tools & Workflows<br />
                  🛠 Collaborative Projects
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Deep dive into Figma and Adobe XD<br />
                  ✅ Work on team projects with peer reviews
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 3 & 4</td>
                <td className="px-4 py-3 border border-cyan-500">
                  💡 User Testing & Iteration<br />
                  🎯 Mentorship & Career Guidance
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Conduct comprehensive user tests<br />
                  ✅ Refine designs based on feedback<br />
                  ✅ Receive career coaching
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 5 & 6</td>
                <td className="px-4 py-3 border border-cyan-500">
                  ⚙️ Capstone Project Development<br />
                  🌟 Portfolio Finalization
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Build a complete UI/UX project<br />
                  ✅ Finalize your design portfolio for job applications
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 7 - 12</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🎓 Final Presentation & Certification<br />
                  🏆 Awards & YouTube Feature
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Present your capstone project<br />
                  ✅ Get featured on TechieHelp’s YouTube and website<br />
                  ✅ Receive certificate of excellence and goodies
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <InternshipFAQ />

    </div>
  );
};

export default UIUX;
