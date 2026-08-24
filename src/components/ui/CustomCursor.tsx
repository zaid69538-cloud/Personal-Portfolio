import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button' ||
          window.getComputedStyle(target).cursor === 'pointer';
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-cyan-400/40 mix-blend-screen"
        animate={{
          x: mousePosition.x - (isPointer ? 24 : 16),
          y: mousePosition.y - (isPointer ? 24 : 16),
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          backgroundColor: isPointer ? 'rgba(6, 182, 212, 0.15)' : 'rgba(6, 182, 212, 0.03)',
          borderColor: isPointer ? 'rgba(236, 72, 153, 0.6)' : 'rgba(6, 182, 212, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-cyan-400 shadow-[0_0_10px_#06b6d4]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: 6,
          height: 6,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 700, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
