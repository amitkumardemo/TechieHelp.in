import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Zap } from "lucide-react";

/* ─── 3D Canvas Animation ─── */
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

    // ── Floating 3D spheres ──
    const SPHERE_COUNT = 55;
    const spheres = Array.from({ length: SPHERE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random() * 600 + 100,            // depth (100–700)
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      vz: (Math.random() - 0.5) * 0.6,
      hue: Math.random() > 0.5 ? 220 : 265,    // blue or purple
    }));

    // ── Data-burst particles ──
    const BURST_COUNT = 18;
    const bursts = Array.from({ length: BURST_COUNT }, () => ({
      progress: Math.random(),
      speed: 0.0015 + Math.random() * 0.003,
      hue: [200, 220, 260, 280, 145][Math.floor(Math.random() * 5)],
    }));

    // Sine wave path that crosses the screen
    const pathPoint = (t) => ({
      x: t * W,
      y: H * 0.5 + Math.sin(t * Math.PI * 2.5) * H * 0.28,
    });

    const project = (sphere) => {
      const fov = 600;
      const scale = fov / (fov + sphere.z);
      return {
        px: W / 2 + (sphere.x - W / 2) * scale,
        py: H / 2 + (sphere.y - H / 2) * scale,
        r: Math.max(1, 3.5 * scale),
        alpha: 0.15 + 0.6 * scale,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      /* ── 1. Draw connecting lines between near spheres ── */
      const projected = spheres.map(project);
      for (let i = 0; i < spheres.length; i++) {
        for (let j = i + 1; j < spheres.length; j++) {
          const a = projected[i], b = projected[j];
          const dx = a.px - b.px, dy = a.py - b.py;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const threshold = W * 0.13;
          if (dist < threshold) {
            const alpha = (1 - dist / threshold) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(130,110,255,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.stroke();
          }
        }
      }

      /* ── 2. Draw + animate spheres ── */
      for (let i = 0; i < spheres.length; i++) {
        const s = spheres[i];
        s.x += s.vx; s.y += s.vy; s.z += s.vz;
        if (s.x < 0 || s.x > W) s.vx *= -1;
        if (s.y < 0 || s.y > H) s.vy *= -1;
        if (s.z < 100 || s.z > 700) s.vz *= -1;

        const { px, py, r, alpha } = projected[i];
        const grd = ctx.createRadialGradient(px - r * 0.3, py - r * 0.3, 0, px, py, r * 2.5);
        grd.addColorStop(0, `hsla(${s.hue},80%,75%,${alpha})`);
        grd.addColorStop(0.5, `hsla(${s.hue},70%,55%,${alpha * 0.5})`);
        grd.addColorStop(1, `hsla(${s.hue},60%,40%,0)`);
        ctx.beginPath();
        ctx.arc(px, py, r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      /* ── 3. Signal path + traveling dots ── */
      ctx.beginPath();
      for (let t = 0; t <= 1; t += 0.01) {
        const p = pathPoint(t);
        t === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = "rgba(100,80,255,0.12)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      for (const b of bursts) {
        b.progress += b.speed;
        if (b.progress > 1) b.progress = 0;
        const p = pathPoint(b.progress);
        // Outer glow
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 22);
        g.addColorStop(0, `hsla(${b.hue},100%,70%,0.8)`);
        g.addColorStop(1, `hsla(${b.hue},100%,60%,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 22, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${b.hue},100%,75%)`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

/* ─── Hero Section ─── */
const Hero = () => {
  const tags = ["0 Missed Leads", "AI Qualifies Instantly", "Works 24/7", "Handles Thousands"];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-[#050510]">
      {/* Deep glow blobs */}
      <div className="absolute top-[15%] left-[10%]  w-[35%] h-[40%] bg-blue-700/15   blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[8%] w-[30%] h-[35%] bg-purple-700/12 blur-[120px] rounded-full pointer-events-none" />

      {/* 3D canvas */}
      <HeroCanvas />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 backdrop-blur-md mb-8"
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
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          AI Systems That{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Capture, Call &amp; Convert
            </span>
            {/* Underline shimmer */}
            <motion.span
              className="absolute bottom-0 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From form submission to AI calling, CRM updates, and workflow automation —
          everything runs without human effort. 24/7 autonomous operations for your business.
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
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
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://wa.me/917073130165?text=Hello%20TechieHelp%2C%20I%20want%20to%20book%20a%20free%20demo%20of%20your%20AI%20systems."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#050510] font-bold text-sm rounded-xl shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.25)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Book Free Demo
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

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2 text-gray-600"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-blue-400 opacity-80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
