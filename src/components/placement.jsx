import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Download,
  Star,
  Award,
  Users,
  CheckCircle,
  Briefcase,
  GraduationCap,
  FileText,
  Brain,
  Code,
  Building,
  MessageSquare,
  Video,
  Trophy,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

// Placeholder images - replace with actual assets
const heroBg = "https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Hero+Background+Placeholder";
const brochureIcon = "https://via.placeholder.com/100x100/333333/FFFFFF?text=Brochure+Icon";
const testimonial1Img = "https://via.placeholder.com/150x150/666666/FFFFFF?text=Student+1";
const testimonial2Img = "https://via.placeholder.com/150x150/666666/FFFFFF?text=Student+2";

const PlacementBoosterLanding = () => {
  const [faqOpen, setFaqOpen] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "",
    promo: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  };

  const faqs = [
    {
      question: "Who is this program for?",
      answer: "This program is designed for final-year students, recent graduates, and early-career professionals looking to crack interviews at top tech companies. No prior experience required.",
    },
    {
      question: "What is the mode of delivery?",
      answer: "The program is delivered through live interactive sessions, recorded videos, and 1-on-1 mentoring. All content is accessible 24/7 on our learning platform.",
    },
    {
      question: "Do I get a certificate?",
      answer: "Yes, upon completion, you receive a verified certificate of completion from TechieHelp, which you can add to your LinkedIn and resume.",
    },
    {
      question: "What is the refund policy?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with the program quality. Contact support within 7 days of enrollment.",
    },
    {
      question: "Is there any placement assistance?",
      answer: "Yes, top performers get direct placement opportunities and paid internships. We also provide resume reviews and interview prep for all participants.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative py-20 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-400 mb-6">
            Crack Your Dream Job — A→Z Interview Program at ₹999
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            LinkedIn & GitHub enhancement · Resume makeover · DSA training · Mock interviews · Paid internship opportunity for top performers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Enroll Now — ₹999
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center gap-2">
              <Download size={20} />
              Download Brochure
            </button>
          </div>
          {/* Trust Bar */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Trophy className="text-yellow-400" />
              <span className="text-lg font-semibold">Highest package: ₹12 LPA</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-green-400" />
              <span className="text-lg font-semibold">Top campus hires: ₹8 LPA</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-purple-400" />
              <span className="text-lg font-semibold">Multiple placed: ₹6 LPA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Program Curriculum Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            A→Z Interview Program Curriculum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Linkedin className="text-blue-400" />, title: "LinkedIn & GitHub Profile Enhancement", desc: "Optimize your profiles for recruiters with professional branding and project showcases." },
              { icon: <FileText className="text-green-400" />, title: "Personal Portfolio / Elevator Pitch", desc: "Build a stunning portfolio website and craft compelling 30-second pitches." },
              { icon: <GraduationCap className="text-yellow-400" />, title: "Resume & Cover Letter Templates", desc: "ATS-friendly templates with industry-specific examples and tips." },
              { icon: <Brain className="text-purple-400" />, title: "Aptitude & Logical Reasoning Practice", desc: "300+ questions with solutions and time-saving strategies." },
              { icon: <Code className="text-red-400" />, title: "DSA Foundations with Problem-Solving Patterns", desc: "Master data structures, algorithms, and coding interview patterns." },
              { icon: <Building className="text-pink-400" />, title: "System Design Basics & Mini Project Guidance", desc: "Learn scalable architecture and build mini-projects for your portfolio." },
              { icon: <Briefcase className="text-indigo-400" />, title: "Domain/Company-Specific Interview Prep", desc: "Tailored prep for FAANG, product-based, and service-based companies." },
              { icon: <MessageSquare className="text-teal-400" />, title: "Behavioral & HR Coaching", desc: "Master STAR method, common questions, and cultural fit interviews." },
              { icon: <Video className="text-orange-400" />, title: "2 Recorded Mock Interviews with Actionable Feedback", desc: "Real interview simulations with detailed feedback and improvement plans." },
              { icon: <Award className="text-cyan-400" />, title: "Certificate of Completion", desc: "Industry-recognized certificate to boost your resume and LinkedIn." },
            ].map((module, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
                <div className="flex items-center gap-3 mb-4">
                  {module.icon}
                  <h3 className="text-lg font-semibold">{module.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{module.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Internship Opportunity Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg relative">
            <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Briefcase size={16} />
              Paid Internship Available
            </div>
            <h2 className="text-3xl font-bold mb-6">Exclusive Paid Internship Opportunity</h2>
            <p className="text-lg text-gray-200 mb-6">
              Top-performing students in our A→Z Interview Program are eligible for paid internships at leading tech companies. Gain real-world experience, build your network, and earn while you learn.
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-2 mb-6">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Stipend ranging from ₹15,000 - ₹30,000 per month</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Work on live projects with mentorship</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Letter of recommendation upon completion</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Potential for full-time conversion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">₹12 LPA</div>
              <p className="text-gray-300">Highest Package Secured</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">₹8 LPA</div>
              <p className="text-gray-300">Top Campus Hires</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">₹6 LPA</div>
              <p className="text-gray-300">Multiple Placements</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial1Img} alt="Student 1" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-semibold">Rahul Sharma</h3>
                  <p className="text-blue-400 text-sm">Placed at Google | ₹12 LPA</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The A→Z program transformed my interview skills. The mock interviews and personalized feedback were game-changers. Highly recommend!"
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial2Img} alt="Student 2" className="w-16 h-16 rounded-full" />
                <div>
                  <h3 className="font-semibold">Priya Patel</h3>
                  <p className="text-blue-400 text-sm">Placed at Microsoft | ₹10 LPA</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "From resume building to system design, this program covered everything. The paid internship opportunity was the cherry on top!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Add-ons Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Pricing & Add-ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-blue-500 relative">
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold">Base</div>
              <h3 className="text-2xl font-bold mb-4">₹999</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Group batch sessions</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Recordings access</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> 2 mock interviews</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> LinkedIn & GitHub polish</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Certificate of completion</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
                Enroll Now
              </button>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-4">Resume + LinkedIn 1:1 — ₹799</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Personalized resume review</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> LinkedIn optimization</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> 30-min 1:1 session</li>
              </ul>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition duration-300">
                Add to Cart
              </button>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-bold mb-4">3x 1:1 Mock Interviews — ₹1,499</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> 3 personalized mock interviews</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Detailed feedback reports</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-green-400" /> Improvement action plan</li>
              </ul>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-lg transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 shadow-lg inline-block">
              <h3 className="text-2xl font-bold mb-4">Placement Pack — ₹2,999</h3>
              <p className="mb-4">Complete placement assistance package including resume, LinkedIn, 5 mock interviews, and direct company referrals.</p>
              <button className="bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition duration-300">
                Get Placement Pack
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg">
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-700 transition duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  {faqOpen[index] ? <ChevronUp /> : <ChevronDown />}
                </button>
                {faqOpen[index] && (
                  <div className="px-6 pb-6 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-400">
            Enroll Now
          </h2>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">College</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Course/Year</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Promo Code (Optional)</label>
                <input
                  type="text"
                  name="promo"
                  value={formData.promo}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                Pay & Enroll — ₹999
              </button>
            </form>
          ) : (
            <div className="text-center bg-gray-800 rounded-lg p-8">
              <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Thank you! Your registration details have been submitted.</h3>
              <p className="text-gray-300">
                We will share payment instructions and batch details via email shortly.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                We respect your privacy — we won't share your data.
              </p>
            </div>
          )}
        </div>
      </section>


    </div>
  );
};

export default PlacementBoosterLanding;
