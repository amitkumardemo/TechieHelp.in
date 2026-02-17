import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../style';

const testimonials = [
  {
    name: 'Arvind S.',
    role: 'CTO, Financial Services',
    review: 'Our digital transformation was accelerated by 18 months. AI agents now handle 85% of Tier-1 support, resulting in a <strong>70% reduction in operational overhead</strong>.',
  },
  {
    name: 'David M.',
    role: 'Director of Ops, Logistics & Supply Chain',
    review: 'The ROI was visible within the first 30 days. We consolidated three departments into one AI-managed workflow. Our <strong>throughput increased by 4.5x</strong>.',
  },
  {
    name: 'Megha J.',
    role: 'Founder, EdTech Platform',
    review: 'Scaling student advisory was impossible manually. The voice agent handles 10,000+ inquiries daily with <strong>98% accuracy</strong>. Absolute scalability!',
  },
  {
    name: 'Chloe C.',
    role: 'COO, Global Retail Group',
    review: 'AI automation orchestrates our entire supply chain. Their systems flawlessly manage multi-million dollar inventory movement with <strong>zero human intervention</strong>.',
  },
  {
    name: 'Deepak R.',
    role: 'VP Engineering, HealthTech Solutions',
    review: 'Security and precision were our main concerns. The AI system processes medical records with <strong>absolute compliance and zero latency</strong>.',
  },
  {
    name: 'James W.',
    role: 'CEO, Professional Services Firm',
    review: 'We shifted our entire focus to high-value strategy while AI agents manage the repetitive grind. It’s the ultimate <strong>leverage for high-growth businesses</strong>.',
  },
  {
    name: 'Srishti K.',
    role: 'Marketing Head, Brand Analytics',
    review: 'Our lead qualification process is now fully autonomous. We achieved a <strong>3x increase in MQL-to-SQL conversion</strong> in just one quarter.',
  },
  {
    name: 'Markus W.',
    role: 'Managing Director, Automotive Tech',
    review: 'The precision of AI calling agents is indistinguishable from human experts. It revolutionized our outreach at a <strong>fraction of the cost</strong>.',
  },
  {
    name: 'Rahul D.',
    role: 'Head of Product, SaaS Startup',
    review: 'AI agents are not just tools; they are assets. This AI workforce has become our <strong>most profitable core infrastructure</strong>.',
  },
  {
    name: 'Yuki T.',
    role: 'Innovation Lead, Tech Enterprise',
    review: 'Market requirements were unique, but localized AI automation delivered perfectly. It’s <strong>cross-border scale made easy</strong>.',
  },
  {
    name: 'Preeti N.',
    role: 'Operations Manager, Business Support',
    review: 'Managing 24/7 staff across time zones was a nightmare. Now, AI agents handle everything with <strong>consistent quality and zero fatigue</strong>.',
  },
  {
    name: 'James O.',
    role: 'Founder, Fintech Venture',
    review: 'Skeptical about AI at first, but the results speak for themselves. We’ve seen a <strong>60% improvement in customer retention</strong>.',
  },
  {
    name: 'Vikram S.',
    role: 'CFO, Infrastructure Group',
    review: 'Operating margins improved by 12% after implementing automation. It’s the <strong>best investment we’ve made this fiscal year</strong>.',
  },
  {
    name: 'Elena R.',
    role: 'CTO, Renewable Energy Firm',
    review: 'Data processing speed increased by 1000%. What took days now takes seconds. This is the <strong>engine behind our rapid expansion</strong>.',
  },
  {
    name: 'Fatima A.',
    role: 'Director, Investment Group',
    review: 'State-of-the-art tech and world-class delivery. This is the gold standard for <strong>autonomous enterprise intelligence</strong>.',
  },
  {
    name: 'Sameer J.',
    role: 'VP Strategy, Retail Chain',
    review: 'We future-proofed our business model. AI agents are now the <strong>core of our modern business operations</strong>.',
  },
  {
    name: 'Sophie M.',
    role: 'COO, Luxury Brand Ecommerce',
    review: 'Efficiency meets brand voice perfectly. The AI solutions integrated seamlessly while <strong>cutting operational costs by 40%</strong>.',
  },
  {
    name: 'Liam O.',
    role: 'Head of AI, Data Analytics Lab',
    review: 'Agentic workflows here are top-tier. Architectural depth is visible in every automated process they delivered.',
  },
  {
    name: 'Tanvi G.',
    role: 'Founder, Ecommerce Startup',
    review: 'From lead capture to shipping updates, the entire customer lifecycle is automated. My business now <strong>runs on autopilot</strong>.',
  },
  {
    name: 'Robert B.',
    role: 'CEO, Industrial Operations',
    review: 'Reliability in complex operations was key. These AI systems are <strong>robust, scalable, and highly resilient</strong>.',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const isActive = index === activeIndex;
    const diff = index - activeIndex;

    if (isActive) {
      return { zIndex: 10, scale: 1, opacity: 1, x: 0, rotateY: 0 };
    } else if (Math.abs(diff) === 1 || (activeIndex === 0 && index === testimonials.length - 1) || (activeIndex === testimonials.length - 1 && index === 0)) {
      const direction = diff > 0 ? 1 : -1;
      const wrapDirection = (activeIndex === 0 && index === testimonials.length - 1) ? -1 : (activeIndex === testimonials.length - 1 && index === 0) ? 1 : direction;
      return {
        zIndex: 5,
        scale: 0.85,
        opacity: 0.6,
        x: wrapDirection * 240,
        rotateY: wrapDirection * -15
      };
    } else {
      return { zIndex: 1, scale: 0.7, opacity: 0, x: diff > 0 ? 500 : -500, pointerEvents: 'none' };
    }
  };

  return (
    <section className={`${styles.paddingY} flex flex-col items-center bg-primary overflow-hidden`}>
      <div className={`${styles.boxWidth} relative z-[5]`}>
        {/* Updated Header */}
        <div className="text-center mb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-4 rounded-full border border-secondary text-secondary text-[12px] uppercase tracking-[3px] font-bold mb-4"
          >
            Proof of Impact
          </motion.div>
          <h2 className={`${styles.heading2} leading-tight`}>
            Trusted by <span className="text-gradient">Growing Businesses</span>
          </h2>
          <p className={`${styles.paragraph} mt-4 max-w-[800px] mx-auto text-[18px]`}>
            Delivering real automation outcomes through AI agents and intelligent systems.
          </p>
        </div>

        {/* Dynamic Testimonial Carousel */}
        <div className="relative h-[450px] w-full flex items-center justify-center ss:px-0 px-6" style={{ perspective: '1500px' }}>
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="absolute bg-gray-900 rounded-[32px] p-8 ss:p-10 shadow-3xl w-full max-w-[450px] glass-morphism border-white/5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={getCardStyle(index)}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-6 right-8 text-[60px] text-blue-gradient opacity-10 pointer-events-none">"</div>

                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-blue-gradient rounded-2xl flex items-center justify-center text-primary font-bold text-[20px] shadow-lg shadow-blue-500/20 mr-4">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-white text-[20px] leading-tight">{testimonial.name}</h3>
                    <p className="text-secondary text-[13px] font-medium tracking-wide mt-1 uppercase">{testimonial.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-secondary text-[14px]">★</span>
                    ))}
                  </div>
                  <p className="text-dimWhite font-poppins text-[16px] ss:text-[18px] leading-[1.6] italic" dangerouslySetInnerHTML={{ __html: testimonial.review }} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-2 flex-wrap max-w-[300px] mx-auto">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-8 bg-secondary' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-[0] opacity-30">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-blue-gradient rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-pink__gradient rounded-full blur-[150px]" />
      </div>
    </section>
  );
};

export default Testimonials;
