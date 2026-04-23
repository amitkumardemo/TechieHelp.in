import React from "react";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "499",
    features: [
      "1 Month Internship",
      "Offer Letter",
      "Basic Tasks",
      "Completion Certificate",
      "FREE Institute of AI Access"
    ]
  },
  {
    name: "Pro Plan",
    price: "999",
    popular: true,
    features: [
      "Everything in Basic",
      "Verified Certificate",
      "1 Premium Project",
      "LMS Lifetime Access",
      "Priority Doubt Sessions"
    ]
  },
  {
    name: "Advanced Plan",
    price: "1499",
    features: [
      "Everything in Pro",
      "Letter of Recommendation",
      "Industry Mentorship (1-on-1)",
      "Resume Review Session",
      "Premium Swag Access"
    ]
  },
  {
    name: "Elite Plan",
    price: "2499",
    features: [
      "Everything Included",
      "Placement Assistance",
      "Mock Interviews",
      "Priority Support (24/7)",
      "TechieHelp Community VIP"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#05050f] px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-2xl"
          >
            Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Pricing Plans</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Choose the best plan for your career growth. High quality internships at affordable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -15 }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] border h-full transition-all duration-500 overflow-hidden ${
                plan.popular 
                ? 'bg-gradient-to-b from-orange-600/20 to-[#0a0a15] border-orange-500 z-10 shadow-[0_0_50px_rgba(249,115,22,0.3)]' 
                : 'bg-white/5 border-white/10 hover:border-white/30 backdrop-blur-xl'
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute inset-0 border-2 border-orange-500 rounded-[2.5rem] opacity-50 animate-pulse" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap shadow-[0_0_20px_rgba(249,115,22,0.6)]">
                    Most Popular
                  </div>
                </>
              )}

              <div className="mb-8">
                <p className="text-gray-400 font-bold mb-2 uppercase tracking-widest text-xs">{plan.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-white text-4xl font-black">₹{plan.price}</span>
                  <span className="text-gray-500 text-sm">/one-time</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <div className={`mt-1 p-1 rounded-full ${plan.popular ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]' : 'bg-white/10'}`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className={`text-base font-medium leading-tight ${plan.popular ? 'text-white' : 'text-gray-300'}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="https://forms.gle/N8kk845Lbfds6Pwj6"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center ${
                plan.popular 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,0.5)] border-transparent' 
                : 'bg-[#0a0a15] hover:bg-white/10 text-white border border-white/10'
              }`}
              >
                Choose {plan.name.split(' ')[0]}
              </a>
              
              {plan.popular && (
                <div className="mt-4 flex items-center justify-center gap-2 text-orange-400">
                  <Info className="w-4 h-4 animate-bounce" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Limited Slots Available</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
