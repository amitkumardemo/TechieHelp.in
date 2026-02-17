import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobile) return null;

    return (
        <>
            {/* Primary Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-secondary rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
            />

            {/* Outer Glow Circle */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-secondary/30 rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 0.8 }}
            />

            {/* Trailing Glow Effect */}
            <motion.div
                className="fixed top-0 left-0 w-[150px] h-[150px] bg-blue-gradient opacity-10 blur-[60px] rounded-full pointer-events-none z-[9997]"
                animate={{
                    x: mousePosition.x - 75,
                    y: mousePosition.y - 75,
                }}
                transition={{ type: 'spring', damping: 40, stiffness: 50, mass: 1.5 }}
            />
        </>
    );
};

export default AnimatedCursor;
