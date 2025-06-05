import React, { useState, useEffect } from "react";
import {
  python,
  intern,
  overview,
  swag,
} from "../assets";

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

const Python = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-black-gradient min-h-screen pt-36 pb-12 px-6">
      <Section imgSrc={python} imgLeft={true} title="TechieHelp Python Developer Internship Program">
        <p>
          Develop scripts, automation, and backend logic using Python frameworks like Django or Flask. Gain hands-on experience with real projects and expert mentorship.
        </p>
        <a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
  <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300">
    Apply Now
  </button>
</a>
      </Section>

      <Section imgSrc={overview} imgLeft={false} title="🔥 Why Choose TechieHelp?">
        <p>
          Our Python internship offers practical experience in backend development and automation with real-world projects and dedicated mentor support.
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>✔️ Recognized by MSME & Verified on AICTE Internship Portal</li>
          <li>✔️ Offer Letter + Completion Certificate + LinkedIn Badge</li>
          <li>✔️ Live Classes + Mentor Guidance + Hackathons + Projects</li>
          <li>✔️ Resume Review & GitHub Hosting Support</li>
          <li>✔️ Intern ID with Public Records on TechieHelp Website</li>
          <li>✔️ Best Interns Get Goodies + Certificate of Excellence + LinkedIn/YouTube Feature</li>
        </ul>
      </Section>

      <Section imgSrc={python} imgLeft={true} title="🚀 Internship Overview">
        <p><strong>Internship Duration Options:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>1 Month (Beginner Level)</li>
          <li>2 Months (Intermediate Level)</li>
          <li>3 Months (Advanced Level)</li>
        </ul>
        <p className="mt-4">
          <strong>Mode:</strong> Online<br />
          <strong>Format:</strong> Live Sessions, Recordings, Doubt Solving, Hackathons<br />
          <strong>Tools Covered:</strong> Python, Django, Flask, Automation, APIs, and More
        </p>
      </Section>

      <Section imgSrc={swag} imgLeft={false} title="🌟 What You Will Achieve">
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>📌 Real-World Python Projects for Resume</li>
          <li>🛠 GitHub Portfolio + Hosted Project Links</li>
          <li>🎖 Certificate, Badge, and Offer Letter</li>
          <li>🤝 Networking with Like-Minded Interns</li>
          <li>🏁 Eligibility for Excellence Awards + Public Recognition</li>
        </ul>
      </Section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🔥 1-Month Python Developer Internship — ₹999</h2>
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
                  🚀 Introduction to Python<br />
                  🛠️ Python Basics & Syntax
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn Python syntax and basics<br />
                  ✅ Write simple scripts
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 2</td>
                <td className="px-4 py-3 border border-cyan-500">
                  💡 Django & Flask Basics<br />
                  🎯 Mentorship & AMA with Industry Experts
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Understand Django and Flask<br />
                  ✅ Build backend applications
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 3</td>
                <td className="px-4 py-3 border border-cyan-500">
                  ⚙️ Automation & API Integration<br />
                  🌐 Deployment Workshop
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Automate tasks<br />
                  ✅ Deploy Python applications
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 4</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🏁 Final Project Review<br />
                  🎓 Certificate & Badge Distribution
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Submit final Python project<br />
                  ✅ Get personal review by mentors<br />
                  ✅ Receive your verified certificate and badge
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <h2 className="text-3xl font-bold mb-8 text-center">💸 Internship Plans & Pricing</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <PriceBox
          title="🔹 1-Month Internship — ₹999"
          price="₹999"
          offer="₹2,000"
          features={[
            "🔥 Limited-Time Offer: 50%+ OFF on our Full Internship Experience!",
            "🧑‍💻 What You Will Learn",
            "Python Basics, Django, Flask",
            "Backend Development & Automation",
            "Real-World Projects & Deployment",
            "🎯 Internship Benefits",
            "🧑‍🏫 Live Classes & AMAs with Mentors & Co-Founders",
            "📝 Weekly Task Guidance + Final Report Format",
            "💬 Dedicated Support via Discord & Email",
            "📛 Internship ID Card + Digital Identity",
            "💼 Resume & LinkedIn Profile Optimization",
            "🛠️ Project Hosting on GitHub + LinkedIn Badge",
            "🔖 Government-Recognized Certificate (MSME & ISO Certified)",
            "🏅 Certificate of Completion with Project Showcase",
            "🏆 Top Performer Rewards",
            "⭐ Featured Portfolio on TechieHelp Platform & Partner Networks",
            "📝 Permanent Letter of Recommendation",
            "🎁 Exclusive TechieHelp Merchandise & Swag",
            "📌 Perfect for Beginners",
            "🎓 Learn by Doing | 🧠 Mentorship-Driven | 💼 Career Boosting",
          ]}
        />
        <PriceBox
          title="🔸 2-Month Internship — ₹1499"
          price="₹1499"
          offer="₹3,000"
          features={[
            "🔥 Special Launch Offer: Save 50%+ & Build a Stronger Python Developer Profile! 🚀",
            "🧑‍💻 Everything in the 1-Month Internship",
            "✅ Python Basics, Django, Flask",
            "✅ Backend Development & Automation",
            "✅ Real-World Projects & Deployment",
            "✅ Live Classes, Mentorship, Certificate, ID Card, Final Project, Resume Boost",
            "➕ Additional 2-Month Benefits",
            "🧑‍🏫 Live Classes & AMAs with Mentors & Co-Founders",
            "📝 Weekly Task Guidance + Final Report Format",
            "💬 Dedicated Support via Discord & Email",
            "📛 Internship ID Card + Digital Identity",
            "💼 Resume & LinkedIn Profile Optimization",
            "🛠️ Project Hosting on GitHub + LinkedIn Badge",
            "🔖 Government-Recognized Certificate (MSME & ISO Certified)",
            "🏅 Certificate of Completion with Project Showcase",
            "🏆 Top Performer Rewards",
            "⭐ Featured Portfolio on TechieHelp Platform & Partner Networks",
            "📝 Permanent Letter of Recommendation",
            "🎁 Exclusive TechieHelp Merchandise & Swag",
            "🏅 Certificate of Excellence for Outstanding Projects",
            "🧠 Advanced Python Concepts",
            "⚛️ Django & Flask Project Building",
            "🌐 Portfolio Deep-Dive with Personalized Reviews",
            "🧩 Mini Hackathon Challenge with Mentor Feedback + Recognition",
          ]}
        />
        <PriceBox
          title="🔶 3-Month Internship — ₹1999"
          price="₹1999"
          offer="₹4,000"
          features={[
            "🔥 Limited-Time Offer: 50%+ OFF on our Full Internship Experience!",
            "Includes All 2-Month Features",
            "Advanced Backend Development",
            "Automation & API Mastery",
            "Final Hackathon + T-Shirt + YouTube Feature",
            "Certificate of Excellence for Top Python Developers",
            "₹2,000 Cash Prize + Additional Goodies from TechieHelp",
            "🥇 Hackathon Winner Reward",
            "🎁 Exclusive TechieHelp Merchandise & Swag",
            "📝 Permanent Letter of Recommendation",
            "⭐ Featured Portfolio on TechieHelp Platform & Partner Networks",
            "🏆 Top Performer Rewards",
            "🏅 Certificate of Completion with Project Showcase",
            "🔖 Government-Recognized Certificate (MSME & ISO Certified)",
            "💼 Resume & LinkedIn Profile Optimization",
            "📛 Internship ID Card + Digital Identity",
            "💬 Dedicated Support via Discord & Email",
            "📝 Weekly Task Guidance + Final Report Format",
            "🧑‍🏫 Live Classes & AMAs with Mentors & Co-Founders",
            "🎯 Internship Benefits",
            "▶️ YouTube Feature for Top Projects",
            "👕 TechieHelp Internship T-Shirt",
            "🎯 Final Hackathon Challenge with Mentor Jury",
            "🌍 Open Source Contribution Guidance",
            "🔥 Python, Django, Flask Basics",
            "🖥️ Backend Collaboration & Tools",
            "🔥 Exclusive to the 3-Month Plan",
            "✅ Mini Hackathon + Feedback from Mentors",
            "✅ Live Classes, Mentorship, Project Hosting",
            "✅ Python Projects, Resume Boost, LinkedIn Badge",
            "✅ Everything from the 1 & 2-Month Programs",
          ]}
        />
      </div>
    </div>
  );
};

export default Python;
