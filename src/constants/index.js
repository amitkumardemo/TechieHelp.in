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
    title: "Projects",
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
    icon: star, // replace with your AI/rocket icon import
    title: "AI-First Approach",
    content:
      "We deeply understand your business challenges and craft AI-driven solutions tailored to your exact needs, ensuring measurable results.",
  },
  {
    id: "feature-2",
    icon: shield, // replace with your handshake icon import
    title: "Your Complete AI Partner",
    content:
      "From AI chatbots and predictive analytics to computer vision, automation, and custom software — we provide all-in-one AI solutions under one roof, saving you time, cost, and effort.",
  },
  {
    id: "feature-3",
    icon: send, // replace with your lightning icon import
    title: "Always-On Support & Scalability",
    content:
      "We offer 24/7 technical assistance and build scalable AI systems that grow alongside your business, ensuring long-term success.",
  },
];


export const stats = [
  {
    id: "stats-1",
    title: "Services Provided",
    value: "100+",
    description: "High-quality services tailored to your needs.",
  },
  {
    id: "stats-2",
    title: "Trusted by Companies",
    value: "100+",
    description: "Companies rely on us for their tech solutions.",
  },
  {
    id: "stats-3",
    title: "Unique Visitors",
    value: "18,000+",
    description: "A growing audience engaging with our content.",
  },
  {
    id: "stats-4",
    title: "Featured In",
    value: "Tech Times",
    description: "Recognized for our innovative solutions.",
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
