import React from 'react';
import { useRef, useEffect } from 'react';

const SquaresBackground = ({ children }) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawBackground = () => {
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.3, '#1a0033');
      gradient.addColorStop(0.7, '#000011');
      gradient.addColorStop(1, '#060010');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animated floating squares with glow
      const squareSize = 35;
      const cols = Math.ceil(canvas.width / squareSize) + 1;
      const rows = Math.ceil(canvas.height / squareSize) + 1;

      for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
          const posX = x * squareSize + Math.sin(timeRef.current * 0.001 + x * 0.1) * 5;
          const posY = y * squareSize + Math.cos(timeRef.current * 0.001 + y * 0.1) * 5;
          
          const intensity = Math.sin(timeRef.current * 0.002 + x * 0.05 + y * 0.05) * 0.5 + 0.5;
          
          // Glow effect
          const glowGradient = ctx.createRadialGradient(
            posX + squareSize/2, posY + squareSize/2, 0,
            posX + squareSize/2, posY + squareSize/2, squareSize * 2
          );
          glowGradient.addColorStop(0, `rgba(100, 150, 255, ${intensity * 0.3})`);
          glowGradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
          
          ctx.fillStyle = glowGradient;
          ctx.fillRect(posX - 5, posY - 5, squareSize + 10, squareSize + 10);

          // Main square
          ctx.fillStyle = `rgba(100, 150, 255, ${intensity * 0.2})`;
          ctx.fillRect(posX, posY, squareSize, squareSize);

          // Border with glow
          ctx.strokeStyle = `rgba(150, 200, 255, ${intensity * 0.6})`;
          ctx.lineWidth = 1 + intensity * 0.5;
          ctx.strokeRect(posX, posY, squareSize, squareSize);

          // Corner highlights
          ctx.fillStyle = `rgba(200, 220, 255, ${intensity * 0.8})`;
          ctx.fillRect(posX, posY, 2, 2);
          ctx.fillRect(posX + squareSize - 2, posY, 2, 2);
          ctx.fillRect(posX, posY + squareSize - 2, 2, 2);
          ctx.fillRect(posX + squareSize - 2, posY + squareSize - 2, 2, 2);
        }
      }

      // Floating particles
      for (let i = 0; i < 100; i++) {
        const x = (Math.sin(timeRef.current * 0.001 + i * 0.1) * canvas.width/2) + canvas.width/2;
        const y = (Math.cos(timeRef.current * 0.001 + i * 0.1) * canvas.height/2) + canvas.height/2;
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 200, 255, ${0.3 + Math.sin(timeRef.current * 0.002 + i) * 0.2})`;
        ctx.fill();
      }

      // Animated overlay
      const overlayGradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(timeRef.current * 0.0005) * 100,
        canvas.height / 2 + Math.cos(timeRef.current * 0.0005) * 100,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      
      overlayGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      overlayGradient.addColorStop(1, 'rgba(0, 0, 20, 0.3)');
      
      ctx.fillStyle = overlayGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = () => {
      timeRef.current += 1;
      drawBackground();
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10" style={{ backgroundColor: '#0a0a0a' }}> {/* Added background color */}
        {children}
      </div>
    </div>
  );
};

export default SquaresBackground;
