import React, { useState, useEffect } from "react";
import {
  seo,
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

const SEO = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-black-gradient min-h-screen pt-36 pb-12 px-6">
      <Section imgSrc={seo} imgLeft={true} title="TechieHelp SEO & Digital Marketing Internship Program">
        <p>
          Explore keyword research, social media marketing, and Google Analytics tools. Gain hands-on experience in digital marketing strategies and SEO best practices.
        </p>
<a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300">
            Apply Now
          </button>
        </a>
      </Section>

      <Section imgSrc={overview} imgLeft={false} title="🔥 Why Choose TechieHelp?">
        <p>
          Our SEO & Digital Marketing internship offers practical experience in optimizing websites and managing digital campaigns with real-world projects and expert mentorship.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>✔️ Recognized by MSME & Verified on AICTE Internship Portal</li>
          <li>✔️ Offer Letter + Completion Certificate + LinkedIn Badge</li>
          <li>✔️ Live Classes + Mentor Guidance + Hackathons + Projects</li>
          <li>✔️ Resume Review & Campaign Hosting Support</li>
          <li>✔️ Intern ID with Public Records on TechieHelp Website</li>
          <li>✔️ Best Interns Get Goodies + Certificate of Excellence + LinkedIn/YouTube Feature</li>
        </ul>
      </Section>

      <Section imgSrc={seo} imgLeft={true} title="🚀 Internship Overview">
        <p><strong>Internship Duration Options:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>1 Month (Beginner Level)</li>
          <li>2 Months (Intermediate Level)</li>
          <li>3 Months (Advanced Level)</li>
        </ul>
        <p className="mt-4">
          <strong>Mode:</strong> Online<br />
          <strong>Format:</strong> Live Sessions, Recordings, Doubt Solving, Hackathons<br />
          <strong>Tools Covered:</strong> Google Analytics, SEMrush, Ahrefs, Social Media Platforms, and More
        </p>
      </Section>

      <Section imgSrc={swag} imgLeft={false} title="🌟 What You Will Achieve">
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>📌 Real-World SEO & Marketing Projects for Resume</li>
          <li>🛠 Campaign Portfolio + Hosted Project Links</li>
          <li>🎖 Certificate, Badge, and Offer Letter</li>
          <li>🤝 Networking with Like-Minded Interns</li>
          <li>🏁 Eligibility for Excellence Awards + Public Recognition</li>
        </ul>
      </Section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🔥 1-Month SEO & Digital Marketing Internship — ₹999</h2>
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
                  🚀 Introduction to SEO Basics<br />
                  🛠️ Keyword Research Tools
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn SEO fundamentals<br />
                  ✅ Conduct keyword research<br />
                  ✅ Analyze competitor websites
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 2</td>
                <td className="px-4 py-3 border border-cyan-500">
                  💡 On-Page & Off-Page SEO<br />
                  🎯 Mentorship & AMA with Industry Experts
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Optimize website content<br />
                  ✅ Build backlinks<br />
                  ✅ Submit SEO audit report
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 3</td>
                <td className="px-4 py-3 border border-cyan-500">
                  ⚙️ Digital Marketing Campaigns<br />
                  🌐 Analytics & Reporting Workshop
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Create and manage campaigns<br />
                  ✅ Analyze campaign performance
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 4</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🏁 Final Project Review<br />
                  🎓 Certificate & Badge Distribution
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Submit final project<br />
                  ✅ Get personal review by mentors<br />
                  ✅ Receive your verified certificate and badge
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="bg-black-gradient">
        <InternshipFAQ />
      </div>
    </div>
  );
};

export default SEO;
