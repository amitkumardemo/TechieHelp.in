import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const flowSteps = [
  { id: 1, label: "Lead Comes In", emoji: "📋", color: "#3b82f6" },
  { id: 2, label: "AI Replies Instantly", emoji: "📧", color: "#06b6d4" },
  { id: 3, label: "AI Qualifies Lead", emoji: "🔍", color: "#8b5cf6" },
  { id: 4, label: "AI Calls Prospect", emoji: "📞", color: "#ef4444" },
  { id: 5, label: "CRM Updated", emoji: "⚙️", color: "#f97316" },
  { id: 6, label: "You Get Notified", emoji: "🔔", color: "#22c55e" },
];

// Animated 3D-style particle canvas running behind the steps
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animId;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    // Build a grid of "nodes" that will pulse and connect
    const NODE_COLS = 14;
    const NODE_ROWS = 7;
    const nodes = [];
    for (let r = 0; r < NODE_ROWS; r++) {
      for (let c = 0; c < NODE_COLS; c++) {
        nodes.push({
          x: (c / (NODE_COLS - 1)) * W,
          y: (r / (NODE_ROWS - 1)) * H,
          ox: (c / (NODE_COLS - 1)) * W,
          oy: (r / (NODE_ROWS - 1)) * H,
          t: Math.random() * Math.PI * 2,
          speed: 0.005 + Math.random() * 0.008,
          r: 1.5 + Math.random() * 1.5,
          alpha: 0.1 + Math.random() * 0.4,
        });
      }
    }

    // Traveling "signal" particles along a path
    const signals = [];
    for (let i = 0; i < 8; i++) {
      signals.push({
        progress: Math.random(),
        speed: 0.001 + Math.random() * 0.002,
        color: flowSteps[i % flowSteps.length].color,
      });
    }

    const getPathPoint = (t) => {
      // Sinusoidal horizontal path spanning the width
      const x = t * W;
      const y = H / 2 + Math.sin(t * Math.PI * 3) * (H * 0.25);
      return { x, y };
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw animated node grid
      for (const n of nodes) {
        n.t += n.speed;
        n.x = n.ox + Math.sin(n.t) * 6;
        n.y = n.oy + Math.cos(n.t * 0.7) * 5;
      }

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < W / NODE_COLS * 1.6) {
            const alpha = (1 - dist / (W / NODE_COLS * 1.6)) * 0.08;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${n.alpha * 0.8})`;
        ctx.fill();
      }

      // Draw the main signal path
      ctx.beginPath();
      for (let t = 0; t <= 1; t += 0.01) {
        const p = getPathPoint(t);
        if (t === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = "rgba(99,102,241,0.15)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw traveling signal particles
      for (const sig of signals) {
        sig.progress += sig.speed;
        if (sig.progress > 1) sig.progress = 0;
        const p = getPathPoint(sig.progress);
        // Glow circle
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 18);
        grd.addColorStop(0, sig.color + "cc");
        grd.addColorStop(1, sig.color + "00");
        ctx.beginPath();
        ctx.arc(p.x, p.y, 18, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = sig.color;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

const WorkflowVisual = () => {
  return (
    <section
      className="relative py-20 bg-[#050510] px-6 overflow-hidden"
      id="workflow"
    >
      {/* 3D Particle Canvas BG */}
      <ParticleCanvas />

      {/* Radial glow behind center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black text-white mb-3 uppercase tracking-tighter"
        >
          How TechieHelp <span className="text-gradient">AI Works</span>
        </motion.h2>
        <p className="text-gray-400 font-bold uppercase tracking-wider text-xs mb-14">
          AI That Instantly Handles Every Lead
        </p>

        {/* Flow Steps */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {flowSteps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 180 }}
              className="group flex flex-col items-center w-28 md:w-32"
            >
              {/* Icon card with dynamic glow */}
              <div
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl border border-white/10 bg-white/5 backdrop-blur-md group-hover:scale-110 transition-transform duration-300 shadow-2xl"
                style={{ boxShadow: `0 0 30px ${step.color}33` }}
              >
                {/* Animated glow ring */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `0 0 25px ${step.color}66, inset 0 0 15px ${step.color}22` }}
                />
                <span className="relative z-10">{step.emoji}</span>
              </div>

              {/* Step number + label */}
              <div className="mt-4 flex flex-col items-center gap-1">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold"
                  style={{ background: step.color + "33", color: step.color, border: `1px solid ${step.color}55` }}
                >
                  {step.id}
                </div>
                <h4 className="text-[11px] font-semibold text-gray-300 text-center leading-tight group-hover:text-white transition-colors">
                  {step.label}
                </h4>
              </div>

              {/* Connector arrow (between steps, not after last) */}
              {i < flowSteps.length - 1 && (
                <div className="hidden md:block absolute" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-xs text-gray-600 font-medium tracking-wider uppercase"
        >
          From lead to response in under 30 seconds
        </motion.p>
      </div>
    </section>
  );
};

export default WorkflowVisual;
