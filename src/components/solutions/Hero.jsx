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
  const tags = ["0 Missed Leads", "AI Qualifies Instantly", "Works 24/7", "Handles Thousands"];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-[#050510]">
      {/* Deep glow blobs */}
      <div className="absolute top-[15%] left-[10%] w-[35%] h-[40%] bg-blue-700/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[8%] w-[30%] h-[35%] bg-purple-700/12 blur-[120px] rounded-full pointer-events-none" />

      {/* 3D canvas */}
      <HeroCanvas />

      {/* Content Container (Two-column layout) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Column: Text Content */}
        <div className="lg:w-1/2 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-md mb-6"
          >
            <Zap className="w-3 h-3 text-blue-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-300">
              Powered by TechieHelp AI Engine
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
          >
            AI Systems That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Capture &amp; Convert Leads
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm md:text-base lg:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed"
          >
            From form submission to AI calling, CRM updates, and workflow automation —
            everything runs without human effort. 24/7 autonomous operations for your business.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-start gap-2 mb-10"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-semibold text-white/60 uppercase tracking-wider backdrop-blur-md"
              >
                {tag}
              </motion.span>
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
              href="https://wa.me/917073130165?text=Hello%20TechieHelp%2C%20I%20want%20to%20book%20a%20free%20demo%20of%20your%20AI%20systems."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-sm rounded-xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Start Free Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+917073130165"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/15 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-all duration-200 backdrop-blur-md"
            >
              <PhoneCall className="w-4 h-4 text-blue-400" />
              Call Us Now
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
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(100,150,255,0.15)] border border-white/10 group">
            {/* Top-Left Glassmorphic Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              </div>
              <span className="text-white font-semibold text-sm cursor-default">AI Integrated</span>
            </motion.div>

            {/* Bottom-Right Glassmorphic Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-8 right-6 z-20 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full border border-blue-500/30 flex items-center justify-center overflow-hidden">
                 <img src="https://i.pravatar.cc/100?img=68" alt="Expert" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col cursor-default">
                <span className="text-white font-semibold text-sm">Autonomous</span>
                <span className="text-white/60 text-xs">24/7 Operations</span>
              </div>
            </motion.div>

            {/* Main Image */}
            <img 
              src="/services_hero.png" 
              alt="TechieHelp AI Services Team" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-[#050510]/50 pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
