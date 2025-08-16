import React, { useEffect, useRef } from 'react';

const DotGrid = ({
  dotSize = 10,
  gap = 15,
  baseColor = '#5227FF',
  activeColor = '#5227FF',
  proximity = 120,
  shockRadius = 250,
  shockStrength = 5,
  resistance = 750,
  returnDuration = 1.5,
  style = {}
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;

    const cols = Math.floor(width / (dotSize + gap));
    const rows = Math.floor(height / (dotSize + gap));

    const dots = [];

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          x: x * (dotSize + gap) + dotSize / 2,
          y: y * (dotSize + gap) + dotSize / 2,
          baseX: x * (dotSize + gap) + dotSize / 2,
          baseY: y * (dotSize + gap) + dotSize / 2,
          radius: dotSize / 2,
          color: baseColor,
          vx: 0,
          vy: 0
        });
      }
    }

    const mouse = { x: null, y: null };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach(dot => {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < proximity) {
            const angle = Math.atan2(dy, dx);
            const force = (proximity - dist) / proximity * shockStrength;
            dot.vx += Math.cos(angle) * force;
            dot.vy += Math.sin(angle) * force;
            dot.color = activeColor;
          } else {
            dot.color = baseColor;
          }
        } else {
          dot.color = baseColor;
        }

        // Apply velocity with resistance
        dot.vx *= 1 - 1 / resistance;
        dot.vy *= 1 - 1 / resistance;

        // Return to base position
        const dxBase = dot.baseX - dot.x;
        const dyBase = dot.baseY - dot.y;
        dot.vx += dxBase / (returnDuration * 60);
        dot.vy += dyBase / (returnDuration * 60);

        dot.x += dot.vx;
        dot.y += dot.vy;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity, shockRadius, shockStrength, resistance, returnDuration]);

  return <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%', ...style }} />;
};

export default DotGrid;
