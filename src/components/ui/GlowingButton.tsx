import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlowingButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'emerald';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export const GlowingButton: React.FC<GlowingButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  glowColor = 'cyan',
  className = '',
  href,
  target,
  rel,
  download,
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base font-semibold',
  };

  const glowStyles = {
    cyan: 'shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)]',
    purple: 'shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)]',
    pink: 'shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)]',
    emerald: 'shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7)]',
  };

  const variantClasses = {
    primary: `theme-btn-primary ${glowStyles[glowColor]}`,
    secondary: 'theme-btn-secondary',
    outline: 'theme-btn-outline',
    ghost: 'theme-btn-ghost',
  };

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`relative inline-flex items-center justify-center gap-2.5 rounded-xl font-medium transition-all duration-300 cursor-pointer overflow-hidden ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {/* Light sheen effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      
      {icon && <span className="relative z-10 shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        className="inline-block"
      >
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

export default GlowingButton;
