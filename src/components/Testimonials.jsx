import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

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

const row1Testimonials = testimonials.slice(0, 10);
const row2Testimonials = testimonials.slice(10);

const TestimonialCard = ({ name, role, review }) => {
  const getInitials = (n) => {
    return n.split(' ').map(part => part[0]).join('').toUpperCase();
  };

  return (
    <div className="w-[380px] p-6 mx-3 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/40 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 select-none flex flex-col justify-between h-[210px] shrink-0">
      <div>
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-slate-600 dark:text-slate-300 font-poppins text-xs sm:text-[13px] leading-relaxed italic" dangerouslySetInnerHTML={{ __html: review }} />
      </div>
      
      <div className="flex items-center mt-4">
        <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs shadow-sm mr-3">
          {getInitials(name)}
        </div>
        <div>
          <h4 className="font-poppins font-bold text-slate-800 dark:text-white text-xs leading-tight">{name}</h4>
          <p className="text-slate-400 dark:text-slate-500 text-[10px] font-medium tracking-wide mt-0.5 uppercase">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 relative z-10 px-4 sm:px-6 bg-slate-50/50 dark:bg-[#02050c]/20 overflow-hidden border-t border-slate-100 dark:border-slate-900">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 45s linear infinite;
        }
        .marquee-track-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 45s linear infinite;
        }
        .marquee-container:hover .marquee-track-left,
        .marquee-container:hover .marquee-track-right {
          animation-play-state: paused;
        }
      `}} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[11px] font-bold tracking-[0.15em] uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5" /> Customer Wall
          </motion.div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
            Loved by Builders <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">and Leaders Alike.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-lg mx-auto text-sm sm:text-base font-normal">
            See how teams are scaling their customer relationships with TechieHelp LeadAI.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 relative marquee-container overflow-hidden py-4">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-white dark:from-[#02050c] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-white dark:from-[#02050c] to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden w-full">
          <div className="marquee-track-left">
            {[...row1Testimonials, ...row1Testimonials].map((item, index) => (
              <TestimonialCard
                key={`r1-${index}`}
                name={item.name}
                role={item.role}
                review={item.review}
              />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden w-full">
          <div className="marquee-track-right">
            {[...row2Testimonials, ...row2Testimonials].map((item, index) => (
              <TestimonialCard
                key={`r2-${index}`}
                name={item.name}
                role={item.role}
                review={item.review}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
