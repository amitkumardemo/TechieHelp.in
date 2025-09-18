import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../style';

const testimonials = [
  {
    name: 'Neha Agrawal',
    review: 'Dreams do come true when you have the right mentors by your side! A heartfelt thanks to Amit Kumar, Founder of TechieHelp, and the entire TechieHelp team for being my guiding light throughout this journey. From late-night doubts to constant motivation, from career guidance to interview preparation — they stood by me like a family. Their dedication, practical training, and never-give-up attitude helped me land my dream job at a package of <strong>6 LPA!</strong> This is not just my success; it’s the result of the belief and hard work we put in together. Forever grateful to Team TechieHelp for turning my goals into reality!',
    date: '14th Aug, 2025',
    rating: 5,
    type: 'placement',
  },
  {
    name: 'Simran Singh',
    review: 'Got a <strong>12 LPA</strong> offer at a startup – couldn’t have done it without Amit bhaiya! When I first connected with Amit bhaiya for an interview prep session, I was completely lost and nervous. During our very first call, he shared a DSA sheet with me and explained how to follow it step by step. It wasn’t just about solving problems — he made sure I understood the approach, patterns, and most importantly, how to think during interviews. Over the next few weeks, he guided me regularly, helped me with mock interviews, and cleared even the silliest doubts with so much patience. His support kept me motivated when I felt stuck or overwhelmed. After 3 months of focused preparation under his mentorship, I finally cracked an interview at a growing startup and received an offer of <strong>12 LPA</strong>. I genuinely believe I wouldn’t have reached here without his structured guidance and constant encouragement. If you\'re serious about interview prep, Amit bhaiya is the mentor you need!',
    date: '28th Jun, 2025',
    rating: 5,
    type: 'placement',
  },
  {
    name: 'Sonam',
    review: 'Today, I had the opportunity to connect with Amit Kumar, the Founder of TechieHelp, for career guidance. I was confused about how to land a paid internship and needed the right direction. Amit patiently listened to my queries and provided detailed, step-by-step guidance that was practical, realistic, and aligned with industry expectations. His replies were so clear and motivating that I immediately followed his advice – and to my surprise, within weeks, I not only secured a paid internship but also cracked my campus placement with a package of <strong>8 LPA!</strong> What sets Amit apart is that he genuinely wants to help students grow and reach their goals. His mentorship played a key role in my success journey, and I’ll always be grateful for his support. Thank you, Amit, for being such an inspiring mentor and for building a platform like TechieHelp that truly empowers students!',
    date: '12th Jun, 2025',
    rating: 5,
    type: 'placement',
  },
  {
    name: 'Anya Kumari',
    review: 'Today, I had the opportunity to connect with Amit Kumar, the Founder of TechieHelp, for a resume review session. I was genuinely impressed by his expertise, friendly approach, and clear guidance. His valuable suggestions significantly enhanced my resume and overall profile. Thanks to his mentorship and referral support, I secured an internship at a startup with a stipend of <strong>₹20,000 per month</strong>. I highly recommend Amit Kumar to anyone seeking career guidance, resume reviews, or referrals. His support can truly make a difference in your professional journey.',
    date: '9th Jun, 2025',
    rating: 5,
    type: 'internship',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const renderStars = (rating) => {
    return '★★★★★'.slice(0, rating);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const isActive = index === activeIndex;
    const isAdjacent = Math.abs(index - activeIndex) === 1 || (activeIndex === 0 && index === testimonials.length - 1) || (activeIndex === testimonials.length - 1 && index === 0);

    if (isActive) {
      return {
        zIndex: 10,
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
      };
    } else if (isAdjacent) {
      return {
        zIndex: 5,
        scale: 0.8,
        opacity: 0.7,
        filter: 'blur(2px)',
        x: index < activeIndex ? -200 : 200,
      };
    } else {
      return {
        zIndex: 1,
        scale: 0.6,
        opacity: 0.4,
        filter: 'blur(4px)',
        x: index < activeIndex ? -400 : 400,
      };
    }
  };

  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} bg-primary text-white`}>
      <div className={`${styles.boxWidth} w-full max-w-7xl`}>
        <div className="text-center mb-12">
          <h2 className={`${styles.heading2} mb-4`}>What Our Students Say About Us</h2>
          <p className="text-gray-300 text-lg">Real feedback from our mentees and interns.</p>
        </div>
        <div className="relative h-96 flex items-center justify-center" style={{ perspective: '1200px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="absolute bg-gray-800 rounded-lg p-6 shadow-lg w-80"
              animate={getCardStyle(index)}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.date}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="text-yellow-400 text-lg">{renderStars(testimonial.rating)}</div>
              </div>
              <p className="text-gray-300 text-sm line-clamp-4" dangerouslySetInnerHTML={{ __html: testimonial.review }}></p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
