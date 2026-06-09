import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Zap } from "lucide-react";

/* ─── Elegant Particle Canvas Animation ─── */
const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W, H, animId;
    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 70;
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.5 + 0.5,
    }));

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120, 160, 255, 0.7)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(120, 160, 255, ${0.15 - dist / 800})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const mouseDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (mouseDist < 160) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(140, 100, 255, ${0.3 - mouseDist / 533})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />;
};

/* ─── Hero Section ─── */
const Hero = () => {
  const trustIndicators = [
    "AI Replies in Seconds",
    "AI Qualifies Leads Automatically",
    "AI Works 24/7",
    "AI Books More Meetings",
    "100+ Projects Delivered",
    "ISO 9001 Certified",
    "AI That Instantly Handles Every Lead"
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-[#050510]">
      {/* Deep glow blobs */}
      <div className="absolute top-[15%] left-[10%] w-[35%] h-[40%] bg-blue-700/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[8%] w-[30%] h-[35%] bg-purple-700/12 blur-[120px] rounded-full pointer-events-none" />

      {/* Particle Canvas */}
      <HeroCanvas />

      {/* Content Container (Two-column layout) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column: Text Content */}
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          {/* Primary Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-md mb-6"
          >
            <Zap className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300">
              We Build AI Employees For Your Business.
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 uppercase"
          >
            Never Miss <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              a Lead Again.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed font-medium"
          >
            TechieHelp builds AI systems that instantly reply to inquiries, qualify customers, schedule calls, and update your CRM automatically — 24/7.
          </motion.p>

          {/* Trust Indicators Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 w-full max-w-xl"
          >
            {trustIndicators.map((indicator, i) => (
              <motion.div
                key={indicator}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                <span className="text-xs font-semibold text-gray-300">
                  {indicator}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a
              href="https://calendar.app.google/XY3C9NoNJuDAtbZp9"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm rounded-xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Book Free AI Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#workflow"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-md"
            >
              Watch Demo
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="lg:w-5/12 max-w-[450px] relative w-full lg:ml-auto mt-12 lg:mt-0"
        >
          <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(100,150,255,0.15)] border border-white/10 group bg-white/5 backdrop-blur-md p-10 text-center">
            {/* Top-Left Glassmorphic Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md border border-white/25 px-4 py-2 rounded-xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              </div>
              <span className="text-white font-bold text-xs">AI Integrated</span>
            </motion.div>

            {/* Main Visual: Glass Console Display */}
            <div className="py-12 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-4xl mb-6 shadow-2xl animate-pulse">
                🤖
              </div>
              <h4 className="text-white font-extrabold text-xl mb-2 uppercase tracking-wide">TechieHelp Engine</h4>
              <p className="text-gray-400 text-xs max-w-[200px] mx-auto leading-relaxed">
                Autonomous system active &amp; ready to deploy.
              </p>
              
              <div className="mt-8 flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider">
                ● Systems Operational
              </div>
            </div>
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510]/80 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
