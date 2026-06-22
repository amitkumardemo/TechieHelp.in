import React from 'react';
import { motion } from 'framer-motion';
import WorkflowAnimation from './animations/WorkflowAnimation';
import SuperhumanCardsAnimation from './animations/SuperhumanCardsAnimation';
import IntegrationsAnimation from './animations/IntegrationsAnimation';
import AnalyticsDashboardAnimation from './animations/AnalyticsDashboardAnimation';

const rows = [
  {
    id: 'row-1',
    headline: <>Revenue Agents<br/>At Your Command.</>,
    copy: ['Your workflows.', 'Your playbooks.', 'LeadAI agents capture every signal and move every opportunity forward.'],
    cta: 'Explore Agents →',
    AnimationComponent: WorkflowAnimation
  },
  {
    id: 'row-2',
    headline: <>Already There<br/>When You Arrive.</>,
    copy: ['Open your inbox. The reply is already drafted.', 'Join a call. The summary is already prepared.', 'Open CRM. Customer history is already loaded.'],
    cta: 'Explore AI →',
    AnimationComponent: SuperhumanCardsAnimation
  },
  {
    id: 'row-3',
    headline: <>Continuous Context<br/>For Every Customer.</>,
    copy: ['Emails.', 'Calls.', 'Timeline.', 'Notes.', 'Memory.', 'Previous conversations.', 'Everything connected.'],
    cta: 'Explore Memory →',
    AnimationComponent: IntegrationsAnimation
  },
  {
    id: 'row-4',
    headline: <>For The People<br/>Who Own The Numbers.</>,
    copy: ['From the next forecast to the last report, get your business answers instantly.'],
    cta: 'Explore Reporting →',
    AnimationComponent: AnalyticsDashboardAnimation
  }
];

const SystemFeaturesAttio = () => {
  return (
    <section className="relative w-full bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white py-24 md:py-32 overflow-hidden transition-colors duration-500">
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Header */}
        <div className="mb-20 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1] mb-6"
          >
            The Intelligent System <br /> That Never Sleeps.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-normal leading-relaxed"
          >
            Picks up leads at 2 AM. Replies before competitors.<br className="hidden md:block"/> Calls customers automatically. Updates CRM. Books meetings.<br className="hidden md:block"/> Never forgets customers.
          </motion.p>
        </div>

        {/* 4-Row Grid System */}
        <div className="flex flex-col border-t border-b border-gray-200/60 dark:border-gray-800/60">
          {rows.map((row, index) => (
            <div 
              key={row.id} 
              className={`flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px] ${index !== rows.length - 1 ? 'border-b border-gray-200/60 dark:border-gray-800/60' : ''}`}
            >
              {/* Left Side: Text Content */}
              <div className="lg:w-1/3 py-12 lg:py-20 lg:pr-12 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-gray-200/60 dark:border-gray-800/60">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-tight"
                >
                  {row.headline}
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-500 dark:text-gray-400 text-lg space-y-4 mb-10 leading-relaxed"
                >
                  {row.copy.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </motion.div>
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  href="#" 
                  className="mt-auto font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors inline-flex items-center gap-1 group"
                >
                  {row.cta}
                </motion.a>
              </div>

              {/* Right Side: Animated Visual */}
              <div className="lg:w-2/3 relative bg-gray-50/10 dark:bg-[#111]/10 overflow-hidden flex items-center justify-center min-h-[500px] lg:min-h-0 p-4 lg:p-12">
                 <row.AnimationComponent />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemFeaturesAttio;
