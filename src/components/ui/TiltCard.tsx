import React, { useRef, useState, MouseEvent } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  scale?: number;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 12,
  glare = true,
  scale = 1.02,
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (-1 to 1)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    setRotateX(-mouseY * maxTilt * 2);
    setRotateY(mouseX * maxTilt * 2);

    if (glare) {
      const glareX = ((e.clientX - rect.left) / width) * 100;
      const glareY = ((e.clientY - rect.top) / height) * 100;
      setGlarePos({ x: glareX, y: glareY, opacity: 0.25 });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? scale : 1}, ${isHovered ? scale : 1}, 1)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className={`relative overflow-hidden rounded-2xl will-change-transform ${className}`}
    >
      {/* 3D Content wrapper */}
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>

      {/* Dynamic Glare Reflection */}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 250px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
};

export default TiltCard;
