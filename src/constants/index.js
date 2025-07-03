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
    id: "interns",
    title: "Interns",
    path: "/interns"
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
  
];



export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Client-First Approach",
    content:
      "Unlike traditional service providers, we prioritize understanding your goals deeply and build tailor-made solutions aligned with your vision.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "All-in-One Tech Partner",
    content:
      "From web and app development to UI/UX, SEO, and digital marketing — we provide complete tech solutions under one roof, saving time and cost.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Real-Time Support & Scalability",
    content:
      "We stand apart with 24/7 technical support and scalable solutions that grow with your business, ensuring long-term reliability.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Services Provided",
    value: "100+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "100+",
  },
  {
    id: "stats-3",
    title: "Satisfied Clients",
    value: "100+",
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
