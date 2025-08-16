import {
  FaLightbulb,
  FaClipboardList,
  FaDraftingCompass,
  FaCode,
  FaCheckCircle,
  FaRocket,
  FaBullhorn,
  FaSyncAlt,
} from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

const OurProcess = () => {
  const steps = [
    {
      id: 1,
      title: 'Ideation & Consultation',
      icon: <FaLightbulb className="text-blue-600 w-8 h-8" />,
      description:
        'We begin with collaborative brainstorming sessions to understand your goals, audience, and competitive landscape. Every project starts with a powerful idea.',
    },
    {
      id: 2,
      title: 'Strategic Roadmapping',
      icon: <FaClipboardList className="text-blue-600 w-8 h-8" />,
      description:
        'We create a detailed product roadmap using agile sprints, backlog planning, and timeline estimation to align expectations and priorities.',
    },
    {
      id: 3,
      title: 'User-Centric Design',
      icon: <FaDraftingCompass className="text-blue-600 w-8 h-8" />,
      description:
        'Figma-based UI/UX design with clickable prototypes, wireframes, and branding that delivers a seamless digital experience.',
    },
    {
      id: 4,
      title: 'Agile Development',
      icon: <FaCode className="text-blue-600 w-8 h-8" />,
      description:
        'We build frontend, backend, APIs, AI agents, and automation features using modern stacks while maintaining clean, modular code.',
    },
    {
      id: 5,
      title: 'QA & AI-Powered Testing',
      icon: <FaCheckCircle className="text-blue-600 w-8 h-8" />,
      description:
        'Our QA team ensures performance, accessibility, and bug-free delivery using manual and AI-powered automated testing tools.',
    },
    {
      id: 6,
      title: 'Scalable Deployment',
      icon: <FaRocket className="text-blue-600 w-8 h-8" />,
      description:
        'CI/CD-based deployment on platforms like Vercel, AWS, or Azure with monitoring, rollback, and scale-readiness configurations.',
    },
    {
      id: 7,
      title: 'Growth & Marketing',
      icon: <FaBullhorn className="text-blue-600 w-8 h-8" />,
      description:
        'From SEO and content marketing to ad campaigns and AI chatbots—we help you grow and engage your audience strategically.',
    },
    {
      id: 8,
      title: 'Feedback & Evolution',
      icon: <FaSyncAlt className="text-blue-600 w-8 h-8" />,
      description:
        'We collect user data and behavior insights to improve the product continuously. Your digital solution evolves with your audience.',
    },
  ];

  const rows = [steps.slice(0, 4), steps.slice(4)];

  return (
    <section className="text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-16">
        <h2 className="text-blue-500 text-sm tracking-widest font-semibold uppercase mb-2">
          Our Process
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          An Innovative Process for <span className="text-blue-500">Future-Ready Solutions</span>
        </h1>
        <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
          TechieHelp's 8-step agile workflow blends strategy, technology, AI, and user empathy to deliver scalable and intelligent digital experiences across industries.
        </p>
      </div>

      {rows.map((row, i) => (
        <div
          key={i}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-14"
        >
          {row.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="bg-[#1c1c1e] p-6 rounded-xl shadow-md text-center max-w-xs w-72 relative">
                <div className="mx-auto w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {step.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-1">Step 0{step.id}</h3>
                <h4 className="text-blue-400 font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>

              {index < row.length - 1 && (
                <FaArrowRight className="text-blue-500 text-3xl mx-4 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default OurProcess;
