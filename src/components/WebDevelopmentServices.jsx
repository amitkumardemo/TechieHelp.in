import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { webDevelopment, webdevelopmentservices, technology, basic, classic, premium } from "../assets";
import Platform from "./Platform";
import OurProcess from "./OurProcess";
import ServiceFAQ from "./ServiceFAQ";
// Removed import of PricingPlans

const features = [
  {
    id: 1,
    title: "Experienced & Skilled Team",
    description:
      "Our developers, designers, and strategists are well-versed in modern technologies and frameworks, delivering high-quality solutions with industry best practices.",
  },
  {
    id: 2,
    title: "Client-Centric Approach",
    description:
      "We listen first. Every project is customized to your specific goals, vision, and target audience — ensuring a personalized and impactful web presence.",
  },
  {
    id: 3,
    title: "Affordable & Transparent Pricing",
    description:
      "We offer competitive pricing for startups, students, and businesses — with no hidden charges and clear deliverables.",
  },
  {
    id: 4,
    title: "Fast Turnaround Time",
    description:
      "We value your time. Our streamlined development process ensures timely delivery without compromising on quality.",
  },
  {
    id: 5,
    title: "Mobile & SEO-Friendly Designs",
    description:
      "We build websites that look great and perform well across all devices — with built-in SEO practices to help your site rank better on search engines.",
  },
  {
    id: 6,
    title: "End-to-End Service",
    description:
      "From design to deployment, domain to hosting, and code to content, we provide full-stack web development solutions — so you don't have to go anywhere else.",
  },
  {
    id: 7,
    title: "Support & Maintenance",
    description:
      "We don’t leave after deployment. Enjoy free bug fixes, content updates, and premium post-launch support for a smooth experience.",
  },
  {
    id: 8,
    title: "Internship & Student-Friendly",
    description:
      "Special services for students, freshers, and interns — including academic projects, affordable portfolio sites, and resume builder tools.",
  },
  {
    id: 9,
    title: "Modern Tools & Tech Stack",
    description:
      "We use the latest and secure technologies like React, Node.js, Firebase, MongoDB, Tailwind CSS, and more to deliver blazing-fast performance and scalability.",
  },
  {
    id: 10,
    title: "100% Satisfaction Guarantee",
    description:
      "We work with the goal of building long-term relationships. We don’t stop until you’re completely satisfied.",
  },
];

const webServices = [
  {
    title: "Static Website Development",
    desc: `A simple, fast, and secure website for individuals and small businesses that don’t require frequent updates.

Includes:

Up to 5 responsive pages (Home, About, Services, Contact, etc.)

Contact Form

Social media links

Mobile & SEO-friendly design`,
    price: "₹ 10,000",
  },
  {
    title: "Dynamic Website Development",
    desc: `Websites with dynamic content that can be updated easily and support backend operations.

Includes:

Admin dashboard (optional)

Database connectivity (e.g., MySQL/Firebase)

Blog or news section

Login/Signup system`,
    price: "₹ 20,000",
  },
  {
    title: "E-Commerce Website Development",
    desc: `A full-featured online store to sell your products with real-time inventory and secure payment processing.

Includes:

Product pages

Shopping cart & checkout

Payment gateway integration (Razorpay, PayPal, etc.)

Order and user management system`,
    price: "₹ 30,000",
  },
  {
    title: "Custom Web Application Development",
    desc: `Fully customized web apps designed from scratch to suit your business or workflow requirements.

Examples:

CRM, Inventory System, CMS

Booking/Appointment Systems

Dashboards & Analytics Panels`,
    price: "₹ 40,000",
  },
  {
    title: "Landing Page Design",
    desc: `Targeted one-page websites for campaigns, promotions, or product launches.

Includes:

Conversion-focused design

Lead capture forms

Call-to-Action (CTA) buttons

Email integration (Mailchimp, etc.)`,
    price: "₹ 15,000",
  },
  {
    title: "Portfolio Website Development",
    desc: `Personal branding websites for professionals, freelancers, and students.

Includes:

Project showcase

Resume download

Contact section

Social links integration`,
    price: "₹ 15,000",
  },
  {
    title: "Blog or News Website",
    desc: `Dynamic blogging platforms for writers, influencers, and journalists.

Includes:

Category & Tagging system

Commenting functionality

Admin panel to manage posts

SEO and sharing features`,
    price: "₹ 20,000",
  },
  {
    title: "Educational/Coaching Website",
    desc: `Ideal for teachers, coaching centers, and institutions.

Includes:

Course listings

Online admission/enquiry forms

Payment integration for classes

Video embedding (YouTube/Vimeo)`,
    price: "₹ 25,000",
  },
  {
    title: "Internship/Student Project Website",
    desc: `Project websites for students applying for internships or showcasing academic projects.

Includes:

Full frontend/backend (CRUD)

Project description and features

GitHub or Resume links

Mobile-responsive and clean UI`,
    price: "₹ 15,000",
  },
  {
    title: "Business or Startup Website",
    desc: `Professional websites that introduce your business, products, and services.

Includes:

Service descriptions

Testimonials

Team section

Call-to-action and contact options`,
    price: "₹ 20,000",
  },
  {
    title: "Admin Dashboard Panel",
    desc: `Interactive dashboards for data monitoring and management.

Includes:

User roles and permissions

Graphs & analytics

Data tables with filters

Authentication system`,
    price: "₹ 30,000",
  },
  {
    title: "Event/Conference Website",
    desc: `Attractive websites to manage registrations and provide event details.

Includes:

Agenda or schedule page

Speaker profiles

Registration form

Countdown timers`,
    price: "₹ 25,000",
  },
  {
    title: "NGO/Charity Website",
    desc: `Raise awareness and collect donations with a website that supports your cause.

Includes:

Donation/payment gateway

Volunteer signup form

Gallery and blog

Contact and feedback form`,
    price: "₹ 20,000",
  },
  {
    title: "Resume Builder Website",
    desc: `An online tool that helps users create and download resumes.

Includes:

Pre-built resume templates

User form input

Resume download (PDF)

Admin analytics panel (optional)`,
    price: "₹ 15,000",
  },
  {
    title: "Restaurant or Cafe Website",
    desc: `Websites for food businesses with menu, reservation, and gallery sections.

Includes:

Menu listing with pricing

Image gallery

Online table booking

Customer feedback form`,
    price: "₹ 20,000",
  },
  {
    title: "Real Estate Website",
    desc: `Showcase property listings with advanced search and inquiry options.

Includes:

Property listing system

Filters by location/price/type

Contact agent feature

Map integration (Google Maps)`,
    price: "₹ 25,000",
  },
  {
    title: "Job/Internship Portal",
    desc: `Create a platform where companies post jobs and candidates apply directly.

Includes:

Job posting & filtering system

Candidate profile management

Resume uploads

Admin approval system`,
    price: "₹ 30,000",
  },
  {
    title: "Travel & Tourism Website",
    desc: `Promote destinations, packages, and activities with a visually rich platform.

Includes:

Destination gallery

Package detail pages

Booking inquiry form

Customer reviews`,
    price: "₹ 20,000",
  },
  {
    title: "Appointment Booking Website",
    desc: `Perfect for doctors, salons, and consultants to schedule client meetings.

Includes:

Time slot selection

Booking confirmation

Admin panel for schedules

SMS/Email integration (optional)`,
    price: "₹ 20,000",
  },
  {
    title: "Website Redesign & Revamp",
    desc: `Already have a site but it looks outdated? We’ll redesign it to improve performance, design, and user experience.

Includes:

Full UI/UX overhaul

SEO optimization

Speed improvement

Mobile responsiveness`,
    price: "₹ 15,000",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const WebDevelopmentServices = () => {
  return (
    <div className="min-h-screen pt-20 bg-primary text-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              We Build Websites That Will Build Your Business!
            </h1>
            <p className="text-lg mb-6">
              Great things in business are never done by one person. They’re done by a team of people.
            </p>
            <a
              href="https://wa.me/7673825079?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300">
                Get Consultation
              </button>
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={webDevelopment}
              alt="Web Development Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Choose <span className="text-red-600">Us?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ id, title, description }) => (
            <motion.div
              key={id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
            >
              <div className="bg-red-100 text-red-600 rounded-full p-4 mb-4">
                <FaCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Web App Development Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Services We <span className="text-red-600">offer?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Our Web Development Services
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we offer a full suite of web development services to meet the needs of businesses, students, entrepreneurs, and startups. Whether you're looking for a basic site or a complex web application, we provide modern, secure, and responsive solutions.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={webdevelopmentservices}
              alt="Web Development Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {webServices.map(({ title, desc, price }, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
            >
              <div className="bg-red-100 text-red-600 rounded-full p-4 mb-4">
                <FaCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 whitespace-pre-line mb-2">{desc}</p>
              <div className="font-bold text-green-600">{price}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Technology We <span className="text-red-600">use?</span>
            </h2>
            <h1 className="text-4xl font-bold mb-4">
              Driving Performance, Innovation, and Growth
            </h1>
            <p className="text-lg mb-6">
              At TechieHelp, we use cutting-edge technologies and modern frameworks to deliver fast, responsive, and scalable web solutions tailored to your needs.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20details."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-6 px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300">
                Get Consultation
              </button>
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={technology}
              alt="Web Development Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <Platform />
      <OurProcess />

      {/* Pricing Plans Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Plans",
                price: "₹5999",
                features: [
                  "Domain name registration",
                  "10 Pages (dynamic Website)",
                  "10 Creations",
                  "Business Email id (Webmail)",
                  "Limitless Images & Videos",
                  "Live Chat Integration",
                  "Payment Gateway Integration",
                  "Social Media Integration",
                  "Web Hosting",
                  "100% Responsive Website",
                  "Design and Development",
                  "Content Creation",
                  "Security and Maintenance",
                  "Annual Renewal Rs. 3000",
                ],
                imgSrc: basic,
                alt: "Basic Plan",
              },
              {
                title: "Classic Plans",
                price: "₹8999",
                features: [
                  "Domain name registration",
                  "15 Pages (dynamic Website)",
                  "15 Creations",
                  "Business Email id (Webmail)",
                  "Limitless Images & Videos",
                  "Live Chat Integration",
                  "Payment Gateway Integration",
                  "Social Media Integration",
                  "WhatsApp Integration",
                  "Web Hosting",
                  "100% Responsive Website",
                  "Design and Development",
                  "Content Creation",
                  "eCommerce Website",
                  "Annual Renewal Rs. 4000",
                  "Security and maintenance",
                ],
                imgSrc: classic,
                alt: "Classic Plan",
              },
              {
                title: "Premium Plans",
                price: "₹11999",
                features: [
                  "Domain name registration",
                  "20 Pages (dynamic Website)",
                  "20 Creations",
                  "Unlimited Email id (Webmail)",
                  "Limitless Images & Videos",
                  "Live Chat Integration",
                  "Payment Gateway Integration",
                  "Social Media Integration",
                  "WhatsApp Integration",
                  "Web Hosting",
                  "100% Responsive Website",
                  "Design and Development",
                  "Content Creation",
                  "eCommerce Website",
                  "cPanel* Access",
                  "Annual Renewal Rs. 5000",
                  "Security and maintenance",
                ],
                imgSrc: premium,
                alt: "Premium Plan",
              },
            ].map(({ title, price, features, imgSrc, alt }, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                custom={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center text-gray-800"
              >
                <img src={imgSrc} alt={alt} className="w-24 h-24 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <div className="font-bold text-green-600 mb-4">{price}</div>
                <ul className="text-left list-disc list-inside space-y-1 mb-4">
                  {features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={
                    index === 0
                      ? "https://wa.me/917673825079?text=Hello%2C%20I%20am%20interested%20in%20TechieHelp%27s%20Basic%20Plan.%20Kindly%20share%20the%20details%20and%20how%20I%20can%20get%20started."
                      : index === 1
                      ? "https://wa.me/917673825079?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20TechieHelp%27s%20Classic%20Plan.%20Please%20provide%20the%20complete%20information%20and%20benefits."
                      : "https://wa.me/917673825079?text=Hi%2C%20I%27m%20interested%20in%20TechieHelp%27s%20Premium%20Plan.%20Could%20you%20please%20guide%20me%20through%20the%20features%2C%20pricing%2C%20and%20enrollment%20process%3F"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition duration-300 inline-block text-center"
                >
                  Choose Plan
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ />
    </div>
  );
};

export default WebDevelopmentServices;
