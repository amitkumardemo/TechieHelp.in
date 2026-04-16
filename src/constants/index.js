import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/"
  },
  {
    id: "features",
    title: "Services",
    path: "/services"
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
      },
      {
        id: "campus-ambassador",
        title: "Campus Ambassador",
        path: "/campus-ambassador"
      },
      {
        id: "community-partnership",
        title: "Community Partnership",
        path: "/community-partnership"
      }
    ]
  },
  {
    id: "team",
    title: "Team",
    subLinks: [
      {
        id: "interns",
        title: "Interns",
        path: "/interns"
      },
      {
        id: "employees",
        title: "Employees",
        path: "/employees"
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
  },
  {
    id: "project-portfolio",
    title: "Portfolio",
    path: "/project-portfolio"
  },
  {
    id: "lms",
    title: "LMS",
    path: "/lms"
  },

];



export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "AI Lead Engine",
    content: "Automatically captures, responds, and manages leads without delay.",
    outcome: "0 missed leads"
  },
  {
    id: "feature-2",
    icon: shield,
    title: "AI Calling Agents",
    content: "Calls and qualifies customers instantly, collecting vital data autonomously.",
    outcome: "Instant Qualification"
  },
  {
    id: "feature-3",
    icon: send,
    title: "AI Workflow Automation",
    content: "End-to-end automation of your repetitive business operations and tasks.",
    outcome: "24/7 Autonomy"
  },
  {
    id: "feature-4",
    icon: star,
    title: "AI Business Dashboard",
    content: "Real-time visibility into your automated leads and system performance.",
    outcome: "Full Visibility"
  },
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
