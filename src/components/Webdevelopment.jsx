import React, { useState, useEffect } from "react";
import {
  webdevelopment,
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

const Webdevelopment = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-black-gradient min-h-screen pt-36 pb-12 px-6">
      <Section imgSrc={intern} imgLeft={true} title="TechieHelp Web Development Internship Program">
        <p>
          Join TechieHelp's industry-aligned internship designed to turn beginners into confident developers. Get hands-on training in web development, real-world project experience, and one-on-one mentorship from experts.
        </p>
<a href="https://rzp.io/rzp/techiehelpInternship" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300">
            Apply Now
          </button>
        </a>
      </Section>

      <Section imgSrc={overview} imgLeft={false} title="🔥 Why Choose TechieHelp?">
        <p>
          At TechieHelp, we believe in learning by building. Our internship program is designed for students, freshers, and aspiring developers who want to gain practical experience in web development under the guidance of experienced mentors.
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

      <Section imgSrc={webdevelopment} imgLeft={true} title="🚀 Internship Overview">
        <p><strong>Internship Duration Options:</strong></p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>1 Month (Beginner Level)</li>
          <li>2 Months (Intermediate Level)</li>
          <li>3 Months (Advanced + Full-Stack Level)</li>
        </ul>
        <p className="mt-4">
          <strong>Mode:</strong> Online<br />
          <strong>Format:</strong> Live Sessions, Recordings, Doubt Solving, Hackathons<br />
          <strong>Tools Covered:</strong> HTML, CSS, JavaScript, ReactJS, GitHub, Firebase, APIs, and More
        </p>
      </Section>

      <Section imgSrc={swag} imgLeft={false} title="🌟 What You Will Achieve">
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>📌 Real-World Web Dev Projects for Resume</li>
          <li>🛠 GitHub Portfolio + Hosted Project Links</li>
          <li>🎖 Certificate, Badge, and Offer Letter</li>
          <li>🤝 Networking with Like-Minded Interns</li>
          <li>🏁 Eligibility for Excellence Awards + Public Recognition</li>
        </ul>
      </Section>

      {/* 1-Month Internship */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🔥 1-Month Web Development Internship — ₹999</h2>
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
                  🚀 Orientation & Platform Walkthrough<br />
                  🛠️ HTML + CSS Hands-on Session
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Set up your LMS & GitHub profile<br />
                  ✅ Select your real-world project<br />
                  ✅ Start building your first web page with HTML and CSS
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 2</td>
                <td className="px-4 py-3 border border-cyan-500">
                  💡 JavaScript for Beginners<br />
                  🎯 Mentorship & AMA with Industry Experts
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Understand DOM, events & interactivity<br />
                  ✅ Submit your project objective document with clear goals
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 3</td>
                <td className="px-4 py-3 border border-cyan-500">
                  ⚛️ ReactJS Basics Introduction<br />
                  🌐 Website Hosting Workshop
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn about React Components & JSX<br />
                  ✅ Host your first live website using GitHub Pages
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 4</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🏁 Final Project Review<br />
                  🎓 Certificate & Badge Distribution + GitHub Showcase Walkthrough
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Submit your full project<br />
                  ✅ Get personal review by mentors<br />
                  ✅ Receive your verified certificate, badge & LinkedIn-ready GitHub project link
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2-Month Internship */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 my-20 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">🚀 2-Month Web Development Internship — ₹1499</h2>
        <p className="text-center mb-6 font-semibold">
          Ideal for Intermediate Learners • Build a Strong Portfolio • More Depth, More Projects
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
                  🎯 Kick-off & Tool Setup<br />
                  📦 Git, GitHub & Web Fundamentals
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Set up development environment<br />
                  ✅ Explore Git & GitHub basics<br />
                  ✅ Learn to push your code like a pro
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 2</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🧠 JavaScript Deep Dive<br />
                  🔁 Loops, Conditions, Arrays, Functions
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Master JavaScript core concepts<br />
                  ✅ Complete real coding assignments
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 3</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🧱 Build Your First Web App with JS<br />
                  🔍 Weekly Check-in with Mentors
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Design your project logic and file structure<br />
                  ✅ Submit methodology & flowchart
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 4</td>
                <td className="px-4 py-3 border border-cyan-500">
                  ⚛️ ReactJS Integration<br />
                  🔧 GitHub Project Hosting & Live URL Generation
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Build reusable components<br />
                  ✅ Host it live on GitHub Pages
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 5</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🧱 No-Code Tools (Webflow, Bubble)<br />
                  🎨 Spline 3D Web Design (Intro)
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Create a stunning visual element using 3D/No-Code tools
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 6</td>
                <td className="px-4 py-3 border border-cyan-500">
                  🧑‍🏫 Docker Basics + Hosting Options<br />🔄 Mid-term Evaluation
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Learn about containers & deployment<br />✅ Submit project midpoint version + receive mentor feedback
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 7</td>
                <td className="px-4 py-3 border border-cyan-500">
                  📦 Open Source Contributions<br />🛠 Community PRs & Collaboration
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Contribute to GitHub open source repos<br />✅ Understand issue tracking and version control workflows
                </td>
              </tr>
              <tr className="border border-cyan-500">
                <td className="px-4 py-3 border border-cyan-500 align-top">Week 8</td>
                <td className="px-4 py-3 border border-cyan-500">
                  💬 Mock Interviews + Career Mentorship<br />📢 Final Project Presentations
                </td>
                <td className="px-4 py-3 border border-cyan-500">
                  ✅ Participate in mock interviews<br />✅ Present your project to peers & mentors<br />✅ Resume & portfolio polishing session
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

export default Webdevelopment;
