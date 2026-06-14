import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";
import { Target, PhoneCall, Workflow, BarChart2, Mic } from "lucide-react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/"
  },
  {
    id: "services",
    title: "AI Solutions",
    subLinks: [
      {
        id: "ai-lead-engine",
        title: "AI Lead Capture Engine",
        path: "/services/ai-lead-engine"
      },
      {
        id: "ai-calling-agents",
        title: "AI Phone Calling Agents",
        path: "/services/ai-calling-agents"
      },
      {
        id: "ai-workflow-automation",
        title: "AI Workflow Automation",
        path: "/services/ai-workflow-automation"
      },
      {
        id: "voice-ai-system",
        title: "Voice AI Systems",
        path: "/services/voice-ai-system"
      },
      {
        id: "leadai-dashboard",
        title: "LeadAI Dashboard",
        path: "/leadai-dashboard"
      },
      {
        id: "all-services",
        title: "All AI Services",
        path: "/services"
      }
    ]
  },
  {
    id: "project-portfolio",
    title: "Portfolio",
    path: "/project-portfolio"
  },
  {
    id: "careers",
    title: "Careers",
    subLinks: [
      {
        id: "training-internships",
        title: "Training + Internships",
        path: "/careers/training-internships"
      },
      {
        id: "jobs",
        title: "Jobs",
        path: "/careers/jobs"
      },
      {
        id: "hackathon",
        title: "Hackathon",
        path: "/hackathon"
      },
      {
        id: "verify-certificate",
        title: "Verify Certificate",
        path: "/verify-certificate"
      }
    ]
  },
  {
    id: "aboutus",
    title: "About Us",
    path: "/about-us"
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contacts"
  }
];



export const features = [
  {
    id: "feature-1",
    icon: <Target className="w-full h-full text-cyan-400 group-hover:text-cyan-300 transition-colors filter drop-shadow-[0_0_8px_rgba(51,187,207,0.4)]" />,
    title: "AI Lead Capture Engine",
    content: "Never lose a client again. AI instantly captures, replies to, and logs leads the second they submit a form.",
    outcome: "100% Response Rate"
  },
  {
    id: "feature-2",
    icon: <PhoneCall className="w-full h-full text-cyan-400 group-hover:text-cyan-300 transition-colors filter drop-shadow-[0_0_8px_rgba(51,187,207,0.4)]" />,
    title: "AI Phone Calling Agents",
    content: "Custom voice assistants dial your leads in 60s, qualify interest, and book meetings on your calendar.",
    outcome: "24/7 Active Sales Team"
  },
  {
    id: "feature-3",
    icon: <Workflow className="w-full h-full text-cyan-400 group-hover:text-cyan-300 transition-colors filter drop-shadow-[0_0_8px_rgba(51,187,207,0.4)]" />,
    title: "AI Stack Automations",
    content: "Connect your email, CRM, spreadsheets, and invoices. Let AI run all your repetitive admin tasks.",
    outcome: "Eliminate 90% Manual Work"
  },
  {
    id: "feature-4",
    icon: <BarChart2 className="w-full h-full text-cyan-400 group-hover:text-cyan-300 transition-colors filter drop-shadow-[0_0_8px_rgba(51,187,207,0.4)]" />,
    title: "AI Business Dashboard",
    content: "A single, beautiful analytics center showing your lead pipelines, call records, and revenue growth in real time.",
    outcome: "Complete Live Control"
  },
  {
    id: "feature-5",
    icon: <Mic className="w-full h-full text-cyan-400 group-hover:text-cyan-300 transition-colors filter drop-shadow-[0_0_8px_rgba(51,187,207,0.4)]" />,
    title: "Custom Voice AI Assistants",
    content: "Answer calls, solve queries, and support customers with natural, human-like AI voices that sound like your top team.",
    outcome: "Zero Support Wait Times"
  }
];


export const stats = [
  {
    id: "stats-1",
    title: "Missed Leads",
    value: "0",
    description: "Guaranteeing 100% lead capture efficiency.",
  },
  {
    id: "stats-2",
    title: "Response Speed",
    value: "3x",
    description: "AI-driven response systems are 3x faster than human teams.",
  },
  {
    id: "stats-3",
    title: "Cost Reduction",
    value: "50%",
    description: "Autonomous operations cut operational costs by half.",
  },
  {
    id: "stats-4",
    title: "Service Hours",
    value: "24/7",
    description: "AI never sleeps, ensuring round-the-clock availability.",
  },
];



export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      { name: "Content", link: "#" },
      { name: "How it Works", link: "#" },
      { name: "Create", link: "#" },
      { name: "Explore", link: "#" },
      { name: "Terms & Services", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Help Center", link: "#" },
      { name: "Partners", link: "#" },
      { name: "Suggestions", link: "#" },
      { name: "Blog", link: "#" },
      { name: "Newsletters", link: "#" },
    ],
  },
  {
    title: "Partner",
    links: [
      { name: "Our Partner", link: "#" },
      { name: "Become a Partner", link: "#" },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "TechieHelp transformed our digital presence with seamless solutions and unmatched support.",
    name: "Amit Kumar",
    title: "Founder & CEO, TechieHelp",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Their team’s dedication and expertise helped us scale our projects efficiently and effectively.",
    name: "Riya Sharma",
    title: "Product Manager",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "With TechieHelp, innovation is not just a buzzword — it’s the foundation of every solution.",
    name: "Vikram Singh",
    title: "CTO",
    img: people03,
  },
];

// The rest of the file remains unchanged
