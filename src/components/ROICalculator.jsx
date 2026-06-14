import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, AlertCircle, DollarSign } from "lucide-react";
import styles from "../style";

const ROICalculator = () => {
  const [leads, setLeads] = useState(100);
  const [dealSize, setDealSize] = useState(50000);
  const [responseTime, setResponseTime] = useState(4); // hours
  const [currency, setCurrency] = useState("INR");

  const [metrics, setMetrics] = useState({
    lostRevenue: 0,
    recoveredRevenue: 0,
    roi: 0
  });

  useEffect(() => {
    // Basic SaaS Calculation Logic
    const baseConversionRate = 0.10; // 10% base close rate if instant

    // The slower the response, the lower the conversion rate (exponential decay up to 48 hours)
    const currentConversionRate = Math.max(baseConversionRate * Math.exp(-0.06 * responseTime), 0.005);

    const leadAIConversionRate = 0.12; // LeadAI is instant + qualifies better (12%)

    const currentRevenue = leads * dealSize * currentConversionRate;
    const potentialRevenue = leads * dealSize * leadAIConversionRate;

    const lostRevenue = potentialRevenue - currentRevenue;
    const recoveredRevenue = lostRevenue * 0.9; // We assume we recover 90% of the lost revenue

    // Dynamic cost based on currency (approx conversions for realistic ROI)
    const getMonthlyCost = () => {
      switch (currency) {
        case 'INR': return 25000;
        case 'GBP': return 240;
        case 'EUR': return 280;
        case 'AED': return 1100;
        case 'JPY': return 45000;
        case 'BRL': return 1500;
        default: return 299;
      }
    };
    const monthlyCost = getMonthlyCost();
    const roi = ((recoveredRevenue - monthlyCost) / monthlyCost) * 100;

    setMetrics({
      lostRevenue: Math.max(lostRevenue, 0),
      recoveredRevenue: Math.max(recoveredRevenue, 0),
      roi: Math.max(roi, 0)
    });
  }, [leads, dealSize, responseTime]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency, maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className={`${styles.paddingY} relative z-10 px-4 sm:px-6`}>
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-cyan-500" />
            </div>
          </div>
          <h2 className="font-poppins font-bold ss:text-[48px] text-[38px] text-gray-900 dark:text-white leading-tight mb-6">
            Calculate Your <span className="text-gradient">ROI</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            See how much revenue you are losing by responding slowly, and how much LeadAI can recover for you immediately.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Inputs Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-white dark:bg-[#0c0c1a] border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl"
          >
            <div className="mb-8 flex justify-between items-center">
              <label className="text-sm font-bold text-gray-900 dark:text-white">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-gray-100 dark:bg-[#1a1a2e] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-cyan-500 cursor-pointer font-medium"
              >
                <option value="INR">India - INR (₹)</option>
                <option value="USD">USA - USD ($)</option>
                <option value="AED">UAE - AED (د.إ)</option>
                <option value="JPY">Japan - JPY (¥)</option>
                <option value="BRL">Brazil - BRL (R$)</option>
                <option value="NGN">Nigeria - NGN (₦)</option>
                <option value="KES">Kenya - KES (KSh)</option>
                <option value="LKR">Sri Lanka - LKR (Rs)</option>
                <option value="GHS">Ghana - GHS (GH₵)</option>
                <option value="EGP">Egypt - EGP (E£)</option>
                <option value="BDT">Bangladesh - BDT (৳)</option>
                <option value="XAF">Cameroon - XAF (FCFA)</option>
                <option value="RWF">Rwanda - RWF (FRw)</option>
                <option value="ETB">Ethiopia - ETB (Br)</option>
                <option value="IRR">Iran - IRR (﷼)</option>
                <option value="QAR">Qatar - QAR (ر.ق)</option>
              </select>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-end mb-2">
                <label className="text-sm font-bold text-gray-900 dark:text-white">Monthly Leads</label>
                <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400">{leads}</span>
              </div>
              <input
                type="range"
                min="10" max="1000" step="10"
                value={leads}
                onChange={(e) => setLeads(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-end mb-2">
                <label className="text-sm font-bold text-gray-900 dark:text-white">Average Deal Size</label>
                <span className="text-lg font-bold text-cyan-600 dark:text-cyan-400">{formatCurrency(dealSize)}</span>
              </div>
              <input
                type="range"
                min="100" max="500000" step="100"
                value={dealSize}
                onChange={(e) => setDealSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-end mb-2">
                <label className="text-sm font-bold text-gray-900 dark:text-white">Current Response Time (Hours)</label>
                <span className="text-lg font-bold text-red-500">{responseTime} hrs</span>
              </div>
              <input
                type="range"
                min="1" max="48" step="1"
                value={responseTime}
                onChange={(e) => setResponseTime(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <p className="text-[10px] text-gray-500 mt-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Industry avg conversion drops 391% after 1 hour.
              </p>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-3xl p-6 mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-red-600 dark:text-red-400 mb-1">Potential Revenue Lost (Monthly)</p>
                <p className="text-xs text-red-500/70">Due to slow response times</p>
              </div>
              <p className="text-2xl font-bold text-red-500">-{formatCurrency(metrics.lostRevenue)}</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white shadow-[0_0_30px_rgba(51,187,207,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[40px] pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-cyan-200" />
                  <p className="text-sm font-bold text-cyan-100 uppercase tracking-wider">Revenue Recovered with LeadAI</p>
                </div>
                <p className="text-5xl font-bold mb-8">{formatCurrency(metrics.recoveredRevenue)}<span className="text-lg font-medium text-cyan-200">/mo</span></p>

                <div className="pt-6 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-cyan-100 uppercase tracking-widest font-mono mb-1">Estimated ROI</p>
                    <p className="text-2xl font-bold text-white">{metrics.roi.toFixed(0)}%</p>
                  </div>
                  <a href="/contacts" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:-translate-y-1 transition-all text-sm">
                    Claim Revenue
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
